import React from 'react'
import { FaBell } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import "../App.css"
const TopNavComp = () => {

    const inputStyle = {
        width: '100%',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
        backgroundColor: 'white',
        backgroundImage: 'url("searchicon.png")',
        backgroundPosition: '10px 10px',
        backgroundRepeat: 'no-repeat',
        padding: '6px 12px',
        margin: "10px 0px",
    };

    return (
        <div style={{
            width: "100%",
            position: "fixed",
            left: "-18px",
            right: "0px",
            backgroundColor: "white",
            top: "0px",
            height: "61px",
            zIndex: "1",
        }}>
            <div className='d-flex justify-content-end align-items-center gap-4 z-2'>
                <div>
                <form>
                <input type="text" name="search" placeholder="Search.." style={inputStyle} />
            </form>
                </div>
          
                <div className='icon-circle'>
                <FaBell className='icon-color' />
                </div>
                <div className='icon-circle'>
                <FaHeadphones className='icon-color' />
                </div>
                
            </div>
        </div>
    )
}

export default TopNavComp
