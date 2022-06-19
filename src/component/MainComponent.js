import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { STAFFS } from '../shared/staffs';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';

class Main extends Component {

    constructor(props) {
      super(props);
      this.state = {
          staffs: STAFFS
    };
}
    render() {
      const HomePage = () => {
        return <StaffList staff={this.state.staffs}/>;
      };
        return (
            <div>
              <Header />
              <Switch>  
                <Route path='/Nhân Viên' component={HomePage} />
                <Redirect to="/Nhân Viên" />
              </Switch>
              <Footer />
            </div>
          );
          
        }
      }
      
  export default Main;