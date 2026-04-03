<template>
  <div class="wrap">
    <h1>axios 실습 예제</h1>
    <p>
      REST API, json-server, axios, GET, POST, PUT, DELETE, proxy, async/await,
      에러처리를 한 번에 실습합니다.
    </p>

    <hr />
    <h2>1. GET 요청으로 전체 Todo 조회</h2>
    <button @click="getTodos">전체 조회</button>
    <ul>
      <li v-for="item in todos" :key="item.id">
        <span>
          {{ item.id }} / {{ item.todo }} / {{ item.desc }} / 완료:
          {{ item.done }}
        </span>
        <button class="small-btn" @click="editTodo(item)">수정</button>
        <button class="small-btn delete-btn" @click="deleteTodo(item.id)">
          삭제
        </button>
      </li>
    </ul>

    <hr />

    <h2>
      {{
        isEditMode ? '2. PUT 요청으로 Todo 수정' : '2. POST 요청으로 Todo 등록'
      }}
    </h2>

    <div class="form-box">
      <input v-model="todo" placeholder="할일 입력" />
      <input v-model="desc" placeholder="설명 입력" />

      <label class="check-wrap">
        <input type="checkbox" v-model="done" />
        완료 여부
      </label>
    </div>

    <div class="btn-box">
      <button v-if="!isEditMode" @click="addTodo">등록</button>
      <button v-if="isEditMode" @click="updateTodo">수정 완료</button>
      <button v-if="isEditMode" @click="cancelEdit">취소</button>
    </div>

    <hr />

    <h2>3. 에러 처리 실습</h2>
    <button @click="testError">없는 주소 요청하기</button>

    <p v-if="message" class="msg">{{ message }}</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

// 서버에서 받아온 Todo 목록 전체를 저장하는 배열
const todos = ref([]);

// 사용자가 입력창에 입력하는 할 일 제목
const todo = ref('');

// 사용자가 입력창에 입력하는 할 일 설명
const desc = ref('');

// 완료 여부 체크박스 값
const done = ref(false);

// 성공했을 때 사용자에게 보여줄 안내 메시지
const message = ref('');

// 실패했을 때 사용자에게 보여줄 에러 메시지
const errorMessage = ref('');

// 현재 화면이 등록 모드인지, 수정 모드인지 판별하는 상태값
// false면 등록 모드, true면 수정 모드
const isEditMode = ref(false);

// 현재 수정 중인 Todo의 id를 저장하는 값
// 수정 버튼을 눌렀을 때 어떤 데이터를 수정할지 기억하기 위해 필요
const editId = ref(null);

// 입력 폼을 초기 상태로 되돌리는 공통 함수
// 등록이 끝났을 때, 수정이 끝났을 때, 수정 취소했을 때 모두 재사용
const resetForm = () => {
  // 할 일 입력칸 비우기
  todo.value = '';

  // 설명 입력칸 비우기
  desc.value = '';

  // 완료 여부 체크박스를 기본값(false)로 되돌리기
  done.value = false;

  // 수정 중인 대상 id 제거
  editId.value = null;

  // 화면 모드를 수정 모드가 아닌 등록 모드로 변경
  isEditMode.value = false;
}; //resetForm

// GET 조회
const getTodos = async () => {
  message.value = '';
  errorMessage.value = '';
  try {
    const response = await axios.get('/api/todos');
    const result = response.data.filter((todo) => todo.id === '1');
    console.log(result);
    todos.value = response.data;
    console.log(response.data);
    message.value = '전체 조회가 완료 되었습니다.';
  } catch (error) {
    errorMessage.value = '목록 조회 중 오류가 발생했습니다.';
  }
}; //getTodos

