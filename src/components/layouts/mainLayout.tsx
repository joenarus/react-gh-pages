import Navbar from '../navbar'
import { FC, PropsWithChildren, ReactNode } from 'react'
 
type Props = {
}

const fetcher = (url:string) => fetch(url).then(res => res.json());

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex h-[100%]'>
      <Navbar />
      <main className='p-8'>{children}</main>
    </div>
  )
}

export default MainLayout