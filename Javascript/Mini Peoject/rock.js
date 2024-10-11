let score={
  player:0,
  comp:0,
  tie:0,
  savescore: function() {
    let scoresave=JSON.stringify(this);
    localStorage.setItem('score',scoresave);
  }
}

function init() {
  let scorestr=localStorage.getItem('score');
  if (scorestr) {
    console.log(`previous score found: ${scorestr}`);
    let scoreval=JSON.parse(scorestr);
    score.player=scoreval.player;
    score.comp=scoreval.comp;
    score.tie=scoreval.tie;
    score.savescore();
    document.querySelector('#playerscore').innerHTML ='PLAYER SCORE: ' + score.player;
    document.querySelector('#computer_score').innerHTML ='COMPUTER SCORE: ' + score.comp;
    document.querySelector('#tie_score').innerHTML ='TIE: ' + score.tie;
  }
}
function rock() {
  let cc=comp_choice();
  document.querySelector('#para2').innerHTML='Computer has choosen: '+ cc;
  document.querySelector('#para').innerHTML='You have choosen 👊 Rock';

  if (cc=='✌ Scissor') {
    document.querySelector('#result').innerHTML='You Won';
    score.player++;
    document.querySelector('#playerscore').innerHTML='PLAYER SCORE: '+ score.player;
    score.savescore();

  }else if(cc== '🖐 Paper'){
    score.comp++;
    document.querySelector('#result').innerHTML='Computer Won';
    document.querySelector('#computer_score').innerHTML='COMPUTER SCORE: '+ score.comp; 
    score.savescore();
  }else{
    document.querySelector('#result').innerHTML='Its a TIE!!!';
    score.tie++;
    document.querySelector('#tie_score').innerHTML='TIE: '+score.tie;
    score.savescore();
  }
}
function paper() {
  let cc=comp_choice();
  document.querySelector('#para').innerHTML='You have choosen 🖐 Paper';
  document.querySelector('#para2').innerHTML='Computer has choosen: '+ cc;

  if (cc=='✌ Scissor') {
    document.querySelector('#result').innerHTML='Computer Won';
    score.comp++;
    document.querySelector('#computer_score').innerHTML='COMPUTER SCORE: '+ score.comp; 
    score.savescore();
  }else if(cc== '👊 Rock'){
    score.player++;
    document.querySelector('#result').innerHTML='You Won';
    document.querySelector('#playerscore').innerHTML='PLAYER SCORE: '+ score.player;
    score.savescore();
  }else{
    document.querySelector('#result').innerHTML='Its a TIE!!!';
    score.tie++;
    document.querySelector('#tie_score').innerHTML='TIE: '+score.tie;
    score.savescore();
  }
}
function scissors() {
  let cc=comp_choice();
  document.querySelector('#para').innerHTML='You have choosen ✌ Scissors';
  document.querySelector('#para2').innerHTML='Computer has choosen: '+ cc;
  if (cc=='🖐 Paper') {
    score.player++;
    document.querySelector('#result').innerHTML='You Won';
    document.querySelector('#playerscore').innerHTML='PLAYER SCORE: '+ score.player; 
    score.savescore();
    
  }else if(cc== '👊 Rock'){
    document.querySelector('#result').innerHTML='Computer Won';
    score.comp++;
    document.querySelector('#computer_score').innerHTML='COMPUTER SCORE: '+ score.comp;
    score.savescore();
    
  }else{
    document.querySelector('#result').innerHTML='Its a TIE!!!';
    score.tie++;
    document.querySelector('#tie_score').innerHTML='TIE: '+score.tie;
    score.savescore();
  }

}
function comp_choice() {
  let x=Math.floor(Math.random()*3);
  if(x===0){
    return "👊 Rock";
  }else if(x===1){
    return "🖐 Paper";
  }else{
    return "✌ Scissor";
  }
}
function reset() {
  score.player=0;
  score.comp=0;
  score.tie=0;
  score.savescore();
  document.querySelector('#playerscore').innerHTML='PLAYER SCORE: '+ score.player;
  document.querySelector('#computer_score').innerHTML='COMPUTER SCORE: '+ score.comp;
  document.querySelector('#tie_score').innerHTML='TIE: '+ score.tie;
  
}
init();