const addTodo = async () => {
  message.value = '';
  errorMessage.value = '';
  if (!todo.value.trim() || !desc.value.trim()) {
    errorMessage.value = '할일과 설명을 모두 입력하세요.';
    return;
  }
  const newTodo = {
    todo: todo.value,
    desc: desc.value,
    done: done.value,
  };
  try {
    const response = await axios.post('/api/todos', newTodo);
    console.log('# POST 응답객체:', response);
    console.log('# POST 실제 데이터:', response.data);

    message.value = 'Todo가 등록되었습니다.';
    resetForm();

    await getTodos();
  } catch (error) {
    console.log('POST중 에러 발생 :', error);
    errorMessage.value = '등록 중 오류가 발생했습니다.';
  }
}; //addTodo

// 수정 버튼 클릭 시 입력칸에 기존 데이터 넣기
const editTodo = (item) => {
  todo.value = item.todo;
  desc.value = item.desc;
  done.value = item.done;
  editId.value = item.id;
  isEditMode.value = true;
  message.value = '수정할 내용을 변경한 뒤 수정 완료를 누르세요.';
  errorMessage.value = '';
};

// 3. PUT 수정
const updateTodo = async () => {
  message.value = '';
  errorMessage.value = '';

  if (!todo.value.trim() || !desc.value.trim()) {
    errorMessage.value = '할일과 설명을 모두 입력하세요.';
    return;
  }

  const updatedTodo = {
    id: editId.value,
    todo: todo.value,
    desc: desc.value,
    done: done.value,
  };

  try {
    const response = await axios.put(`/api/todos/${editId.value}`, updatedTodo);
    console.log('# PUT 응답객체:', response);
    console.log('# PUT 실제 데이터:', response.data);

    message.value = 'Todo가 수정되었습니다.';
    resetForm();

    await getTodos();
  } catch (error) {
    console.log('PUT 요청 중 오류 발생');
    console.log(error);
    errorMessage.value = '수정 중 오류가 발생했습니다.';
  }
};

// 수정 취소
const cancelEdit = () => {
  resetForm();
  message.value = '수정이 취소되었습니다.';
  errorMessage.value = '';
};

// 4. DELETE 삭제
const deleteTodo = async (id) => {
  message.value = '';
  errorMessage.value = '';

  try {
    const response = await axios.delete(`/api/todos/${id}`);
    console.log('# DELETE 응답객체:', response);

    message.value = 'Todo가 삭제되었습니다.';

    if (editId.value === id) {
      resetForm();
    }

    await getTodos();
  } catch (error) {
    console.log('DELETE 요청 중 오류 발생');
    console.log(error);
    errorMessage.value = '삭제 중 오류가 발생했습니다.';
  }
};

// 5. 에러 처리 실습
const testError = async () => {
  message.value = '';
  errorMessage.value = '';

  try {
    const response = await axios.get('/api/todos2', { timeout: 1000 });
    console.log(response);
  } catch (error) {
    console.log('에러 테스트 발생');
    console.log(error);

    if (error instanceof Error) {
      errorMessage.value = `오류 메시지: ${error.message}`;
    } else {
      errorMessage.value = '알 수 없는 오류가 발생했습니다.';
    }
  }
};

onMounted(() => {
  getTodos();
});
</script>

<style scoped>
.wrap {
  width: 800px;
  margin: 30px auto;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.form-box {
  margin-top: 10px;
}

input[type='text'],
input:not([type='checkbox']) {
  padding: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
}

button {
  padding: 8px 12px;
  margin-top: 5px;
  margin-right: 6px;
  cursor: pointer;
}

.small-btn {
  margin-left: 8px;
  padding: 4px 8px;
}

.delete-btn {
  background-color: #ffe5e5;
  border: 1px solid #ffb3b3;
}

.btn-box {
  margin-top: 10px;
}

.check-wrap {
  display: inline-block;
  margin-left: 10px;
}

ul {
  margin-top: 15px;
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}

.msg {
  color: green;
  font-weight: bold;
}

.error {
  color: red;
  font-weight: bold;
}
</style>
