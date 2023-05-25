import HomePage from '../pages/home-page'
import MainLayout from '../layout/main-layout'
import { createBrowserRouter } from 'react-router-dom'
import TasksPage, { tasksPageLoader } from '../pages/tasks-page'
import CreateTaskPage, { createTaskPageSubmitAction } from '../pages/create-task-page'
import TaskDetailPage, { taskDetailPageLoader, updateTaskDetailPage } from '../pages/task-detail-page'
import TaskEditPage, { taskEditPageLoader, updateTaskEditPage } from '../pages/task-edit-page'
import NotFoundPage from '../pages/not-found-page'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        errorElement: <h1>Error</h1>,
        children: [
          {
            index: true,
            element: <HomePage />
          },
          {
            path: '/tasks',
            element: <TasksPage />,
            loader: tasksPageLoader,
          },
          {
            path: '/tasks/create',
            element: <CreateTaskPage />,
            action: createTaskPageSubmitAction,
          },
          {
            path: '/tasks/:id',
            element: <TaskDetailPage />,
            loader: taskDetailPageLoader,
            action: updateTaskDetailPage,
          },
          {
            path: '/tasks/:id/edit',
            element: <TaskEditPage />,
            loader: taskEditPageLoader,
            action: updateTaskEditPage,
          },
          {
            path: '*',
            element: <NotFoundPage />
          }
        ]
      }
    ]
  },
])