### 미션3
strawberry 아래에 새로운 과일을 추가해 보고
추가한 다음 다시 삭제해보자.

```javascript
var node = document.createElement("li");
var textNode = document.createTextNode("melon");

node.appendChild(textNode);

var parent = document.querySelector("ul:first-child");

parent.appendChild(node);
```
### 미션4
바나나와 오렌지 사이에 새로운 과일을 추가해보자.

```javascript
var node = document.createElement("li");
var textNode = document.createTextNode("melon");

node.appendChild(textNode);

var parent = document.querySelector("ul:first-child");
var index = document.querySelector("ul:first-child li:nth-child(3)");

parent.insertBefore(node, index); 
```
### 미션5
apple을 grape와 strawberry 사이로 옮겨보자.

```javascript
var appleNode = document.querySelector("ul:first-child li:first-child");
var starwberryNode = document.querySelector("ul:first-child li:last-child");

var parent = document.querySelector("ul:first-child");

parent.insertBefore(appleNode, starwberryNode);
```
### 미션6
class가 'red'인 노드만 삭제합니다.

```javascript
var redNode = document.querySelectorAll(".red");

redNode[0].parentNode.removeChild(redNode[0]);
redNode[1].parentNode.removeChild(redNode[1]);
```
```javascript
var redNode = document.querySelectorAll(".red");
for(var i = 0; i < redNode.length; i++) {
	redNode[i].parentNode.removeChild(redNode[i]);
}
```
### 미션7
section 태그의 자손 중에 blue라는 클래스를 가지고 있는 노드가 있다면,
그 하위에 있는 h2 노드를 삭제합니다.

```javascript
var blueNode = document.querySelector("section .blue");
var parent = blueNode.parentNode.parentNode;
var h2Node = document.querySelector("section h2");

parent.removeChild(h2Node);
```
```javascript
var sectionNode = document.querySelector("section");

if(!(sectionNode.querySelector(".blue") === null)) {
	sectionNode.removeChild(sectionNode.querySelector("h2"));
}
```
