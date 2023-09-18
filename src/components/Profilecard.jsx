import React from 'react';

const ProfileCard = () => {
  return (
    <div className="w-1/5 h-[70%] bg-gray-100 flex flex-col pt-12 items-center rounded-lg mx-12 my-9">
      <img
        src="https://i.ibb.co/68Vymy9/aeecc22a67dac7987a80ac0724658493.jpg" 
        alt="Profile"
        className="w-16 h-16 rounded-full mb-4"
      />

     <h2 className="text-xl font-semibold">Welcome, User! </h2>
      
    </div>
  );
};

export default ProfileCard;
