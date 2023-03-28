function change() {
  document.getElementsByClassName("element")[0].style =
    "height : 200px; width : 200px"; // обращаемся к элменту по классу и изменяем свойство первого элeмента массива
  console.log(document.getElementsByClassName("element")); // проверяем
}
function add() {
  console.log(document.getElementById("1").className);
  document.getElementById("1").classList.add("type1", "type2", "type3"); //добавляем классы
  console.log(document.getElementById("1").className); //смотрим что изменилось
}
console.log(add);
function del() {
  console.log(document.getElementById("1").className); //смотрим какие классы есть изначально
  document.getElementById("1").classList.remove("type3"); //удаляем класс "Элемент"
  console.log(document.getElementById("1").className); //смотрим что изменилось
}
