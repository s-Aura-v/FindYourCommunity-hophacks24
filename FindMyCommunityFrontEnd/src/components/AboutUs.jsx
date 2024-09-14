import {useState} from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/cards.css'

import Saurav from '../assets/saurav.png'
import LinkedIn from '../assets/linkedin.svg'
import GitHub from '../assets/github.svg'



export function AboutUs() {
    return (
        <>
            <div className="about-us-container">
                <h2>About Us</h2>
                <div className="cards-setup">
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia
                            sx={{height: 300}}
                            image={Saurav}
                            title="Saurav Lamichhane"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Saurav Lamichhane
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                Frontend
                                Map Implementation
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{maxWidth: 345, minWidth: 245}}>
                        <CardMedia
                            sx={{height: 300}}
                            // image={Sone}
                            title="Sone"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Sone
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{maxWidth: 345, minWidth: 245}}>
                        <CardMedia
                            sx={{height: 300}}
                            // image={Saurav}
                            title="Joseph"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Joseph
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                Frontend
                                Map Implementation
                            </Typography>
                        </CardContent>
                    </Card>

                </div>
            </div>


        </>
    )
}
