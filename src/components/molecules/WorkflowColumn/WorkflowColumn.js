import React, {Component} from "react";
import update from "react-addons-update";
import DragAndDrop from "../../atoms/DragAndDrop/DragAndDrop";
import {DropTarget} from "react-dnd";
import "./WorkflowColumn.css";

class WorkflowColumn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: props.list
    };
  }

  pushCard(card) {
    this.setState(update(this.state, {
      cards: {
        $push: [card]
      }
    }));
  }

  removeCard(index) {

    this.setState(update(this.state, {
      cards: {
        $splice: [
          [index, 1]
        ]
      },
    }));
  }

  moveCard(dragIndex, hoverIndex) {
    const {cards} = this.state;
    const dragCard = cards[dragIndex];

    this.setState(update(this.state, {
      cards: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      }
    }));
  }

  render() {
    const {cards} = this.state;
    const {connectDropTarget} = this.props;

    let workflowColPrice = 0;

    cards.forEach(function (price) {
      workflowColPrice += price.price;
    });

    return connectDropTarget(
        <div>
          <header className="WorkflowColHeader">
            <h2>{this.props.name}</h2>
            <p className="WorkflowNameCol">{cards.length} {cards.length === 1 && 21 && 31 ? "project": "projects"}
              <span className="WorkflowColPrice">${workflowColPrice}</span></p>
          </header>
          <div className="WorkflowColumn">
            {cards.map((card) => {
              return (
                  <DragAndDrop
                      key={card.id}
                      listId={this.props.id}
                      card={card}
                      removeCard={this.removeCard.bind(this)}
                      moveCard={this.moveCard.bind(this)}/>
              );
            })}
          </div>
        </div>
    );
  }
}

const cardTarget = {
  drop(props, monitor, component) {
    const {id} = props;
    const sourceObj = monitor.getItem();
    if (id !== sourceObj.listId) component.pushCard(sourceObj.card);
    return {
      listId: id
    };
  }
};

export default DropTarget("CARD", cardTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(WorkflowColumn);