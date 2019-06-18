import React from "react";
import { Modal } from "react-native";
import * as AlertStorage from "./AlertStorage";

export default class CheckAlert extends React.Component {
  static defaultProps = {
    modalVisible: false,
    checked: false,
  };

  state = {
    modalVisible: false,
  };

  async componentDidUpdate() {
    const { modalVisible, id } = this.props;

    if (modalVisible && !this.state.modalVisible) {
      const hiddenAlert = await AlertStorage.checkHiddenAlertExist(id);
      if (!hiddenAlert) {
        this.setState({ modalVisible: true });
      }
      return;
    }

    if (!this.props.modalVisible && this.state.modalVisible) {
      this.setState({ modalVisible: false });

      if (this.props.checked) {
        AlertStorage.pushIds(id);
      }
    }
  }

  render() {
    const { children, modalProps } = this.props;
    const { modalVisible } = this.state;

    return (
      <Modal {...modalProps} visible={modalVisible}>
        {children}
      </Modal>
    );
  }
}
