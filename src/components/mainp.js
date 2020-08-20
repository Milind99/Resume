import React,{Component} from 'react';
import './mainp.css';
import logo from './milindpic.jpg';

import { Row, Col, Alert, Container} from "react-bootstrap";


export default class Mainp extends Component{
    render(){
        return(
            <div className="Mainp">
            <Container>
                
                <Row>
                    <Col xs={6} md={3} className="or">
                    <img src={logo}  className="logo" />
                    <br />
                    <div className="details">
                    
                        <div>Milind Shaw</div>
                        <div className="s">Full Stack Web Developer</div>
                        <div className="t"><i class="fa fa-envelope-o"></i>   milindshaw644@gmail.com </div>
                        <div className="w"> <i class="fa fa-phone" aria-hidden="true"></i> +91 9903381560 </div>
                        <div className="a"> <i class="fa fa-address-book" aria-hidden="true"></i> 7/B Old G.T. Road, Rishra, Hooghly.</div> 
                        <div className="r"> <i class="fa fa-linkedin-square" aria-hidden="true"></i>   https://www.linkedin.com/in/milind-shaw-650704184/</div>
                        <br/>
                        <div>PRIZES WON </div>
                        <div className="g">
                        <span > <i class="fa fa-circle" aria-hidden="true"></i> 2nd Prize in ‘Brain X – Idea Competition’ - 2019 </span><br/>
                        <span > <i class="fa fa-circle" aria-hidden="true"></i> 3rd prize in ‘Model Exhibition’ in IISWBM – 2019 </span><br/>
                        <span > <i class="fa fa-circle" aria-hidden="true"></i> 1st prize in both Essay and Slogan Competition – 2019 </span><br/>
                        <span > <i class="fa fa-circle" aria-hidden="true"></i> 2nd prize in ‘Treasure Hunt’ event - 2019 </span><br/>
                        <span > <i class="fa fa-circle" aria-hidden="true"></i> 3rd prize in IEEE lecture Competition on ‘5G & IOT’ - 2020 </span><br/>
                        </div>
                    </div>
                    
                    </Col>
                    <Col xs={12} md={8} className="ot">  
                    <div>
                        <div className="td">CARRER OBJECTIVE</div>
                        <span className="rd">To work with utmost dedication in a challenging position for uplifting the growth of your organization. Secure a responsible career opportunity to fully utilize my training and skills.</span>
                        <div className="td">PROJECTS UNDERTAKEN </div>
                        <div className="ds">Radar detector <br /></div>
                        <span className="fd"> July 2017 – April 2018   <br />     The project of radar detector using Arduino to detect the obstacle and process it in processing software and locate the distance as well as angle of the obstacles. If the obstacle is in threshold range then it buzzes the sound and detect obstacles. </span><br/>
                        <div className="ds">Automatic pumping systems for plants and soil-moisture detection <br /></div>
                        <span className="fd"> February 2019 – March 2020  <br />     The project is based on Arduino which detect the soil moisture and accordingly pump the motor to water the plants. It displays the soil moisture accordingly using recycled nokia display. </span>

                        <div className="td">EDUCATIONAL QUALIFICATION </div>
                        <span className="gh">B.Tech in Electronics and Communication Engineering – 7.2 sgpa <br /> Supreme Knowledge Foundation Group of Institutions, Mankundu </span><br/>
                        <span className="gh">12th Std. (2017)  - 64% marks <br /> Shree Maheshwari Vidyalaya, Howrah </span><br/>
                        <span className="gh">10th Std  (2015)  - 74% marks <br /> Vivekananda English Academy, Rishra </span><br/>

                        <div className="td">TECHNICAL SKILLS</div>
                        <span className="fs">Java  Javascript  HTML  CSS  BOOTSTRAP  Php&MySql  CodeIgnitor  Laravel</span>
                        


                    </div>
                    </Col>
                    
                </Row>

                </Container>
            </div>
        )
    }
}