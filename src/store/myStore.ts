import {defineStore} from "pinia";
import {Todo} from '@/types'
import { saveTodoList} from '@/services'

export const todoStore = defineStore('todos', {
  state: () => (
    {
      todoList: [] as Todo[],
    }
  ),
  getters: {
    todoNum(status) {
      let num = 0
      status.todoList.map(item => {
        if (!item.status) {
          num++
        }
      })
      return num
    },
    finishNum(status) {
      let num = 0
      status.todoList.map(item => {
        if (item.status) {
          num ++
        }
      })
      return num
    }
  },
  actions: {
    add (data: Todo) {
      this.todoList.unshift(data)
      saveTodoList(this.todoList)
    },
    remove (index: number) {
      if (window.confirm('确定要删除当前选项吗')) {
        this.todoList.splice(index, 1)
        saveTodoList(this.todoList)
      }
    },
    TodoChecked (filed:boolean,index: number) {
      switch (filed) {
        case false:
          this.todoList[index].status = false
          saveTodoList(this.todoList)
          break;
        case true:
          this.todoList[index].status = true
          saveTodoList(this.todoList)
          break;
      }
    },
    removeAll () {
      this.todoList = []
      saveTodoList(this.todoList)
    }
  }
})