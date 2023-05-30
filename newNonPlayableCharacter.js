function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
}

    setInterval(moveCharacter, 1)

// Created the async funtion and the await on sleep() here. Had some trouble trying to get the red-character to walk east. Either it did the pause first and then walked east to go off screen or it wouldn't walk when I placed the direction to null. Figured out how to let it walk east first, then it would stop from the npc.walkEast().then and then it invoked the number parameter I set on index.js.

// Update: Improved the async function so that it defines the functionality of the NPC a bit better. Now calling the function for index.js utilizes the behaviors that the NPC is allowed from the code below.

async function sleepAndStop(time) {
    await sleep(time);
    stop();
}

async function walkNorth(time) {
    direction = 'north'
    element.src = `./assets/red-character/north.gif`
    await sleepAndStop(time);
}

async function walkWest(time) {
    direction = 'west'
    element.src = `./assets/red-character/west.gif`
    await sleepAndStop(time);
}

async function walkSouth(time) {
    direction = 'south'
    element.src = `./assets/red-character/south.gif`
    await sleepAndStop(time);
}

async function walkEast(time) {
    direction = 'east'
    element.src = `./assets/red-character/east.gif`
    await sleepAndStop(time);
}

function stop() {
    direction = null
    element.src = `./assets/red-character/static.gif`
}

return {
    element: element,
    walkWest: walkWest,
    walkNorth: walkNorth,
    walkEast: walkEast,
    walkSouth: walkSouth,
    stop: stop
}
}

// Adding sleep function that will return a promise. Per the instructions will add here.
// Further, the setTimeout will accept a callback and the main function now returns a promise.
function sleep(time) {
    return new Promise (resolve => {
        setTimeout(resolve, time)
    });
}