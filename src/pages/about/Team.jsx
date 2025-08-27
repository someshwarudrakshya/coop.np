import Committee from "./Committee";
import ASC from "./ASC";

export default function Team() {
  return (
    <div className="flex flex-col min-h-screen bg-color-100 dark:bg-color-900 text-color-900 dark:text-color-100">
      <main className="flex-grow">
        <Committee />
        <ASC />
      </main>
    </div>
  );
}
