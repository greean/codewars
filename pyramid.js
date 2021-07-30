function pyramid(balls) {
    // your code here
    let levels = 0;
    let ballsLeft = balls;
    for(i=1; ballsLeft>=i; i++){
        ballsLeft = ballsLeft - i;
        levels++;
    }
    console.log(balls + " balls = " + levels + " levels");
}

pyramid(3);
pyramid(5);
pyramid(6);
pyramid(8);
pyramid(9);
pyramid(10);
pyramid(14);
pyramid(15);