<template>
  <div class="row">
    <div class="col p-3">
      <h2>할일 수정</h2>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="form-group">
        <label htmlFor="todo">할일:</label>
        <input type="text" class="form-control" id="todo" />
      </div>
      <div class="form-group">
        <label htmlFor="desc">설명:</label>
        <textarea class="form-control" rows="3" id="desc"></textarea>
      </div>
      <div class="form-group">
        <label htmlFor="done">완료여부 : </label>&nbsp;
        <input type="checkbox" />
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-primary m-1">수 정</button>
        <button type="button" class="btn btn-primary m-1">취 소</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
