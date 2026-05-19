// /////// EVENTS    

// ////// Assignment # 43-48 
// Q1 Show an alert box on click on a link.

// Q2 Display some Mobile images in browser. On click on an 
// image Show the message in alert to user. 

function message(){
    alert('Thanks for purchasing our product.')
}

// Q3 Display 10 student records in table and each row should contain a delete 
// button. If you click on a button to delete a record, entire row should be 
// deleted.  
// // 
function del(btn){
    let rem = btn.parentNode.parentNode.remove();
}


// Q4 Display an image in browser. Change the picture on mouseover and set the 
// first picture on mouseout

function changeImg(){
  let image = document.getElementById('img');
image.src ="https://media.istockphoto.com/id/1217649450/photo/chicken-or-hen-on-a-green-meadow.jpg?s=612x612&w=0&k=20&c=zRlZTkwoc-aWb3kI10OqlRLbiQw3R3_KUIchNVFgYgw="
}

function oldImg(){
  let image = document.getElementById('img');
image.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LPJl3Dz6sZsG7HfFqoJUMt2vkof0BhstWg&s"
}


// Q5 Show a counter in browser. Counter should increase on click on increase 
// button and decrease on click on decrease button. And show updated counter 
// value in browser.


let count = 0;

function increase() {
  count++;
  document.getElementById("count").innerText = count;
}

function decrease() {
  count--;
  if (count < 0) {
    count = 0;
  }else{
  
  document.getElementById("count").innerText = count;
}
}