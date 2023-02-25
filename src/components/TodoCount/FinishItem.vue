<template>
  <div>
    <ul id="donelist" v-show="item.status === true">
      <li>
        <input type="checkbox" v-model="item.status" @change="store.TodoChecked(false,index)" />
        <p>{{ item.titleTodo }}</p>
        <a href="javascript:;" @click="store.remove(index)"></a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import {todoStore} from "@/store/myStore";

const store = todoStore()

defineProps({
  item: Object,
  index: Number
})
</script>

<style lang="scss" src="@/pages/Home/index.scss"></style>