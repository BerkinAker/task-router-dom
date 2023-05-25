import { useFetcher, useLoaderData } from 'react-router-dom'
import * as S from './styles'
import { useEffect, useState } from 'react';
import Loading from '../../components/loading';
//useSubmit -> with navigation
//useFetcher -> without navigation | submit data to actions without navigating

const TaskDetailPageContainer = () => {
  const data = useLoaderData();
  const fetcher = useFetcher();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsSubmitting(false);
  }, [data.task]);

  const updateCompleted = () => {
    setIsSubmitting(true);
    fetcher.submit(null, { method: "put" });
  }

  return (
    <S.TaskDetailPageContainer>
      <S.EditButton to={`/tasks/${data.task.id}/edit`}>Edit</S.EditButton>
      <S.TaskDetail>
        <fetcher.Form method="put">
          <S.Status completed={data.task.completed}>
            <input hidden type="checkbox" name="task-completed" onChange={updateCompleted} defaultChecked={data.task.completed} />
            {data.task.completed ? 'Completed' : 'Not completed'}
            {isSubmitting && <Loading /> }
          </S.Status>
        </fetcher.Form>
        <S.Name>{data.task.name}</S.Name>
        <S.Description>{data.task.description}</S.Description>
      </S.TaskDetail>
    </S.TaskDetailPageContainer>
  )
}
export default TaskDetailPageContainer

// 1:14:58