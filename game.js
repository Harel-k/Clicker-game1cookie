let total = document.getElementById('total');

let amount = 0;

function point(){
    amount = amount+1;

    total.innerHTML = amount;

    let clickAudio = new Audio("click.wav");
    clickAudio.play();

    console.log("Amount is:", amount, "Type:", typeof amount);
};

function reset(){
    alert('points have been reset!');

    amount = 0;

    total.innerHTML = amount;

    let resetAudio = new Audio("reset.wav");
    resetAudio.play();

    console.log("Cookie Amount is:", amount, "Type:", typeof amount);
};

if(amount.value == 100){
    console.log("The amount is 100!");

    let winAudio = new Audio("win.mp3");
    winAudio.play();
}
