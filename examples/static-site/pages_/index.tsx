import React from 'react'
import Link from 'next/link'

// @ts-ignore
import useTranslation from 'next-translate/useTranslation'
// @ts-ignore
import Header from '../components/header'

// @ts-ignore
export default function Home(props) {
  const { t, lang } = useTranslation()
  const description = t('home:description')
  const linkName = t('home:more-examples')

  console.log(props)

  return (
    <>
      <Header />
      <p>{description}</p>
      <Link href={`/${lang}/more-examples`}>
        <a>{linkName}</a>
      </Link>
    </>
  )
}

export const getStaticProps = async () => ({
  props: { getStaticPropsWorks: true },
})
