import Blogs from "../sections/Blogs";
import Events from "../sections/Events";
import Note from "../components/Note.jsx";

export default function NewsAndEvents() {
  return (
    <main>
      <Blogs />
      <div className="container">
        <Events />

        <Note type="NewsEvents" />
      </div>
    </main>
  );
}
