function bin(n){
    var a = n%2;
    var d =[a];
    var b = Math.floor(n / 2);
    console.log(b);
    for (let x = b; x> 0; x =Math.floor(x/2)){
        var z = x%2;
        d.push(z);
        
    }
    d.reverse()
    return 'Binary of ' +n + " is " + d.join("");
}
console.log(bin(500));