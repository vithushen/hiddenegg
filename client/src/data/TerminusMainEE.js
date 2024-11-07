import generator1 from './TerminusImageEE/first-generator.png';
import generator2 from './TerminusImageEE/second-generator.png';
import generator3 from './TerminusImageEE/third-generator.png';
import activate_pack from './TerminusImageEE/activate-pack.png';
import arsenal from './TerminusImageEE/arsenal.png';
import power_circuits from './TerminusImageEE/power-circuit.png';
import tentacle_trap from './TerminusImageEE/tentacle-trap.png';
import interrogation from './TerminusImageEE/interrogation.png';
import mess_hall from './TerminusImageEE/mess_hall.png';
import manufacturing from './TerminusImageEE/manufacturing.png';
import nathan_chamber from './TerminusImageEE/nathan_chamber.png';
import chamber_valve from './TerminusImageEE/chamber-valve.png';
import red_keycard from './TerminusImageEE/red_keycard.png';
import boat from './TerminusImageEE/boat.png';
import connectors from './TerminusImageEE/connectors.png';
import first_node from './TerminusImageEE/first_node.png';
import second_node from './TerminusImageEE/second_node.png';
import third_node from './TerminusImageEE/third_node.png';
import towers from './TerminusImageEE/towers.png';
import first_bomb from './TerminusImageEE/first_bomb.png';
import second_bomb from './TerminusImageEE/second_bomb.png';
import third_bomb from './TerminusImageEE/third_bomb.png';
import final_door from './TerminusImageEE/final_door.png';

