function handleFormSubmit(event) {
  event.preventDefault();
  let data = new FormData(event.target);
  let formJSON = Object.fromEntries(data.entries());
  let dataObj = JSON.stringify(formJSON, null, 2);
  localStorage.setItem("dataObj", dataObj);
}
let form = document.querySelector(".form");
form.addEventListener("submit", handleFormSubmit);

function FileValidation(field) {
  var fileInput = document.getElementById("uploadFile").value;
  var allowExtension = /(\.pdf|\.doc)$/i;
  if (!allowExtension.exec(fileInput)) {
    alert("Only PDf is allowed");
    field.form.reset();
    return false;
  }
}


function CompareDate(extension) {
  var EndDate = document.getElementById("end").value;
  var StartDate = document.getElementById("start").value;
  var extension = StartDate < EndDate;
  if (!extension) {
    alert("Start Date should be greater than the end date");
    date.form.reset();
    return false;
  }
}

function StartChange(extension) {
  var EndDate = document.getElementById("end").value;
  var StartDate = document.getElementById("start").value;
  var extension = StartDate > EndDate;
  if (!extension) {
    alert("Start Date should be less than tha end date");
    date.form.reset();
    return false;
  }
}
