// localStorage.setItem("1","Sankalp")   //this helps to set values in theh local storage
// localStorage.setItem("2","Sameer")
// localStorage.setItem("3","Amogh")

// console.log(localStorage.getItem("1"));  //to get the values in the local storage

localStorage.clear(); //to clear the localStorage
const studentName = ["Sankalp","Amogh","Tejas"];
localStorage.setItem("names",studentName)
console.log(localStorage.getItem("names"));

const players = [
    {
        id: 1,
        name: "KL Rahul"
    },
    {
        id: 2,
        name: "Sachin"
    },
    {
        id: 3,
        name: "Sehwaag"
    },
    {
        id: 4,
        name: "Dhoni"
    }
];

//console.log(players);

localStorage.setItem("players",JSON.stringify(players))

const playersName = JSON.parse(localStorage.getItem("players"));
console.log(playersName);

// sessionStorage.setItem("1","guddu");
// sessionStorage.setItem("2","suddu");
// console.log(sessionStorage);