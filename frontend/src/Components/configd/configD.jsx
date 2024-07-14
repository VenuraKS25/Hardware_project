import React from 'react';

const App = () => {

  const data = [
    {  deviceId: 'A',macAddress: '00:1A:2B:3C:4D:5E', displayId: '1', },
  ];

  return (
    <div>
      <h1>Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>Device ID</th>
            <th>MAC Address</th>
            <th>Display ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.deviceId}> 
              <td>{item.deviceId}</td>
              <td>{item.macAddress}</td>
              <td>{item.displayId}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
