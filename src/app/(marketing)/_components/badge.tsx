import { MedalIcon } from "lucide-react";

const Badge = () => {
  return (
    <div
      className="flex items-center rounded-full bg-blue-100 p-4
         uppercase text-blue-800 shadow-sm"
    >
      <MedalIcon className="mr-2 h-6 w-6" />
      <span className="text-sm md:text-base">
        O gerenciador de tarefas nº 1
      </span>
    </div>
  );
};
export { Badge };
