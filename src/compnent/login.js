import React, { Component } from 'react'  
import './login.css'
import {Redirect} from 'react-router-dom'
import chart from './chart'

export class login extends Component {
	onSubmit = () => {
		return  <Redirect  to="/chart" />
 	}
	render() {
		return (
			  <section className="container-fluid">
				<section className ="row justify-content-center">
					<section className="col-12 col-sm-6 col-md-3">
	            		<form class="form-container">
	            			<h2>LOGIN</h2>
							<div className="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
								<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
							</div>
							<div className="form-group">
								<label for="exampleInputPassword1">Password</label>
								<input type="password" className="form-control" id="exampleInputPassword1" />
							</div>
							<button type="button" className="btn btn-primary btn-block" onClick={this.onSubmit}>Submit</button>
						</form>
					</section>
				</section>
			</section>
        );
	}
}

export default (login);


