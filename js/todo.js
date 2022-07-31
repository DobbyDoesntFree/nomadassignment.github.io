const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = []; //이걸 const로 설정하면 새로고침 이전 기존 입력된 데이터는 없어짐//
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //JSON.stringify : Str 형태로(여기선 STR화 된 Array) localstorage에 저장하는 방법//
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //id 따라 삭제한 항목 제거 후 업데이트//
  //li.id는 str임에 따라 parseInt 필요함(typeof li.id 눌러보면 알 수 있음)//
  li.remove();
  //.remove() 실행하면 element 자체가 사라짐//
  //event는 버튼 클릭된 그 자체를 의미//
  //target은 button(html element)이고, 이때 상위 Element는 곧 li를 뜻함 (paintToDo에서 그렇게 만듦)//
  saveToDos();
}

//event 변수는 event 그 자체에 대한 정보를 가져온다//

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id; //li 고유식별번호 부여. ##js에서 html 박스에 id 부여 방법. 이걸 CSS에서 만질 수 있음//
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo.text; //obj 형태로 저장된 newTodo의 text만 골라옴//
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo); //input마다 함수가 시행되며 추가되는 li마다 eventlistner 별첨//
  li.appendChild(span);
  li.appendChild(button); //li에 span과 button 첨부//
  toDoList.appendChild(li); //위 li를 html에 최종적으로 porting되며 이 함수를 호출할 때마다 li가 html에 "누적"됨//
}

function toDoSubmit(event) {
  //event는 현상 그 자체를 변수로 갖는 내장변수//
  event.preventDefault();
  const newTodo = toDoInput.value; // ##1## 최초 데이터 입력값 호출 //
  toDoInput.value = ""; //submit 후 form 비워줌//

  const newToDoObj = { text: newTodo, id: Date.now() }; //각 li의 고유 식별번호//

  toDos.push(newToDoObj); //호출된 데이터값을 array에 추가//
  paintToDo(newToDoObj);
  saveToDos(); //호출된 데이터가 저장된 array를 localstorage로 보냄. 단, 아직은 str 형태로 들어감(array로 못넣음)//
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); //localStorage에 저장된 데이터 호출//

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //입력이 없어 null이 아니라면 저장된 str 데이터를 array로 변환//
  toDos = parsedToDos; //새로고침 이전 localStorage에 저장된 데이터가 있다면 해당 데이터를 toDos 초기 값으로 선언//
  parsedToDos.forEach(paintToDo); //  불러온 array의 {} item 별로 paintToDo 실행//
}

//요약) localStorage에 저장하고 싶음 - Array로는 못들어감 - 그렇다면 Array처럼 생긴 str로 localStorage에 집어넣음//
//이후 필요 시 호출할 때 이 str 호출 - str을 Array로 parsing - item 내장변수 이용해 항목별 함수 호출가능//
//최초 newTodo를 newToDoObj로 바꿔 을 {text: id: } 이런 형식으로 만들어서 parse 후 forEach 적용 시 {} 안의 내용물 째(이게 하나의 item)로 들어감//
//@@.filter(##)는 @@ array의 item마다 ## 함수를 호출해서 true면 array에 남기고, false면 제거함//
//만약 ##가 function alphafilter(item){return item !==3} 이고 @@가 [1,2,3,4,5] 이면 @@.filter(alphafilter) = [1,2,4,5]//
