document.addEventListener("DOMContentLoaded", function() {
  var wrap = document.querySelector(".wrap");
  document.addEventListener("click", ea.bind(null, wrap));


  var con = document.querySelector("#box");
  var moveNode;
  var fakeNode = document.querySelector(".container");
  var x, y;
  var flag = 0;
  var evtbox;
  document.addEventListener("mousedown", function(evt) {
    console.log(evt);
    flag = 0;
  });

  document.addEventListener("mousemove", function(evt1) {
    evt1.preventDefault();

    if(evt1.buttons === 0 ) return;

    if(evt1.buttons === 1 && flag === 0 && evt1.target.classList.contains("box")) {
      evtbox = evt1;
      x = evt1.offsetX;
      y = evt1.offsetY;
      flag = 1;

      var height = window.getComputedStyle(evtbox.target).getPropertyValue("height");
      console.log(height);

      fakeNode = document.createElement("div");
      fakeNode.classList.add("box");
      fakeNode.classList.add("fake");
      fakeNode.style.height = height;
      document.querySelector(".Wrapper").insertBefore(fakeNode, evtbox.target);
      fakeNode.offsetWidth;
      document.querySelector("body").appendChild(evtbox.target);
    }

    if(flag === 1) {
      evtbox.target.style.position = "absolute";
      evtbox.target.style.left = (evt1.pageX - x)+"px";
      evtbox.target.style.top = (evt1.pageY - y)+"px";

      var b = Math.floor(evt1.pageX / 70);
      var c = evt1.pageX % 70;
      console.log(b);
      if(c > 20) {
        var a = document.querySelector(".Wrapper").children[b];

        if(c > 45) {
          a.parentElement.insertBefore(fakeNode, a);
        } else {
          a.parentElement.insertBefore(fakeNode, a.nextElementSibling);
        }
      }
      evtbox.stopPropagation();
    }

  });
  document.addEventListener("mouseup", function(){
    if(flag !== 1) return;
    evtbox.target.style = "";
    fakeNode.parentElement.replaceChild(evtbox.target, fakeNode);
  });
});

function ea(wrap, evt) {
  console.log(wrap, evt);
  //wrap.innerText = "hahaha";
}
