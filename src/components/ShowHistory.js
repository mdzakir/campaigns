import React, {Component} from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup , ListGroup, ListGroupItem,} from 'reactstrap';
import {connect} from 'react-redux';
import {addComment} from '../actions/itemActions';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Moment from "react-moment";

class ShowHistory extends Component{
  state = {
    modal: false,
    comment: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const { history } = this.props.item;
    return(
      <div>
        <Container style={{display:'flex', alignItems: 'baseline'}}>
          <Button
            className="default-btn"
            color="success"
            size="sm"
            onClick={this.toggle}
          >History</Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}>
            <ModalHeader
              toggle={this.toggle}>
              History
            </ModalHeader>
            <ModalBody>
              {history.length > 0 && <ListGroup>
                <TransitionGroup className="campaign-list">
                  {history.map((item, index) => {
                    const { activityBy, activityType, activityTitle, activityBody } = item;
                    return (
                      <CSSTransition
                        key={index}
                        timeout={500}
                        classNames="fade">
                        <ListGroupItem style={{display: 'flex', alignItems: 'baseline'}}>
                          <strong className="campaign-name">
                            {activityTitle}
                            <br /><span className="campaign-created-time">
                            by <strong>{activityBy}</strong></span>
                            <br /> {activityType === 'comment' ? '"' + activityBody + '"' : activityBody}
                          </strong>
                        </ListGroupItem>
                      </CSSTransition>
                    )
                  })}
                </TransitionGroup>
              </ListGroup>}

            </ModalBody>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default connect(null, {})(ShowHistory);
