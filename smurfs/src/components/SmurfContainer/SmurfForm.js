import React from "react";
import { connect } from 'react-redux';
import { addSmurfs } from '../../actions';
import styled from 'styled-components';



class SmurfForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            smurf: {
                name: "",
                age: null,
                height: null
            }
        }
    }

    addSmurf = event => {
        event.preventDefault();
        this.props.addSmurfs(this.state.smurf)
        this.setState({
            smurf: {
                name: "",
                age: null,
                height: null
            }
        });
    };

    inputHandler = event => {
        this.setState({ smurf: {...this.state.smurf, [event.target.name]: event.target.value}});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.addSmurf}>
                    <input
                    onChange={this.inputHandler}
                    placeholder="name"
                    value={this.state.name}
                    name="name"/>
                    <input
                    onChange={this.inputHandler}
                    placeholder="age"
                    value={this.state.age}
                    name="age"/>
                    <input
                    onChange={this.inputHandler}
                    placeholder="height"
                    value={this.state.height}
                    name="height"/>
                    <button type="submit">Add Smurf</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { addSmurfs })(SmurfForm);