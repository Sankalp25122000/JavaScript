const func = async () =>{    //by adding the word async it will return promise rather than undefined in console when function is undefined
const response = await fetch("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students");//it will fetch the promise
if(response.status!=200){
    throw new Error("Invalid url");
}


const data = await response.json(); //reponse.json will return a data
// console.log(data);
// const response1 = await fetch("san.json");  //chaining part
// const data1 = await response1.json();
return data;
};

func().then((data)=>{   //returned promised will be used for showing data
    printData(data);
    
}).catch(err =>{
    console.log("Could not fetch the data"+err);
});


//aysnc and await are used together



const table = document.querySelector("table")
console.log(table);

const printData=(data)=>{
    let html=``
    data.forEach(d => {
        html=`<tr>
        <td>${d.id}</td>
        <td>${d.name}</td>
        <td>${d.rollNo}</td>
        <td>${d.email}</td>
        <td><button>Delete</button></td>
        </tr>`
        table.innerHTML+=html
        
    });
}