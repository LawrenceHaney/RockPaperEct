// data
let data = [
  {
    name: "Rock",
    loss: ["Paper", "Spock"],
    rules: "",
    img: "./rock.jpg"
  },
  {
    name: "Paper",
    loss: ["Scissor", "Lizard"],
    rules: "",
    img: "./paper.jpg"
  },
  {
    name: "Scissor",
    loss: ["Rock", "Spock"],
    rules: "",
    img: "./scissor.jpg"
  },  
  {
    name: "Spock",
    loss: ["Lizard", "Disaproves"],
    rules: "",
    img: "./spock.jpg"
  },  
  {
    name: "Lizard",
    loss: ["Rock", "Scissor"],
    rules: "",
    img: "./lizzard.jpg"
  }
]

// Game
function result(name){
//findPlayerelemnt.loss
let player= findbyname(name)
let npcchoice= choice()
let npcrule= npcchoice.loss
let loss = npcrule.includes(player.name)
// let npcchoiceloss= npcchoice.loss
//acesse data
if(npcchoice == player){
  drawresult("again", npcchoice)
return
}
  if(loss == true){
    drawresult("win", npcchoice)
  return
  }
  drawresult("lose", npcchoice)
  }



//randomizer'
function choice(){
  let r = Math.floor(Math.random() * data.length - 0.01)
  
  return data[r]
  //output data[r]
}
//find
function findbyname(name){
  let currentdata = data.find(a=> a.name == name)
  return currentdata
}


//Draw
function drawcard(){
  let template = " "
  //for loop to access all choices for player
  for (let i = 0; i <data.length; i++){
    const move = data[i];
    template += `
    <div class="card m-auto" style="width: 18rem;">
  <img src="${move.img}" class="card-img-top game-img" alt="...">
  <div class="card-body">
    <h5 class="card-title">${move.name}</h5>
    <p class="card-text">${move.rules}</p>
    <button type="button" class="btn btn-primary" onclick="result('${move.name}')">${move.name}</button>
  </div>
</div>
  `
  }
  document.getElementById("gamecontainer").innerHTML = template
}

function drawresult(result, data){
  let resulttemplate = ``
  if (result == "win"){
  let resulttemplate = `
  <div class="card text-center justify-self-center">
  <h3>I choose</h3>
  <img src="${data.img}" class="card-img-top" alt="...">
  <div class="card-image-overlay">
    <h1>${data.name}</h1>
  </div>
  <div class="card-body">
    <p class="card-text"> And I Win</p>
    <button type="button" class="btn btn-primary" onclick=drawcard()>play again?</button>
    </div>`
  document.getElementById("gamecontainer").innerHTML = resulttemplate
  }
  if (result == "lose"){
    let resulttemplate = `
    <div class="card text-center justify-self-center">
    <h3>I choose</h3>
    <img src="${data.img}" class="card-img-top" alt="...">
    <div class="card-image-overlay">
      <h1>${data.name}</h1>
    </div>
    <div class="card-body">
      <p class="card-text"> And I lose. here's your trophy:</p>
    </div>
    <img src="./win.jpg" class="card-img-top results-img" alt="...">
    <button type="button" class="btn btn-primary" onclick=drawcard()>play again?</button>
  </div>`
  document.getElementById("gamecontainer").innerHTML = resulttemplate
  }
if (result == "again"){
  resulttemplate=`
  <div class="card text-center justify-self-center">
  <h3>I choose</h3>
  <img src="${data.img}" class="card-img-top" alt="...">
  <div class="card-image-overlay">
    <h1>${data.name}</h1>
  </div>
  <div class="card-body">
    <p class="card-text"> Just like you.</p>
    <button type="button" class="btn btn-primary" onclick=drawcard()>play again?</button>
  </div>
  <img src="./again.jpg" class="card-img-top" alt="...">
</div>
  `
  document.getElementById("gamecontainer").innerHTML = resulttemplate
}
}

  //draw lose

  //draw again?



drawcard()
