const events = [
    {
        id: "1",
        title: "Thanksgiving Potluck",
        date: "2025-11-28",
        image_url: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=500",
        host_id: 1,
        rsvps: [{ user_id: 1 }, { user_id: "5" }, { user_id: 3 }],
    },
    {
        id: 2,
        title: "EventExpo 2026",
        date: "2026-03-31",
        description: "Discover the future of event planning at EventExpo 2026. Network with industry leaders, explore cutting-edge technologies, and attend inspiring workshops.",
        host_id: "3",
    },
];
function getEventById(id) {
    return events.filter((e) => e.id.toString() === id.toString())[0];
}
function getEventDate(event) {
    const eventDate = new Date(event.date);
    const dateString = eventDate.toDateString();
    const isPast = eventDate < new Date();
    return { dateString, isPast };
}
const getEventRsvpCount = (event) => {
    const count = event.rsvps?.length ?? 0;
    const { isPast } = getEventDate(event);
    const text = isPast ? "went" : "going";
    return [count, text].join(" ");
};
const getEventDetails = (eventId) => {
    const event = getEventById(eventId);
    if (event) {
        const { dateString } = getEventDate(event);
        const eventRsvps = getEventRsvpCount(event);
        return `${event.title} on ${dateString}: ${eventRsvps}`;
    }
    return "Event not found";
};
function test() {
    const results = [
        {
            actual: getEventDetails(1),
            expected: "Thanksgiving Potluck on Fri Nov 28 2025: 3 going",
        },
        {
            actual: getEventDetails(2),
            expected: "EventExpo 2026 on Tue Mar 31 2026: 0 going",
        },
        {
            actual: getEventDetails(404),
            expected: "Event not found",
        },
    ];
    for (let result of results) {
        const label = result.expected === result.actual ? "✅" : "❌";
        console.log(label, result.actual);
    }
}
test();
export { getEventDetails };
