
const result = (a,b) =>{
    return new Promise((resolve, reject)=>{
        console.log(`Dividing ${a} by ${b}...`);
        setTimeout(() =>{ 
        if(b === 0){
            reject('Division by zero is not allowed.');
        }else{
            let divide = a/b;
            resolve(divide);
        }
    },2000);
    });
};


result(10, 2)
    .then((value) => {
        console.log(`Result: ${value}`);
        return result(10, 0); // Call the second input here
    })
    .then((value) => {
        console.log(`Result: ${value}`);
        return result(20, 5); // Call the second input here
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    });