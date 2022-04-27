function gameObject(){
    const teams ={
        home: {
        teamName: "Brooklyn Nets",
        colors: ["black", "white"],
        players: {
            "Alan Anderson":{
                number: "0",
                shoe: "16",
                points:"22",
                rebounds:"12",
                assists:"12",
                steals:"3",
                blocks:"1",
                slamDunks:"1"
            },
            "Reggie Evans":{
                number: "30",
                shoe: "14",
                points:"12",
                rebounds:"12",
                assists:"12",
                steals:"12",
                blocks: "12",
                slamDunks:"7"
            },
            "Brook Lopez":{
                number: "11",
                shoe: "17",
                points:"17",
                rebounds:"19",
                assists:"10",
                steals:"3",
                blocks:"1",
                slamDunks:"15"
            },
            "Mason Plumlee":{
                number: "1",
                shoe: "19",
                points:"26",
                rebounds:"12",
                assists:"6",
                steals:"3",
                blocks:"8",
                slamDunks:"5"
            },
            "Jason Terry":{
                number: "31",
                shoe: "15",
                points:"19",
                rebounds:"2",
                assists:"2",
                steals:"4",
                blocks:"11",
                slamDunk:"1"
            }
        }
    },
    
        away : {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise","Purple"],
        players: {
            "Jeff Adrien":{
                number: "4",
                shoe: "18",
                points:"10",
                rebounds:"1",
                assists:"1",
                steals:"2",
                blocks:"7",
                slamDunks:"2"

            },
            "Bismak Biyombo":{
                number: "0",
                shoe: "16",
                points:"12",
                rebounds:"4",
                assists:"7",
                steals:"7",
                blocks:"15",
                slamDunks:"10"
            },
            "DeSagna Diop":{
                number: "2",
                shoe: "14",
                points:"24",
                rebounds:"12",
                assists:"12",
                steals:"4",
                blocks:"5",
                slamDunks:"5"
            },
            "Ben Gordon":{
                number: "8",
                shoe: "15",
                points:"33",
                rebounds:"3",
                assists:"2",
                steals:"1",
                blocks:"1",
                slamDunks:"0"
            },
            "Brendan Haywood":{
                number: "33",
                shoe: "15",
                points:"6",
                rebounds:"12",
                assists:"12",
                steals:"22",
                blocks:"5",
                slamDunks:"12"
            }
        }
    }
}
return teams
}








const homeTeam = gameObject().home
const awayTeam = gameObject().away



function numPointsScored(playerName) {
  const game = gameObject();  
  // "game" now holds entire object.   
  for (const gameKey in game) {
//  gameKey refers to either home or away team. This loop will go through the entire home team, then away team if necessary
    const teamObj = game[gameKey] 
 // teamObj is either the entire home team object or entire away team object
    const playerObj = teamObj.players 
    // playerObj is an individual players object 
    for (const playerKey in playerObj){
        if (playerKey === playerName)
        return playerObj[playerKey].points
      }
    }
  }

  function getPlayers(){
      const game = gameObject()
      const homeTeamPlayers = game.home.players
      const awayTeamPlayers = game.away.players
      return Object.assign({}, homeTeamPlayers, awayTeamPlayers)
  }
  


// function shoeSize(playerName){
//     const playerArrays = Object.entries(gameObject())
//     const player = playerArrays.find(playerArray =>playerArray[0]===playerName)
//     return player.shoeSize
// }

// function teamColors(team){
//     const game = gameObject()     //game will now hold the entire object
//     const homeTeamColors= game.home.colors
//     const awayTeamColors= game.away.colors
//   if (team === game.home.teamName){
//       return homeTeamColors
//   }else{
//       return awayTeamColors
//   }   
// }


function playerNumbers(teamName){
    let numbersArray =[]
    let selectedTeam =selectTeam(teamName)
    for (let player in selectedTeam){
        numbersArray.push(selectedTeam[player].number)
    }
    return numbersArray
}

function selectTeam(teamName){
   return teamName===homeTeam.teamName? homeTeam.players: awayTeam.players
}

function playerStats(playerName){
  for (const player in getPlayers()){
      if(player===playerName){
       return getPlayers()[playerName]
        }
    }   
}

function bigShoeRebounds(){
    const sortedShoes=makeSortedShoeSizeArray()
    const biggestShoeSize= sortedShoes[sortedShoes.length-1]  
    console.log(biggestShoeSize)  
    for (const player in getPlayers())   
          if (getPlayers()[player].shoe===biggestShoeSize){
               return getPlayers()[player].rebounds
           }
      }

function makeSortedShoeSizeArray(){
    let shoeSizeArray = []
    for (const player in getPlayers()){
        shoeSizeArray.push((getPlayers()[player].shoe))
    }
       return shoeSizeArray.sort()
    }