const TerminusMainEE = [
    {
        title: "Step 1: Restore Facility Power",
        description: "Activate (500 essence) and protect the AMP Generator for 30 seconds as it powers up. If you fail to protect it, you'll have to wait for the next round before it cools down and you can try again.",
        image: [
            { src: generator1, location: 'Guard Station (Spawn Room)' },
            { src: generator2, location: 'Living Quarters (Juggernog Room)' },
            { src: generator3, location: 'Bio Lab (Undergound Area)' }
        ]
    },
    {
        title: "Step 2: Resurface the Inclined Lift",
        description: "Dive into the water and use the machinery to activate the Pack-a-Punch machine.",
        image: [
            { src: activate_pack, location: 'Bio Lab' }
        ]
    },
    {
        title: "Step 3: Open the Secret Lab Room!",
        description: "Aquire the Deadwire Ammo Mod on your weapon from he Arsenal Machine located underground lab for 500 salvage.",
        image: [
            { src: arsenal, location: 'Underground Lab' }
        ]
    },
    {
        title: "Step 4: Power the 3 Circuit Breakers",
        description: "With the Dead Wire Ammo Mod, you need to power 3 Circuit Breakers around the area of the inclined lift. You have to shoot them in order. However, Circuit Breakers #1 and #2 are only visible while the lift is moving. Circuit Breaker #1 is found inside the window when facing north. Circuit Breaker #2 is outside but it's easier to shoot it when the lift is going down since it gets covered by the lift when you're going up.",
        image: [
            { src: power_circuits, location: 'Underground Lab' }
        ]
    },
    {
        title: "Step 5: Get the Beamsmasher! (Either from Mysterbox or do side easter)",
        description: "You need to get the Beamsmasher weapon, either from the Mysterbox or by completing the side easter egg.",
        image: null
    },
    {
        title: "Step 6: Pack-a-Punch the Beamsmasher!",
        description: "Once you have the Beamsmasher, take it to the Pack-a-Punch machine to upgrade it. This is crucial to defeating tougher enemies in the later steps of the quest.",
        image: null
    },
    {
        title: "Step 7: Get the Hard Drive",
        description: "Find the specific tentacle trap with a broken crate and a red keycard underneath it. Use the Pack-A-Punched Beamsmasher to destroy the tentacles and obtain the hard drive. Don't forget to pick up the hard drive that the tentacle will drop! Go down to the Bio Lab and look for the destroyed vent where a Tentacle Trap should be. There are 2 Tentacle Traps in the Bio Lab and 1 in the Living Quarters. You only need to find one of the location that has the red key pass underneath the trap.",
        image: [
            { src: tentacle_trap, location: 'Underground Lab' }
        ]
    },
    {
        title: "Step 8: Go speak with Dean in spawn room",
        description: "After picking up the hard drive, head to the spawn room to speak with Dean. This will trigger the next step in the quest.",
        image: null
    },
    {
        title: "Step 9: Identify Nathan's Passcode ",
        description: "Before heading down to Nathan, it'd be good to already find out what the passcode would be to release him. To find that out, you have to check out the (1) clock in the Interrogation Rooms (2) the card on the corkboard in the Mess Hall, and (3) Days Since Last Accident poster in Engineering.",
    },
    {
        title: "- The first digit is in the interrogation room...",
        description: "The first digit of the code can be found in the interrogation room next to Quick Revive. Look for the small clock to determine the first digit based on the hour hand position.",
        image: [
            { src: interrogation, location: 'Interrogation Room (Quick Revive Room)' },
        ]
    },
    {
        title: "- Second digit is in the mess hall...",
        description: "The second digit is found in the mess hall near the arsenal station. Look for a playing card pinned to the message board, and the card's number is the second digit.",
        image: [
            { src: mess_hall, location: 'Mess Hall' },
        ]
    },
    {
        title: "- Last digit is in engineering...",
        description: "The third and final digit is located in engineering, where the crafting bench is. The digit corresponds to the number of days since the last injury, which is marked in the room.",
        image: [
            { src: manufacturing, location: 'Engineering Room' }
        ]
    },
    {
        title: "Step 10: Mini Boss Fight (Nathan)",
        description: "After obtaining the code, head to the lab and input it into the cylindrical chamber containing Nathan. Turn the valves at the same time with your teammates to release Nathan and trigger the boss fight.",
        image: [
            { src: nathan_chamber, location: 'Enter Three Digit Code' },
            { src: chamber_valve, location: 'Valve' }
        ]
    },
    {
        title: "Step 11: Retrieve Gold Key Card",
        description: "Once Nathan is defeated, dive into the water to retrieve the gold keycard under one of the bridges in the lab. This will help you proceed to the next step.",
        image: [
            { src: red_keycard, location: 'Gold Key Card' }
        ]
    },
    {
        title: "Step 12: Get the Node Connectors from the shipwreck",
        description: "Take a boat and head over to the destroyed ship. Underneath the broken ship, go up the ladder and enter the small room.Be cautious not to take the node connectors too early, as the room will lock down once the connectors are picked up. Survive until the lockdown ends.",
        image: [
            { src: boat, location: 'Climb this ladder' },
            { src: connectors, location: 'Two Node Connector' }

        ]
    },
    {
        title: "Step 13: Pick Up and Place Node Connectors",
        description: "After lockdown is done, you can grab two node connectors from the workbench inside – you can’t sprint while carrying them, though – and you’ll need to take them to two of the three node connectors around the map. Two of the three following locations will be missing a connector.",
        image: null
    },
    {
        title: "- First Node Connector location",
        description: "On the West side of crab island, to the left when approaching by boat on the beach.",
        image: [
            { src: first_node, location: 'Location: Crab Island' },
        ]
    },
    {
        title: "- Second Node Connector location",
        description: "At the dock below the sea tower, in the corner, at the base of the pillar holding up the tower.",
        image: [
            { src: second_node, location: 'Location: Bottom of Sea tower' },
        ]
    },
    {
        title: "- Third Node Connector location",
        description: "Inside the cave with the Speed Cola machine, stick to the right when heading down toward the lab, or left while heading up toward the mess hall.",
        image: [
            { src: third_node, location: 'Location: Speed Cola Cave' }
        ]
    },
    {
        title: "Step 14: Head back to Peck...",
        description: "Return to Peck to receive the hacking device, then use it to hack the floating buoys around the map. Hack three buoys while avoiding parasite enemies that guard them. To hack go beside the buoys and hold your reloading button",
        image: [
            { src: towers, location: 'Location for all three buoys' }
        ]
    },
    {
        title: "Step 15: Upon hacking all three buoys...",
        description: "Once all three buoys are hacked, run to the bio labs and start defusing the three bombs scattered around the underground lab area. Be quick, as the timer is short, and you'll need protection while defusing.",
        image: null
    },
    {
        title: "- First Bomb Location",
        description: "The first is near where you can spawn a boat, next to the ammo box on the lower level.",
        image: [
            { src: first_bomb, location: 'First Bomb' },
        ]
    },
    {
        title: "- Second Bomb Location",
        description: "Also on the lower level, but on the other side of the Melee Macchiato machine.",
        image: [
            { src: second_bomb, location: 'Second Bomb' },
        ]
    },
    {
        title: "- Third Bomb Location",
        description: "On the upper level, below the meeting room at the top of the stairs.",
        image: [
            { src: third_bomb, location: 'Third Bomb' }
        ]
    },
    {
        title: "Step 16: Final Boss Fight!!!",
        description: "After defusing all bombs, proceed to the boss fight by interacting with the door near the Melee Macchiato machine. Be prepared for a difficult fight against the giant octopus boss.",
        image: [
            { src: final_door, location: 'Final Door for Boss Fight' }
        ]
    }
];

export default TerminusMainEE;
