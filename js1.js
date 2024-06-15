
//獲取元素
var oBox = document.getElementById("box")
//點擊操作
oBox.onclick = function () {
  alert("red!")
}


// 創造階段
var myName;
function fn(myName) {
  console.log(myName)
}


// 執行階段
myName = "A"
setTimeout(() => {
  fn(myName);
  myName = "B"
}, 3000)
myName = "C"