// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately
// set 8000 as the parameter so that the npc would walk to the same distance as shown in the gif example on the assignment. Placed this console.log() so I could see the results on the browser console and this helped me to troubleshoot my initial issues getting the npc to do what was required.

// Update: Finally was able to call this function correctly with all the images showing. The Red NPC will move after invoking moveNPC(); This now gives the directions on what the NPC will do while following the funtional behavior we created in newNonPlaybleCharacter.js

async function moveNPC(){
    await npc.walkNorth(1400);
    await npc.walkEast(1200);
    await npc.walkSouth(300);
    await npc.walkEast(1500);
    await npc.walkSouth(1500);
    await npc.walkWest(2700);
    await npc.walkNorth(400);
}

moveNPC();
                        
// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)