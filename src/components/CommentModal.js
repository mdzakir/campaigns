import React, {Component} from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup , ListGroup, ListGroupItem,} from 'reactstrap';
import {connect} from 'react-redux';
import {addComment} from '../actions/itemActions';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Moment from "react-moment";
import { FaComment } from 'react-icons/fa';

class CommentModal extends Component{
  state = {
    modal: false,
    comment: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = (e) => {
    this.setState({comment: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault();

    // Add item via add item actions
    this.props.addComment(this.state.comment, this.props.index);
    this.toggle();
  };

  render() {
    const { comments } = this.props.item;
    return(
      <div>
        <div style={{display:'flex', alignItems: 'baseline'}}>
          <span
            className="tac control-button comment-btn"
            color="success"
            size="sm"
            onClick={this.toggle}
          ><FaComment/> <br /> <span className="control-button-name">Comment</span>
          </span>
          <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}>
            <ModalHeader
            toggle={this.toggle}>
              Comments
            </ModalHeader>
            <ModalBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Input
                    name="comment"
                    type="text"
                    id="item"
                    placeholder="Your Comment"
                    onChange={this.onChange}
                  />
                  <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  >
                  Add Comment
                  </Button>
                </FormGroup>
              </Form>

              {comments.length > 0 && <ListGroup>
                <TransitionGroup className="campaign-list">
                  {comments.map((item, index) => {
                    const { commentTime, commentBy, commentText } = item;
                    return (
                      <CSSTransition
                        key={index}
                        timeout={500}
                        classNames="fade">
                        <ListGroupItem style={{display: 'flex', alignItems: 'baseline'}}>
                          <strong className="campaign-name">{commentText}
                            <br /><span className="campaign-created-time">Commented on&nbsp;
                              <Moment format="HH:mm a">{commentTime}</Moment> by {commentBy}</span>
                          </strong>
                        </ListGroupItem>
                      </CSSTransition>
                    )
                  })}
                </TransitionGroup>
              </ListGroup>}

            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

export default connect(null, { addComment })(CommentModal);
