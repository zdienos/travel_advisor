import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles.js';

const Map = ({ setCoordinates, setBounds, coordinates}) => {
    const classes = useStyles();
    //const isMobile = useMediaQuery('(min-width:600px)');
    
    //const coordinatess = { lat: -5.1768196, lng: 119.4043802 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyBJAiF_XQVSSMgFC_SPFTSricMbHoGZHn8'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e) => {
                    console.log(e);
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                    //setCoordinates({ lat: e.center.coordinates})
                }}
                // onChildClick={''}
            >
            </GoogleMapReact>
        </div>
    );
}

export default Map;
