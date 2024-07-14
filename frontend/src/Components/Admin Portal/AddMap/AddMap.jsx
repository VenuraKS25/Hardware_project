import React, { useState } from 'react';
import './AddMap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddMap = () => {
    const [mapData, setMapData] = useState({
      locationType: 'main',
      locationName: '',
      mapID: '',
      mapImage: null,
    });
  
    const [mapErrors, setMapErrors] = useState({});
    const [mapSubmitted, setMapSubmitted] = useState(false);
  
    const handleMapChange = (e) => {
      const { name, value, files } = e.target;
      if (name === 'mapImage') {
        setMapData({
          ...mapData,
          mapImage: files[0],
        });
      } else {
        setMapData({
          ...mapData,
          [name]: value,
        });
      }
    };
  
    const validateMapForm = () => {
      const newMapErrors = {};
      if (!mapData.locationName) newMapErrors.locationName = 'Location name is required';
      if (!mapData.mapID) newMapErrors.mapID = 'Map ID is required';
      if (!mapData.mapImage) newMapErrors.mapImage = 'Map image is required';
      return newMapErrors;
    };
  
    const handleMapSubmit = (e) => {
      e.preventDefault();
      const newMapErrors = validateMapForm();
      if (Object.keys(newMapErrors).length === 0) {
        // No errors, submit the form
        console.log("Form submitted", mapData);
        alert("Form submitted successfully!");
        setMapSubmitted(true);
        // Optionally, send the form data to a backend server

        // Remove window.location.reload() to prevent immediate page refresh
        window.location.reload();
      } else {
        setMapErrors(newMapErrors);
        setMapSubmitted(true); // Ensure errors are displayed after submission attempt
      }
    };

    return (
      <div className="map-add-body">
        <div className="map-add-container">
          <div className="map-add-header">
            <h1 className="map-add-title">Add Map</h1>
            <div className="map-add-underline"></div>
          </div>
          <form className="map-add-inputs" onSubmit={handleMapSubmit}>
            <div className="map-add-input">
              <label htmlFor="locationType">Location Type</label>
              <select
                name="locationType"
                className="form-control"
                value={mapData.locationType}
                onChange={handleMapChange}
              >
                <option value="main">Main Location</option>
                <option value="sub">Sub Location</option>
              </select>
            </div>
  
            <div className="map-add-input">
              <label htmlFor="locationName">Location Name</label>
              <input
                type="text"
                name="locationName"
                className="form-control"
                value={mapData.locationName}
                onChange={handleMapChange}
              />
              {mapSubmitted && mapErrors.locationName && <div className="text-danger">{mapErrors.locationName}</div>}
            </div>
  
            <div className="map-add-input">
              <label htmlFor="mapID">Map ID</label>
              <input
                type="text"
                name="mapID"
                className="form-control"
                value={mapData.mapID}
                onChange={handleMapChange}
              />
              {mapSubmitted && mapErrors.mapID && <div className="text-danger">{mapErrors.mapID}</div>}
            </div>
  
            <div className="map-add-input">
              <label htmlFor="mapImage">Map Image</label>
              <input
                type="file"
                name="mapImage"
                className="form-control-file"
                onChange={handleMapChange}
              />
              {mapSubmitted && mapErrors.mapImage && <div className="text-danger">{mapErrors.mapImage}</div>}
            </div>
  
            <div className="map-add-submit-container">
              <button type="submit" className="map-add-submit btn btn-primary">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default AddMap;
