import React, { useState, useEffect } from "react";
import { User, Mail, Camera } from "lucide-react";
import ChangeProfilePicture from "../dialogs/ChangeProfilePicture";
import { fetchUserProfile } from "../../api/fetchData";

const ProfileSettings = () => {
  const [profile, setProfile] = useState(null);
  const [showChangeProfilePicture, setShowChangeProfilePicture] =
    useState(false);

  useEffect(() => {
    const getUserProfile = async () => {
      const data = await fetchUserProfile();
      if (Array.isArray(data) && data.length > 0) {
        setProfile(data[0]); // Set the first object from the array
      }
    };

    getUserProfile();
  }, []);

  const handleAvatarClick = () => {
    setShowChangeProfilePicture(true);
  };

  const handleCloseDialog = () => {
    setShowChangeProfilePicture(false);
  };

  return profile ? (
    <div className='space-y-4'>
      <div className='flex flex-col items-center'>
        <div
          className='relative w-28 h-28 rounded-full bg-base-300 flex items-center justify-center border-2 border-primary cursor-pointer'
          onClick={handleAvatarClick}
        >
          {profile.profile_picture ? (
            <img
              src={profile.profile_picture}
              alt='Profile'
              className='w-full h-full rounded-full object-cover'
            />
          ) : (
            <User className='h-14 w-14 text-base-content' />
          )}
          <div className='absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity'>
            <Camera className='h-6 w-6 text-white' />
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor='username'
          className='block text-sm font-medium text-base-content mb-1'
        >
          <div className='flex items-center'>
            <User className='inline h-5 w-5 mr-1' />
            <span>Username</span>
          </div>
        </label>
        <input
          id='username'
          name='username'
          type='text'
          value={profile.username}
          readOnly
          className='input input-bordered w-full'
        />
      </div>
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-base-content mb-1'
        >
          <div className='flex items-center'>
            <Mail className='inline h-5 w-5 mr-1' />
            <span>Email</span>
          </div>
        </label>
        <input
          id='email'
          name='email'
          type='email'
          value={profile.email}
          readOnly
          className='input input-bordered w-full'
        />
      </div>
      <p className='text-base-content mt-4'>
        Member since: {new Date(profile.created_at).toLocaleDateString()}
      </p>
      <ChangeProfilePicture
        isOpen={showChangeProfilePicture}
        onClose={handleCloseDialog}
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProfileSettings;
