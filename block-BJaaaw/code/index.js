// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = Number(prompt("Enter your number"));
if (number%2===0) {
alert(`Number is even`);
}
else{
alert(`Number is odd`);
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let firstNum =Number(prompt("Enter first number"));
let secondNum =Number(prompt("Enter second number"));
if(firstNum>secondNum)
{
alert(firstNum);
}
else
{
alert(secondNum);
}

// 3. Convert the above code using`?` terniary operator
(firstNum>secondNum)? alert(`Number is ${firstNum}`):alert(`NUmber is ${secondNum}`);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName=prompt(`What is your housename?`);
if (houseName==`stark`)
{
alert(`Winter is comimg`);
}
else if (houseName==`lannister`)
{
alert(`A lannister always pays his debt`);
}
else
{
alert(`All men  must die`);
}

// 5. Convert the above code using`?` terniary operator
//(houseName==`stark`) ? alert(`Winter is comimg`): ? ((houseName==`lannister`) ? alert(`A lannister always pays his debt`) :alert(`All men  must die`););


// Switch
switch(houseName){
case `stark`:alert(`stark`);
break;
case `lannister`:alert(`lannister`);
break;
default: alert(`nothing`);
}


// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month=Number(prompt("Enter number of month"));
switch(month){
case 1:
case 3:
case 5:
case 7:
case 8:
case 10:
case 12:alert(`Number of days is 31`);
break;
case 4:
case 6:
case 9:
case 11:alert (`NUmber of days is 30`);
break;
default : alert(`Number is 28`);
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary=Number(prompt("Enter amount"));
switch(true)
{
case (salary<=20000):alert(salary-(0.1*salary));
break;
case(salary<=40000):alert (salary-(0.2*salary));
break;
case (salary>50000):alert(salary-(0.3*salary));
break;
default:alert(`tax not known`);
}


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks=Number(prompt(`enter marks`));
if (marks>100) {
alert :(`marks cant be greater than 100`);
}
else if (marks >80 && marks<100 )
{
alert(`GRADE A`);
}
else if (marks >50 && marks<80)
{
alert("GRADE B");
}
else if (marks >30 && marks<50)
{
alert(`Grade C`);
}
else if (marks >0)
{
alert(`Grade D`);
}
switch(true){
case(marks >80 && marks<100):alert(`GRADE A`);
break;
case(marks >50 && marks<80):alert("GRADE B");
break;
case(marks >30 && marks<50):alert(`Grade C`);
break;
case(marks >0):alert(`Grade D`);
}



/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather=prompt(`What is the weather like outside?`);
switch(weather){
case `sunny`:alert(`wear a tshirt`);
break;
case `rainy`:alert(`dont forget to take raincoat`);
break;
case `hot`:alert(`get a hanky`);
break;
case `freezing`:alert(`get your sweater on`);
break;
default:alert(`not valid`);
}

