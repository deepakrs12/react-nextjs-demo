import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, completed: boolean) {
  "use server";

  await prisma.todo.update({
    where: { id },
    data: {
      completed,
    },
  });
}

async function deleteTodo(id: string) {
  "use server";

  await prisma.todo.delete({ where: { id } });
}

export default async function Home() {
  // await prisma.todo.create({
  //   data: {
  //     title: "test",
  //     completed: false
  //   }
  // })

  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/newTodo"
        >
          New Todo
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}
