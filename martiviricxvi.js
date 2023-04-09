let x = 20;
let isPrime = true ;

for (let i = 2 ; i < x/2 ; i++) {
    if (x % i === 0 ) {
        isPrime = false ;
    }
}

if (isPrime) {
    console.log (`${x} რიცხვი მარტივია`)
} else {
    console.log (`${x} რთული რიცხვია`)
}

