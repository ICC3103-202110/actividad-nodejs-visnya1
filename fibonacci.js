function fibonacci(number) 
{
    let number1 =0;
    let number2 =1;
    let number3;

    for (let i = 2; i < number; i ++)
    {
        number3 = number1 + number2;  
        number1 = number2;
        number2 = number3;
        number3 = number1 + number2; 

    }
    return number3;
}
    

let readline = require('readline').createInterface
({
    input: process.stdin,
    output: process.stdout
})
    readline.question('Please enter a number: ', number =>
    {
        console.log('F(' + number+')=' + fibonacci(number)); 
        readline.close();
    })
        
  
