interface HasID {
    id: number;
}
type ID = HasID['id'];
interface EventDetails {
    title: string;
    date: Date;
    image_url?: string;
    description?: string;
}
interface Evente extends HasID, EventDetails {
    host_id: ID;
}
interface User extends HasID {
    username: string;
    name: string;
    email?: string;
}
declare function createUser(username: string, name: string, email?: string): User;
declare function createEvent(host: User, eventDetails: EventDetails): Evente;
export { createEvent, createUser };
//# sourceMappingURL=compileMe.d.ts.map