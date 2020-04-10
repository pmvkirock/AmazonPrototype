import React from "react";
import topNav from "../container/navbar";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
//import cookie from 'react-cookies';

class bodyCont extends React.Component {
  render() {
    /* Route to different components for different users 
    if (this.props.getType == "Student") {
    } else {
    }*/
    return (
      <div>
        <Route path='/' component={topNav} />
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    getType: state.getType,
  };
};

export default connect(mapStateToProps)(bodyCont);
