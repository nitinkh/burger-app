import React, { Component } from "react";
import classes from "./Modal.css";
import WrapperComponent from "../../../hoc/WrapperComponent/WrapperComponent";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <WrapperComponent>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? 1 : 0
          }}
        >
          {this.props.children}
        </div>
      </WrapperComponent>
    );
  }
}

export default Modal;
