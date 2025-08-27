import a1 from "../assets/affiliated/1-1.jpg";
import a2 from "../assets/affiliated/2-1.jpg";
import a3 from "../assets/affiliated/3-1.jpg";

export default function Affiliates() {
  const partners = [
    { name: "Nepal Rastra Bank", logo: a1, url: "#" },
    { name: "Cooperative Board", logo: a2, url: "#" },
    { name: "Insurance Partner", logo: a3, url: "#" },
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Affiliations & Partners</h2>
        <div className="grid grid-3">
          {partners.map((p) => (
            <a key={p.name} href={p.url} className="card" aria-label={p.name}>
              <img src={p.logo} alt={p.name} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
