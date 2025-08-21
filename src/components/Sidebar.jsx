import {
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaFacebookMessenger,
  FaFacebookF,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import "../styles/Sidebar.css";

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
          rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
          className={`sidebar-link ${item.className}`}
        >
          <div className="sidebar-item">
            <div className="sidebar-panel">
              <span className="sidebar-text">{item.text}</span>
            </div>
            <div className="sidebar-icon">{item.icon}</div>
          </div>
        </a>
      ))}
    </section>
  );
}
