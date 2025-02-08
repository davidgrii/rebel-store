import { FC, SVGProps } from 'react'

export type SVGIcon = FC<SVGProps<SVGSVGElement>>

export interface ICategory {
  title: string
  Icon: SVGIcon
  sublist: Array<{
    sub_title: string
    Icon: SVGIcon
  }>
}

export interface IBlogProject {
  id: number
  title: string
  image: string
  date: string
  description: string
}

export interface IServices {
  text: string
  href: string
}
