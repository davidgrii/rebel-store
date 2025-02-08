'use client'

import { CTASection } from '@/shared/components/ui/cta-section'
import { Container } from '@/shared/components/ui/container'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/shared/components/ui/breadcrumb'
import Link from 'next/link'
import Image from 'next/image'
import { blogProjects } from '@/shared/constants'

export default function BlogPage() {
  return (
    <div className={'bg-secondary pb-10 lg:pl-16'}>
      <div className={'flex'}>
        <Container className={'bg-background pb-6 w-full md:px-10'}>
          <Breadcrumb className={'mt-6 mb-7'}>
            <BreadcrumbList className={'items-center'}>
              <Link href='/'>Главная</Link>
              <BreadcrumbSeparator />
              <Link href='#'>Блог</Link>
            </BreadcrumbList>
          </Breadcrumb>
          <h3 className={'text-3xl font-bold mb-8'}>Блог</h3>

          <div
            className={
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            }
          >
            {blogProjects.map((item) => (
              <Link href={`/blog/${item.id}`} key={item.id}>
                <Image
                  width={400}
                  height={170}
                  className={'h-44 rounded mb-4'}
                  src={item.image}
                  alt={''}
                />
                <h4 className={'text-[16px] font-bold mb-1.5 leading-tight'}>
                  {item.title}
                </h4>
                <span className={'text-sm text-muted-foreground mb-3'}>
                  {item.date}
                </span>
                <p className={'text-sm font-normal'}>{item.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </div>

      <CTASection />
    </div>
  )
}
