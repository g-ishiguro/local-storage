// var text = document.getElementById('text')
// var copyBtn = document.getElementById('copy-btn')
// var resultText = document.getElementById('result-text')
// var resultArea = document.getElementById('result-area')
// console.dir(text);
//
// // copyBtn.addEventListener('click', function () {
// //   //console.log('ボタンをclickしたよ');
// //   var sampletext = text.innerHTML
// //   console.log(sampletext);
// //   resultText.innerHTML = sampletext + 'をコピーしたよ';
// // });
//
// copyBtn.addEventListener('click', function () {
//    var sampletext = text.innerHTML
//    //p要素作成
//    var p = document.createElement('p');
//    p.innerHTML = sampletext + 'をコピーしたよ';
//    //appendChildでresultAreaに追加
//    resultArea.appendChild(p);
//  });

var input = document.getElementById('title');
var textarea = document.getElementById('content');
var addBtn = document.getElementById('add-btn');
var removeBtn = document.getElementById('remove-btn');
var toDoArea =  document.getElementById('to-do-area');
var toDoItems = [];
var form = document.forms.form;
console.dir(form);

function addToDo() {
  var id = Math.random();
  var title = input.value;
  var content = textarea.value;
  //タイトルが空だった場合の処理
  //if (title == false){
  if (!title) {
    return false;
  }


  var toDoItem = {
    id: id,
    title: title,
    content: content,
  };


saveData(toDoItem);
displayToDo(toDoItem);
  //入力エリアを空にする
  input.value = "";
  textarea.value = "";
};

function saveData(data) {
  toDoItems.push(data);
  saveLocalStorage(toDoItems);
}

function saveLocalStorage(dataArray) {
  //JSONに変換
  var data = JSON.stringify(dataArray)
  //保存
  localStorage.setItem('todo', data);
}

addBtn.addEventListener('click', addToDo);

function displayToDo(toDoObj) {
  //h2、p追加
  var h2 = document.createElement('h2');
  var p =  document.createElement('p');
  var deleteBtn = document.createElement('button');

  h2.innerHTML = toDoObj.title;
  p.innerHTML = toDoObj.content;
  deleteBtn.innerHTML = '削除';

  deleteBtn.addEventListener('click', function () {
    toDoArea.removeChild(li);

    var result = toDoItems.find(function (elem) {
        return elem.id === toDoObj.id;

      var tatIndex = toDoItems.indeexOf(result);
      toDoItems.splice(tatIndex, 1);
      saveLocalStorage(toDoItems)
    });
  });

  var li = document.createElement('li');

  li.appendChild(h2);
  li.appendChild(p);
  li.appendChild(deleteBtn);
  toDoArea.appendChild(li);
};


//ローカルスレージからデータを取得
function getLocalStorege() {
  var data = localStorage.getItem('todo');
  //JSONから配列に変換
  parsedata = JSON.parse(data);
  return parsedata;
}

function loadData() {
  var toDoData = getLocalStorege();
  if (!toDoData) {//dataが空（null）の場合
    return false
  }
  for (var i = 0; i < toDoData.length; i++) {
    var id = toDoData[i].id;

    var toDoItem = {
      id: id,
      title: toDoData[i].title,
      content: toDoData[i].content,
    };
    //27行目の配列が空の為、for分で作った物を代入
    toDoItems.push(toDoItem);
    displayToDo(toDoItem);
  }
}
//リロードした時にtodoを表示
  window.addEventListener('DOMContentLoaded', loadData);

//toDoの一括削除
  function removeToDo() {
    while (toDoArea.firstChild) {
      toDoArea.removeChild(toDoArea.firstChild);
    }

//ローカルストレージ一括削除
    localStorage.clear();
    toDoItems = [];
  }

removeBtn.addEventListener('click', removeToDo);
