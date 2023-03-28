// //Array methods
// const scores = [10, 20, 30, 40, 50];

// const filterScore = scores.filter((score)=> {
//     return score>30;
// });
// console.log(filterScore);

// // let newScores = [];
// // for (let i = 0; j =0; i<scores.length;i++){
// //     if(scores[i]>30){
// //         newScores.push(scores[i]);
// //         // newScores[j++]= scores[i];
// //     }
// // }

// // console.log(newScores);

// const evenScore = scores.filter((n)=> {
//     return n % 2 == 0;
// })

// console.log(evenScore);

// const users =[
//     {
//         name: "Sankalp",
//         premium:true
//     },
//     {
//         name: "Sameer",
//         premium:false
//     },
//     {
//         name: "Amogh",
//         premium:true
//     },
//     {
//         name: "Tejas",
//         premium:false
//     }

// ];

// const premiumUsers = users.filter((user) => {
//     return user.premium;
// })

// console.log(premiumUsers);

// const products = [
//     {
//         name : "ParleG",
//         price : 100
//     },
//     {
//         name : "KhaleG",
//         price : 500
//     },
//     {
//         name : "NaleG",
//         price : 200
//     },
//     {
//         name : "LeleG",
//         price : 400
//     }
// ];
// //filter is used to filter out the particular values
// const premiumBiscuit = products.filter((products)=>{
//     return products.price>300;
// })

// console.log(premiumBiscuit);

// const numbers = [1,2,3,4,5,6];
// const spuare = numbers.map((n)=>{
//     return n*n;
// })
// console.log(spuare);
// //map is used to perform operations on all elements
// const productPrice = products.map((product)=>{
//     return {name:product.name, price:product.price+(product.price*0.1)}
// })
// console.log(productPrice);

// //reduce method

// const values = [10,12,32,45,55,60,78];
// //reduce have two values first one stores (accumulator) and second perform the operation
// const sum = values.reduce((acc,val)=>{
//     return acc+val;
// },0);

// console.log(sum);

// const player =[
//     {
//         name:"Sachin",
//         score: 100
//     },
//     {
//         name:"Virat",
//         score: 50
//     },
//     {
//         name:"KLRahul",
//         score: 30
//     },
//     {
//         name:"Sehwaag",
//         score: 100
//     },
//     {
//         name:"Sachin",
//         score: 400
//     }
// ];
// //using reduce method
// const sumScore = player.reduce((acc,player)=>{
//     if(player.name =="Sachin"){
//         return acc+player.score;
//     }
//     return acc;
// },0);

// console.log(sumScore);
// //using filter and reduce together
// const sumScore2 = player.filter((player)=>{
//     return player.name=="Sachin";
// }).reduce((acc,p)=>{
//     return acc+p.score;
// },0)

// console.log(sumScore2);

// //find method
// const marks = [21,22,43,42,15,36,37,44,34];
// const mark = marks.find((mark)=> {
//     return mark >40;
// });

// console.log(mark);


// //Sort method

// const sortedMarks = marks.sort();
// console.log(sortedMarks);

// //another method
// const sorteMarks1 = marks.sort((num1, num2)=>{
//     return num1- num2;
// })
// console.log(sorteMarks1);

// const sortedproducts = products.sort((p1,p2)=>{
//     return p1.price - p2.price;
// })
// console.log(sortedproducts);

// const premiumBiscuitDis = products.filter((products)=>{
//     return products.price>200;
// }).map((p)=>{
//     return {name : p.name, price:p.price-(p.price*0.2)}
// }).sort((p1,p2)=>{
//     return p1.price-p2.price;
// });

// console.log(premiumBiscuitDis);





