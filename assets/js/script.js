// //acionando
// const log = new Log(document.querySelector('.log'));
// const char = new Knight('Char');
// const bigMonster = new BigMonster();

// const stage = new Stage(char, bigMonster, document.querySelector('#char'), document.querySelector('#monster'), log);
// stage.start();

const char = createSorcerer("O mais brabo");
const char2 = createLittleMonster("O menos brabo");

const stage = createStage(char, char2, document.querySelector('#char'), document.querySelector('#monster'));
stage.start();