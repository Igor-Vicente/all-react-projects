import { Check, Trash } from "phosphor-react";
import { ITask } from "../App";

interface Props {
  task: ITask;
  removeTask: (id: number) => void;
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void;
}

export const Task = ({ task, removeTask, toggleTaskStatus }: Props) => {
  function handleRemove() {
    removeTask(task.id);
  }
  function handleToogle() {
    toggleTaskStatus({ id: task.id, value: !task.isChecked });
  }

  const checkboxCheckedClassname = task.isChecked
    ? "border-2 border-purpleDark bg-purpleDark hover:border-purple hover:bg-purple"
    : "border-2 border-blue hover:bg-blue";
  const paragraphCheckedClassname = task.isChecked
    ? "text-gray-300 line-through"
    : "";

  return (
    <div className="flex flex-1 gap-3 items-center justify-between p-4 rounded-lg bg-gray-500 border border-gray-400 mb-3">
      <div className="w-full text-gray-100">
        <label
          htmlFor="checkbox"
          onClick={handleToogle}
          className="flex p-1 items-center gap-3"
        >
          <input
            readOnly
            type="checkbox"
            checked={task.isChecked}
            className="hidden"
          />
          <span
            className={`rounded-full h-5 w-5 transition-all flex items-center justify-center ${checkboxCheckedClassname}`}
          >
            {task.isChecked && <Check size={12} />}
          </span>
          <p className={`${paragraphCheckedClassname}`}>{task.text}</p>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
};
