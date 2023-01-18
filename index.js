// function p() {
//   var n = document.getElementById("month").value;
//   var i = document.getElementById("income").value;
//   var e = document.getElementById("expense").value;

//   var d = document.createElement("div");
//   d.appendChild(n, i, e);
//   var h1 = document.createElement("h1");
//   var p = document.createElement("p");
//   // d.append(h1.style.color:"red";    ,p,p)
//   h1 = n.style;
//   console.log(d.childNodes);
//   // // var h1=
//   // do(h1.style.color"red");
// }
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let options = document.getElementById("month").options;
months.forEach(function (month) {
  options.add(new Option(month));
});
