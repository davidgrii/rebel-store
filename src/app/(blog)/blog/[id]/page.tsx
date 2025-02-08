'use client'

import { Container } from '@/shared/components/ui/container'
import React, { use } from 'react'
import { blogProjects } from '@/shared/constants'
import { notFound } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/shared/components/ui/breadcrumb'
import Link from 'next/link'
import Image from 'next/image'

interface IProps {
  params: Promise<{ id: number }>
}

export default function PostPage({ params }: IProps) {
  const { id } = use(params)

  const post = blogProjects.find((p) => p.id === Number(id))

  if (!post) {
    return notFound()
  }

  return (
    <>
      <Container className={'pb-6 max-w-2xl'}>
        <Breadcrumb className={'mt-6 mb-7'}>
          <BreadcrumbList className={'items-center'}>
            <Link href='/'>Главная</Link>
            <BreadcrumbSeparator />
            <Link href='#'>Блог</Link>
            <BreadcrumbSeparator />
            <Link href=''>{post.title}</Link>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className={'text-3xl font-semibold leading-tight mb-8'}>
          {post.title}
        </h1>
        <p>{post.description}</p>

        <Image
          width={670}
          height={500}
          src={'/65bb7fbbef99b936848476.jpg'}
          className={'my-7'}
          alt={post.title}
        />
      </Container>
    </>
  )
}
