import React from 'react';
import {
    Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem  
} from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderStaff ({staff, onClick}) {
    return (
        <Card>
            <Link to={`/staff/${staff.id}`} >
                <CardImg width="100%" src={staff.image} alt={staff.name} />
                <CardTitle>{staff.name}</CardTitle>
            </Link>
        </Card>
    );
}

function StaffList(props) {
    const staffs = props.staffs && props.staffs.map((staff) => {
        return (
            <div className="col-xs-6 col-md-3 col-lg-2" key={staff.id}>
                <RenderStaff staff={staff} onClick={props.onClick}/>
            </div>
        );
    });

    return (
            <div className="container">
                 <Breadcrumb>
                    <BreadcrumbItem>NHÂN VIÊN</BreadcrumbItem>
                </Breadcrumb>
                <div className="row">
                        {staffs}   
                </div>
            </div>
    );
}

export default StaffList;