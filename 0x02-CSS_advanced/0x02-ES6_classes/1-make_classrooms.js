// Importing the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom.js';

// Function to initialize rooms
function initializeRooms() {
  const roomSizes = [19, 20, 34];
  const rooms = [];

  for (const size of roomSizes) {
    const room = new ClassRoom(size);
    rooms.push(room);
  }

  return rooms;
}

