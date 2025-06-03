import React from "react"
import { Link } from "react-router-dom"
import { FaHome, FaUser } from "react-icons/fa"

function SideNavBar() {
     return (
          <div className="bg-secondary position-fixed vh-100 d-flex flex-column p-3"
            style={{width: '220px'}}
            >
               <ul className="nav flex-column mt-3">
                    <li className="nav-item">
                         <Link to="/" className="nav-link text-black">
                              <FaHome className="me-2" /> Inicio
                         </Link>
                         <Link to="/" className="nav-link text-black">
                              <FaUser className="me-2" /> Perfil
                         </Link>
                    </li>
               </ul>
          </div>
     )
}

export default SideNavBar;
