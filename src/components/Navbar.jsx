import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import "../styles/Navbar.css";

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
      path: "/about",
      label: "About",
      subItems: [
        { path: "/About", label: "About Us" },
        { path: "/Mission-vision", label: "Mission & Vision" },
        { path: "/Team", label: "Our Team" },
        { path: "/CEO-Message", label: "Message from CEO" },
      ],
    },
    {
      path: "/services",
      label: "Services",
      subItems: [
        { path: "/Saving", label: "Saving" },
        { path: "/Loan", label: "Loan" },
        { path: "/Required-docs", label: "Required Documents" },
      ],
    },
    { path: "/Gallery", label: "Gallery" }, // ✅ fixed here
    { path: "/NewsEvents", label: "News & Events" },
    { path: "/Download", label: "Download" },
    { path: "/Contact", label: "Contact" },
  ];

  return (
    <nav ref={navRef}>
      <div className="container navbar">
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
