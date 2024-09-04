var job = false;
var paycheck = 0;
var timeMult = Math.floor(Math.random() * (100 - 30) + 30);



function getPaycheck() {
    money += paycheck;

    if (paycheck !== 0) {
        addAction('You just received a paycheck of: $' + paycheck.toFixed(0));
    }

    paycheck = 0;
}

function getJob() {
    if (!job) {
        job = true;
        addAction('You got a job');
        document.getElementById('jobBttn').textContent = 'Quit your job';
    } else {
        job = false;
        addAction('You quit your job');
        document.getElementById('jobBttn').textContent = 'Get a job';
    }
}


setInterval(function () {
    if (job) {
        paycheck += moneyPerTap;
        var timeMult = Math.floor(Math.random() * (100 - 30) + 30);
    }
}, timeMult);

