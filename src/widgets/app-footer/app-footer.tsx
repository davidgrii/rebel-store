import React from 'react'
import { FooterContact } from '@/widgets/app-footer/ui/footer-contact'
import { FooterInfo } from '@/widgets/app-footer/ui/footer-info'
import { cn } from '@/shared/components/ui/utils'
import { FooterServices } from '@/widgets/app-footer/ui/footer-services'
import { FooterLinks } from './ui/footer-links'

interface IProps {
  className?: string
}

export const AppFooter: React.FC<IProps> = ({ className }) => {
  return (
    <footer className={cn('bg-secondary md:pl-16 lg:pl-72', className)}>
      <div className={'p-6 lg:p-8'}>
        <div className={'grid grid-cols-1 lg:grid-cols-3'}>
          <FooterLinks />

          <FooterServices />

          <FooterContact />
        </div>

        <FooterInfo />
      </div>
    </footer>
  )
}
