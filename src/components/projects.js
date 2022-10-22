import React, { Component } from 'react'
import {Grid, Cell,Card, CardTitle, CardActions, Button, CardText} from 'react-mdl';

class Projects extends Component{

    constructor(props){
        super(props);
        this.state = {activeTab:0};
    }

    render() {
        return(
            <div className="category-tabs">

                <br></br>
                <br></br>
                
                <h1>Past Projects</h1>

                <Grid>
                    <Cell col={12}>
                        <div className="projects-grid">

                            {/* Personal Website */}
                            <Card shadow={5} style={{minWidth:'450', minHeight:'400px', margin: 'auto'}}>
                                <CardTitle style={{color:'#fff', height: '176px', 
                                background: 'url(https://ngninja.com/assets/posts/reactjs-102f9693a4201e678d5b02185717f4e2127d082c2f8afc0ed378cfc6cd814741.png) center / cover'}}>
                                    Personal Website
                                </CardTitle>
                                <CardText> This website was created so that I have a place that I can showcase my portfolio as a Software Engineer.
                                </CardText>
                                <CardText>August 2020</CardText>
                                <CardActions border>
                                    {/* Personal Website Github */}
                                    <a href='https://github.com/Arjun96/Arjun96.github.io' target="_blank" rel="noopener noreferrer">
                                        <Button colored>
                                            Github </Button>
                                    </a>
                                </CardActions>
                            </Card>

                            <br/> <br/>

                            {/* Facetag */}
                            <Card shadow={5} style={{minWidth:'450', minHeight:'400px', margin: 'auto'}}>
                                <CardTitle style={{color:'#000000', height: '176px', 
                                background: 'url(https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/000/362/192/datas/medium.jpg) center / cover'}}>
                                    Facetag
                                </CardTitle>
                                <CardText> An Android App that allows the user to scan a person's face and receive their social media profiles.
                                </CardText>
                                <CardText>March 2016</CardText>
                                <CardActions border>
                                    {/* Facetag Github */}
                                    <a href='https://github.com/Arjun96/Nhacks' target="_blank" rel="noopener noreferrer">
                                        <Button colored>Github</Button>
                                    </a>
                                    {/* Facetag Devpost */}
                                    <a href='https://devpost.com/software/facetag-pmuhy0' target="_blank" rel="noopener noreferrer">
                                        <Button colored>
                                            Devpost </Button>
                                    </a>
                                </CardActions>
                            </Card>
                            
                            <br/> <br/>

                            {/* Magicam */}
                            <Card shadow={5} style={{minWidth:'450', minHeight:'400px', margin: 'auto'}}>
                                <CardTitle style={{color:'#fff', height: '176px', 
                                background: 'url(https://devpost-challengepost.netdna-ssl.com/assets/defaults/thumbnail-placeholder-42bcab8d8178b413922ae2877d8b0868.gif) center / cover'}}>
                                    Magicam
                                </CardTitle>
                                <CardText> An iOS app that allows the user to impose videos on top of real world objects. 
                                </CardText>
                                <br></br>
                                <CardText>November 2015</CardText>
                                <CardActions border>
                                    {/* Magicam Devpost */}
                                    <a href='https://devpost.com/software/magicam-9ij0zr' target="_blank" rel="noopener noreferrer">
                                        <Button colored>
                                            Devpost </Button>
                                    </a>
                                    {/* Magicam Youtube Link #1 */}
                                    <a href='https://www.youtube.com/watch?v=4o74Fb1uQYc' target="_blank" rel="noopener noreferrer">
                                        <Button colored>Demo 1</Button>
                                    </a>
                                    {/* Magicam Youtube Link #2 */}
                                    <a href='https://www.youtube.com/watch?v=xpLB4pwLOMk' target="_blank" rel="noopener noreferrer">
                                        <Button colored>Demo 2</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </div>
                        <strong>Copyright &copy; Arjun Luthra {new Date().getFullYear()}</strong>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;