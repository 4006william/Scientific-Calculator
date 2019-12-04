//when any button is clicked display its value

btnClicked = (a) => {

    calcBody.screen.value +=  a;

}

//when = button is clicked evaluate values on screen

result = () => {

    calcBody.screen.value = eval(calcBody.screen.value);

}

//backsapce button

backspace = () => {

    var prevalue = calcBody.screen.value;

    calcBody.screen.value = prevalue.substr( 0, prevalue.length-1 );

}

//button to reset values to zero

ac = () =>{

    calcBody.screen.value = " ";

}

//button to reset calculator to null

reset = () =>{

    // built in function to reset values

}

//button to find sin of x

sinx = () =>{

    calcBody.screen.value = Math.sin(calcBody.screen.value);

}

//button to find cos of x

cosx = () =>{

    calcBody.screen.value = Math.cos(calcBody.screen.value);

}

//button to find tan of x

tanx = () =>{

    calcBody.screen.value = Math.tan(calcBody.screen.value);

}

//button to find arcsin of x

arcsinx = () =>{

    calcBody.screen.value = Math.asin(calcBody.screen.value);

}

//button to find arccos of x

arccosx = () =>{

    calcBody.screen.value = Math.acos(calcBody.screen.value);

}

//button to find square of x

square = () =>{

    calcBody.screen.value = Math.pow(calcBody.screen.value, 2);

}

//button to find cube of x

cubex = () =>{

    calcBody.screen.value = Math.pow(calcBody.screen.value, 3);

}

//button to find squareroot of x

sqrRoot = () =>{

    calcBody.screen.value = Math.pow(calcBody.screen.value, 1/2);

}

//button to find cube root of x

cbRoot = () =>{

    calcBody.screen.value = Math.pow(calcBody.screen.value, 1/3);

}

//button to find percentage of x

percentx = () =>{

    calcBody.screen.value = calcBody.screen.value * 0.01 ;

}

//button to raise 10 to the value of x

tenx = () =>{

    calcBody.screen.value = Math.pow(10, calcBody.screen.value) ;

}

ln = () =>{

    calcBody.screen.value = Math.LN10(calcBody.screen.value);

}

 

log = () =>{

    calcBody.screen.value = Math.log(calcBody.screen.value);

}

 

division = () =>{

    calcBody.screen.value = (1 / calcBody.screen.value );

}