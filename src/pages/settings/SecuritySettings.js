import React from "react";
import { Lock, Trash, Shield } from "lucide-react";
import toast from "react-hot-toast";

const SecuritySettings = () => {
  const handleChangePassword = () => {
    // Logic for changing password
    toast.success("Password changed successfully!");
  };

  const handleDeleteAccount = () => {
    // Logic for deleting account
    toast.success("Account deleted successfully!");
  };

  const handleEnable2FA = () => {
    // Logic for enabling 2FA
    toast.success("Two-factor authentication enabled successfully!");
  };

  return (
    <div className='space-y-6'>
      <div className='space-y-4'>
        <div className='bg-base-100 p-4 rounded-lg shadow-md'>
          <div className='flex items-center mb-4'>
            <Lock className='h-6 w-6 text-blue-500 mr-2' />
            <h3 className='text-lg font-semibold text-base-content'>
              Change Password
            </h3>
          </div>
          <p className='text-base-content mb-4'>
            Update your account password regularly to keep your account secure.
          </p>
          <button
            className='w-full px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white focus:outline-none'
            onClick={handleChangePassword}
          >
            Change Password
          </button>
        </div>
        <div className='bg-base-100 p-4 rounded-lg shadow-md'>
          <div className='flex items-center mb-4'>
            <Shield className='h-6 w-6 text-green-500 mr-2' />
            <h3 className='text-lg font-semibold text-base-content'>
              Enable 2FA
            </h3>
          </div>
          <p className='text-base-content mb-4'>
            Add an extra layer of security to your account by enabling
            two-factor authentication.
          </p>
          <button
            className='w-full px-4 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white focus:outline-none'
            onClick={handleEnable2FA}
          >
            Enable 2FA
          </button>
        </div>
        <div className='bg-base-100 p-4 rounded-lg shadow-md'>
          <div className='flex items-center mb-4'>
            <Trash className='h-6 w-6 text-red-500 mr-2' />
            <h3 className='text-lg font-semibold text-base-content'>
              Delete Account
            </h3>
          </div>
          <p className='text-base-content mb-4'>
            Permanently delete your account and all associated data.
          </p>
          <button
            className='w-full px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white focus:outline-none'
            onClick={handleDeleteAccount}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
