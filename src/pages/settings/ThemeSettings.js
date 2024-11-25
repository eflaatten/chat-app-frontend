import React, { useState } from "react";
import { THEMES } from "../../constants/index";
import { useThemeStore } from "../../store/useThemeStore";

const ThemesSettings = () => {
  const { theme, setTheme } = useThemeStore();
  const [currentPage, setCurrentPage] = useState(1);
  const themesPerPage = 10;

  // Calculate the total number of pages
  const totalPages = Math.ceil(THEMES.length / themesPerPage);

  // Get the themes for the current page
  const currentThemes = THEMES.slice(
    (currentPage - 1) * themesPerPage,
    currentPage * themesPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='space-y-6 p-4'>
      <h2 className='text-2xl font-bold text-base-content'>Select a Theme</h2>
      <div className='grid grid-cols-2 gap-4'>
        {currentThemes.map((themeName) => (
          <button
            key={themeName}
            className={`p-2 rounded border transition duration-200 ${
              theme === themeName
                ? "border-primary bg-primary text-primary-content"
                : "border-base-300 hover:bg-base-200 hover:border-primary"
            } focus:outline-none`}
            onClick={() => setTheme(themeName)}
          >
            {themeName}
          </button>
        ))}
      </div>
      <div className='flex justify-between items-center mt-4'>
        {/* Pagination Buttons */}
        <div>
          <button
            className='btn btn-primary'
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className='btn btn-primary ml-2'
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        {/* Current Theme Display */}
        <p className='text-base-content'>
          Current theme:{" "}
          <span className='font-bold text-base-content'>{theme}</span>
        </p>
      </div>
    </div>
  );
};

export default ThemesSettings;
