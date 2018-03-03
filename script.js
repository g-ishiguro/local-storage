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

addBtn.addEventListener('click', function () {

  var title = input.value;
  var content = textarea.value;

  var h2 = document.createElement('h2');
  var p =  document.createElement('p');

  h2.innerHTML = title;
  p.innerHTML = content;

  var li = document.createElement('li');

  li.appendChild(h2);
  li.appendChild(p);

  toDoArea.appendChild(li)
});
