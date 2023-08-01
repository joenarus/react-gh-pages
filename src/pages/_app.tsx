import type { ReactElement, ReactNode } from 'react'
import { SWRConfig } from 'swr'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { request } from 'graphql-request'
import MainLayout from '@/components/layouts/mainLayout'
import '../styles/globals.css'
 
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  const fetcher = (query: string) => request('/api/graphql', query)
  return (
    <SWRConfig 
      value={{
        refreshInterval: 3000,
        fetcher
      }}
    >
      <MainLayout>
          {getLayout(<Component {...pageProps} />)}
      </MainLayout>
    </SWRConfig>
  )
}