import { type Database as DB } from 'better-sqlite3';
import EVENTS from './data/events.json';
import USERS from './data/users.json';
import RSVPS from './data/rsvps.json';
declare const db: DB;
export type Event = typeof EVENTS[number];
export type User = typeof USERS[number];
export type Rsvp = typeof RSVPS[number];
export default db;
