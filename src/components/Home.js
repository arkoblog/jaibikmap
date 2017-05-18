var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var HomeHelper = require('../js/main_1')
import Scrollchor from 'react-scrollchor';
import ScrollableAnchor from 'react-scrollable-anchor'
require ('../css/home.css')
// require ('../js/home.js')
// Load Components
// var MyMap = require('./Maps')




var Home = React.createClass({
    getInitialState: function() {
        return {
            show:false,
            display:"block"
        }
    },
    componentWillMount: function () {
        this._handleResize();

    },
    scrollHandler: function(section) {
        document.getElementById('about').scrollIntoView() 
    },
    onClick : function(e) {

        // console.log(maxWindowWidth)
        var current = this.state.show
        console.log(current)
        if (current == true) {
            this.setState({
                display:"show",
                show : !current
            })
        } else {
            this.setState({
                display:"hide",
                show : !current
            }) 
        }
        // var clicked=this.state.clicked
        // $(".navbar-collapse").collapse();
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        return this.state.show != nextState.show
    },
    _handleResize: function() {
        var current = this.state.show
        var maxWindowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if(maxWindowWidth > 1000) {
            this.setState({
                display:"show",
                show : !current
            })
        } else  {
            this.setState({
                display:"hide",
                show : !current
            })             
        }
        HomeHelper.onLoad()
    },
    _navClick: function() {
        console.log("click");
        HomeHelper.onLoad()
        
    },
    componentDidMount: function() {
        window.addEventListener("resize", this._handleResize);
    },
    render: function() {
        return (
            <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
              <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" onClick={this.onClick} className="navbar-toggle"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                            <Scrollchor to="#page-top" className="navbar-brand page-scroll">Jaibik Map</Scrollchor></div>


                        <div className={this.state.display} style = {{display: this.state.display}} id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right" onClick = {this._navClick}>
                                <li><Scrollchor to="#about" className="page-scroll">About</Scrollchor>
                                </li>
                                <li><Scrollchor  to="#objectives" className="page-scroll">Objectives</Scrollchor>
                                </li>
                                <li><Scrollchor  to="#team" className="page-scroll">Team</Scrollchor>
                                </li>
                                <li><Scrollchor  to="#events" className="page-scroll">Events and Notices</Scrollchor>
                                </li>
                                <li><Scrollchor to="#contact" className="page-scroll">Contact</Scrollchor>
                                </li>
                            </ul>
                        </div>

                    </div>

                </nav>

                <header ref="header" id="header">
                    <div className="intro">
                        <div className="overlay">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8 col-md-offset-2 intro-text">
                                        <h1>Jaibik Map</h1>
                                        <p>Nepal's biodiversity and climate change tool for the future
                                            <br/>
                                        </p>
                                        
                                       <a href="https://invis.io/58BNZI9ZF#/233214218_1" target = "_blank" className="btn btn-custom btn-lg page-scroll">Explore Mammalian Species</a>
                                       <a href="https://invis.io/6WBN9K6KV#/232993027_1" target = "_blank" className="btn btn-custom btn-lg page-scroll">Submit Observations</a>

                                      </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/*About Section*/}

                <div id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-12">
                                <div className="about-text">
                                    <h2>Welcome to <span>Jaibik Map</span></h2>
                                    <div className="row">
                                        <div className="col-xs-12 col-md-12">

                                            <p className="lead">Jaibik Map is a first of its kind, open-source biodiversity mapping and visualization tool in Nepal.</p>

                                            <p>With the overarching goal of creating a platform which liberates data and amplifies potential for citizen-centred data acquisition, the Jaibik Map project seeks to answer two mutually-reinforcing research objectives, the former being a development question and the latter a scientific one:</p>
                                            <ul>
                                                <li>How can we enable and inspire conservation advances by lifting the existing barriers in data science and capacitating emerging researchers (from government ministries to citizen scientists)?</li>

                                                <li>How can ICT tools be applied to cutting-edge research questions to not only provide a proof of concept for emerging, innovative mapping tools, but also inform conservation and development planning?</li>
                                            </ul>

                                            <a href="https://invis.io/6WBN9K6KV#/232993027_1" className="btn btn-custom btn-lg page-scroll">Click here to explore mammalian species</a> </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-md-12">


                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                {/*Objectives Section*/}
                <div id="objectives">
                    <div className="container">
                        <div className="col-md-10 col-md-offset-1 section-title text-center">
                            <h2>Project Objectives</h2>
                            <p>The Jaibik Map Project seeks to achieve the following outcomes upon the project's completion</p>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-12">
                                <ul>
                                    <li>Establish a visual representation of mammalian species abundance, status, distribution and habitat requirements for all 208 mammal species occurring in Nepal; and overlay this data against location/distribution of existing land use and habitat, settlements and roads.</li>
                                    <li>Model changes in Nepal’s forest cover, composition and distribution in light of various future climate change (emissions) scenarios. Conduct innovative species distribution modelling based on the results. Build capacity at all levels for the model’s uptake and general conservation.</li>
                                    <li>Incorporating all of the aforementioned data (Objectives 1 and 2), develop an interactive, slippy (with zooming capability), open data web-based map and associated Android Phone application to enable the public to submit opportunistic photographs of mammal sightings to the JaibikMap. Disseminate the product and train stakeholders in its use, and provide protocols among stakeholders for its continual application. </li>
                                    <li>Ensure the project translates to impacts on USAID development objectives through capacity development, information dissemination/integration, and sustainability measures. </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>

                {/*Team Section*/}
                <div id="team">
                    <div className="container">
                        <div className="section-title text-center center">
                            <h2>Project Steering Committee</h2>
                            <br/>
                            <br/>

                            <div className="row centered-row">
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/Maheshwor Dhakal.jpg" alt=" "/> 
                                    </div>
                                    <div className="service-desc">
                                        <h3>Dr. Maheshwar Dhakal</h3>
                                        <h4>Chairperson</h4>
                                        <h4>Joint Secretary, Biodiversity and Environment Division, Ministry of Forest and Soil Conservation</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/Gopal Prakash Bhattarai.jpg" alt=" "/> 
                                    </div>
                                    <div className="service-desc">
                                        <h3>Gopal Prakash Bhattarai</h3>
                                        <h4>Member</h4>
                                        <h4>Deputy Director General, Department of National Parks and Wildlife Conservation</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/Mohan Shivakoti.jpg" alt=" "/> 
                                    </div>
                                    <div className="service-desc">
                                        <h3>Prof. Mohan Siwakoti</h3>
                                        <h4>Member</h4>
                                        <h4>Head of Department, Central Department of Botany, Tribhuwan University</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/nama.jpg" alt=" "/> 
                                    </div>
                                    <div className="service-desc">
                                        <h3>Dr. Nama Budhathoki</h3>
                                        <h4>Co-principal Investigator</h4>
                                        <h4>Executive Director, Kathmandu Living Labs</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/Prahlad Thapa.jpg" alt=" "/> 
                                    </div>
                                    <div className="service-desc">
                                        <h3>Dr. Prahlad Thapa</h3>
                                        <h4>Member</h4>
                                        <h4>Country Representative, IUCN</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/Dhananjaya Lamichane.jpg" alt=" "/> 
                                    </div>
                                    <div className="service-desc">
                                        <h3>Dhananjaya Lamichhane</h3>
                                        <h4>Member Secretary</h4>
                                        <h4>Under Secretary, Biodiversity and Environment Division, Ministry of Forest and Soil Conservation/BED</h4>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h2>Project Management Committee</h2>
                            <br/>
                            <br/>

                            <div className="row centered-row">
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/Laxman Prasad Paudel.jpg" alt=" "/> 
                                    </div>
                                    <div className="service-desc">
                                        <h3>Laxman Prasad Poudyal</h3>
                                        <h4>Chairperson</h4>
                                        <h4>Under Secretary, Department of National Park and Wildlife Conservation</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/menaka.png" alt=" "/> 
                                    </div>
                                    <div className="service-desc">
                                        <h3>Dr. Menaka Panta Neupane</h3>
                                        <h4>Member</h4>
                                        <h4>Consultant / Programme Development, International Union for Conservation of Nature</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/Prof Mohan Shivakoti.jpg" alt=" "/> 
                                    </div>
                                    <div className="service-desc">
                                        <h3>Prof. Mohan Siwakoti</h3>
                                        <h4>Member</h4>
                                        <h4>Head of Department, Central Department of Botany, Tribhuwan University</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/pramod.png" alt=" "/> 
                                    </div>
                                    <div className="service-desc">
                                        <h3>Prof. Dr. Pramod Kumar Jha</h3>
                                        <h4>Member</h4>
                                        <h4>Co-principal Investigator, International Union for Conservation of Nature</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/nama.jpg" alt=" "/> 
                                    </div>
                                    <div className="service-desc">
                                        <h3>Dr. Nama Budhathoki</h3>
                                        <h4>Member</h4>
                                        <h4>Executive Director, Kathmandu Living Labs</h4>
                                    </div>
                                </div>
                            </div>

                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <h2>Core Team Members</h2>
                            <br/>
                            <br/>
                            
                            <div className="row centered-row">
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/menaka.png" alt=" "/> 
                                    </div>
                                    <div className="service-desc">
                                        <h3>Dr. Menaka Panta Neupane</h3>
                                        <h4>Principal Investigator / GIS, RS Data Quality Control Specialist, International Union for Conservation of Nature</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/pramod.png" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>Prof. Dr. Pramod K. Jha</h3>
                                        <h4>Co-principal Investigator, International Union for Conservation of Nature</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/nama.jpg" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>Dr. Nama Budhathoki</h3>
                                        <h4>Co-principal Investigator, Kathmandu Living Labs</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/Deep%20Narayan%20Shah.JPG" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>Deep Narayan Shah, Ph. D.</h3>
                                        <h4>Meteorological Data Analyst, International Union for Conservation of Nature</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/Hari%20Basnet.JPG" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>Hari Basnet</h3>
                                        <h4>Mammalian / Habitat Land-use Data analyst, Department of National Parks and Wildlife Conservation</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/Prabhat Raj Dahal.png" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>Prabhat Raj Dahal</h3>
                                        <h4>GIS / Modelling Expert, Kathmandu Living Labs</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/arogya.jpg" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>Arogya Koirala</h3>
                                        <h4>System Designer, Kathmandu Living Labs</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/Chitra_Baniya.jpg" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>Dr. Chitra Baniya</h3>
                                        <h4>Bio-statistician, Central Department of Biology, Tribhuwan University</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/profile_m.jpg" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>Ram Akhilesh Mandal</h3>
                                        <h4>Ecological Associate, Central Department of Biology, Tribhuwan University</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/Narayan Gautam.png" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>Narayan Gautam</h3>
                                        <h4>Meteorological Data Analyst, Department of Metrology, Tri-Chandra Multiple Campus</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/Anu%20Rai.jpg" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>Anu Rai</h3>
                                        <h4>Intern, International Union for Conservation of Nature</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://raw.githubusercontent.com/arkoblog/jaibikmap/master/src/img/profile/Ayush_Adhikari.jpg" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>Ayush Adhikari</h3>
                                        <h4>Intern, International Union for Conservation of Nature</h4>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <h2 className="mid-section-heading">Partner Organizations</h2>
                            <br/>

                            <br/>
                            <div className="row centered-row">
                                <div className="col-md-3 col-xs-6 centered-col">
                                    <a id='iucn-logo' href='https://www.iucn.org/asia/nepal/countries/nepal' target="_blank" title="International Union for the Conservation Of Nature (click to visit website) "></a>
                                </div>
                                <div className="col-md-3 col-xs-6 centered-col ">
                                    <a id='dnpwc-logo' href='http://www.dnpwc.gov.np/' target="_blank" title="Department of National Parks and Wildlife Conservation (click to visit website) "></a>
                                </div>
                                <div className="col-md-3 col-xs-6 centered-col ">
                                    <a id='tu-logo' href='http://tribhuvan-university.edu.np/' target="_blank" title="Tribhuwan University of Nepal (click to visit website) "></a>
                                </div>
                                <div className="col-md-3 col-xs-6 centered-col ">
                                    <a id='kll-logo' href='http://kathmandulivinglabs.org/' target="_blank" title="Kathmandu Living Labs (click to visit website) "></a>
                                </div>
                                <div className="col-md-3 col-xs-6 centered-col ">
                                    <a id='usaid-logo' href='https://www.usaid.gov/nepal' target="_blank" title="Kathmandu Living Labs (click to visit website) "></a>
                                </div>
                            </div>
                            <br/>
                            <br/>


                        </div>
                    </div>
                </div>


                {/*Events Section*/}

                <div id="events" className="text-center">
                    <div className="overlay">
                        <div className="container">
                            <div className="section-title">
                                <h2>Events and Notices</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-12 event-item">
                                    <ul className="event-list">
                                        <li>
                                            <time dateTime="2014-07-20">
                                                <span className="day"><span className="fa fa-calendar"></span></span>
                                                <span className="month">MAY</span>
                                                <span className="year">2017</span>
                                                <span className="time">ALL DAY</span>
                                            </time>
                                            <div className="info">
                                                <h3 className="title">Inception Workshop</h3>
                                                <p className="desc"></p>
                                                <p className="desc">Venue: Hotel Himalaya, Kupondole, Lalitpur | Time: 19 May 2017 (9AM to 11AM)</p>
                                                {/*<p className="desc">View announcement on: <a href="#" className="btn btn-danger btn-xs page-scroll"><span className="fa fa-facebook"></span></a>
                                                    <a href="#" className="btn btn-danger btn-xs page-scroll"><span className="fa fa-twitter"></span></a>
                                                </p>*/}
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12 event-item">
                                    <ul className="event-list">
                                        <li>
                                            <time dateTime="2014-07-20">
                                                <span className="day"><span className="fa fa-calendar"></span></span>
                                                <span className="month">APR</span>
                                                <span className="year">2017</span>
                                                <span className="time">ALL DAY</span>
                                            </time>
                                            <div className="info">
                                                <h3 className="title">First Project Steering Committee (PSC) Meeting</h3>
                                                <p className="desc"> The first meeting for the PSC was successfully conducted at the Biodiversity and Environment Division / Ministry of Forest and Soil Conservation (BED/Ministry of Forest and Soil Conservation)</p>
                                                <p className="desc">Date: 4 April 2017</p>
                                                {/*<p className="desc">View announcement on: <a href="#" className="btn btn-danger btn-xs page-scroll"><span className="fa fa-facebook"></span></a>
                                                    <a href="#" className="btn btn-danger btn-xs page-scroll"><span className="fa fa-twitter"></span></a>
                                                </p>*/}
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12 event-item">
                                    <ul className="event-list">
                                        <li>
                                            <time dateTime="2014-07-20">
                                                <span className="day"><span className="fa fa-calendar"></span></span>
                                                <span className="month">Mar</span>
                                                <span className="year">2017</span>
                                                <span className="time">ALL DAY</span>
                                            </time>
                                            <div className="info">
                                                <h3 className="title">Project Management Committee (PMC) Meeting</h3>
                                                <p className="desc">In this meeting, members of the PMC shared and discussed outputs generated from the preliminary modeling exercise.</p>
                                                <p className="desc">Date: 24 Mar 2017</p>
                                                {/*<p className="desc">View announcement on: <a href="#" className="btn btn-danger btn-xs page-scroll"><span className="fa fa-facebook"></span></a>
                                                    <a href="#" className="btn btn-danger btn-xs page-scroll"><span className="fa fa-twitter"></span></a>
                                                </p>*/}
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12 event-item">
                                    <ul className="event-list">
                                        <li>
                                            <time dateTime="2014-07-20">
                                                <span className="day"><span className="fa fa-calendar"></span></span>
                                                <span className="month">Mar</span>
                                                <span className="year">2017</span>
                                                <span className="time">ALL DAY</span>
                                            </time>
                                            <div className="info">
                                                <h3 className="title">Project Management Committee (PMC) Meeting</h3>
                                                <p className="desc">In this meeting, members of the PMC discussed and updated each other on project activities.</p>
                                                <p className="desc">Date: 02 Mar 2017</p>
                                                {/*<p className="desc">View announcement on: <a href="#" className="btn btn-danger btn-xs page-scroll"><span className="fa fa-facebook"></span></a>
                                                    <a href="#" className="btn btn-danger btn-xs page-scroll"><span className="fa fa-twitter"></span></a>
                                                </p>*/}
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12 event-item">
                                    <ul className="event-list">
                                        <li>
                                            <time dateTime="2014-07-20">
                                                <span className="day"><span className="fa fa-calendar"></span></span>
                                                <span className="month">Jan</span>
                                                <span className="year">2017</span>
                                                <span className="time">ALL DAY</span>
                                            </time>
                                            <div className="info">
                                                <h3 className="title">Project Management Committee (PMC) Meeting</h3>
                                                <p className="desc">In this meeting, members of the PMC discussed and updated each other on project activities.</p>
                                                <p className="desc">Date: 19 Jan 2017</p>
                                                {/*<p className="desc">View announcement on: <a href="#" className="btn btn-danger btn-xs page-scroll"><span className="fa fa-facebook"></span></a>
                                                    <a href="#" className="btn btn-danger btn-xs page-scroll"><span className="fa fa-twitter"></span></a>
                                                </p>*/}
                                            </div>

                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/*Contact Section*/}

                <div id="contact" className="text-center">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="col-md-10 col-md-offset-1 contact-info">
                            <div className="col-md-4">
                                <h3>Address</h3>
                                <hr/>
                                <div className="contact-item">
                                    <p>Kupondole Rd 162,</p>
                                    <p>Lalitpur, Nepal 44700</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h3>Working Hours</h3>
                                <hr/>
                                <div className="contact-item">
                                    <p>Monday-Friday: 09:00 - 17:30</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h3>Contact Info</h3>
                                <hr/>
                                <div className="contact-item">
                                    <p>Phone: +977 1-5528781</p>
                                    <p>Email: [Add Email Here]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Footer Section*/}


                <div id="footer">
                    <div className="container text-center">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="social">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <p>&copy; Jaibik Map 2017. Website developed by <a href="http://www.kathmandulivinglabs.org" rel="nofollow">Kathmandu Living Labs.</a> This work is a derivative of  Landscaper, by Template Wire under the <a href="https://creativecommons.org/licenses/by/4.0/#">CC 4.0 License</a>
                            </p>
                        </div>
                    </div>
                </div>

			</div>
        )
    }
})

module.exports = Home;
