import React, {PureComponent} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {chooseProfileThunk, updateStatusFromUIThunk, getStatusFromAPIThunk} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {authThunk} from "../../redux/authReducer";
import {compose} from "redux";

class ProfileContainer extends PureComponent {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        this.props.authThunk();
        if (!userID) {
            userID = this.props.myId;
            if (!userID) {
                this.props.history.push('/login');
            }
        }
        this.props.chooseProfileThunk(userID);
        this.props.getStatusFromAPIThunk(userID);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/login/'/>

        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile, myId: state.authReducer.id, status: state.profilePage.status, isAuth: state.authReducer.isAuth});

export default compose(
    connect(mapStateToProps, {chooseProfileThunk, authThunk, updateStatusFromUIThunk, getStatusFromAPIThunk}),
    withRouter
)(ProfileContainer)