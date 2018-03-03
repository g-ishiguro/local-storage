// var text = document.getElementById('text')
// var copyBtn = document.getElementById('copy-btn')
// // var resultText = document.getElementById('result-text')
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
var toDoArea =  document.getElementById('to-do-area');
var toDoItems = [];
addBtn.addEventListener('click', function () {
  //ToDoの表示
  var title = input.value;
  var content = textarea.value;
  var toDoItem = {
    title: title,
    content: content,
  };
  toDoItems.push(toDoItem);
  //JSONに変換
  var data = JSON.stringify(toDoItems)
  localStorage.setItem('todo', data);

  displayToDo(title, content);
});


function displayToDo(ttl, cnt) {
  //h2、p追加
  var h2 = document.createElement('h2');
  var p =  document.createElement('p');

  h2.innerHTML = ttl;
  p.innerHTML = cnt;

  var li = document.createElement('li');

  li.appendChild(h2);
  li.appendChild(p);
  toDoArea.appendChild(li)
}
