"use client";

import { useRouter } from "next/navigation";

type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
};

export function TodoItem({
  id,
  title,
  completed,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  const router = useRouter();

  return (
    <li className="flex gap-1 items-center justify-between my-1">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id={id}
          className="cursor-pointer peer"
          defaultChecked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500"
        >
          {title}
        </label>
      </div>
      <button
        className="border border-slate-300 rounded px-2 py-1 text-xs bg-red-700 hover:bg-red-500 outline-none"
        onClick={() => {
          deleteTodo(id);
          router.refresh();
        }}
      >
        Delete
      </button>
    </li>
  );
}
