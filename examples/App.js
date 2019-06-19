import React, { Component } from "./node_modules/react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";

import { ic_check_box, ic_check_box_outline_blank } from "./hidemodal/img";
import HideModal from "./hidemodal";

export default class App extends Component {
  state = {
    modalVisible: false,
  };

  toggleModal = modalVisible => () => {
    this.setState({ modalVisible });
  };

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  cancelModal = () => {
    this.setState({ checked: false, modalVisible: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleModal(true)}>
          <Text>modal with invisibleDuration</Text>
        </TouchableOpacity>
        <HideModal
          invisibleDuration={3000}
          modalVisible={this.state.modalVisible}
          hideChecked={this.state.checked}
          modalProps={{ transparent: true, animationType: "slide" }}
          id="testid"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContentContainer}>
              <View style={styles.checkBoxContainer}>
                <View style={styles.content}>
                  <Text>This your view</Text>
                </View>
                <TouchableOpacity
                  style={styles.innerCheckBoxContainer}
                  onPress={this.toggleChecked}
                >
                  <Image
                    source={
                      this.state.checked
                        ? ic_check_box
                        : ic_check_box_outline_blank
                    }
                    style={styles.checkBox}
                  />
                  <Text>Never show for 3 seconds</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonView}>
                <TouchableOpacity
                  hitSlop={{ top: 5, right: 5, bottom: 5, left: 5 }}
                  onPress={this.toggleModal(false)}
                >
                  <Text>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.cancelModal}
                  hitSlop={{ top: 5, right: 5, bottom: 5, left: 5 }}
                >
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </HideModal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  myView: {
    backgroundColor: "red",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    width: 30,
    height: 30,
    backgroundColor: "orange",
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  checkBoxContainer: {
    backgroundColor: "orange",
    padding: 10,
  },
  innerCheckBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox: {
    width: 20,
    height: 20,
  },
  modalContentContainer: {
    width: "88%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "rgba(222,222,111,0.56)",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  content: {
    backgroundColor: "red",
    height: 160,
    justifyContent: "center",
    alignItems: "center",
  },
});
