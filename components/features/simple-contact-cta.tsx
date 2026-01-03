"use client"

import { useState } from "react"
import { NotificationForm } from "./notification-form"

interface SimpleContactCtaProps {
  children: React.ReactNode;
  className?: string;
}

export function SimpleContactCta({ children, className = '' }: SimpleContactCtaProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div 
      className={className}
      onClick={(e) => {
        const target = e.target as HTMLElement
        if (target.closest('button')) {
          e.preventDefault()
          setIsFormOpen(true)
        }
      }}
    >
      {children}
      
      <NotificationForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </div>
  )
}
