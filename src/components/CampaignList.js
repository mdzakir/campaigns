import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem, togglePlay } from "../actions/itemActions";
import PropTypes from 'prop-types';
import Moment from 'react-moment';
var FontAwesome = require('react-fontawesome');

class CampaignList extends Component {

  componentDidMount(){
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  onTogglePlay = id => {
    this.props.togglePlay(id);
  };

  render() {
    const {items} = this.props.item;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="campaign-list">
            {items.map(({id, name, created_time, play}, index) => (
              <CSSTransition
                key={id}
                timeout={500}
                classNames="fade">
                <ListGroupItem style={{display: 'flex', alignItems: 'baseline'}}>
                  <span className="campaign-num">{index + 1}</span>
                  <strong className="campaign-name">Campaign {index + 1} - {name}
                    <br /><span className="campaign-created-time">Created at&nbsp;
                      <Moment format="HH:mm a">
                      {created_time}
                    </Moment></span>
                  </strong>

                  <FontAwesome name='rocket' />
                  <Button
                    className="primary-btn"
                    color="primary"
                    size="sm"
                    onClick={this.onTogglePlay.bind(this, id)}
                  >
                    {play}

                    {play ? 'Pause' : 'Play' }
                  </Button>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, id)}
                  >&times;</Button>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

/*CampaignList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  play: PropTypes.bool.isRequired
};*/

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem, togglePlay })(CampaignList);