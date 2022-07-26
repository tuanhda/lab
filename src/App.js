import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import StaffList from './component/StaffListComponent';
import { STAFFS } from './shared/staffs';


class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       staffs: STAFFS
     };
   }

  render() {
    return(
      <div>
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand>Ứng dụng quản lý nhân sự V1.0</NavbarBrand>
          </div>
      </Navbar>
      <StaffList staffs={this.state.staffs}/>
      </div>
    )
  }
}
export default App;
