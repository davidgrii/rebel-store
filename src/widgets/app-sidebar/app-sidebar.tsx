'use client'

import React from 'react'
import { SidebarSmall } from '@/widgets/app-sidebar/ui/sidebar-small'
import { SidebarDefault } from '@/widgets/app-sidebar/ui/sidebar-default'

interface IProps {
  variant: 'small' | 'default'
}

export const AppSidebar: React.FC<IProps> = ({ variant }) => {
  if (variant === 'small') return <SidebarSmall />

  if (variant === 'default') return <SidebarDefault />
}
