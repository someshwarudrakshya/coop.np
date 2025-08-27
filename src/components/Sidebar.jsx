import {
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaFacebookMessenger,
  FaFacebookF,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import "./css/Sidebar.css";

export default function Sidebar() {
  const contacts = [
    {
      text: "025-590143",
      href: "tel:025590143",
      icon: <FaPhoneAlt />,
      className: "phone",
    },
    {
      text: "Send us an Email",
      href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new",
      icon: <FaEnvelopeOpen />,
      className: "email",
      target: "_blank",
    },
    {
      text: "Chat on WhatsApp",
      href: "https://wa.me/+9779709110697",
      icon: <FaWhatsapp />,
      className: "whatsapp",
      target: "_blank",
    },
    {
      text: "Message Us",
      href: "https://www.facebook.com/messages/e2ee/t/9117423541683853",
      icon: <FaFacebookMessenger />,
      className: "messenger",
      target: "_blank",
    },
    {
      text: "Visit our page",
      href: "https://www.facebook.com/someshwarofficial",
      icon: <FaFacebookF />,
      className: "facebook",
      target: "_blank",
    },
  ];

  return (
    <section className="sidebar">
      {contacts.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target={item.target || "_self"}
          className="sidebar-link"
          rel="noopener noreferrer"
        >
          <div className={`sidebar-item ${item.className} d-flex align-items-center`}>
            <div className="sidebar-panel flex-grow-1">
              <span className="sidebar-text">{item.text}</span>
            </div>
            <div
              className="sidebar-icon d-flex align-items-center justify-content-center"
              style={{ fontSize: "1.5rem", width: "40px", height: "40px" }}
            >
              {item.icon}
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}
