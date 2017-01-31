import React from 'react';
import axios from 'axios'
import { Col } from 'react-bootstrap'
import { Grid } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

import { Image } from 'react-bootstrap'
import { PageHeader } from 'react-bootstrap'
import { Parallax, Background } from 'react-parallax'



class movieDescription extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
    render() {
		var genres = (this.props.movie.genres).join(' ');
		var actors = (this.props.movie.actors).slice(0,5).join(', ');
		var directors = (this.props.movie.directors).join(' ');
		var hbo = this.props.movie.hbo ?
		<a href='http://www.hbo.com/' target="_blank">
		<Image src="/images/hbo.png" style = {{
		  height: 20,
		  margin: 5}}/> </a>: null;
		var hulu = this.props.movie.hulu ?
		<a href={this.props.movie.huluLink} target="_blank">
		<Image src="/images/Hulu_Logo_Option_A.png" style={{
		  height: 20,
		  margin:5}}/> </a>: null;
		var netflix = this.props.movie.netflix ?
		<a href={this.props.movie.netflixLink} target="_blank">
		<Image src="/images/netflix-logo-small.png" style={{
		  height: 20,
		  margin:5}}/> </a>: null;
		var amazon = this.props.movie.amazon ?
		<a href={this.props.movie.amazonLink} target="_blank">
		<Image src="/images/amazon_logo.png" style={{
		  height: 20,
		  margin:5}}/> </a>: null;

		var imdb = this.props.movie.imdb ?
		<div>
			<Image src="http://ia.media-imdb.com/images/M/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@._V1_.png" style={{
				height:22,
				margin:5}}/> {this.props.movie.imdb}
		</div> : null;
		var metaCritic = this.props.movie.metaCritic ?
		<div>
			<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/2000px-Metacritic.svg.png" style={{
				height:30,
				margin:5}}/> {this.props.movie.metaCritic}
		</div> : null;
		var rottenTomatoes = this.props.movie.rottenTomatoes ?
		<div>
			<Image src="https://userscontent2.emaze.com/images/edb77feb-b05f-47b3-810c-61dd741c087b/bd3895dd67e7612dd9fcfb4c801c7c8a.png" style={{
				height:30,
				margin:5}}/> {this.props.movie.rottenTomatoes} %
		</div> : null;
		var apple = this.props.movie.appleBuy ?
		<div>
		<a href={this.props.movie.appleBuyLink} target="_blank">

		<Image src="/images/itunes.png" style={{
		  height: 20,
			margin:5}}/> <p>$ {this.props.movie.appleBuyPrice}</p>
		</a>	</div> : null;
		var amazonBuy = this.props.movie.amazonBuy ?
		<div>
		<a href={this.props.movie.amazonBuyLink} target="_blank">
		<Image src="/images/amazonbuy.png" style={{
		  height: 20,
			margin:5}}/> <p>$ {this.props.movie.amazonBuyPrice}</p>
			</a></div> : null;
	  return (
			<div>
				<Parallax strength={300}>
          <Background>
						<img src={this.props.movie.banner} />
						<div style={{
							width: 800,
              height: 300
						}}></div>
						<img src={this.props.movie.banner} />
					</Background>
						<div style={{
							width: 800,
		   				height: 200
						}}></div>
				</Parallax>
				<Grid>
					<Row>

	  <Col xs={12} md={8} className="descriptionPage">
	  <PageHeader>{this.props.movie.title}<small> {this.props.movie.year}</small></PageHeader>
	  <p>{this.props.movie.description}</p>  <h3>Actors: </h3><p>{actors}</p>
		<h4>Genres: </h4><p>{genres}</p>

		<h4>Directors: </h4><p>{directors}</p>
	  <h3>Trailer</h3>
	  <div style={{width: 660, height: 'auto'}}>
	  <div className="embed-responsive embed-responsive-4by3">
	  <iframe className="embed-responsive-item" src={this.props.movie.trailer} allowFullScreen></iframe>
	  </div>
	  </div>
	  </Col>
		<Col xs={6} md={4} className="descriptionPage">
	  <Image src={this.props.movie.poster} responsive />

	  <h4>Where to watch: </h4>
	  {hbo}
		{hulu}
		{netflix}
		{amazon}
		<div>
<Grid>
	<Row>
		<Col>
		<h4>buy/rent:</h4>
		{apple}
		{amazonBuy}
	</Col>
	<Col>
		<h4>Ratings: </h4>
		{imdb}
		{metaCritic}
		{rottenTomatoes}
	</Col>

</Row>
</Grid>
	</div>
	  </Col>
	</Row>
	</Grid>
	  </div>
	  );
	}
}

export default movieDescription
