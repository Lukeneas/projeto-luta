// class Character {
//   _life = 1;
//   maxLife = 1;
//   attack = 0;
//   defense = 0;

//   constructor(name) {
//     this.name = name;
//   }

//   get life() {
//     return this._life;
//     //quando puxar Character.life //
//   }
//   set life(newLife) {
//     this._life = newLife < 0 ? 0 : newLife;
//     //quando for mostrar a life
//   }
// }
// class Knight extends Character {
//   constructor(name) {
//     super(name);
//     this.life = 100;
//     this.attack = 10;
//     this.defense = 8;
//     this.maxLife = this.life;
//   }
// }
// class Sorcerer extends Character {
//   constructor(name) {
//     super(name);
//     this.life = 80;
//     this.attack = 15;
//     this.defense = 3;
//     this.maxLife = this.life;
//   }
// }

// class LittleMonster extends Character {
//   constructor() {
//     super("Little Monster");
//     //little monster é setado em name de character
//     this.life = 40;
//     this.attack = 4;
//     this.defense = 4;
//     this.maxLife = this.life;
//   }
// }

// class BigMonster extends Character {
//   constructor() {
//     super("Big Monster");
//     //little monster é setado em name de character
//     this.life = 120;
//     this.attack = 16;
//     this.defense = 6;
//     this.maxLife = this.life;
//   }
// }

// class Stage {
//   constructor(f1, f2, f1El, f2El, logObject) {
//     this.f1 = f1;
//     this.f2 = f2;
//     this.f1El = f1El;
//     this.f2El = f2El;
//     this.log = logObject;
//     //fighter1 é o objeto criado,  figther1El é o char no DOM
//   }
//   start() {
//     this.uptade();

//     //ativa attack pra cada botao
//     this.f1El
//       .querySelector(".attackButton")
//       .addEventListener("click", () => this.doAttack(this.f1, this.f2));

//     this.f2El
//       .querySelector(".attackButton")
//       .addEventListener("click", () => this.doAttack(this.f2, this.f1));
//   }

//   //atualizacao de dados na tela
//   uptade() {
//     //Fighter 1
//     this.f1El.querySelector(".name").innerHTML = `${this.f1.name} - ${this.f1.life} HP`;
//     let f1Pct = (this.f1.life / this.f1.maxLife) * 100;
//     this.f1El.querySelector(".bar").style.width = `${f1Pct}%`;

//     //Fighter 2
//     this.f2El.querySelector(".name").innerHTML = `${this.f2.name} - ${this.f2.life} HP`;
//     let f2Pct = (this.f2.life / this.f2.maxLife) * 100;
//     this.f2El.querySelector(".bar").style.width = `${f2Pct}%`;
//   }

//   doAttack(attacking, attacked) {
//     //Factores
//     let attackFactor = (Math.random() * 2).toFixed(2);
//     let defenseFactor = (Math.random() * 2).toFixed(2);
//     //Ataque e defesa
//     let actualAttack = Math.round(attacking.attack * attackFactor);
//     let actualDefense = Math.round(attacked.defense * defenseFactor);

//     if (attacking.life <= 0 || attacked.life <= 0) {
//       this.log.addMessage("Acabou");
//       return;
//     };

//     if (actualAttack > actualDefense) {
//       attacked.life -= actualAttack;
//       this.log.addMessage(
//         `${attacking.name} causou ${actualAttack} de dano em ${attacked.name} que ficou com ${attacked.life} de HP`
//       );
//     } else {
//       this.log.addMessage("Defendeu");
//     }

//     //depois do ataca, precisa atualizar a tela
//     this.uptade();
//   }
// }
// class Log {
//   list = [];

//   constructor(listEl){
//     this.listEl = listEl;
//   }

//   // add msg no list interno
//   addMessage(msg){
//     this.list.push(msg);
//     this.render();
//   }

//   //limpa list interno e o renova
//   render(){
//     this.listEl.innerHTML = '';

//     for (let i in this.list) {
//       this.listEl.innerHTML += `<li>${this.list[i]}</li>`
//     }
//   }
// }

const character = {
  name: "",
  life: 1,
  maxLife: 1,
  attack: 0,
  defense: 0
};

const createKnight = (name) => {
  return {
    ...character,
    name,
    life: 100,
    maxLife: 100,
    attack: 10,
    defense: 8,
  };
};

const createSorcerer = (name) => {
  return {
    ...character,
    name,
    life: 80,
    maxLife: 80,
    attack: 15,
    defense: 3,
  };
};

const createLittleMonster = (name) => {
  return {
    ...character,
    name,
    life: 40,
    maxLife: 40,
    attack: 4,
    defense: 4,
  };
};

const createBigMonster = (name) => {
  return {
    ...character,
    name,
    life: 120,
    maxLife: 120,
    attack: 16,
    defense: 6,
  };
};

const createStage = (f1, f2, f1El, f2El) => {
  const stageMethods = {
    uptade() {
      //f1
      let f1Pct = (f1.life / f1.maxLife) * 100;
      f1El.querySelector('.bar').style.width = `${f1Pct}%`;
      f1El.querySelector(".name").innerHTML = `${f1.name} - ${f1.life} HP`;
      //f2
      let f2Pct = (f2.life / f2.maxLife) * 200;
      f2El.querySelector('.bar').style.width = `${f2Pct}%`;
      f2El.querySelector(".name").innerHTML = `${f2.name} - ${f2.life} HP`;
    },
    doAttack(attacking, attacked) {
     //Factores
     let attackFactor = (Math.random() * 2).toFixed(2);
     let defenseFactor = (Math.random() * 2).toFixed(2);
     //Ataque e defesa
     let actualAttack = Math.round(attacking.attack * attackFactor);
     let actualDefense = Math.round(attacked.defense * defenseFactor);

     if (attacking.life <= 0 || attacked.life <= 0) {
        console.log("Acabou");
        return;
      };
      
      if (actualAttack > actualDefense) {
        attacked.life -= actualAttack;
        attacked.life = attacked.life < 0 ? 0 : attacked.life;
        console.log(
          `${attacking.name} causou ${actualAttack} de dano em ${attacked.name} que ficou com ${attacked.life} de HP`
        );
      } else {
        console.log("Defendeu");
      }
      this.uptade();
    },
    log(listEl) {
      list = [];
    },
    start() {
      this.uptade();
      f1El.querySelector(".attackButton").addEventListener("click",()=>this.doAttack(f1,f2));
      f2El.querySelector(".attackButton").addEventListener("click",()=>this.doAttack(f2,f1));
    }
  }
  return stageMethods;
};
