import React, { useState, useEffect } from 'react';
import data from '../JsonFolder.js/Sidebarjson'; // Adjust path as needed
import { Link } from 'react-router-dom';
import img from '../img/vibgreon.png';
import './Sidebar.css'; // Import the CSS file

const MobSidebar = () => {
  const [activeFolder, setActiveFolder] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Initially hidden on mobile

  // Function to handle click on folder item
  const handleFolderClick = (index) => {
    setActiveFolder(index === activeFolder ? null : index); // Toggle active folder index
  };

  // Function to handle sidebar toggle button
  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
  };

  // Handle sidebar visibility based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsSidebarVisible(true); // Show sidebar on larger screens
      } else {
        setIsSidebarVisible(false); // Hide sidebar on smaller screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* Menu Button */}
      <button 
        className={`menu-button ${isSidebarVisible ? 'sidebar-hidden' : ''}`} 
        onClick={handleSidebarToggle}
        aria-label="Open sidebar"
      >
        ☰ {/* Menu icon (hamburger) */}
      </button>

      {/* Close Button */}
      <button 
        className={`close-button ${isSidebarVisible ? '' : 'sidebar-hidden'}`} 
        onClick={handleSidebarToggle}
        aria-label="Close sidebar"
      >
        ✕ {/* Close icon */}
      </button>

      {/* Sidebar Content */}
      <div className={`sidebar-content ${isSidebarVisible ? '' : 'sidebar-hidden'}`}>
        <div className='broker-content'>
          <img src={img} alt="Logo" />
          <div className='d-flex flex-column'>
            <span>{data.top.logo.leftText}</span>
            <strong>{data.top.logo.rightText}</strong>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          {data.home.folders.map((folder, folderIndex) => (
            <div key={folderIndex} className={`folder-container ${activeFolder === folderIndex ? 'active' : ''}`}>
              {folder.children && (
                <ul style={{ margin: "0px" }}>
                  {folder.children.map((child, childIndex) => (
                    <li className={`li-side`} key={childIndex}>
                      <Link 
                        style={{ textDecoration: "none", color: "#7C7C7C" }}
                        to={child.link}
                        onClick={() => handleFolderClick(folderIndex)}
                        aria-current={activeFolder === folderIndex && childIndex === 0 ? 'page' : undefined}
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobSidebar;
