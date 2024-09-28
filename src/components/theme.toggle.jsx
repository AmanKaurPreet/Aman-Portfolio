import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
  
    const savedMode = localStorage.getItem('theme');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
  
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  )
};

export default ThemeToggle;