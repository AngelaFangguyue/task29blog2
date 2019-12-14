let wenzi = document.querySelector("#wenzi");
let sty1 = document.querySelector("#sty1");
let taiji = document.querySelector("#taiji");

let n = 0;

let string2 = '';

let string = `/*你好哇
/*下面我要写一个会动的太极
/*首先加一个小小的样式，让字体变红*/
body{
  color:red;
}
/*下面画一个太极
/*首先画一个圆*/
div#taiji{
  width:200px;
  height:200px;
  border:1px solid red;
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*太极分阴阳，左白又黑*/
div#taiji{
  background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*接下来画太极的阴阳鱼*/
div#taiji::before{
 width:100px;
 height:100px;
 border:1px solid red;
 background:white;
 border-radius:50%;
 top:0;
 left:50%;
 transform:translateX(-50%);
 border:none;
}

div#taiji::after{
 width:100px;
 height:100px;
 border:1px solid red;
 background:black;
 border-radius:50%;
 bottom:0;
 left:50%;
 transform:translateX(-50%);
 border:none;
}
/*然后画阴阳鱼的眼睛*/
div#taiji::before{
  background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
div#taiji::after{
  background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
/*接下来让太极动起来*/
@keyframes mov{
  
  from{transform:translate(-50%,-50%)rotate(0);}
  to{transform:translate(-50%,-50%)rotate(360deg);}
}
div#taiji{
 
  animation:mov 2s linear infinite;
  
}
`;

// setTimeout(() => {
//   wenzi.innerHTML = n;
// }, 1000); //这个就只会执行一次，不会动态变化

// setInterval(() => {
//   wenzi.innerHTML = n;
//   n += 1;
// }, 1000); //可以动态变化，但是不方便控制其结束

//使用递归的setTimeout去模拟setInterval的功能，并且也能方便控制结束
let step = () => {
  setTimeout(() => {
    if (string[n] === '\n') {
      string2 += "<br>";
    }
    else if (string[n] === ' ') {
      string2 += "&nbsp;";
    }
    else {
      string2 += string[n];
    };
    wenzi.innerHTML = string2;
    sty1.innerHTML = string.substring(0, n);
    n += 1;
    window.scrollTo(0, 9999);
    wenzi.scrollTo(0, 9999);
    if (n < string.length) {
      step();
    }
  }, 10);
};

step();
//sty1.innerHTML = 'body{color:red;}';
