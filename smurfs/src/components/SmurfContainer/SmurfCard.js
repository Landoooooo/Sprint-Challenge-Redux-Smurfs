import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurfs } from '../../actions';
class SmurfCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        console.log(this.props.id)
    }

    render(){
        return(
            <div>
                <div>{this.props.smurf.name}</div>
                <div>{this.props.smurf.age}</div>
                <div>{this.props.smurf.height}</div>
                <button onClick={() => {
                    this.props.deleteSmurfs(this.props.smurf.id);
                }}>Delete</button>
            </div>
        )
    }
}

export default connect(null, {deleteSmurfs})(SmurfCard);