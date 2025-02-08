'use client'

import { motion } from 'framer-motion'
import { CTASection } from '@/shared/components/ui/cta-section'
import { Container } from '@/shared/components/ui/container'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/shared/components/ui/accordion'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/shared/components/ui/breadcrumb'
import Link from 'next/link'
import { ServicesMenu } from '@/widgets/app-sidebar/ui/services-menu'

const questions = [
  {
    id: '0',
    question: 'Как я получу свой заказ?',
    answer: 'text'
  },
  {
    id: '1',
    question: 'Как я получу свой заказ?',
    answer: 'text'
  },
  {
    id: '2',
    question: 'Как я получу свой заказ?',
    answer: 'text'
  },
  {
    id: '3',
    question: 'Как я получу свой заказ?',
    answer: 'text'
  },
  {
    id: '4',
    question: 'Как я получу свой заказ?',
    answer: 'text'
  }
]

export default function QuestionsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={'bg-secondary pb-10 lg:pl-16'}
    >
      <div className={'flex'}>
        <ServicesMenu />

        <Container className={'bg-background pb-6 w-full md:px-10'}>
          <Breadcrumb className={'mt-6 mb-7'}>
            <BreadcrumbList className={'items-center'}>
              <BreadcrumbItem>
                <Link href='/'>Главная</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link href='#'>Вопросы и ответы</Link>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h3 className={'text-3xl font-bold mb-8'}>Вопросы и ответы</h3>

          <Accordion className={'max-w-3xl'} type='single' collapsible>
            {questions.map(({ question, answer, id }, index) => (
              <AccordionItem
                className={
                  'border-t transition duration-200 hover:bg-foreground/10 px-4'
                }
                key={index}
                value={id}
              >
                <AccordionTrigger className={'font-bold text-[17px]'}>
                  {question}
                </AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </div>

      <CTASection />
    </motion.div>
  )
}
