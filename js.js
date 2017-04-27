/**
 * Created by chris on 2017/4/27.
 */
var numbers = [];
var operator = [];
var result = '';
var ans = '';
var notDisplay = ['ac','ce','ans','equal'];//不显示出来的操作符
//初始化，为所有运算按钮绑定点击事件
function init(){
    var calculatorArr = document.getElementsByTagName('button');
    for(var i=0;i<calculatorArr.length;i++){
        if(notDisplay.lastIndexOf(calculatorArr[i].id) == -1){
            calculatorArr[i].onclick = bind(calculatorArr[i]);
        }
    }

    //用闭包解决循环里的变量共享问题
    function bind(e) {
        return function () {
            result += e.innerText;
            update();
        }
    }
}
init();


//归零按钮
$('ac').onclick = function(){
    result  = '';
    update();
};
//退格键
$('ce').onclick = function () {
    if(result != ''){
        result = result.substr(0,(result.length-1));
        update();
    }
}

//等于键
$('equal').onclick = function () {
    try{
        result = eval(result);
        update();
        ans = result;
        result = '';
    }
    catch (e){
        alert(e);
    }
}

//ans键
$('ans').onclick = function () {
    result += ans;
    update();
}

//将结果更新到显示器
function update() {
    $('result').innerText = result;
}
//模仿jquery制作一个选择器，简化选取代码
function $(e) {
    if(e[0] == '.'){
        return document.getElementById(e.substring(1,e.length));
    }
    else {
        return document.getElementById(e);
    }
}

document.onkeydown = keyPress;
function keyPress(){
    var keyCode =  event.keyCode;
    console.log(keyCode);
    if((keyCode>47 && keyCode<58)||(keyCode>105 && keyCode<108)||keyCode==13||(keyCode>108&&keyCode<112)||keyCode==8){
        if(keyCode == 13){
            $('equal').click();
            return null;
        }
        else if(keyCode == 110){
            result +='.';
        }
        else if(keyCode == 107){
            result +='+';
        }
        else if(keyCode == 109){
            result +='-';
        }
        else if(keyCode == 106){
            result +='*';
        }
        else if(keyCode == 111){
            result +='/';
        }
        else if(keyCode == 8){
            $('ce').click();
            return null;
        }
        else{
            result += String.fromCharCode(keyCode);
        }

        update();
    }
}