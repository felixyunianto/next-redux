import React, { Component } from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import userAction from "../src/stores/users/user.action";

class User extends Component {
  fetchUser() {
    const { userBrowse } = this.props;

    userBrowse({page : 2}, console.log("SUCCESS"), console.log("ERROR"));
  }

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    const { users } = this.props;
    return <div>
        {users.map((user, key) => {
            return (
                <h1 key={key}>{user.first_name}</h1>
            )
        })}
    </div>;
  }
}

const maptState = (state) => ({
  users: state.user.user_list,
});

const mapDispatch = {
  userBrowse: userAction.browse,
};

export default withRouter(connect(maptState, mapDispatch)(User));
