document.addEventListener("DOMContentLoaded", function() {
  var con = document.querySelector("#box");
  var moveNode;
  var fakeNode;
  con.addEventListener("mouseover", function(evt) {

    evt.target.draggable = "true";
    evt.preventDefault();

    evt.target.addEventListener("dragstart", function(evt1) {

      moveNode = evt1.target;
      console.log(evt1.target);

      fakeNode = document.createElement("div");
      fakeNode.style.width = "100px";
      fakeNode.style.height = "100px";
      fakeNode.style.border = "1px solid blue";
      fakeNode.style.float = "left";
      moveNode.parentElement.replaceChild(fakeNode, moveNode);

      evt1.dataTransfer.setData("text/html", evt1.target.id);
      evt1.dataTransfer.effectAllowed = "move";


    });

  });

  con.addEventListener("drop", function(evt5) {
    if(evt5 === moveNode) return;

    console.log("drop");
    evt5.preventDefault();
    var data = evt5.dataTransfer.getData("text/html");
    console.log(data);

    evt5.target.parentElement.insertBefore(moveNode, evt5.target);
    //evt5.target.innerHTML = data;
  })

  con.addEventListener("mouseout", function(evt3) {
    // console.log(evt3.target.draggable);
    // for(var i = 0; i < evt3.target.parentElement.length; i++) {
    //   evt3.target.parentElement.children[i].draggable = "false";
    // }
    //evt3.target.draggable = "false";
  });

  con.addEventListener("dragover", function(evt2) {
    //console.log(evt2.target);

    evt2.preventDefault();
  });


});

 function dragstart_handler(ev) {

   //console.log(ev.target);
   ev.dataTransfer.setData("text/plain", ev.target.id);
   ev.dataTransfer.dropEffect = "move";
   //console.log(ev.parentElement);
   ev.parentElement.removeChild(ev.target);
 };
