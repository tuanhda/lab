import React, { useState } from "react";
import {
    Button,
    Card,
    CardText,
    Jumbotron,
    BreadcrumbItem,
    Breadcrumb,
    CardBody,
    CardTitle
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderSalary({ staff }) {
    const scale = staff.salaryScale;
    const time = staff.overTime;
    return(
    <Card>
        <CardBody>
            <CardTitle>Họ và tên: {staff.name}</CardTitle>
            <CardText>Mã nhân viên: {staff.id}</CardText>
            <CardText>Hệ số lương: {staff.salaryScale}</CardText>
            <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
            <CardText>Lương: {scale * 3000000 + time * 200000}</CardText>
        </CardBody>
    </Card>
    )
}

function SalaryList(props) {
    const salaries = props.staffs && props.staffs.map((staff) => {
        return (
            <div className="col-xs-3 col-sm-1 col-md-2" key={staff.id}>
                <RenderSalary staff={staff} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/staff">Nhân viên</Link></BreadcrumbItem>
                    <BreadcrumbItem>Bảng lương</BreadcrumbItem>
                </Breadcrumb>
                {salaries}
            </div>
        </div>
    );
}

export default SalaryList;
