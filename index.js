/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/


function toggleColor() {
  header = document.querySelector("h1#header")
  if (header.style.color === "red") {
    header.style.color = "black"
  } else {
    header.style.color = "red"
  }
}

document.addEventListener("click",toggleColor)


/***** Deliverable 2 *****/
playerform = document.querySelector("#new-player-form")

playerform.addEventListener("submit",handleformsubmit)

function handleformsubmit(event) {

  event.preventDefault()
  const form = event.target

  const playernumber = form["number"].value;
  const playername = form["name"].value;
  const playernick = form["nickname"].value;
  const playerphoto = form["photo"].value;

  const player = {
    number: playernumber,
    name: playername,
    nickname: playernick,
    photo: playerphoto
  }
  renderOnePlayer(player)

  form.reset()
}

function renderOnePlayer(player){
  const playerCont = document.querySelector(".player-container")
  const outerli = document.createElement('li')
  outerli.className = "player"
  
  outerli.innerHTML = `<h3>${player.name} <em>(${player.nickname})</em>
  </h3>
  <img src = "${player.photo}" alt=${player.name}>
  <p class="likes"> 1000 likes</p>
  <button class="like-button">❤️</button>
  `
  playerCont.append(outerli)

}
/***** Deliverable 3 *****/
  const playerCont = document.querySelector(".player-container")
  playerCont.addEventListener("click", e =>{
    if(e.target.className === "like-button"){
      const player = e.target.closest(".player")
      const likescount = player.querySelector(".likes")
      likescount.textContent = (parseInt(likescount.textContent) + 1) + " likes"
    }
  })