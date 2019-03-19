// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You are searching for your explorer friend, who went missing in the snowy mountains while exploring a few weeks ago.",
            choices: [
                {
                    text: "Turn left",
                    nextLevel: "left",
                },
                
                { 
                    text:"Go straight",
                    nextLevel:"middle",
                },

                {
                    text: "Turn right",
                    nextLevel: "right",
                },
            ]
        },
        
        middle: {
            background_image: "bear.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Ai ya! You've run into a bear!",
            choices: [
                {
                    text: "Run away",
                    nextLevel: "run",
                },
                {
                    text:"Offer honey",
                    nextLevel: "honey",
                }
            ]
        },
        
        honey: {
            background_image: "fork.jpeg",
            music: "Zelda-Labrynth.mp3",
            message: "Luckily, you carried honey in your bag. After giving some to the bear, it is appeased and lets you pass. You are now faced with a fork in the road, and you see that one path leads to a village and the other to a cave.",
            choices: [
                {
                    text: "walk towards the village",
                    nextLevel: "village",
                },
                {
                    text: "walk towards the cave",
                    nextLevel:"cave",
                },
            ]
        },
        
        run: {
            background_image: "intro-bg.jpg",
            music: "98_Lost_Mine.mp3",
            message: "You outrun the bear, but soon realize that you have wandered from the perimeters of your map. You are lost.",
            choices: [
                {
                    text: "back to beginning",
                    nextLevel: "start",
                },
            ]
        },

        left: {
            background_image: "village2.jpg",
            music: "Halo-Theme.mp3",
            message: "You come across a village.",
            choices: [
                {
                    text: "Enter it",
                    nextLevel: "village",
                },
                {
                    text:"Move past it",
                    nextLevel: "lost",
                }
            ]
        },
        
        village: { 
            background_image:"village2.jpg",
            music:"Zelda-Labrynth.mp3",
            message:"A villager offers you a map to a cave, but night has fallen and it is too risky to explore in the dark.",
            choices: [
                {
                    text:"back to beginning",
                    nextLevel:"start",
                },
                ]
        },

        right: { 
            background_image:"cave.jpg",
            music:"Halo-Theme.mp3",
            message:"You come across a cave.",
            choices: [
                {
                    text:"Enter it",
                    nextLevel:"cave",
                },
                {
                    text:"Move past it",
                    nextLevel:"lost",
                },
                ]
        },
        
        cave: { 
            background_image:"cave.jpg",
            music:"Stranger-Things-Theme.mp3",
            message:"You find your friend taking shelter in the cave. They are weakened by hunger and exhaustion, but are glad to see you. You manage to bring them to a nearby village, and finally, home.",
            choices: [
                {
                    text:"back to beginning",
                    nextLevel:"start",
                },
                ]
        },
              
            

        lost: {
            message: "You lose track of time as you wander the mountains. Eventually, you realize that you've gotten lost.",
            music:"98_Lost_Mine.mp3",
            background_image:"intro-bg.jpg",
            choices: [
                {
                    text: "start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
