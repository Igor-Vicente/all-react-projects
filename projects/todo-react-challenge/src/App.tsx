import { PlusCircle } from "phosphor-react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Empty } from "./components/Empty";
import { ListHeader } from "./components/ListHeader";
import { Task } from "./components/Task";
import { useState } from "react";

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState("");
  const checkedCounter = tasks.filter((t) => t.isChecked === true).length;

  function handleAddTask() {
    if (!inputValue) return;

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue("");
  }

  function handleRemoveTask(id: number) {
    if (!confirm("Deseja mesmo apagar essa tarefa?")) {
      return;
    }
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, isChecked: value };
      return { ...task };
    });

    setTasks(updatedTasks);
  }

  return (
    <>
      <Header />
      <section className="max-w-[46rem] mx-auto w-full">
        <div className="-translate-y-2/4 flex justify-between gap-2">
          <Input
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
          />
          <Button onClick={handleAddTask}>
            Create
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
        <div className="mt-16">
          <ListHeader created={tasks.length} concluded={checkedCounter} />
          {tasks.length === 0 && <Empty />}
          {tasks.length > 0 &&
            tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                toggleTaskStatus={handleToggleTask}
                removeTask={handleRemoveTask}
              />
            ))}
        </div>
      </section>
    </>
  );
}

export default App;
