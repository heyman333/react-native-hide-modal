import React from "react";
import { Modal } from "react-native";
import * as AlertStorage from "./AlertStorage";

export default class HideModal extends React.Component {
  static defaultProps = {
    modalVisible: false,
    checked: false,
    invisibleDuration: null,
  };

  state = {
    modalVisible: false,
  };

  async componentDidUpdate() {
    const { modalVisible, id, invisibleDuration, checked } = this.props;

    if (!id) {
      console.warn("You did not pass a id in the checkAlert");
      return;
    }

    if (modalVisible && !this.state.modalVisible) {
      const hiddenAlert = await AlertStorage.checkHiddenAlertExist(id);
      if (!hiddenAlert) {
        this.setState({ modalVisible: true });
      }
      return;
    }

    if (!modalVisible && this.state.modalVisible) {
      this.setState({ modalVisible: false });

      if (checked) {
        AlertStorage.pushIds(id, invisibleDuration);
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
