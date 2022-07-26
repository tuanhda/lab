import React, {Component} from 'react';
import { Card, CardText, CardTitle, CardImg, CardBody } from 'reactstrap';
import  dateFormat  from "dateformat";

class StaffDetail extends Component {
    renderStaff(staff){
        if(staff != null){
            return(
                <Card>
                    <CardBody>
                        <CardTitle>Họ và tên: {staff.name}</CardTitle>
                        <CardText>Ngày sinh: {dateFormat(staff.doBB , 'dd/mm/yyyy')}</CardText>
                        <CardText>Ngày vào công ty: {dateFormat(staff.startDate , 'dd/mm/yyyy')}</CardText>
                        <CardText>Phòng ban: {staff.department.name}</CardText>
                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
        return(
            <div>Bấm vào tên nhân viên để xem thông tin.</div>
        )       
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                        {this.renderStaff(this.props.staff)}
                    </div>
                </div>
            </div>
        );
    }
}

export default StaffDetail;