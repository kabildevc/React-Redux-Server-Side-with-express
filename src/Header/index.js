import React from 'react';
import {connect} from 'react-redux';

class Header extends React.Component {
  render() {
    const {userData} = this.props
    const {userId='', title=''} = userData
    return (<div className="HeaderComponent">
      {
        <div> Header Component: {`${userId}. ${title}`}</div>
      }
    </div>)
  }
}

const mapStateToProp = (state)=>{
  let {userDetailState= {}} = state;
  let {data: userData={}} = userDetailState
  return {
    userData,
  }
}

const mapDispatchToProp = (dispatch)=>{
  return {
  }
}
export default connect(mapStateToProp, mapDispatchToProp)(Header);
