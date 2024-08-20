import React, { useState } from 'react';
import dataadmin from '../../JsonFolder.js/SidebarAjson'; // Adjust path as needed
import { Link } from 'react-router-dom';
import img1 from '../../img/vibgreon.png';


const SidebarA = () => {
  const [activeFolder, setActiveFolder] = useState(null);

  // Function to handle click on folder item
  const handleFolderClick = (index) => {
    setActiveFolder(index === activeFolder ? null : index); // Toggle active folder index
  };

  return (
    <div className='custom-width-first' style={{ backgroundColor: "#d9d9d9", height: "99vh", position: "relative", top: "-8px" }}>
      <div className='broker-content'>
        <img src={img1} alt="Logo" />
        <div className='d-flex flex-column' >
          <span>{dataadmin.top.logo.leftText}</span>
          <strong>{dataadmin.top.logo.rightText}</strong>
        </div>
      </div>
      <div style={{marginTop: "20px"}}>
        {dataadmin.home.folders.map((folder, folderIndex) => (
          <div key={folderIndex} className={`folder-container ${activeFolder === folderIndex ? 'active' : ''}`}>
            {folder.children && (
              <ul style={{margin: "0px"}}>
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
  );
};

export default SidebarA;
