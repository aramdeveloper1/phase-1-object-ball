const gameObject = {
   home: {
      "teamName": "berceleona",
      "colors": [],
      "players": {
         "messi": {
            "number": "tow",
            "shoe": "addidas",
            "points": "33",
            "rebounds": "66",
            "assists": "yes",
            "steals": "no",
            "blocks": "being",
            "slamdunk": "non",
         },
         "ronaldo": {
            "number": "three",
            "shoe": "nick",
            "points": "634",
            "rebounds": "66",
            "assists": "fine",
            "steals": "no",
            "blocks": "donin",
            "slamdunk": "non",
         },
         "gutza": {
            "number": "tow",
            "shoe": "addidas",
            "points": "33",
            "rebounds": "66",
            "assists": "yes",
            "steals": "no",
            "blocks": "being",
            "slamdunk": "non",
         },
      },
   },
   away: {
      "teamName": "berceleona",
      "colors": [],
      "players": {
         "messi": {
            "number": "tow",
            "shoe": "addidas",
            "points": "33",
            "rebounds": "66",
            "assists": "yes",
            "steals": "no",
            "blocks": "being",
            "slamdunk": "non",
         },
         "ronaldo": {
            "number": "three",
            "shoe": "nick",
            "points": "634",
            "rebounds": "66",
            "assists": "fine",
            "steals": "no",
            "blocks": "donin",
            "slamdunk": "non",
         },
         "gutza": {
            "number": "tow",
            "shoe": "addidas",
            "points": "33",
            "rebounds": "66",
            "assists": "yes",
            "steals": "no",
            "blocks": "being",
            "slamdunk": "non",
         },
      },
   }
}

// function methgameObject(obj) {
//    return obj
// }
// // console.log(methgameObject(gameObject))
// function homeTeamName(obj) {
//    return obj['home']['teamName'];
// }

// console.log(homeTeamName(gameObject)); // Pass gameObject as argument


// let oo = { foo: 42, bar: 83, "key w/ spaces": true };
// console.log(oo["foo"]);
// console.log(oo["bar"]);
// console.log(oo["key w/ spaces"]);

// console.log(oo.foo);
// console.log(oo.bar);

// you can't use the dot to access this key because it has spaces
// console.log(oo.key w/ spaces)
// Function to get the number of points scored by a player
function numPointsScored(playerName) {
   // Iterate through home and away teams
   for (let teamType in gameObject) {
      const team = gameObject[teamType];
      // Iterate through players in the team
      for (let player in team.players) {
         if (player === playerName) {
            // Return points scored by the player
            return parseInt(team.players[player].points);
         }
      }
   }
   // If player not found, return null or handle error accordingly
   return null;
}

// Function to get the shoe size of a player
function shoeSize(playerName) {
   // Iterate through home and away teams
   for (let teamType in gameObject) {
      const team = gameObject[teamType];
      // Iterate through players in the team
      for (let player in team.players) {
         if (player === playerName) {
            // Return shoe size of the player
            return team.players[player].shoe;
         }
      }
   }
   // If player not found, return null or handle error accordingly
   return null;
}

// Function to get team colors by team name
function teamColors(teamName) {
   // Iterate through home and away teams
   for (let teamType in gameObject) {
      const team = gameObject[teamType];
      if (team.teamName === teamName) {
         // Return colors of the team
         return team.colors;
      }
   }
   // If team not found, return null or handle error accordingly
   return null;
}

// Function to get an array of team names
function teamNames() {
   // Initialize an empty array to store team names
   let names = [];
   // Iterate through home and away teams and push their names into the array
   for (let teamType in gameObject) {
      names.push(gameObject[teamType].teamName);
   }
   // Return the array of team names
   return names;
}

// Function to get an array of jersey numbers by team name
function playerNumbers(teamName) {
   // Initialize an empty array to store jersey numbers
   let numbers = [];
   // Iterate through home and away teams
   for (let teamType in gameObject) {
      const team = gameObject[teamType];
      if (team.teamName === teamName) {
         // Iterate through players in the team and push their jersey numbers into the array
         for (let player in team.players) {
            numbers.push(team.players[player].number);
         }
      }
   }
   // Return the array of jersey numbers
   return numbers;
}

// Function to get player stats by player name
function playerStats(playerName) {
   // Iterate through home and away teams
   for (let teamType in gameObject) {
      const team = gameObject[teamType];
      // Check if the player exists in the team
      if (team.players.hasOwnProperty(playerName)) {
         // Return the stats of the player
         return team.players[playerName];
      }
   }
   // If player not found, return null or handle error accordingly
   return null;
}

// Testing the functions
console.log(numPointsScored('messi')); // Output: 33
console.log(shoeSize('ronaldo')); // Output: nick
console.log(teamColors('berceleona')); // Output: []
console.log(teamNames()); // Output: ['berceleona', 'berceleona']
console.log(playerNumbers('berceleona')); // Output: ['tow', 'three', 'tow']
console.log(playerStats('gutza')); // Output: { number: 'tow', shoe: 'addidas', points: '33', rebounds: '66', assists: 'yes', steals: 'no', blocks: 'being', slamdunk: 'non' }
