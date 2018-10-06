import React, {Component} from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup , ListGroup, ListGroupItem,} from 'reactstrap';
import {connect} from 'react-redux';
import {addComment} from '../actions/itemActions';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import { FaPlay, FaPause, FaHistory, FaPlus, FaComment, FaPencilAlt } from 'react-icons/fa';

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
        <div className="history-wrapper" style={{display:'flex', alignItems: 'baseline'}}>
          <span
            className="tac control-button"
            color="success"
            size="sm"
            onClick={this.toggle}
          ><FaHistory /><br /> <span className="control-button-name">History</span></span>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}>
            <ModalHeader
              toggle={this.toggle}>
              <FaHistory /> History
            </ModalHeader>
            <ModalBody>
              {history.length > 0 && <ListGroup>
                <TransitionGroup className="history-list">
                  {history.map((item, index) => {
                    const { activityBy, activityType, activityTitle, activityBody } = item;
                    return (
                      <CSSTransition
                        key={index}
                        timeout={500}
                        classNames="fade">
                        <div className="history-list-item" style={{display: 'flex', alignItems: 'baseline'}}>
                          <span className={activityType + ' icon-type'}>
                               {activityType === 'create' ?  <FaPlus /> :
                                 activityType === 'rename' ? <FaPencilAlt /> :
                                   activityType === 'play' ? <FaPlay /> :
                                     activityType === 'pause' ? <FaPause /> : <FaComment />  }
                            </span>
                          <strong className="campaign-name">

                            {activityTitle}
                            <br /><span className="campaign-created-time">
                            by <strong>{activityBy}</strong></span>
                            <br /> {activityType === 'comment' ? '"' + activityBody + '"' : activityBody}
                          </strong>
                        </div>
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

export default connect(null, {})(ShowHistory);
