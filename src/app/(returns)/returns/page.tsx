'use client'

import { CTASection } from '@/shared/components/ui/cta-section'
import { Container } from '@/shared/components/ui/container'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/shared/components/ui/breadcrumb'
import Link from 'next/link'
import { SERVICES } from '@/shared/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/shared/components/ui/utils'

const guaranteeInfo = [
  'Механические повреждения товара, появившиеся после передачи товара Покупателю по Акту передачи, в том числе вызванные домашними животными, птицами, насекомыми, действием воды, перегрузкой мебели, транспортировкой и т.п.;',
  'Изменение цвета (оттенка) облицовочного материала и элементов декора в результате воздействия солнечного света, воды, тепла, химических веществ;',
  'Царапины на декоративных поверхностях, возникшие в результате применения абразивных веществ;',
  'Дефекты, возникшие в результате неправильной самостоятельной сборки мебели Покупателем;',
  'Дефекты мебельных чехлов, подвергшихся стирке;',
  'Разрушения выдвижных ящиков, полок, несущих элементов конструкции, бельевого ящика при превышении максимально допустимого объема хранения;',
  'Повреждения товара, возникшие вследствие превышения максимально допустимых нагрузок на механизм трансформации;',
  'Повреждение механизмов открывания дверей, механизмов выдвижения ящиков или мест крепления таких механизмов, возникшее по причине приложения к ним непредусмотренных механических нагрузок;',
  'Наличие характерного запаха;',
  'Пятна, разводы, растрескивание, шелушение и т.д., возникшие в результате воздействия воды или агрессивных жидкостей;',
  'Недостатки изделия, возникшие в результате внесения изменений в его конструкцию;',
  'Разнооттеночность между приобретенными элементами мебели той же модели и расцветки, как на мебели, приобретенной ранее или обивкой такого же цвета;',
  'Предъявление покупателем брака глянцевых фасадов в виде неровностей отражения на глянцевой поверхности (т.н. шагрень), не будет считаться гарантийным случаем при несоблюдении следующих условий: а) на поверхности фасада осталась защитная пленка; б) фасад не устанавливался на кухню.',
  'В случаях снятия пленки и установки фасада на мебель, замена глянцевых фасадов с вышеуказанным дефектом, не является гарантийным случаем и производится за счет покупателя.'
]

export default function GuaranteePage() {
  const pathName = usePathname()

  return (
    <div className={'bg-secondary pb-10 pl-16'}>
      <div className={'flex'}>
        <div className={'w-full bg-background max-w-60 border-r pt-6'}>
          <h4 className={'font-bold text-lg mb-4 px-6'}>Сервис</h4>

          <ul className={'flex flex-col text-sm'}>
            {SERVICES.map(({ text, href }, index) => (
              <Link
                className={cn(
                  'flex items-center min-h-9 px-6 transition duration-200 hover:text-primary',
                  pathName === href && 'text-primary border-primary border-l-2'
                )}
                key={index}
                href={href}
              >
                {text}
              </Link>
            ))}
          </ul>
        </div>

        <Container className={'bg-background px-10 pb-6 w-full'}>
          <Breadcrumb className={'mt-6 mb-7'}>
            <BreadcrumbList className={'items-center'}>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link href='/'>Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link href='#'>Обмен и Возврат</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h3 className={'text-3xl font-bold mb-8'}>Обмен и Возврат</h3>

          <div className={'flex flex-col gap-2.5 mb-3 max-w-3xl'}>
            <p>
              Гарантийный срок на нашу мебель составляет 36 месяцев со дня
              передачи Товара Покупателю, при условии, что доставка и сборка
              мебели осуществлялась представителями Продавца. При
              самостоятельной сборке или в момент сборки Товара третьими лицами,
              не являющимися представителями Продавца срок гарантии составляет
              18 месяцев.
            </p>
            <p>
              Гарантия на метало-каркас мягкой мебели производства составляет 10
              лет.
            </p>{' '}
            <p>
              В течение всего гарантийного срока Покупатель имеет право на
              бесплатное устранение обнаруженных дефектов, при условии
              правильной эксплуатации и ухода. Условия эксплуатации и ухода за
              мебелью прописаны в памятке.
            </p>
            <p>
              В случае обнаружения в товаре недостатков, их устранение
              производится Продавцом в течение 45 календарных дней с момента
              предъявления соответствующего требования Покупателем.
            </p>
          </div>

          <ul
            className={
              'flex flex-col gap-1 mt-7 mb-3 list-disc max-w-3xl text-[#2e332d]'
            }
          >
            <label className={'font-bold text-[16px] mb-4'}>
              Гарантия не распространяется на следующие случаи:
            </label>
            {guaranteeInfo.map((item, index) => (
              <li className={'ml-4'} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <CTASection className={'mx-10'} />
    </div>
  )
}
