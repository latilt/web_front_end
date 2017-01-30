# Ajax

ajax란 무엇인가?

```js
var ajax = new XMLHttpRequest();

ajax.addEventListener("load", function(res) {
  console.log(res.target.responseText);
});
ajax.opne("GET", "URL");
ajax.send();
```
1. 선언
