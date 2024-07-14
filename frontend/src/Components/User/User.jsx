import React from 'react';
import './User.css';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import WarningIcon from '@mui/icons-material/Warning';

export default function User() {
  return (
    <div className='user-page'>
        <div className='user-page-title'>
            Hello {'John'}, Enjoying the Ride? {/*retrieve the actual name of the user from the DB*/} 
        </div>
        <div className='flex-container'>
            <div className='info-box'>
                <div className='info-criteria'>
                    <div className='info-content'>
                        <div className='user-page-icons'><MyLocationIcon fontSize='large' /></div>
                        <div className='info-current'>You're currently at the checkpoint at <br/><div className='user-places'>{'Sentra Court'}</div></div>
                    </div>
                    <div className='info-content'>
                        <div className='user-page-icons'><PlaceIcon fontSize='large' /></div>
                        <div className='info-current'>Your desitnation is the <div className='user-places'>{'ERP lab - Faculty of IT'}</div></div>
                    </div>
                    <div className='info-content'>
                        <div className='user-page-icons'><CallIcon fontSize='large' /></div>
                        <div className='info-current'>Need assistance? We're right here! <div className='user-places'>Dial Us: 077 123 4689</div></div>
                    </div>
                    <div className='info-content'>
                        <div className='user-page-icons'><WarningIcon fontSize='large' /></div>
                        <div className='info-current'>Ps: Make sure to click the <br/><b>"Back to Home"</b> button before leaving the checkpoint!</div>
                    </div>
                    <div className='info-content'>
                        <div className='info-conclude'>Happy Path-Finding!</div>
                    </div>
                </div>
            </div>
            <div className='map-box'>
                <div className='map-image'>

                </div>
            </div>
        </div>
    </div>
  )
}
