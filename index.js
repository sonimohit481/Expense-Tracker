alert(
  "Some tips before you can start \n1. You can keep recorde for only 12 months \n2.Each month should be unique. \n3.the Earning should be grater than ₹10,000"
);
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

let displayData;
if (localStorage.getItem("expenseData")) {
  displayData = JSON.parse(localStorage.getItem("expenseData"));
} else {
  displayData = [];
}
Display(displayData);

let options = document.getElementById("month").options;
months.forEach(function (month) {
  options.add(new Option(month));
});
document.querySelector("#submitBtn").addEventListener("click", (e) => {
  e.preventDefault();
  let month = document.querySelector("#month").value;
  let income = document.querySelector("#income").value;
  let expense = document.querySelector("#expense").value;

  if (month === "") {
    alert("Select Month");
  }

  if (income < 10000) {
    alert("Income should be grater than 10,000");
  }
  if (expense === "") {
    alert("Enter the expense maid  in month");
  } else {
    if (displayData.find((item) => item.month === month)) {
      alert(`Month: ${month} already exist try another Month`);
    } else {
      displayData.push({
        month,
        income,
        expense,
      });
      document.querySelector("#month").value = "";
      document.querySelector("#income").value = "";
      document.querySelector("#expense").value = "";
      localStorage.setItem("expenseData", JSON.stringify(displayData));
      Display(JSON.parse(localStorage.getItem("expenseData")));
    }
  }
});
function Display(Data) {
  document.querySelector(".display").innerText = "";

  Data.map((item) => {
    let div = document.createElement("div");
    div.setAttribute("class", "displayitems");
    let headding = document.createElement("h3");
    headding.innerText = item.month + " 📅 ";
    let para1 = document.createElement("p");
    para1.innerText = "🏹 Income : ₹" + item.income;
    let para2 = document.createElement("p");
    para2.innerText = "🔪 Expense : ₹" + item.expense;
    let para3 = document.createElement("p");
    if (+item.income / 4 >= +item.income - +item.expense) {
      para3.style.color = "red";
      para3.innerText = "😢 Saving : ₹" + (+item.income - +item.expense);
    } else {
      para3.style.color = "rgb(0, 203, 7)";
      para3.innerText = "😊 Saving : ₹" + (+item.income - +item.expense);
    }
    // if (+item.income / 4 >= +item.income - +item.expense) {
    //   div.style.backgroundColor = "red";
    // } else {
    //   div.style.backgroundColor = "rgb(0, 203, 7)";
    // }
    div.append(headding, para1, para2, para3);
    document.querySelector(".display").append(div);
  });
}
