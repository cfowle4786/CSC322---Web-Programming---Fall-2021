function tst_names(str)
    {
        var pattern = "^[A-Z][a-z]+,\\s+[A-Z][a-z]+\\s+[A-Z]$";
        if(str.match(pattern))
            return true;
        else
            return false;
    }

var str = prompt("Enter a Last Name, First Name and Middle intial:  ");
var result = tst_names(str);

document.write("Entered string is:  "+str);

if(Boolean(result)===true)
    document.write("<br/>The string is true!");
else
    document.write("<br/>The string is false!");
