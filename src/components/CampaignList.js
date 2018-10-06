import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem, editItem, togglePlay } from "../actions/itemActions";
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import ItemModal from "./itemModal";
import EditModal from "./editModal";
import CommentModal from "./CommentModal";
import ShowHistory from './ShowHistory';

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

  onClose = () => {
    this.setState({ editing: false });
  };

  render() {
    const {items} = this.props.item;
    return (
      <Container>
        <ItemModal
          onClose={this.onClose}
        />
        <ListGroup>
          <TransitionGroup className="campaign-list">
            {items.map((item, index) => {
              const { id, name, created_time, play } = item;
              return (
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

                  <ShowHistory index={index} item={item} />
                  <Button
                    className="primary-btn"
                    color="primary"
                    size="sm"
                    onClick={this.onTogglePlay.bind(this, id)}
                  >
                    {play}

                    {play ? 'Pause' : 'Play' }
                  </Button>
                  <CommentModal index={index} item={item} />
                  <EditModal index={index} item={item} />
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, id)}
                  >&times;</Button>
                </ListGroupItem>
              </CSSTransition>
              )
            })}
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

export default connect(mapStateToProps, { getItems, deleteItem, editItem, togglePlay })(CampaignList);