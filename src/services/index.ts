import { Todo } from '@/types'

function saveTodoList(todoList: Todo[]) {
  localStorage.setItem('todoData', JSON.stringify(todoList))
}

function getList():Todo[] {
  return JSON.parse(localStorage.getItem('todoData') || '[]')
}

export {
  saveTodoList,
  getList
}