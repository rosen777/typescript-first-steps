
interface HasID {
    id: number;
}

type ID = HasID['id'];


interface EventDetails {
    title: string,
    date: Date,
    image_url?: string,
    description?: string,
}

// Named 'Evente' to distinguish from DOM interface 'Event'
interface Evente extends HasID, EventDetails {
    // implement me!
    host_id: ID,
}

interface User extends HasID {
    username: string;
    name: string;
    email?: string;
};

const EVENTS: Evente[] = [];
const USERS: User[] = [];

function createNextId<T extends HasID>(data: T[]): ID {
    const lastItem = data[data.length - 1];
    if (!lastItem) {
        return 1;
    } else {
        return lastItem.id + 1;
    }
}


function createUser(username: string, name: string, email?: string): User {
    const user: User = {
        id: createNextId<User>(USERS),
        username,
        name,
    };
    if (email) { user.email = email };
    USERS.push(user);
    return user;
}

function createEvent(host: User, eventDetails: EventDetails): Evente {
    const { date, ...details } = eventDetails;
    const eventDate = new Date(date);
    const event: Evente = {
        id: createNextId<Evente>(EVENTS),
        host_id: host.id,
        date: eventDate,
        ...details,
    };
    EVENTS.push(event);
    return event;
}


export { createEvent, createUser }

