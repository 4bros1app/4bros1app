import React from 'react'
import axios from 'axios'
import SearchMovieEntry from './searchMovieEntry.jsx'
import { Grid, Row, Jumbotron, Button, Col } from 'react-bootstrap'


class SearchMovieList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			front: this.props.movies[0]
		}
		this.changeFront = this.changeFront.bind(this)
	}

	changeFront(newFront) {
		this.setState({front: newFront})
	}

 render () {
	let movies = this.props.movies.slice(0)
	let front = this.state.front
	let frontId = front //.id
	console.log('movies at render is', movies)
	return(
		<div>
			<Jumbotron>
				<Grid style = {{border: 1+'px solid black'}}>
					<Row>
						<Col sm={5} md={5}>
		  	  		<img src={front.poster} />
		  	  	</Col>
		  	  	<Col sm={7} md={7}>
		  	  	<p>{front.title}</p>
		  	  	<p>{front.description}</p>
		  	  	</Col>
		    		<p>
		    			<Button bsStyle="primary">Save for later(nonfunctional)</Button>
		    			<Button bsStyle="primary">See full description(nonfunctional)</Button>
		    		</p>
		    	</Row>
    		</Grid>
  		</Jumbotron>
  		<h1>Next closest picks</h1>
			<Grid>
				<Row>
					{movies.map((movie, i) => (
		        <SearchMovieEntry
		        	frontId={frontId}
		        	changeFront={this.changeFront}
			        key={i}
			        movie={movie} />
		     	))}
				</Row>
			</Grid>
		</div>
		)
	}
}
export default SearchMovieList