var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var HomeHelper = require('../js/main_1')
import Scrollchor from 'react-scrollchor';
require ('../css/home.css')
// require ('../js/home.js')

// Load Components

// var MyMap = require('./Maps')




var Home = React.createClass({
    getInitialState: function() {
        return {}
    },
    componentWillMount: function () {
        HomeHelper.onLoad()
    },
    scrollHandler: function(section) {
        document.getElementById('about').scrollIntoView() 
    },
    componentDidMount: function() {},
    render: function() {
        return (
            <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

              <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                            <Scrollchor to="#page-top" className="navbar-brand page-scroll">Jaibik Map</Scrollchor></div>


                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Scrollchor to="#about" className="page-scroll">About</Scrollchor>
                                </li>
                                <li><Scrollchor to="#objectives" className="page-scroll">Objectives</Scrollchor>
                                </li>
                                <li><Scrollchor to="#team" className="page-scroll">Team</Scrollchor>
                                </li>
                                <li><Scrollchor to="#events" className="page-scroll">Events and Notices</Scrollchor>
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
                                        
                                       <a href="#" className="btn btn-custom btn-lg page-scroll">Explore Data</a>
                                       <a href="#" className="btn btn-custom btn-lg page-scroll">Submit Observations</a>

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
                                    <hr/>
                                    <div className="row">
                                        <div className="col-xs-12 col-md-12">

                                            <p className="lead">Jaibik Map is a first of its kind, open-source biodiversity mapping and visualization tool in Nepal.</p>

                                            <p>With the overarching goal of creating a platform which liberates data and amplifies potential for citizen-centred data acquisition, the Jaibik Map project seeks to answer two mutually-reinforcing research objectives, the former being a development question and the latter a scientific one:</p>
                                            <ul>
                                                <li>How can we enable and inspire conservation advances by lifting the existing barriers in data science and capacitating emerging researchers (from government ministries to citizen scientists)?</li>

                                                <li>How can ICT tools be applied to cutting-edge research questions to not only provide a proof of concept for emerging, innovative mapping tools, but also inform conservation and development planning?</li>
                                            </ul>

                                            <a href="#" className="btn btn-custom btn-lg page-scroll">Click here to explore data</a> </div>
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
                            <hr/>
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
                            <h2>Team Members</h2>
                            <hr/>
                            <div className="row centered-row">
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://code.kathmandulivinglabs.org/arkoblog/jaibikmap-react/raw/master/src/img/profile/profile_f.png" alt=" "/> 
                                    </div>
                                    <div className="service-desc">
                                        <h3>Menaka Pant, Ph. D.</h3>
                                        <h4>Principal Investigator, IUCN</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://code.kathmandulivinglabs.org/arkoblog/jaibikmap-react/raw/master/src/img/profile/profile_m.jpg" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>Deep Narayan Shah, Ph. D.</h3>
                                        <h4>[Designation], IUCN</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://code.kathmandulivinglabs.org/arkoblog/jaibikmap-react/raw/master/src/img/profile/profile_m.jpg" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>Prof. P. K. Jha</h3>
                                        <h4>[Designation], TU</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://code.kathmandulivinglabs.org/arkoblog/jaibikmap-react/raw/master/src/img/profile/profile_m.jpg" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>Nama Budhathoki, Ph. D.</h3>
                                        <h4>Co-principal Investigator, KLL</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://code.kathmandulivinglabs.org/arkoblog/jaibikmap-react/raw/master/src/img/profile/profile_f.png" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>[Team Member Name]</h3>
                                        <h4>[Designation], [Org]</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://code.kathmandulivinglabs.org/arkoblog/jaibikmap-react/raw/master/src/img/profile/profile_m.jpg" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>[Team Member Name]</h3>
                                        <h4>[Designation], [Org]</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://code.kathmandulivinglabs.org/arkoblog/jaibikmap-react/raw/master/src/img/profile/profile_f.png" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>[Team Member Name]</h3>
                                        <h4>[Designation], [Org]</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6 text-center centered-col">
                                    <div className="service-media"> <img src="https://code.kathmandulivinglabs.org/arkoblog/jaibikmap-react/raw/master/src/img/profile/profile_m.jpg" alt=" "/> </div>
                                    <div className="service-desc">
                                        <h3>[Team Member Name]</h3>
                                        <h4>[Designation], [Org]</h4>
                                    </div>
                                </div>
                            </div>
                            <h2 className="mid-section-heading">Partner Organizations</h2>
                            <hr/>
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
                                <hr/>
                            </div>
                            <div className="row">
                                <div className="col-md-12 event-item">
                                    <ul className="event-list">
                                        <li>
                                            <time dateTime="2014-07-20">
                                                <span className="day"><span className="fa fa-calendar"></span></span>
                                                <span className="month">event</span>
                                                <span className="year">2014</span>
                                                <span className="time">ALL DAY</span>
                                            </time>
                                            <div className="info">
                                                <h3 className="title">Event Announcement 1</h3>
                                                <p className="desc">Text for the event description will reside here. It can extend anywhere between 0-4 lines, and we can also link it with the event's relevant handles in social media.</p>
                                                <p className="desc">View announcement on: <a href="#" className="btn btn-danger btn-xs page-scroll"><span className="fa fa-facebook"></span></a>
                                                    <a href="#" className="btn btn-danger btn-xs page-scroll"><span className="fa fa-twitter"></span></a>
                                                </p>
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12 event-item">
                                    <ul className="event-list">
                                        <li>
                                            <time dateTime="2014-07-20">
                                                <span className="day"><span className="fa fa-bell"></span></span>
                                                <span className="month">notice</span>
                                                <span className="year">2014</span>
                                                <span className="time">ALL DAY</span>
                                            </time>
                                            <div className="info">
                                                <h3 className="title">Notice Announcement 1</h3>
                                                <p className="desc">Text for the notice description will reside here. It can extend anywhere between 0-4 lines, and we can also link it with the notice's relevant handles in social media.</p>
                                                <p className="desc">Deadline: 21 March, 2015</p>
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12 event-item">
                                    <ul className="event-list">
                                        <li>
                                            <time dateTime="2014-07-20">
                                                <span className="day"><span className="fa fa-calendar"></span></span>
                                                <span className="month">event</span>
                                                <span className="year">2014</span>
                                                <span className="time">ALL DAY</span>
                                            </time>
                                            <div className="info">
                                                <h3 className="title">Event Announcement 2</h3>
                                                <p className="desc">Text for the event description will reside here. It can extend anywhere between 0-4 lines, and we can also link it with the event's relevant handles in social media.</p>
                                                <p className="desc">View announcement on: <a href="#" className="btn btn-danger btn-xs page-scroll"><span className="fa fa-facebook"></span></a>
                                                    <a href="#" className="btn btn-danger btn-xs page-scroll"><span className="fa fa-twitter"></span></a>
                                                </p>
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
                            <hr/>
                        </div>
                        <div className="col-md-10 col-md-offset-1 contact-info">
                            <div className="col-md-4">
                                <h3>Address</h3>
                                <hr/>
                                <div className="contact-item">
                                    <p>[Building No.] Kupondole,</p>
                                    <p>Lalitpur, Nepal 12345</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h3>Working Hours</h3>
                                <hr/>
                                <div className="contact-item">
                                    <p>Monday-Friday: 09:00 - 17:00</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h3>Contact Info</h3>
                                <hr/>
                                <div className="contact-item">
                                    <p>Phone: +977 PHONE-NUMBER</p>
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
