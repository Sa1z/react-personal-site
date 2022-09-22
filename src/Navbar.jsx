import React from 'react'

export default function Navbar(props) {

  const btnStyles = 'p-4 bg-neutral-700 drop-shadow-lg bg-opacity-75 rounded-full hover:bg-neutral-500'


  const onClick = link => {
    props.changePage(link)
  }

  return (
        <nav className='relative container mx-auto p-6'>
          <div className='flex items-center justify-between'>
            <div className="pt-2">
              <img src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80" alt="logo" className="w-24 p-2 rounded-full" />
              </div>
              <div className="hidden md:flex space-x-6">
                <button className={btnStyles} onClick={()=> onClick(1)}>Home</button>
                <button className={btnStyles} onClick={()=> onClick(2)}>About</button>
                <button className={btnStyles} onClick={()=> onClick(3)}>Portfolio</button>
                <button className={btnStyles} onClick={()=> onClick(4)}>Contact</button>
              </div>
          </div>
        </nav>
  )
}
