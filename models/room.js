const mongoose = require('mongoose');

// Define Room schema
const RoomSchema = new mongoose.Schema({
  patientUserName: {
    type: String,
    default: null, // No patient initially
  },
  roomNumber: {
    type: Number,
    required: true, // Each room must have a room number
    unique: true,   // Each room number should be unique
  },
  isVacant: {
    type: Boolean,
    default: true,  // By default, rooms are vacant
  }
});

// Create Room model
const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;
