import Navbar from '../navbar'
import { FC, PropsWithChildren, ReactNode } from 'react'
 
type Props = {
}

const fetcher = (url:string) => fetch(url).then(res => res.json());

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex h-[100%] justify-space-between'>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout