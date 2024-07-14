// import { SerialPort } from 'serialport';
// import axios from 'axios';

// const port = new SerialPort('COM3', { baudRate: 9600 });


// port.on('data', async (data) => {
//   const uid = data.toString().trim();
//   const url = 'http://localhost:3000/api/rfid_read'; // Update with your actual route

//   try {
//     const response = await axios.post(url, { UIDresult: uid, checkpointID: 'Registration' });
//     console.log(response.data);
//   } catch (error) {
//     console.error('Error sending data:', error);
//   }
// });
