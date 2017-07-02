

(function immediate(param) {
    console.log('Immediate Function call. param : ' + param);
}('String Parameter'));


var a = 1;
{
    var a = 2;
    console.log(a);
    {
        var a = 3;
        console.log(a);
    }
}
