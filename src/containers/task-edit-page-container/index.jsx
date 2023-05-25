import { useLoaderData } from 'react-router-dom'
import * as S from './styles'

const TasksEditPageContainer = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <S.TaskEditPageContainer>
      <S.EditTaskForm method="put">
        <S.BackButton to={`/tasks/${data.id}`}>Back</S.BackButton>
        <S.Title>
          Edit task <b>{data.id}</b>
        </S.Title>
        <input type="text" name="task-name" defaultValue={data.name}/>
        <textarea name="task-description" defaultValue={data.description}></textarea>
        <label>
          <input type="checkbox" name="task-completed" defaultChecked={data.completed}/>
          Completed
        </label>
        <button type="submit">Change</button>
      </S.EditTaskForm>
    </S.TaskEditPageContainer>
  )
}

export default TasksEditPageContainer