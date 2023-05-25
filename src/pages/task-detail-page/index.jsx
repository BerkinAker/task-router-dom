import TaskDetailPageContainer from "../../containers/task-detail-page-container"
import { getTask } from "../../services/task";
import { completeTask } from "../../services/task";

const TaskDetailPage = () => {
  return (
    <TaskDetailPageContainer />
  )
}
// params - id
export const taskDetailPageLoader = async ({ params }) => {
  const task = await getTask(params.id)
  return {
    task
  }
}

export const updateTaskDetailPage = async ({ params }) => { 
  return completeTask(params.id);
}


export default TaskDetailPage