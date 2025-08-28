import National from "../assets/affiliated/1.avif";
import NEFSCUM from "../assets/affiliated/2.avif";
import BTS from "../assets/affiliated/3.avif";
import DEV from "../assets/affiliated/4.avif";

function Partner() {
  return (
    <section className="partners">
      <div className="container">
        <h3>Trusted by Affiliated :</h3>
        <div className="partner-logos">
          <img src={National} alt="National Cooperative Bank" loading="lazy" />
          <img src={NEFSCUM} alt="NEFSCUM" loading="lazy" />
          <img src={BTS} alt="Bachat Tatha Rin Sangh" loading="lazy" />
          <img src={DEV} alt="Site Developer Company" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
export default Partner;
