import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserDetails } from './actionCreator';

class User extends React.Component {
  componentDidMount() {
    this.props.getUserDetails()
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
  }
  render() {
    const {isLoading, data} = this.props
    // console.log(this.props)
    const {title=''} = data
    return (<div>
      {
        isLoading ? 'Loading...' : <div className="UserComponent">User Component: {title}</div>
      }
    </div>)
  }
}

const mapStateToProp = (state)=>{
  let {userDetailState= {}} = state;
  let {isLoading, data={}, error} = userDetailState
  return {
    isLoading,
    data,
    error
  }
}

const mapDispatchToProp = (dispatch)=>{
  return {
    getUserDetails: bindActionCreators(getUserDetails, dispatch)
  }
}
export default connect(mapStateToProp, mapDispatchToProp)(User);
