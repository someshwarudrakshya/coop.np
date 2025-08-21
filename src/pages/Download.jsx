import { FaFilePdf, FaFileAlt, FaFileWord, FaDownload } from "react-icons/fa";
import "../styles/Download.css";

const files = [
  {
    name: "Membership Form",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "/files/membership-form.pdf",
  },
  {
    name: "Annual Report 2080",
    type: "DOCX",
    icon: <FaFileWord className="file-icon docx" />,
    size: "1.2 MB",
    url: "/files/annual-report-2080.docx",
  },
  {
    name: "Terms & Conditions",
    type: "TXT",
    icon: <FaFileAlt className="file-icon txt" />,
    size: "15 KB",
    url: "/files/terms.txt",
  },
];

export default function Download() {
  return (
    <div className="download-container">
      <h2 className="download-title">📥 Downloads</h2>

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
    </div>
  );
}
