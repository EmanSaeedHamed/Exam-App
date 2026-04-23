'use client';
import React from 'react'
import { RegisterContextProvider } from '@/shared/context/register-context';
import NextAuthProvider from './next-auth.provider'
import { Toaster } from 'sonner';
import ReactQueryProvider from './react-query.provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    
       <NextAuthProvider>
      <ReactQueryProvider> 
        <RegisterContextProvider>
          {children}
        </RegisterContextProvider>
      </ReactQueryProvider>
      <Toaster />
    </NextAuthProvider>
    
  )
}