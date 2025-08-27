import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import "./css/Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle dropdown
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { path: "/", label: "Home" },
    {
      path: "/About",
      label: "About",
      subItems: [
        { path: "/About/Mission", label: "Mission & Vision" },
        { path: "/About/Team", label: "Our Team" },
        { path: "/About/MessageFrom", label: "Message from CEO" },
      ],
    },
    {
      path: "/Services",
      label: "Services",
      subItems: [
        { path: "/Services/Saving", label: "Saving Schemes" },
        { path: "/Services/Loan", label: "Loan Schemes" },
        { path: "/Services/Required", label: "Required Documents" },
      ],
    },
    { path: "/News&Events", label: "News & Events" },
    { path: "/Gallery", label: "Gallery" },
    { path: "/Download", label: "Download" },
    { path: "/Career", label: "Career" },
    { path: "/Contact", label: "Contact" },
  ];

  return (
    <nav ref={navRef}>
      <div className="nav-container navbar">
        <div
          className="mobile-menu"
          onClick={toggleMobileMenu}
          ref={mobileMenuRef}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          {navItems.map((item, index) => (
            <li key={index}>
              {item.subItems ? (
                <>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                    onClick={(e) => {
                      if (window.innerWidth <= 768) {
                        e.preventDefault();
                        toggleDropdown(index);
                      }
                    }}
                  >
                    {item.label} <FaAngleDown className="dropdown-icon" />
                  </NavLink>
                  <ul
                    className={`dropdown-menu ${
                      openDropdown === index ? "open" : ""
                    }`}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <NavLink
                          to={subItem.path}
                          className={({ isActive }) =>
                            isActive ? "active-link" : ""
                          }
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
