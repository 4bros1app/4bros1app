import React from 'react';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router';

import { PageHeader } from 'react-bootstrap';
import { Parallax, Background } from 'react-parallax';
import { Thumbnail } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

var Falinkedin = require('react-icons/lib/fa/linkedin');
var Fa_github = require('react-icons/lib/fa/github');

export default () => <div>
  <Parallax strength = {300}>
    <Background>
    <img src = "/images/cover.jpg" />
    <div style = {
      {
        width: 800,
        height: 300
      }}>
    </div>
    <img src = "/images/cover.jpg" />
    </Background>
    <div style = {
        {
            width: 800,
            height: 300
        }}>
    <div style = {
      {
        margin: 200
      }}>
      <h1 style = {
        {
          color: '161D26',
          fontWeight: 300,
          fontSize: 75,
          textAlign: 'center'
        }}> Pick A Flick </h1>
      </div>
      </div>
      </Parallax>
      <div className="container" style={{
        marginTop: 40,
        marginBottom: 80 }}>
        <div style = {
          {
            textAlign: 'center',
            marginTop: 2,
            marginBottom: 40


          }}>
          <h2 style={{ color: '161D26',
          fontWeight: 300,
          fontSize: 75
        }}>Our Mission</h2>
          <h3 >The app that takes decision making out of your movie streaming experience. </h3>
            <h4 style = {{
                marginTop: 40}}>Our goal is for you to watch shows and movies without having to wade through each service's vast catalogue. Let us help you spend less time searching and more time watching! </h4>
        </div>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <div style = {
                {
                  textAlign: 'center',

                }}>
                <h1 style = {{
                    fontWeight: 300}}>Step 1</h1>
                <h3>Sign up/Sign In</h3>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div style = {
              {
                textAlign: 'center'
              }}>
            <h1 style = {{
                fontWeight: 300}}>Step 2</h1>
            <h3>Search or Let Us Choose</h3>
          </div>
          </Col>
          <Col xsHidden md={4}>
            <div style = {
              {
                textAlign: 'center'
              }}>
              <h1 style = {{
                  fontWeight: 300}}>Step 3</h1>
            <h3>Enjoy!</h3>
          </div>
          </Col>
        </Row>
      </Grid>
      <div style = {
        {
          textAlign: 'center',
          marginTop: 40

        }}>
<Link className = "nav-link" to = "/signin"> <Button bsSize="large"> GET STARTED </Button> </Link>      </div>

  </div>
  <div id="stack">
    <Grid>
    <Row>
    <Col xs={6} md={4}>
		<Image src="/images/react.png" style={{
      marginTop: 80,

      display: 'block',
      marginBottom: 30,
      marginRight: 'auto',
      marginLeft: 'auto',
      height: 80}}/>
      </Col>
      <Col xs={6} md={4}>
    <Image src="https://webassets.mongodb.com/_com_assets/cms/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png" style={{
      marginTop: 80,
      display: 'block',
      marginBottom: 30,
      marginRight: 'auto',
      marginLeft: 'auto',
      height: 80}}/>
      </Col>
      <Col xs={6} xsHidden md={4}>
    <Image src="http://mean.io/wp-content/themes/twentysixteen-child/images/express.png" style={{
      marginTop: 80,
      display: 'block',
      marginBottom: 30,
      marginRight: 'auto',
      marginLeft: 'auto',
      height: 80}}/>
      </Col>
      </Row>
      <Row>
      <Col xs={6} md={6}>

		<Image src="/images/node.png" style={{
      display: 'block',
      marginBottom: 30,
      marginRight: 'auto',
      marginLeft: 'auto',
      height: 80}}/>
      </Col>
      <Col xs={6} md={6}>
      <Image src="/images/passport.png" style={{
        display: 'block',
        marginBottom: 80,
        marginRight: 'auto',
        marginLeft: 'auto',
        height: 80}}/>
        </Col>
        </Row>
        </Grid>
      </div>
      <Parallax strength={300}>
            <Background>
  			<img src="/images/banner.jpg" />
              <div style={{
                 width: 500,
                 height: 300,
                }}></div>
  			<img src="/images/banner.png"/>
            </Background>
  	  <Col xs={6} md={4}>

  	  <div style={{
  		   width: 600,
  		   height: 500,
  		}}></div>
  	  </Col>
  	  </Parallax>

      <footer class="content-footer" style={{
        backgroundColor: 'F0EAE5',
        padding: 10 ,
        textAlign: 'center',
      }}>
    <h2 style={{ color: '161D26',
    fontWeight: 300,
    fontSize: 75

   }}>4bros1app</h2>
    <h4 style={{ color: '161D26' }}>Commited to simplify the decision making process in your movie and television watching experience</h4>
    <div style={{ marginTop: 10 }}>
      <Grid>
        <Row>
          <Col xs={6} md={6}>
            <Image style={{
              marginTop: 20,
        		   width: 170,
        		   height: 180 }} src="/images/dan.jpg" circle />
               <h3 style={{ color: '161D26' }}>Daniel Osaki</h3>
               <h4 style={{ color: '161D26' }}>Project Owner</h4>
               <a href="https://www.linkedin.com/in/daniel-osaki-507837118" target="_blank">
               <Falinkedin /></a>
               <span style = {{ marginRight: 10 }}></span>
               <a href="https://github.com/dpawsit" target="_blank">
               <Fa_github /></a>

          </Col>
          <Col xs={6} md={6}>
            <Image style={{
              marginTop: 20,
        		   width: 170,
        		   height: 180 }} src="/images/dave.jpg" circle />
               <h3 style={{ color: '161D26' }}>David Park</h3>
               <h4 style={{ color: '161D26' }}>Authentication Dev Team</h4>
               <a href="https://www.linkedin.com/in/david-park-ba72b3133" target="_blank">
               <Falinkedin /></a>
               <span style = {{ marginRight: 10 }}></span>
               <a href="https://github.com/menaduke" target="_blank">
               <Fa_github /></a>

          </Col>
          </Row>
          <Row>
          <Col xs={6} md={6}>
            <Image style={{
              marginTop: 30,
        		   width: 170,
        		   height: 180 }} src="/images/jesse.jpg" circle />
               <h3 style={{ color: '161D26' }}>Jesse Nocon</h3>
               <h4 style={{ color: '161D26' }}>Vice Chairman Dev Team</h4>
               <a href="https://www.linkedin.com/in/jnocon" target="_blank">
               <Falinkedin /></a>
               <span style = {{ marginRight: 10 }}></span>
               <a href="https://github.com/jnocon" target="_blank">
               <Fa_github /></a>
          </Col>
          <Col xs={6} md={6}>
            <Image style={{
              marginTop: 30,
               width: 170,
               height: 180 }} src="/images/rich.jpg" circle />
               <h3 style={{ color: '161D26' }}>Richard Durazo</h3>
               <h4 style={{ color: '161D26' }}>Scrum/Design/CSS</h4>
               <a href="https://www.linkedin.com/in/rdurazo" target="_blank">
               <Falinkedin /></a>
               <span style = {{ marginRight: 10 }}></span>
               <a href="https://github.com/richdurazo" target="_blank">
               <Fa_github /></a>
          </Col>
        </Row>
      </Grid>
    </div>
</footer>
</div>;
