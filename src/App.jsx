import React from 'react';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import MainCard from './components/MainCard';
import ProfileRightCard from './components/ProfileRightCard';

const App = () => {
  const randomNames = ["Godwin Gino", "Gautham Sudheer", "Gayathri", "Elvin Eldho", "Allwyin"];

  return (
    <div>
      <Navbar />
      <div className=' h-fit flex'>
        <ProfileCard />
        <div className='flex flex-col'>
          {randomNames.map((name, index) => (
            <MainCard key={index} randomName={name} />
          ))}
        </div>
        <ProfileRightCard />
      </div>
    </div>
  );
}

export default App;
