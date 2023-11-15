import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux";
import { ToastContainer } from "react-toastify";
import HomePageStudent from "../containers/Student/HomePageStudent";
import RegPageStudent from "../containers/Student/RegPageStudent";
import {
  studentIsAuthenticated,
  lecturerIsAuthenticated,
  userIsNotAuthenticated,
} from "../hoc/authentication";

import { path } from "../utils";

// import Login from '../routes/Login';
import Login from "./Auth/Login";
import Home from "./routes/Home";
import HomeLecturer from "./Lecturer/HomeLecturer";
import { CustomToastCloseButton } from "../components/CustomToast";
import ConfirmModal from "../components/ConfirmModal";
// import HomePage from "./HomePage/HomePage.js";
import RegPageSelection from "./Student/RegPageSelection";
import CustomScrollbars from "../components/CustomScrollbars";
import RegPageForm from "./Student/RegPageForm";
class App extends Component {
  handlePersistorState = () => {
    const { persistor } = this.props;
    let { bootstrapped } = persistor.getState();
    if (bootstrapped) {
      if (this.props.onBeforeLift) {
        Promise.resolve(this.props.onBeforeLift())
          .then(() => this.setState({ bootstrapped: true }))
          .catch(() => this.setState({ bootstrapped: true }));
      } else {
        this.setState({ bootstrapped: true });
      }
    }
  };

  componentDidMount() {
    this.handlePersistorState();
  }

  render() {
    return (
      <Fragment>
        <Router history={history}>
          <div className="main-container">
            <div className="content-container">
              <CustomScrollbars style={{ height: "100vh", width: "100%" }}>
                <Switch>
                  <Route path={path.HOME} exact component={Home} />
                  <Route
                    path={path.LOGIN}
                    component={userIsNotAuthenticated(Login)}
                    // component={Login}
                  />
                  {/* <Route
                    path={path.SYSTEM}
                    component={userIsAuthenticated(System)}
                  /> */}
                  <Route
                    path={path.HOMEPAGESTUDENT}
                    component={studentIsAuthenticated(HomePageStudent)}
                  />
                  <Route
                    path={path.HOMEPAGELECTURER}
                    component={lecturerIsAuthenticated(HomeLecturer)}
                  />
                  <Route
                    path={path.REGPAGESTUDENT}
                    component={studentIsAuthenticated(RegPageStudent)}
                  />
                  <Route
                    path={path.REGPAGEFORM}
                    component={studentIsAuthenticated(RegPageForm)}
                  />

                  <Route
                    path={path.REGPAGESELECT}
                    component={studentIsAuthenticated(RegPageSelection)}
                  />
                </Switch>
              </CustomScrollbars>
            </div>

            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);