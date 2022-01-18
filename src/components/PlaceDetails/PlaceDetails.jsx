import React from 'react';

const PlaceDetails = ({ tempat }) => {
    return (
        <h2>{tempat && tempat.nama}</h2>        
    );
}

export default PlaceDetails;
