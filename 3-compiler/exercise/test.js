import { createEvent, createUser } from './compileMe.js';




const amina = createUser('amina', 'Amina Khan');
const liam = createUser("liam", "Liam O'Connor", "liam.oconnor@example.com");
const sofia = createUser("sofia", "Sofia Garcia", "sofia.garcia@example.com");



const potluck = createEvent(amina, {
    title: "Thanksgiving Potluck",
    date: "2025-11-29",
    image_url: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=500",
});
const expo = createEvent(sofia, {
    title: "EventExpo 2026",
    date: '2026-04-01',
    description: "Discover the future of event planning at EventExpo 2026. Network with industry leaders, explore cutting-edge technologies, and attend inspiring workshops.",
});






function test() {
    const tests = [{
        actual: amina.username,
        expected: 'amina',
    },
    {
        actual: liam.email,
        expected: "liam.oconnor@example.com",
    },
    {
        actual: sofia.id,
        expected: 3,
    },
    {
        actual: potluck.host_id,
        expected: amina.id
    },
    {
        actual: potluck.date.getMonth(),
        expected: 10, // Nov
    },
    {
        actual: potluck.description,
        expected: undefined
    },
    {
        actual: expo.description.startsWith('Discover'),
        expected: true
    },
    {
        actual: expo.host_id,
        expected: sofia.id
    },
    {
        actual: expo.date.getFullYear(),
        expected: 2026
    }
    ];
    // if (potluck.host_id !== amina.id) throw new Error('unexpected host_id');
    // if (potluck.date.getMonth() !== 10) throw new Error('unexpected date');
    // if (potluck.description) throw new Error('unexpected description');

    // if (expo.host_id !== sofia.id) throw new Error('unexpected host_id');
    // if (expo.date.getFullYear() !== 2026) throw new Error('unexpected date');
    // if (!expo.description) throw new Error('unexpected description');

    for (let t of tests) {
        const passed = t.expected === t.actual;
        const label = passed ? '✅' : '❌'
        console.log(label, passed ? t.actual : t);
    }
}

test();