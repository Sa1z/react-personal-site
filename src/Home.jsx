import React from 'react'

export default function Home() {
  return (
    <div className='lg:flex justify-between'>
      <div>
        <h1 className='p-2 text-5xl font-bold max-w-2xl underline'>Hire me for your next project!</h1>
        <p className='p-4 text-2xl max-w-3xl'>Hello! I'm Dennis! I'm a self taught web developer looking to break into the tech field. I created the website to highlight my skills. Please feel free to look around!</p>
      </div>
      <img className='p-2 mr-4 drop-shadow-lg max-w-2xl rounded' src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80" alt="" />
    </div>
  )
}
