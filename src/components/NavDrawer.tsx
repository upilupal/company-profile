import React from 'react'

import { Button } from './ui/button'
import Drawer from 'react-modern-drawer'
import Link from 'next/link'
import { Menu } from 'lucide-react'


import 'react-modern-drawer/dist/index.css'

const App = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <Button onClick={toggleDrawer} variant="ghost">
              <Menu/>
            </Button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
                <div className='flex flex-col items-center gap-5 my-10'>
                  <Link href="/" className='text-4xl hover:scale-125 transition ease-in-out cursor-pointer'>Home</Link>
                  <Link href="/about" className='text-4xl hover:scale-125 transition ease-in-out cursor-pointer'>About</Link>
                  <Link href="/services" className='text-4xl hover:scale-125 transition ease-in-out cursor-pointer'>Services</Link>
                  <Link href="/teams" className='text-4xl hover:scale-125 transition ease-in-out cursor-pointer'>Teams</Link>
                </div>
            </Drawer>
        </>
    )
}

export default App