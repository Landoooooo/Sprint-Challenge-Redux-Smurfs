import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurfs } from '../../actions';
class SmurfCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div>{this.props.smurf.name}</div>
                <div>{this.props.smurf.age}</div>
                <div>{this.props.smurf.height}</div>
            </div>
        )
    }
}

export default connect(null, {deleteSmurfs})(SmurfCard);