import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { STAFFS } from '../shared/staffs';
import { DEPARTMENTS } from '../shared/staffs';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import StaffDetail from './StaffDetailComponent';
import DepartmentList from './DepartmentComponent';
import SalaryList from './SalaryComnponent';
class Main extends Component {

    constructor(props) {
      super(props);
      this.state = {
          staffs: STAFFS,
          departments: DEPARTMENTS
    };
}
    render() {
      const HomePage = () => {
        return <StaffList staffs={this.state.staffs}/>;
      };
      const StaffId = ({ match }) => {
        return (
          <StaffDetail
            staff={this.state.staffs.find(
              (staff) => staff.id === +match.params.staffid
            )}
          />
        );
      };
        return (
            <div>
              <Header />
              <Switch>  
                <Route exact path='/staff' component={HomePage} />
                <Route path='/staff/:staffid' component={StaffId} />
                <Route exact path='/department' component={() => <DepartmentList departments={this.state.departments} />} />
                <Route exact path='/salary' component={() => <SalaryList staffs={this.state.staffs} />} />
                <Redirect to="/staff" />
              </Switch>
              <Footer />
            </div>
          );
          
        }
      }
      
  export default Main;