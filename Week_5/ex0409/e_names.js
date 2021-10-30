function count_names(arr)
{
    var count = 0;
    var pattern = "ie$|y$";
    for(var i=0; i<arr.length;i++)
    {
        if(arr[i].match(pattern))
            count++;
    }
    document.write("<br/>No. of names ending in ie or y:" +count);
}
var n=prompt("Enter number of names:");
var arr = new Array(n);

for (var i=0;i<n;i++) arr[i] = prompt("Enter name"+(i+1)+":");
document.write("Entered array of names: <br/>");

for(var i=0;i<n;i++)
    document.write(arr[i]+"<br/>");
count_names(arr);    