import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay,
    CardTitle
} from 'reactstrap';
import StaffDetail from './StaffDetailComponent';

function RenderStaff({ staff }) {
    return (
        <div className="col-xs-6 col-sm-4 col-md-2">
            <Card key={staff.id}
                onClick={() => this.onStaffSelect(staff)}>
                <CardTitle>{staff.name}</CardTitle>
            </Card>
        </div>
    );
}

function StaffList(props) {
    const staffs = props.staffs && props.staffs.map((staff) => {
        return (
            <div className="row" key={staff.id}>
                <RenderStaff staff={staff} />
            </div>
        );
    });

    return (
            <div className="container">
                <div className="row">
                        {staffs}   
                </div>
                <div className="row">
                <StaffDetail staff={this.state.staffs} />
                </div>
            </div>
    );
}

export default StaffList;