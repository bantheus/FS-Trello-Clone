import { MedalIcon } from "lucide-react";

const Badge = () => {
  return (
    <div
      className="flex items-center rounded-full bg-blue-100 p-4
         uppercase text-blue-800 shadow-sm"
    >
      <MedalIcon className="mr-2 h-6 w-6" />O gerenciador de tarefas nº 1
    </div>
  );
};
export { Badge };
