import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';

import BoxUserPhoto from "../Box/BoxUserPhoto/BoxUserPhoto";
import "./DragAndDrop.css";

class DragAndDrop extends Component {

  constructor(props){
    super(props);

    this.state={
      dndTaskDrop: false
    }
  }


  handleDndDrop =()=>{
    this.setState({
      dndTaskDrop: !this.state.dndTaskDrop
    })
  };


  render() {
    let dndDropMenu;
    if(this.state.dndTaskDrop){
      dndDropMenu = (
          <ul className="DndDropMenu">
            <li><button onClick={this.props.removeCard} className="BtnDelete">Delete</button></li>
            <li>
              <p className="MovedTo">Moved to:</p>
              <ul className="MovedToMenu">
                <li><button>Quened</button></li>
                <li><button>Planning</button></li>
                <li><button>Design</button></li>
                <li><button>Development</button></li>
                <li><button>Testing</button></li>
                <li><button>Complete</button></li>
              </ul>
            </li>
          </ul>
      )
    }

    const { card, connectDragSource, connectDropTarget } = this.props;
    return connectDragSource(connectDropTarget(
        <div className="DnDTask">
          <div className="DndTaskInfo">
            <BoxUserPhoto imgSrc={card.userImg} alt="User1"/>
            <div className="DndProjectsDescription">
              <h3 className="DndNameProjects">{card.nameProject}</h3>
              <p className="DndNameCompany">{card.nameCompany}
                <span className="DndPriceProjects">${card.price}</span></p>
            </div>
          </div>
          <button onClick={this.handleDndDrop} className="DndTaskMenu"></button>
          {dndDropMenu}
        </div>
    ));
  }
}



const cardSource = {

  beginDrag(props) {
    return {
      index: props.index,
      listId: props.listId,
      card: props.card
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if ( dropResult && dropResult.listId !== item.listId ) {
      props.removeCard(item.index);
    }
  }
};

const cardTarget = {

  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    const sourceListId = monitor.getItem().listId;

    if (dragIndex === hoverIndex) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }
    if ( props.listId === sourceListId ) {
      props.moveCard(dragIndex, hoverIndex);
      monitor.getItem().index = hoverIndex;
    }
  }
};

export default flow(
    DropTarget("CARD", cardTarget, connect => ({
      connectDropTarget: connect.dropTarget()
    })),
    DragSource("CARD", cardSource, (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    }))
)(DragAndDrop);