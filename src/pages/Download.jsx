import { FaFilePdf, FaFileAlt, FaFileWord, FaDownload } from "react-icons/fa";
import Note from "../components/Note.jsx";
import "./css/Download.css";

const files = [
  {
    name: "Membership Form",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "./public/download/1-Membership Form.pdf",
  },

  {
    name: "Account Opening Form",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "./public/download/2-Account Opening.pdf",
  },
  {
    name: "Account Closing Form",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "./public/download/3-Account-Closing.pdf",
  },
  {
    name: "Required Docs",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "./public/download/5-Required Docs.pdf",
  },
  {
    name: "Loan Apply Form",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "./public/download/6- Loan Apply Form.pdf",
  },
  {
    name: "KYM",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "./public/download/6-KYM.pdf",
  },
  {
    name: "Saving Loan Demand Form",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "./public/download/7-Saving Loan.pdf",
  },
  {
    name: "Varpai",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "./public/download/8-Varpai.pdf",
  },
  {
    name: "Letter of Consents",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "./public/download/9-Letter of Consents.pdf",
  },
  {
    name: "Share Return Form",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "./public/download/10-Share Return Form.pdf",
  },
];

export default function Download() {
  return (
    <div className="container">
      <div className="section-title">
        <h2>Downloads<span className="highlight"> Files</span></h2>
        <p>
          Download the forms you need directly below. Click the download button to save the file to your device.
        </p>
      </div>

      <div className="download-grid">
        {files.map((file, index) => (
          <div key={index} className="download-item">
            <div className="file-info">
              {file.icon}
              <div className="file-details">
                <h3>{file.name}</h3>
                <p className="file-meta">
                  {file.type} · {file.size}
                </p>
              </div>
            </div>
            <a href={file.url} download className="download-btn">
              <FaDownload /> Download
            </a>
          </div>
        ))}
      </div>

            <Note type="Download" />
    </div>
  );
}
