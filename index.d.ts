declare module "react-native-hide-modal" {
  import React, { ReactElement } from "react";
  import { ModalProps } from "react-native";

  interface Props {
    children: React.Component;
    id: string;
    modalProps?: ModalProps;
    modalVisible: boolean;
    hideChecked: boolean;
    invisibleDuration?: number;
  }

  interface State {
    modalVisible: boolean;
  }

  export default class HideModal extends React.Component<Props, State> {}
}
