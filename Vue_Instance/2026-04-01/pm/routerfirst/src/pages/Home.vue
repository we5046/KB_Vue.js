<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <h2 class="mb-3">Home</h2>
      <p>
        이 프로젝트는 Vue Router의 핵심 기능을 하나의 사이트 형태로 학습하기
        위한 실습입니다.
      </p>
      <p>
        상단 메뉴를 이용해 소개 페이지, 강의 목록, 수강생 목록, 검색 페이지로
        이동할 수 있습니다.
      </p>

      <div class="mt-3">
        <RouterLink class="btn btn-primary me-2" to="/courses">
          강의 목록 보기
        </RouterLink>
        <RouterLink class="btn btn-success" to="/students">
          수강생 목록 보기
        </RouterLink>
      </div>
    </div>
  </div>
</template>
