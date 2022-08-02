import React from 'react';
import {
    Card, CardTitle, CardText, CardBody,Breadcrumb, BreadcrumbItem  
} from 'reactstrap';

function RenderDepartment({ department }) {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{department.name}</CardTitle>
                    <CardText>Số lương nhân viên: {department.numberOfStaff}</CardText>
                </CardBody>
            </Card>
        </div>

    );
}
function DepartmentList(props) {
    const departments = props.departments && props.departments.map((department) => {
        return (
            <div className="col-xs-3 col-sm-1 col-md-2" key={department.id}>
                <RenderDepartment department={department}/>
            </div>
        );
    });

    return (
            <div className="container">
                <div className="row">
                        {departments}   
                </div>
            </div>
    );
}
export default DepartmentList;