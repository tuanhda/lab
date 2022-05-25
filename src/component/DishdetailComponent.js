import React from 'react';
import { Card, CardText, CardTitle, CardImg, CardBody } from 'reactstrap';
import  dateFormat  from "dateformat";

// REnder dissh 
function RenderDish({dish}) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>             
            </Card>
            </div>
            
        );
}
// Define fuction render comment 
function RenderComments({comments}) {
    if (comments != null)
    return (
        <div className ="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <div className="container">
                {comments.map((comment) => {
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                        </li>
                    )
                })}
            </div>
        </div>
    );
    else
        return(
            <div></div>
        )             
}
// Define function Dishes Detail
const DishDetail = (props) => {
    if (props.dish != null)
        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish= {props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        )
    else
        return(
            <div></div>
        )
}

export default DishDetail;