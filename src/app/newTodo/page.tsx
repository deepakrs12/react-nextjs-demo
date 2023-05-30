import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
  "use server";
  console.log("from server");

  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0)
    throw new Error("Invalid title");

  await prisma.todo.create({
    data: {
      title,
      completed: false,
    },
  });

  redirect("/");
}

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New Item</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-2 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1.5 rounded hover:bg-red-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-green-700 focus-within:bg-slate-700 outline-none"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
