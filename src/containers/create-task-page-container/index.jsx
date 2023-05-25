import { Form } from 'react-router-dom'
import * as S from './styles'

const CreateTaskPageContainer = () => {
  return (
    <S.CreateTaskPageContainer>
      <Form method="post">
        <input type="text" name="task-name" placeholder="Task name"/>
        <textarea name="task-description" placeholder="Description"/>
        <button type="submit">Submit</button>
      </Form>
    </S.CreateTaskPageContainer>
  )
}

export default CreateTaskPageContainer