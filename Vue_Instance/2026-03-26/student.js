class Student {
  constructor(name, age) {
    // this.를 사용하여 객체의 프로퍼티 정의
    this._name = name; // 추측하기 힘든 이름으로 지정?
    this.age = age;
  }

  printProfile() {
    console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}
