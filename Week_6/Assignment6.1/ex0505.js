function calc() {

    var apple = document.getElementsByName("apples")[0].value;
    var orange = document.getElementsByName("oranges")[0].value;
    var banana = document.getElementsByName("bananas")[0].value;

    total = (apple * ".69" + orange * ".59" + banana * ".49" );
    // The 1.0775 is to calculate the percent sales tax

    alert("Your total cost is $" + total.toPrecision(5));
}

function applemax(value)
{

    var maxValue = 99;
    if( value> maxValue ) // checking the value in the text box
    {
        alert("The input can be in the range of 0-99"); // alert if the input is more than 99
        apples.value="0"; // changing the value to 0 if value is more than 99
    }
}

function orangemax(value)
{

    var maxValue = 99;
    if( value> maxValue )
    {
        alert("The input can be in the range of 0-99");
        oranges.value="0";
    }
}

function bananamax(value)
{

    var maxValue = 99;
    if( value> maxValue )
    {
        alert("The input can be in the range of 0-99");
        bananas.value="0";
    }
}

window.onload = function () {
    document.getElementById("calculate").onclick = calc;
};