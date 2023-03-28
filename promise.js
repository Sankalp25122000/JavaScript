const greetMessage  = function(){
    return new Promise((resolve, reject)=>{
        //resolve("some data");
       reject("error data");     //from both only one can be run at a time either resolve or reject
    })
}

greetMessage().then(data =>{
    console.log(data);
}).catch(err=>{        // .catch is used for error
    console.log(err);
})