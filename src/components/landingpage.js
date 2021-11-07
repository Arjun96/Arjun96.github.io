import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import {Link} from 'react-router-dom'
import avatar from './../documents/photo_cropped_circle.png'
import pdf from './../documents/Arjun Luthra Resume.pdf'


class LandingPage extends Component{

    render() {
        return (

            <div style={{width: '100%', margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                            src={avatar}
                            alt="avatar"
                            className="avatar-img"
                        />
                    </Cell>
                    <Cell col={6}>

                        <h2>About Me</h2>
                        <hr></hr>
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
                            
                            Hello, and welcome to my personal website. <br/><br/>

                            My name is Arjun Luthra and I am currently working as a Software Developer under the Wireless Technology Products (WTP) team at Bell Mobility. <br/><br/>
                            
                            I graduated from the University of Toronto majoring in Computer Science with a minor in Statistics as of May 2020. <br/><br/>
                            
                            I'm a software engineer with full-stack experience, including React (web and native), Java (object oriented prgramming),
                            Python (general scripting and automation), some Computer Networking (TCP/IP) and Docker. <br/><br/>

                            Please feel free to take a look at my 

                            <a href={pdf} target="_blank" rel="noopener noreferrer">resume</a>

                            or past 

                            <Link to="/projects">projects</Link>
                            
                            and if you have any further questions, do not hesitate to send me an

                            <a href="mailto:arjun.luthra@mail.utoronto.ca">email.</a>    

                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr></hr>
                        <div className="contact-list">
                            <List>

                                <ListItem>
                                    <ListItemContent>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        <a href="mailto:arjun.luthra@mail.utoronto.ca">
                                            arjun.luthra@mail.utoronto.ca
                                        </a>
                                    </ListItemContent>
                                </ListItem>

                                <div className="social">
                                <ListItem>
                                    <ListItemContent>
                                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                        <a href="https://www.linkedin.com/in/arjun-luthra" target="_blank" rel="noopener noreferrer" title="Linkedin">
                                            linkedin.com/in/arjun-luthra/
                                        </a>
                                    </ListItemContent>
                                </ListItem>   
                                 
                                <ListItem>
                                    {/* Github */}
                                    <a href="https://github.com/Arjun96" target="_blank" rel="noopener noreferrer" title="Devpost">
                                        <i class="fa fa-github-square"  aria-hidden="true"/>
                                        github.com/Arjun96
                                    </a>
                                </ListItem>
                                </div>

                                <ListItem>
                                    {/* Devpost */}
                                    <a href="https://devpost.com/ArjunL" target="_blank" rel="noopener noreferrer" title="Devpost">
                                        <i class="fa fa-code"  aria-hidden="true"/>
                                        devpost.com/ArjunL
                                    </a>
                                </ListItem>

                            </List>
                        </div>
                    </Cell>
                    <br/> <br/> <br/>
                    <strong>Copyright &copy; Arjun Luthra {new Date().getFullYear()}</strong>
                    <br/> <br/> <br/>
                </Grid>

            </div>
        )
    }
}

export default LandingPage;