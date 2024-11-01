// import { getTasks } from "@/lib/action";
import Link from "next/link";

async function Home() {
  // const allTasks = await getTasks();

  if (true) {
    return (
      <main className="p-8 bg-gray-100 min-h-screen">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Registeeeered Tasks</h1>
          <div className="text-gray-600 text-left w-full">
            <p>No tasks found.</p>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
