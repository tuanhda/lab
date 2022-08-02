import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardImg, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';

class StaffDetail extends Component {
  renderStaff(staff) {
    if (staff != null)
      return (
        <div className=" row">
        <div className="col-lg-3 col-md-4 col-xs-12">
          <img
            className="img"
            src={staff.image}
            style={{ width: "130%", height: "240px" }}
            alt={staff.name}
          />
        </div>
        <div key={staff.id} className="col-lg-9 col-md-8 col-xs-12">
          <h3> {staff.name} </h3>
          <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
          <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
          <p>Phòng ban: {staff.department.name}</p>
          <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
          <p>Số ngày đã làm thêm: {staff.overTime}</p>
        </div>
      </div>
      );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/staff">Nhân viên</Link></BreadcrumbItem>
            <BreadcrumbItem active>{this.props.staff.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-9 col-sm-9 col-md-7 col-lg-4">
            {this.renderStaff(this.props.staff)}
          </div>
        </div>
      </div>
    );
  }
}

export default StaffDetail;