import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay,
    CardTitle
} from 'reactstrap';
import StaffDetail from './StaffDetailComponent';

class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null
        }
    }

    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff });
    }
    render() {
        const staffs = this.props.staffs.map((staff) => {
            return (
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <Card key={staff.id}
                        onClick={() => this.onStaffSelect(staff)}>
                        <CardTitle>{staff.name}</CardTitle>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                        {staffs}   
                </div>
                <div className="row">
                <StaffDetail staff={this.state.selectedStaff} />
                </div>
            </div>
        );
    }
}
export default StaffList;