import React from 'react';
//import { Media } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


        /* constructor(props) {
                 super(props);

                 this.state = {
                     selectedDish: null
                 }
             }*/

         /*onDishSelect(dish) {
                 this.setState({ selectedDish: dish});
             }*/


        function RenderDish({dish}) {
         console.log('Dishdetail Component render dish invoked');
                if (dish != null)
                    return (
                        <Card className="col-12 col-md-5 m-1">
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    );
                else
                    return (
                        <div></div>
                    );
            }
            function RenderComments({comments}) {
            console.log('Dishdetail Component render comments invoked');
                if (comments !=  null) {
                    console.log('Dishdetail Component renderComments not null invoked');
                    return (
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {comments.map(comment => (
                                <ul className="list-unstyled">
                                    <li>
                                        <p>{comment.comment}</p>
                                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                    </li>
                                </ul>
                            )
                            )}
                        </div>
                    );
                }
                else {
                    return (
                        <div></div>
                    );

                }
            }

            const Dishdetail = (props) => {
            console.log('Dishdetail Component render invoked');
                if (props.dish != null) {
                        <div class = "container">
                        <div className="row">
                            <RenderDish dish = {props.dish}/>
                            <RenderComments comments = {props.dish.comments}/>
                        </div>
                        </div>
                } else {
                   <div></div>
                }
                return (
                    <div className="container">

                    </div>
                );
            }

         export default Dishdetail;

        /* render() {
         console.log('Dishdetail Component render invoked');
         if (this.props.dish != null)
            return (
                <div class = "container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comment)}
                </div>
                </div>

            )
         }*/