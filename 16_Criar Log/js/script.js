let log = new Log(document.querySelector('.log'));


// criando classe log acima

let char = new Knight('Bonieky');
let monster = new BigMonster(); 

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();