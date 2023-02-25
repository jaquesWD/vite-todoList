<template>
  <div>
    <ol id="todolist" class="demo-box" v-show="item.status === false">
      <li>
        <input type="checkbox" v-model="item.status" @change="store.TodoChecked(true,index)"/>
        <p>{{ item.titleTodo }}</p>
        <a href="javascript:;" @click="store.remove(index)"></a>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { todoStore } from "@/store/myStore";

const store = todoStore()

defineProps({
  item: Object,
  index: Number
})
</script>

<style lang="scss" src="@/pages/Home/index.scss">

</style>