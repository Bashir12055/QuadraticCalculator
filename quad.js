function trigger(){
    
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);
    var d = (b*b) - (4*a*c);

    if (d>0){
        var x1 = (-b + (Math.sqrt(d)))/(2*a);
        var x2 =(-b - (Math.sqrt(d)))/(2*a);
        
        document.getElementById("display").value =  " x1 = "+x1.toFixed(3) + "    x2 = " + x2.toFixed(3)+ " (Real d/f roots)"
    }
    else if (d<0){
        x1 = (-b)/(2*a);
        var imaginaryPart = (Math.sqrt(-d)/(2*a));
        document.getElementById("display").value = `x1 = ${x1.toFixed(3)} + ${imaginaryPart.toFixed(3)}i    x2 = ${x1.toFixed(3)} - ${imaginaryPart.toFixed(3)}i`;
    }
    else{
        x1 = (-b)/(2*a).toFixed(3);
        document.getElementById("display").value = `x1 = ${x1}     x2 = ${x1} (Real equal roots)` 
        
    }
}