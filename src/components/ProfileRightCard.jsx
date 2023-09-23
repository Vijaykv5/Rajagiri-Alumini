import React from 'react';

const ProfileRightCard = () => {
  return (
    <div className="w-[25%] h-[70%] bg-gray-100 flex flex-col pt-12 items-center rounded-lg mx-12 my-9">
      {/* Profile image for the right-side card */}
      <img
        src="https://i.ibb.co/another-image-url.jpg" 
        alt="Profile"
        className="w-16 h-16 rounded-full mb-4"
      />

      <h2 className="text-xl font-semibold">Right Side Profile</h2>
      {/* Add more content for the right-side card here */}
    </div>
  );
};

export default ProfileRightCard;
