import Blogs from "../sections/Blogs";
import Events from "../sections/Events";


export default function NewsAndEvents() {
  return (
    <div className="flex flex-col min-h-screen bg-color-100 dark:bg-color-900 text-color-900 dark:text-color-100">
      <main className="flex-grow">
        <Blogs />
        <Events />
      </main>
    </div>
  );
}
