import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Table.css'; // Import the updated CSS file

const UserTable = () => {
  const [forms, setForms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedForms, setDisplayedForms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const formsPerPage = 5; // Change as needed

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get('http://localhost:4000/users');
        setForms(response.data);
        setDisplayedForms(response.data.slice(0, formsPerPage));
      } catch (error) {
        console.error('Error fetching forms:', error);
      }
    };

    fetchForms();
  }, []);

  useEffect(() => {
    const filteredForms = forms.filter(form =>
      Object.values(form).some(value =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setDisplayedForms(filteredForms.slice(0, currentPage * formsPerPage));
  }, [searchQuery, currentPage, forms]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  // const handleLoadMore = () => {
  //   setCurrentPage(prevPage => prevPage + 1);
  // };

  return (
    <div className='table-body'><br></br><br></br>
      <div className='searchBar'>
        <input
          type="text"
          placeholder="Search..."
          className="form-control mb-3 search-bar"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="container mt-5 user-table">
        <h2 className="text-center">Submitted Forms</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>RFID Card ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>NIC</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Destination</th>
              <th>Sub Destination</th>
              <th>Purpose</th>
              <th>Date & Time</th>
              
            </tr>
          </thead>
          <tbody>
            {displayedForms.map(form => (
              <tr key={form.id}>
                <td>{form.rfid}</td>
                <td>{form.fname}</td>
                <td>{form.lname}</td>
                <td>{form.nic}</td>
                <td>{form.mobile}</td>
                <td>{form.address}</td>
                <td>{form.destination}</td>
                <td>{form.subDestination}</td>
                <td>{form.purpose}</td>
                <td>{form.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {displayedForms.length < filteredForms.length && (
          <div className="text-center mt-3">
            <button className="btn btn-primary load-more" onClick={handleLoadMore}>Load More</button>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default UserTable;
