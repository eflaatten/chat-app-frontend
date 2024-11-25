import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Settings, LogOut } from "lucide-react";
import { getToken } from "../api/authentication";
import { useThemeStore } from "../store/useThemeStore";

const NavBar = () => {
  const navigate = useNavigate();
  const token = getToken();
  const { theme } = useThemeStore();

  useEffect(() => {
    // Apply the theme class to the root element
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className='bg-base-100 fixed top-0 left-0 right-0 z-50 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center space-x-4'>
          <div className='text-primary text-2xl font-bold'>ChatApp</div>
        </div>
        <div className='flex items-center space-x-4'>
          <button
            className='flex items-center text-base-content hover:text-primary focus:outline-none'
            onClick={() => navigate("/settings")}
          >
            <Settings className='h-6 w-6 mr-1' />
            <span>Settings</span>
          </button>
          {token && (
            <button
              className='flex items-center text-base-content hover:text-primary focus:outline-none'
              onClick={handleLogout}
            >
              <LogOut className='h-6 w-6 mr-1' />
              <span>Logout</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
