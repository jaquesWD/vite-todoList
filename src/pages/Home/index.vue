<script lang="ts" setup>
import JustItem from '@/components/TodoCount/JustItem.vue'
import FinishItem from '@/components/TodoCount/FinishItem.vue'
import {ref, onMounted} from 'vue'
import {todoStore} from "@/store/myStore";
import {Todo} from "@/types";
import {getList} from "@/services";

const title = ref('ToDoList')
const titleTodo = ref('')
const id = ref(0)
const store = todoStore()

const setTodo = () => {
  const text = titleTodo.value
  if (!text) return
  const data = { id: ++id.value, titleTodo: text, status: false } as Todo
  store.add(data)
  titleTodo.value = ''
}

onMounted(() => {
  store.todoList = getList()
})
</script>

<template>
  <div class="home">
    <header>
      <section>
        <label for="title">{{ title }}</label>
        <input
          v-model="titleTodo"
          type="text"
          id="title"
          name="title"
          placeholder="添加ToDo"
          required
          autocomplete="off"
          @keyup.enter="setTodo"
        />
      </section>
    </header>

    <section>
      <!-- 正在进行 -->
      <h2>
        正在进行
        <span id="todocount">{{ store.todoNum }}</span>
      </h2>
      <just-item v-for="(item,index) in store.todoList"
                 :item="item"
                 :key="item.id"
                 :index="index"/>
      <!-- 已经完成 -->
      <h2>
        已经完成
        <span id="donecount">{{ store.finishNum }}</span>
      </h2>
      <finish-item v-for="(item,index) in store.todoList"
                   :item="item"
                   :key="item.id"
                   :index="index"/>
    </section>
    <footer>
      Copyright &copy; 2023 DWD
      <a href="javascript:;" @click="store.removeAll()">clear</a>
    </footer>
  </div>
</template>

<style lang="scss" src="./index.scss" scoped/>
