import music1 from './TerminusImageEE/engineering_wire.png';
import music2 from './TerminusImageEE/mining_wire.png';
import music3 from './TerminusImageEE/bio_wire.png';
import double from './TerminusImageEE/double_free.png';
import nuke from './TerminusImageEE/nuke_free.png';
import insta from './TerminusImageEE/insta_free.png';
import bonus from './TerminusImageEE/bonus_free.png';
import power from './TerminusImageEE/power_free.png';
import max from './TerminusImageEE/max_free.png';
import basketball from './TerminusImageEE/basketball.png';
import basketball_points from './TerminusImageEE/basketball_points.png';
import jumpscare from './TerminusImageEE/jumpscare.png';
import secret_safe from './TerminusImageEE/secret_safe.png';


const TerminusSideEE = [
    {
        title: "2.1 Turn on Music",
        description: `The Terminus secret song is Can You Hear Me? (Come In) by Kevin Sherwood. In the Terminus map, you can find the three sets of headphones in these locations: 
        \n\n1. On top of the large wire coil in the outside section of Engineering
        \n\n2. On top of the barrels on the right as you enter the Mining Tunnels 
        \n\n3. In the office in the Bio Lab`,
        image: [
            { src: music1, location: '1. Engineering' },
            { src: music2, location: '2. Mining Tunnels' },
            { src: music3, location: '3. Bio Lab' }
        ]
    },
    {
        title: "2.2 Free Double Points", 
        description: `Head to the room directly above the Melee Macchiato perk machine and shoot behind the behind some white boxes as seen from the image below!`,
        image: [
            { src: double, location: 'Underground Lab' }
        ]
    },
    {
        title: "2.3 Free Nuke", 
        description: `Using a raft, head to the southern island and locate the hole in the rocks where zombies spawn, close to the armor upgrade station. Look to the left side of the hole to spot the hidden Nuke power-up.`,
        image: [
            { src: nuke, location: 'Crab Island' }
        ]
    },
    {
        title: "2.4 Free Bonus Points", 
        description: `Take the raft over to the shipwreck and climb aboard. Look up toward the far top right window of the ship, where you’ll spot a hidden Bonus Points power-up`,
        image: [
            { src: bonus, location: 'Shipwreck' }
        ]
    },
    {
        title: "2.5 Free Insta Kill", 
        description: `Head back to the raft and, this time, make your way to the island north of the shipwreck. Here, you’ll see some stairs, and at the top, slightly to the left, you can spot a skull. Shoot it to get the Insta Kill power-up.`,
        image: [
            { src: insta, location: 'Temple Island' }
        ]
    },
    {
        title: "2.5 Free Full Power ", 
        description: `Use the raft once again to make your way back to the sea tower where the Elemental Pop is located, and stay on the raft at a distance. Look for a sign hanging at the bottom of the building with what appears to be an X symbol, and shoot it. This will spawn the Full Power power-up.`,
        image: [
            { src: power, location: 'Sea Tower' }
        ]
    },
    {
        title: "2.6 Free Max Ammo ", 
        description: `Go to the Security Overlook on the main island and look for the watchtower in the area. Cook up your grenade and throw it before it explodes to hit the tower with precision and summon the Max Ammo.`,
        image: [
            { src: max, location: 'Outside Spawn Room' }
        ]
    },
    {
        title: "2.7 Free 2,000 points ", 
        description: `If you climb the crates from the other entrance and look at the rooftop of the second AMP generator, you’ll be able to spot a basketball. All you need to do is aim properly and shoot the basketball. You should get a hit marker and if done correctly, the screen will turn white. Now, simply head back to the basketball net to find a bunch of essence waiting for you. Also note, you can earn 4,000 points if the essences are picked up during 2x points.`,
        image: [
            { src: basketball, location: 'Shoot Basketball on Roof' },
            { src: basketball_points, location: 'Pick up for Essence' }
        ]
    },
    {
        title: "2.8 Jumpscare Easter Egg", 
        description: `After activating the power on the island, head back to the spawn area and use the elevator there. As soon as the door closes, start jumping, and well... you’ll see what happens next.`,
        image: [
            { src: jumpscare, location: 'Location: Spawn Room' },
        ]
    },
    {
        title: "2.9 Loot Keys", 
        description: `There is a secret safe room you can access in Terminus, located in the same room as the Stamin-Up machine. Not only are you safe inside for a limited time, but you can also open some lockers for rewards. However, you will need Loot Keys to open them, and these are dropped by enemies.`,
        image: [
            { src: secret_safe, location: 'Location: Stamina Room' },
        ]
    }
];

export default TerminusSideEE;
