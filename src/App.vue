<template>
  <div class="container">
    <div class="btns">
      <button  v-for="i in 3" :key="i" @click="handleTabClick(i)" >{{ `tab${i}` }}</button>
    </div>
    <div class="context">{{ context }}</div>
  </div>
</template>

<script setup lang="ts">
import { handleError, ref } from 'vue'
import { getTabContent } from '@/utils/request'

const context = ref('tab1的内容...')

const handleTabClick = async (index:number) => {
  const { data } = await getTabContent(index)
  context.value = data
}
 
</script>



<style scoped>

.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
 

.btns{
  width: 80%;
  display: inline-flex;
  justify-items: center;
  align-items: between;
}

.context{
  width: 80%;
  height: 300px;
  border:1px solid black;
}

button{
  display: inline-block;
  width: 80px;
  height: 30px;
  border:1px solid black;
  margin-top: 20px;
  cursor: pointer;
}
 
</style>