import React, {Component} from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import {connect} from 'react-redux';
import {editItem} from '../actions/itemActions';

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

    // Add item via add item actions
    this.props.editItem(this.state.name, this.props.index);
    this.toggle();
  };

  componentDidMount() {
    this.setState({ name: this.props.item.name })
  }

  render() {
    return(
      <div>
        <Container style={{display:'flex', alignItems: 'baseline'}}>
          <Button
            className="default-btn"
            color="default"
            size="sm"
            onClick={this.toggle}
          >Edit</Button>
          <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}>
            <ModalHeader
            toggle={this.toggle}>
              Edit campaign
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
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  >
                  Update
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

export default connect(null, { editItem })(ItemModal);
