const func = async (input) => {
  const response = await fetch("http://numbersapi.com/" + input);
  if (response.status != 200) {
    throw new Error("Invalid URL");
  }
  const data = await response.text();
  return data;
};

const addBtn = document.querySelector("button");
const input = document.querySelector("input");

addBtn.addEventListener("click", (x) => {
  if (input.value != "") {
    const data = null;
    func(input.value).then((data) => {
      console.log(data);
      funcToAdd(data);
    });
  } else {
    alert("Please enter a number");
  }
});

function funcToAdd(data) {
  document.querySelector("#two").value = data;

  const date = new Date();
  var current_date =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  var current_time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  var date_time = current_date + " " + current_time;

  if (localStorage.getItem(input) != null) {
    const valData = JSON.parse(localStorage.getItem(input));
    document.querySelector("#three").value = valData.date;
    document.querySelector("#four").value = valData.msg;
  } else {
    document.querySelector("#three").value = "None";
    document.querySelector("#four").value = "None";
  }

  const val = {
    date: date_time,
    msg: data,
  };

  localStorage.setItem(input, JSON.stringify(val));
}
