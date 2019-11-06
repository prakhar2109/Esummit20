import React from "react";
import Loadable from "react-loadable";
import Loader from "../../screens/common/loader";

const Loading = ({ error }) => {
  if (error) return <div>Error loading component</div>;
  else return <Loader />;
};

const RegisterIndex = Loadable({
  loader: () => import("./registration/Index"),
  loading: Loading,
});

const LoginIndex = Loadable({
  loader: () => import("./login/Index"),
  loading: Loading,
});

// const CommonIndex = Loadable({
//     loader: () => import("./common/Index"),
//     loading: Loading
// });

const ResetPasswordEmailIndex = Loadable({
  loader: () => import("./resetPasswordEmail/Index"),
  loading: Loading,
});

const ResetPasswordIndex = Loadable({
  loader: () => import("./resetPassword/Index"),
  loading: Loading,
});

export default class RegistrationIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      verified: false,
      userData: "",
    };
    // this.Auth = new AuthService();
  }

  componentWillMount() {
    // const isAuthenticated = this.Auth.hasToken();
    // if (isAuthenticated) {
    //     const token = this.Auth.getToken()
    //     FetchApi('GET', '/api/main/user', null, token)
    //         .then(r => {
    //             // console.log(r.data.body)
    //             if (r && r.data && r.data.body) {
    //                 // console.log(r.data.body)
    //                 if (r.data.isVerified) {
    //                     this.setState({ isAuthenticated: true, verified: true, userData: r.data.body });
    //                 } else {
    //                     this.setState({ isAuthenticated: true, verified: false })
    //                     this.props.history.push('/main/verify')
    //                 }
    //             }
    //         })
    //         .catch(e => {
    //             console.log(e)
    //         });
    // }
  }

  handleUpdate = (isAuthenticated, verified) => {
    this.setState({ isAuthenticated, verified });
  };

  setUserData = data => {
    this.setState({
      userData: data,
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isAuthenticated ? (
          <React.Fragment>
            <React.Fragment>
              {/* <Route path="/main" render={props => (<SidebarIndex {...props} userData={this.state.userData} />)} />
                            <Route exact path="/main" render={props => (<Profile {...props} userData={this.state.userData} />)} />
                            <Route exact path="/main/contact" render={props => (<ContactIndex {...props} main={true} userData={this.state.userData} />)} />
                            <Route exact path="/main/post" component={PostIndex} />
                            <Route exact path="/main/payment" component={PaymentIndex} />
                            <Route exact path="/main/zonals" render={props => (<ZonalsMainIndex  {...props} mainBackground="true" />)} /> */}
            </React.Fragment>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Route path="/registration_portal" component={CommonIndex} /> */}
            {/* <Route exact path="/register" render={props => (<RegisterIndex {...props} updateRoutes={this.handleUpdate} />)} />
                        <Route exact path="/registration_portal/resetPassword" component={ResetPasswordIndex} />
                        <Route exact path="/registration_portal/resetPasswordEmail" component={ResetPasswordEmailIndex} />
                        <Route exact path="/registration_portal/login" render={props => (<LoginIndex {...props} updateRoutes={this.handleUpdate} />)} /> */}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
