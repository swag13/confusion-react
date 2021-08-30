import React,{ Component } from 'react';
//import { Media } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required =(val) =>val&&val.length;
const maxLength = (len)=>(val)=>!(val)||(val.length<=len)
const minLength = (len)=>(val)=>(val)&&(val.length>=len)

class CommentForm extends Component {
    constructor(props) {
       super(props);
        this.state = {
                        isModalOpen: false
                      };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleToggle=()=> {
       this.setState({
       isModalOpen: !this.state.isModalOpen
       });
    }
    handleSubmit=(values)=> {
             console.log('Dishdetail Component submit handle invoked');
              console.log("Current State is: " + JSON.stringify(values));
               alert("Current State is: " + JSON.stringify(values));
    }

     render() {
            return (
                 <React.Fragment>
                            <Button onClick={this.handleToggle}><i className="fa fa-pencil"></i>{' '}Submit Comment</Button>
                            <Modal isOpen={this.state.isModalOpen} toggle={this.handleToggle}>
                                <ModalHeader toggle={this.handleToggle}>
                                    Submit Comment
                                </ModalHeader>
                                <ModalBody>
                                 <LocalForm onSubmit={(value)=>this.handleSubmit(value)}>
                                                     <Row className="form-group">
                                                                 <Label htmlFor="rating" md={4}>Rating</Label>
                                                                 <Col md={12}>
                                                                     <Control.select model=".rating" id="rating" name="rating"
                                                                         className="form-control">
                                                                          <option>1</option>
                                                                          <option>2</option>
                                                                          <option>3</option>
                                                                          <option>4</option>
                                                                          <option>5</option>
                                                                     </Control.select>
                                                                 </Col>
                                                     </Row>
                                                     <Row className="form-group">
                                                                 <Label htmlFor="author" md={4}>Your Name</Label>
                                                                 <Col md={12}>
                                                                     <Control.text model=".author" id="author" name="author"
                                                                         placeholder="Your Name"
                                                                         className="form-control"
                                                                         validators={{
                                                                             minLength: minLength(3), maxLength: maxLength(15)
                                                                         }}
                                                                          />
                                                                     <Errors
                                                                         className="text-danger"
                                                                         model=".author"
                                                                         show="touched"
                                                                         messages={{
                                                                             minLength: 'Must be greater than 2 characters',
                                                                             maxLength: 'Must be 15 characters or less'
                                                                         }}
                                                                      />
                                                                 </Col>
                                                             </Row>
                                                             <Row className="form-group">
                                                                 <Label htmlFor="comment" md={4}>Comment</Label>
                                                                 <Col md={12}>
                                                                     <Control.textarea model=".comment" id="comment" name="comment"
                                                                         className="form-control"
                                                                         validators={{
                                                                             required
                                                                         }}
                                                                         rows="6"
                                                                          />
                                                                     <Errors
                                                                         className="text-danger"
                                                                         model=".comment"
                                                                         show="touched"
                                                                         messages={{
                                                                             required:'Comment Required'
                                                                         }}
                                                                      />
                                                                 </Col>
                                                             </Row>
                                                             <Row className="form-group">
                                                             <Col >
                                                                 <Button type="submit" color="primary" >Submit</Button>
                                                             </Col>
                                                             </Row>
                                                     </LocalForm>
                                                 </ModalBody>
                                             </Modal>
                                             </React.Fragment>

                         );
                    }
                }



        const RenderDish = ({dish, comments}) =>  {
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
           const RenderComments =({comments,dishId}) =>{

                if (comments !=  null) {
                 const comment = comments.map(commentItem=>{

                                    return(
                                    <div>
                                    <li>{commentItem.comment}</li><br />
                                    <li>-- {commentItem.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentItem.date)))}</li><br />
                                    </div>
                                )

                                }
                                );
                            return(
                                <ul className="list-unstyled">
                                <div>
                                {comment}
                                </div>
                                <CommentForm dishId={dishId} />
                                </ul>

                            )
                        }
                        else{
                            return(<div></div>)
                        }
                    }


            const Dishdetail = ({dish,comments}) => {
                if (dish != null) {return (
                                                         <LocalForm>
                                                         <div className="row">
                                                             <Breadcrumb>
                                                                 <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                                                 <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                                                             </Breadcrumb>
                                                             <div className="col-12">
                                                                 <h3>{dish.name}</h3>
                                                                 <hr />
                                                             </div>
                                                         </div>
                                                         <div className="row">
                                                             <div className="col-12 col-md-5 m-1">
                                                                 <RenderDish dish={dish} comments={comments}/>
                                                             </div>
                                                             <div className="col-12 col-md-5 m-1">
                                                                 <RenderComments comments={comments} dishId={dish.id}/>
                                                             </div>


                                                         </div>
                                                         </LocalForm>
                                                     );
                                                     }

                                                    }

         export default Dishdetail;