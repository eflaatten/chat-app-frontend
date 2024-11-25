import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Palette, Shield, Bell, ArrowLeft } from "lucide-react";
import ProfileSettings from "./settings/ProfileSettings";
import ThemesSettings from "./settings/ThemeSettings";
import SecuritySettings from "./settings/SecuritySettings";

const SettingsPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("Profile");

  const renderContent = () => {
    switch (selectedOption) {
      case "Profile":
        return <ProfileSettings />;
      case "Themes":
        return <ThemesSettings />;
      case "Security":
        return <SecuritySettings />;
      case "Notifications":
        return <div>Notifications Content</div>;
      default:
        return (
          <div>
            Select an option from the sidebar to view and edit your settings.
          </div>
        );
    }
  };

  return (
    <div className='min-h-screen h-screen pt-16 flex bg-base-200 text-base-content'>
      {/* Sidebar */}
      <div className='w-64 bg-base-100 p-4 flex flex-col justify-between'>
        <div>
          <h2 className='text-xl font-bold mb-4'>Settings</h2>
          <ul className='space-y-2'>
            <li>
              <button
                className={`w-full flex items-center text-left px-4 py-2 rounded focus:outline-none ${
                  selectedOption === "Profile"
                    ? "bg-primary text-primary-content"
                    : "hover:bg-primary hover:text-primary-content"
                }`}
                onClick={() => setSelectedOption("Profile")}
              >
                <User className='h-5 w-5 mr-2' />
                <span>Profile</span>
              </button>
            </li>
            <li>
              <button
                className={`w-full flex items-center text-left px-4 py-2 rounded focus:outline-none ${
                  selectedOption === "Themes"
                    ? "bg-primary text-primary-content"
                    : "hover:bg-primary hover:text-primary-content"
                }`}
                onClick={() => setSelectedOption("Themes")}
              >
                <Palette className='h-5 w-5 mr-2' />
                <span>Themes</span>
              </button>
            </li>
            <li>
              <button
                className={`w-full flex items-center text-left px-4 py-2 rounded focus:outline-none ${
                  selectedOption === "Security"
                    ? "bg-primary text-primary-content"
                    : "hover:bg-primary hover:text-primary-content"
                }`}
                onClick={() => setSelectedOption("Security")}
              >
                <Shield className='h-5 w-5 mr-2' />
                <span>Security</span>
              </button>
            </li>
            <li>
              <button
                className={`w-full flex items-center text-left px-4 py-2 rounded focus:outline-none ${
                  selectedOption === "Notifications"
                    ? "bg-primary text-primary-content"
                    : "hover:bg-primary hover:text-primary-content"
                }`}
                onClick={() => setSelectedOption("Notifications")}
              >
                <Bell className='h-5 w-5 mr-2' />
                <span>Notifications</span>
              </button>
            </li>
          </ul>
        </div>
        <button
          className='w-full flex items-center text-left px-4 py-2 mt-4 rounded hover:bg-primary hover:text-primary-content focus:outline-none'
          onClick={() => navigate("/home")}
        >
          <ArrowLeft className='h-5 w-5 mr-2' />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Content */}
      <div className='flex-1 p-8 overflow-y-auto'>
        <div className='max-w-3xl mx-auto space-y-8'>
          <h2 className='text-3xl font-extrabold text-center'>
            {selectedOption} Settings
          </h2>
          <div>{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
