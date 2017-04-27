/**
 * Created by chris on 2017/4/27.
 */
//初始化，为所有运算按钮绑定点击事件
function init(){
    var calculatorArr = document.getElementsByTagName('button');
    for(var i=0;i<calculatorArr.length;i++){

    }
    console.log(calculatorArr);
}
init();

$('1').onclick = function(){
    $('result').innerText+='1';
};

//清除显示按钮
$('ac').onclick = function(){
    $('result').innerText = '';
};

//模仿jquery制作一个选择器，简化选取代码
function $(e) {
    if(e[0] == '.'){
        return document.getElementById(e.substring(1,e.length));
    }
    else {
        return document.getElementById(e);
    }
}