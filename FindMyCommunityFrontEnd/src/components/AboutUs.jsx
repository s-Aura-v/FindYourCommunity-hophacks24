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
                <p1><b>FindMyCommunity</b>, we believe in the power of community service to create lasting, positive
                    change.
                </p1>
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
                <h3>Our Story</h3>
                <p>
                    <b>FindMyCommunity</b> was founded to make it easier for people to discover and participate in
                    community service events.
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Whether you're looking to volunteer your time, attend a local event, or organize one of your own,
                    our platform is here to help.
                    We aim to bridge the gap between those who want to help and the causes that need them the most.
                </p>

                <h3>Our Mission</h3>
                <p3>
                    Our goal is to make volunteering accessible to everyone.
                    We strive to foster connections between individuals and organizations,
                    allowing people to easily contribute their skills and passions to causes they care about.
                    Through FindMyCommunity, we aim to cultivate a stronger, more engaged society.
                </p3>
                <h3>Join Us in Making a Difference</h3>
                <p4>
                    We believe that together, we can build stronger, more vibrant communities.
                    Whether you're a seasoned volunteer or just getting started,
                    FindMyCommunity is your go-to resource for finding opportunities to contribute.
                </p4>

                <p>Let’s make a difference—one event, one volunteer at a time.</p>

            </div>


        </>
    )
}
