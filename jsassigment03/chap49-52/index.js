///////  EVENTS

/////// Assignment # 49-52

// Q1 Create a signup form and display form data in your web
// page on submission.

function signup(e){
    e.preventDefault();
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
console.log(fname.value);
console.log(lname.value);
console.log(email.value);
document.getElementById('result').innerText = fname.value + "\n" + lname.value + "\n" + email.value;
}

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

let lessPara = document.getElementById('para').innerText;

function fullPara() {
  let fullPara = `Modern mobile phones, or smartphones, are advanced handheld computers that combine communication, computing, and multimedia functionalities. They allow users to make calls, send messages, access the internet, and use a wide range of applications for work, education, and entertainment. Smartphones also come equipped with high-quality cameras, sensors, and powerful processors, making them essential tools in daily life. With constant connectivity and innovative features, they have become an important part of modern communication and technology. <a href="JavaScript:void(0)" onclick="shortPara ()">Read less</a>`;


  document.getElementById("para").innerHTML = fullPara;
}

function shortPara() {
  let shortPara = `Modern mobile phones, or smartphones, are advanced handheld computers that combine communication, computing, and multimedia functionalities...`;
  document.getElementById("para").innerHTML = shortPara;
}

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.


let row; 
function add(){
 let table = document.getElementById('table');
 
 table.innerHTML +=` <tr>
      <td>${fname.value}</td>
      <td>${age.value}</td>
      <td>${stclass.value}</td>
      <td>
        <button onclick="edit(this)">Edit</button>
        <button onclick="del(this)">Delete</button>
      </td>
    </tr>`

}
function del(btn) {
  btn.parentElement.parentElement.remove();
}

function edit(btn) {
  row = btn.parentElement.parentElement;
  let cells = row.getElementsByTagName('td');
  fname.value = cells[0].innerHTML;
  age.value = cells[1].innerHTML;
  stclass.value = cells[2].innerHTML;
  editBox.style.display = "block";
}
function update() {
  row.cells[0].innerText = eName.value;
  row.cells[1].innerText = eAge.value;
  row.cells[2].innerText = eClass.value;


  editBox.style.display = "none";
}