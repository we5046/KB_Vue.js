<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>

<script setup>
import axios from 'axios';

// const requestAPI = () => {
//   const url = '/api/todos/';

//   axios.get(url).then((response) => {
//     console.log('# 응답객체 : ', response);
//   });
// };

const url = '/api/todos';

// 심화 문제 1번
const requestAPI1 = async () => {
  let response = await axios.get(url + '/1');
  console.log(`# 응답 객체 :`, response);
};

// 심화 문제 2번 - promise
const requestAPI2 = () => {
  let todoList = [];
  axios
    .get(url)
    .then((response) => {
      todoList = response.data;
      console.log('#모든 TodoList 항목: ', todoList);
      for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === '100') {
          return todoList[i].id;
        }
      }
    })
    .then((id) => {
      return axios.get(url + '/' + id);
    })
    .then((response) => {
      console.log('## 첫번째 Todo : ', response.data);
    })
    .catch((e) => {
      console.log('없는 id를 입력했습니다. :', e.message);
    });
};

// 심화 문제 3번 - async&await
const requestAPI3 = async () => {
  let todoList;

  let response = await axios.get(url);
  todoList = response.data;
  console.log('# Todo List : ', todoList);

  let get_id_num1;
  for (let i = 0; i < todoList.length; i++) {
    response = await axios.get(url + '/' + todoList[i].id);
    if (todoList[i].id === '1') {
      get_id_num1 = response;
    }
    console.log(`# ${i + 1}번째 Todo : `, response.data);
  }

  // id가 1인 todo를 얻어그 결과를 콘솔에 출력
  console.log(`# id가 1인 todo 출력 : `, get_id_num1.data);
};

const requestAPI4 = async () => {
  let data = { todo: '윗몸일으키 3세트', desc: '너무 빠르지 않게...' };

  let response = await axios.post(url, data);
  console.log(response.data);

  // 추가 되었는지 체크
  let check = await axios.get(url);
  console.log(check.data);
};

const requestAPI5 = async () => {
  let todoList;
  const myUrl = '/api/todos2';

  try {
    let response = await axios.get(myUrl);
    todoList = response.data;
    console.log('# Todo List : ', todoList);
  } catch (e) {
    console.log('에러 잡힘 : ', e);
  }
};
// requestAPI1();
// requestAPI2();
// requestAPI3();
// requestAPI4();
requestAPI5();
</script>
