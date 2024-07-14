import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { WebSocketServer } from 'ws';
import { User } from "./models/userModel.js";
import { mongoDBURI, PORT } from "./config.js";

const app = express();
const server = http.createServer(app);

// Initialize WebSocket Server
const wss = new WebSocketServer({ server });

app.use(express.json());
app.use(cors());

let currentRFID = '';
// MongoDB connection
mongoose
    .connect(mongoDBURI)
    .then(() => {
        console.log("App connected to database");
    })
    .catch((error) => {
        console.log(error);
    });

// app.post("/getBoardData", (req, res) => {
//     const { RFIDKey } = req.body;
//     console.log(RFIDKey);
//     res.json({ RFID: RFIDKey });
// });





app.post('/Usignup', async (req, res) => {
    const { rfid, fname, lname, nic, mobile, address,destinationId, destination,subDestinationId, subDestination, purpose } = req.body;
    const nicReg = /^\d{12}$/;
    const phoneReg = /^\d{10}$/;

    try {
        if (!nic || nic === 'null') {
            return res.status(400).json({ message: "NIC cannot be null" });
        }
        if (!nicReg.test(nic)) {
            return res.status(400).json({ message: "Invalid NIC number" });
        }
        if (!phoneReg.test(mobile)) {
            return res.status(400).json({ message: "Invalid contact number" });
        }

        const existingNICUser = await User.findOne({ nic });
        if (existingNICUser) {
            return res.status(400).json({ message: "User already exists with this NIC" });
        }
        const existingContactUser = await User.findOne({ mobile });
        if (existingContactUser) {
            return res.status(400).json({ message: "User already exists with this contact number" });
        }

        const newUser = new User({ 
            rfid, 
            fname,
            lname, 
            nic, 
            mobile, 
            address, 
            destinationId,
            destination, 
            subDestinationId,
            subDestination, 
            purpose 
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({}, { password: 0, reEnterPassword: 0 });
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const adminCredentials = { email: 'vikumbhashitha@gmail.com', password: 'admin123' };

    if (email === adminCredentials.email && password === adminCredentials.password) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ error: 'Invalid email or password' });
    }
});


app.post("/getBoardData", (req, res) => {
  const { RFIDKey } = req.body;
  console.log("Received RFID key:", RFIDKey);
  currentRFID = RFIDKey;  // Store RFID key for WebSocket usage
  res.json({ message: "RFID key received" });
});

// WebSocket server connection handler
// wss.on('connection', (ws) => {
//     console.log('New WebSocket connection');

//     // Simulate sending RFID data to clients every 5 seconds
//     const intervalId = setInterval(() => {
//         const simulatedRFID = `RFID-${Math.floor(Math.random() * 1000)}`;
//         ws.send(JSON.stringify({ RFID: simulatedRFID }));
//     }, 5000);

//     // Clear interval on WebSocket close
//     ws.on('close', () => {
//         clearInterval(intervalId);
//     });
// });

wss.on('connection', (ws) => {
  console.log('New WebSocket connection');

  // Simulate sending RFID data to clients every 5 seconds
  const intervalId = setInterval(() => {
      // Use currentRFID instead of generating a random RFID
      ws.send(JSON.stringify({ RFID: currentRFID }));
  }, 5000);

  // Clear interval on WebSocket close
  ws.on('close', () => {
      clearInterval(intervalId);
  });
});

// Start the server
server.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});



