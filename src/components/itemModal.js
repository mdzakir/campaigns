import React, {Component} from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';
import uuid from 'uuid';

class ItemModal extends Component{
  state = {
    modal: false,
    name: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: this.state.name,
      created_time: new Date(),
      play: false,
      comments: [],
      history:[
        {
          activityTime: new Date(),
          activityBy: 'Zakir',
          activityTitle: 'Campaign Created!',
          activityType: 'create',
          activityBody: ''
        }
      ]
    };
    this.props.addItem(newItem);
    this.toggle();
  };

  render() {
    return(
      <div>
        <Container style={{display:'flex', alignItems: 'baseline'}}>
          <h5>Campaign List</h5>
          <Button
          color="primary"
          size="sm"
          style={{marginBottom: '2rem', marginLeft: '2rem'}}
          onClick={this.toggle}>
            + Create new
          </Button>
          <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}>
            <ModalHeader
            toggle={this.toggle}>
              Create a new campaign
            </ModalHeader>
            <ModalBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label
                  for="item">Campaign name
                  </Label>
                  <Input
                    name="name"
                    type="text"
                    id="item"
                    placeholder="Enter an campaign name"
                    onChange={this.onChange}
                  />
                  <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  >
                  Save
                  </Button>
                </FormGroup>
              </Form>
            </ModalBody>
          </Modal>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);
