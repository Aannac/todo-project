
import React from "react";
import { delay } from "../helpers/utils";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import useLocalStorage from "use-local-storage-state";

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, {
    defaultValue: [],
  });

  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;

    async function loadTasks() {
      if (isLoadingTasks) {
        console.time("carregando tarefas...");
        await delay(2000);
        console.timeEnd("carregando tarefas...");
      }

      if (!cancelled) {
        setTasks(tasksData);
        setIsLoadingTasks(false);
      }
    }

    void loadTasks();

    return () => {
      cancelled = true;
    };
  }, [tasksData, isLoadingTasks]);

  return {
    tasks,
    tasksCount: tasks.filter(
      (task) => task.state === TaskState.Created,
    ).length,
    concludedTasksCount: tasks.filter(
      (task) => task.concluded,
    ).length,
    isLoadingTasks,
  };
}
