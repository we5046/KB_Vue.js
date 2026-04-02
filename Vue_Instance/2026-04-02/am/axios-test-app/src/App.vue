<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>

<!-- <script setup>
import axios from 'axios';

const requestAPI = () => {
  // const url = 'http://localhost:3000/todos/100';
  const url = '/api/todos/1';
  axios.get(url).then((response) => {
    console.log('# 응답객체 : ', response);
    console.log(typeof response.data);
  });
};

const listUrl = '/api/todos';
const todoUrlPrefix = '/api/todos/';
// top-level에선 await를 못한다?
const requestAPI2 = async () => {
  // const url = 'http://localhost:3000/todos/100';
  let todoList;
  let response = await axios.get(listUrl);
  console.log('# TodoList : ', todoList);
  for (let i = 0; i < todoList.length; i++) {
    response = await axios.get(todoUrlPrefix + todoList[i].id);
    console.log(`# ${i + 1}번째 Todo : `, response.data);
  }
};

requestAPI();
</script>

<style scoped></style> -->

<!-- <script setup>
import axios from 'axios';

const requestAPI = async () => {
  const url = '/api/todos/2';
  const response = await axios.get(url);
  console.log('# 응답객체 : ', response);
};

requestAPI();
</script> -->

<!-- POST -->
<script setup>
import axios from 'axios';

const requestAPI = async () => {
  const url = '/api/todos';
  let data = { todo: '윗몸일으키기 3세트', desc: '너무 빠르지 않게...' };
  const resp1 = await axios.post(url, data);
  console.log(resp1.data);
};

requestAPI();
</script>
