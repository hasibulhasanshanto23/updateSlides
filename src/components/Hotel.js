import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../Hotel.css'

const Hotel = () => {
    const hotelName=[{ label: 'Hotel Sea', year: 1994 },
                     { label: 'New Hotel', year: 1972 }]
  return (
    <>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={hotelName}
        sx={{ width: 300}}
        renderInput={(params) => <TextField {...params} label="Search Hotels" />}
    />
            <span className="details">
            <span className="opacity-6">Select a hotel</span>
        </span>
    </>
  )
}

export default Hotel