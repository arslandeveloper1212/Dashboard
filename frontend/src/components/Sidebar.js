import React, { useState, useEffect } from 'react';
import data from '../JsonFolder.js/Sidebarjson'; // Adjust path as needed
import { Link } from 'react-router-dom';
import img from '../img/vibgreon.png';
import MobSidebar from './MobSidebar';
import './Sidebar.css'; // Import the CSS file
import '../App.css'


const Sidebar = () => {
  const [activeFolder, setActiveFolder] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  // Function to handle click on folder item
  const handleFolderClick = (index) => {
    setActiveFolder(index === activeFolder ? null : index); // Toggle active folder index
  };

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return <MobSidebar />;
  }

  return (
    <div className="sidebar-container">
      <div className="custom-width-first" style={{ backgroundColor: "white", height: "100vh", position: "relative", top: "-20px",boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px", zIndex:"2"
       }}>
        <div className='broker-content' >
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

export default Sidebar;
