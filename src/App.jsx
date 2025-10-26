import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className='flex-center h-[100vh]'>
      <h1 className="text-3xl font-bold text-indigo-300">
        Hello, VoltCore with Tailwind CSS!
      </h1>
    </div>
  )
}

export default App
