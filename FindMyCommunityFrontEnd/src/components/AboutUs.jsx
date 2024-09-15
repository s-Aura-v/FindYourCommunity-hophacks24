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
import Sone from '../assets/soney.jpg'
import Joseph from '../assets/joseph.png'

import LinkedIn from '../assets/linkedin.svg'
import GitHub from '../assets/github.svg'
import Email from '../assets/email.svg'
import WWW from '../assets/www.svg'


export function AboutUs() {
    return (
        <>
            <div className="about-us-container">
                <h2>About Us</h2>
                <p> At <b>FindMyCommunity</b>, we believe in the power of community service to create lasting, positive
                    change. </p>
                <div className="cards-setup">
                    <Card sx={{maxWidth: 345, minWidth: 345}}>
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
                                <ul className="external-links-list">
                                    <li><a href="https://www.linkedin.com/in/s-aura-v/"><img src={LinkedIn}
                                                                                             className="external-links"
                                                                                             alt="LinkedIn"/>in/s-aura-v</a>
                                    </li>
                                    <li><a href="https://github.com/s-Aura-v"><img src={GitHub}
                                                                                   className="external-links"
                                                                                   alt="GitHub"/>/s-aura-v
                                    </a></li>
                                    <li><a href="https://s-aura-v.com"><img src={WWW}
                                                                            className="external-links"
                                                                            alt="Webpage"/>s-aura-v.com
                                    </a></li>
                                </ul>
                                <br/>
                                Roles: Frontend & Map Implementation
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{maxWidth: 345, minWidth: 345}}>
                        <CardMedia
                            sx={{height: 300}}
                            image={Sone}
                            title="Sone"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Phone Pyae Sone Phyo (Soney)
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                <ul className="external-links-list">
                                    <li><a href="https://www.linkedin.com/in/soney7/"><img src={LinkedIn}
                                                                                           className="external-links"
                                                                                           alt="LinkedIn"/>in/soney7</a>
                                    </li>
                                    <li><a href="https://github.com/sonephyo"><img src={GitHub}
                                                                                   className="external-links"
                                                                                   alt="GitHub"/>/sonephyo
                                    </a></li>
                                    <li><a href="https://www.sonephyo.com/"><img src={WWW}
                                                                                 className="external-links"
                                                                                 alt="Webpage"/>sonephyo.com
                                    </a></li>
                                </ul>
                                <br/>
                                Role: Backend, AuthO, and Connection
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{maxWidth: 345, minWidth: 345}}>
                        <CardMedia
                            sx={{height: 300}}
                            image={Joseph}
                            title="Joseph Vega"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Joseph Vega
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                <ul className="external-links-list">
                                    <li><a href="https://www.linkedin.com/in/joseph-vega-7651911b5/"><img src={LinkedIn}
                                                                                                          className="external-links"
                                                                                                          alt="LinkedIn"/>in/jvega2</a>
                                    </li>
                                    <li><a href="https://github.com/josephavega"><img src={GitHub}
                                                                                      className="external-links"
                                                                                      alt="GitHub"/>/josephavega
                                    </a></li>
                                    <li><a href="mailto:jvega2@oswego.edu"><img src={Email}
                                                                                className="external-links"
                                                                                alt="Webpage"/>
                                    </a></li>
                                </ul>
                                <br/>
                                Roles: Frontend and Graphic Designer
                            </Typography>
                        </CardContent>
                    </Card>

                </div>
                <div className="about-us-descriptions-container">
                    <div className="section2">
                        <h3>Our Story</h3>

                        <b>FindMyCommunity</b> was founded to make it easier for people to discover and participate in
                        community service events.
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Whether you're looking to volunteer your time, attend a local event, or organize one of your
                        own,
                        our platform is here to help.
                        We aim to bridge the gap between those who want to help and the causes that need them the most.
                    </div>


                    <div className="section2">
                        <h3>Our Mission</h3>
                        Our goal is to make volunteering accessible to everyone.
                        We strive to foster connections between individuals and organizations,
                        allowing people to easily contribute their skills and passions to causes they care about.
                        Through FindMyCommunity, we aim to cultivate a stronger, more engaged society.
                    </div>

                    <div className="section2">
                        <h3>Making a Difference</h3>
                        We believe that together, we can build stronger, more vibrant communities.
                        Whether you're a seasoned volunteer or just getting started,
                        FindMyCommunity is your go-to resource for finding opportunities to contribute.
                    </div>
                </div>

                <p>Let’s make a difference—one event, one volunteer at a time.</p>
            </div>


        </>
    )
}
