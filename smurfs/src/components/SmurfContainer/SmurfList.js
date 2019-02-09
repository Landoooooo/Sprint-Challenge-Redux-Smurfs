import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../../actions';

import SmurfCard from './SmurfCard';

import styled from 'styled-components';

const List = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
class SmurfList extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.props.fetchSmurfs()
    }

    render(){
        return(
            <List>
                {this.props.smurfs.map(smurf => {
                    return <SmurfCard smurf={smurf} id={smurf.id}/>
                })}
            </List>
        )
    }
}

const mstp = state => {
    return{
        smurfs: state.smurfs,
        loading: state.loading
    }
}

export default connect(mstp, { fetchSmurfs })(SmurfList);