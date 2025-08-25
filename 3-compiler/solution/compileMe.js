;
const EVENTS = [];
const USERS = [];
function createNextId(data) {
    const lastItem = data[data.length - 1];
    if (!lastItem) {
        return 1;
    }
    else {
        return lastItem.id + 1;
    }
}
function createUser(username, name, email) {
    const user = {
        id: createNextId(USERS),
        username,
        name,
    };
    if (email) {
        user.email = email;
    }
    ;
    USERS.push(user);
    return user;
}
function createEvent(host, eventDetails) {
    const { date, ...details } = eventDetails;
    const eventDate = new Date(date);
    const event = {
        id: createNextId(EVENTS),
        host_id: host.id,
        date: eventDate,
        ...details,
    };
    EVENTS.push(event);
    return event;
}
export { createEvent, createUser };
//# sourceMappingURL=compileMe.js.map