import React from 'react'
import NavBar from './components/Navbar'
import ProfileCard from './components/Profilecard'

const App = () => {
  return (
<div>
 
  <NavBar/>
  <div className='bg-slate-300 h-screen  flex'>
    <ProfileCard/>
   
  </div>
</div>
  )
}

export default App