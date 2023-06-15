function Swap(a,b){

    let c =b 
    b=a
    a=c

    console.log(a,b)

}



Swap(2,9)


//  without third variable

function Swap2(a,b){
    b=a+b
    a=b-a
    b=b-a

    console.log(a,b)
}

Swap2(5,9)