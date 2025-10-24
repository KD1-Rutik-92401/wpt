let employees = [];

function addEmployee() {
  let name = document.getElementById("name").value.trim();
  if (!name) {
    alert("Please Enter a Name");
    return;
  }

  if (employees.length > 6) {
    alert("You Already Entered 6 Names.");
    return;
  }

  employees.push(name);
  alert(`Employee: ${name} Added Successfully.`);
}

function sortEmployees() {
  if (employees.length === 0) {
    alert("No Employees To Display!!!");
    return;
  }

  let sortedNames = employees
    .slice()
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  document.getElementById("output").innerHTML = sortedNames.join("<br>");
  document.getElementById("output").style.fontFamily = "cursive";
  document.getElementById("output").style.fontWeight = "500";
}
