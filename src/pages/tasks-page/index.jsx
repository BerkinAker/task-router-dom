// inject the data
import { getTasks } from "../../services/task"
import TasksPageContainer from "../../containers/tasks-page-container"

const TasksPage = () => {

  return (
    <div>
      <TasksPageContainer />
    </div>
  )
}

export const tasksPageLoader = () => {
  return getTasks();
}

export default TasksPage