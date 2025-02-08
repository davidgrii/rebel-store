import React from 'react'
import { AppHeader } from '@/widgets/app-header/app-header'
import { AppFooter } from '@/widgets/app-footer/app-footer'
import { AppSidebar } from '@/widgets/app-sidebar/app-sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      {children}
      <AppSidebar variant={'small'} />
      <AppFooter className={'lg:pl-20'} />
    </>
  )
}
