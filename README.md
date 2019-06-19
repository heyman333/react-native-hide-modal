# react-native-hide-modal

[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/heyman333/react-native-responsive-fontSize/pulls)
[![Platform](https://img.shields.io/badge/platform-react--native-lightgrey.svg)](http://facebook.github.io/react-native/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/heyman333/react-native-responsive-fontSize/blob/master/LICENSE)

#### Modal component that provides the ability to hide

<hr />

### props

<table>
      <thead>
        <tr>
          <th></th>
          <th>type</th>
          <th>default</th>
          <th>required</th>
          <th>desc</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>children</th>
          <td>component</td>
          <td>undefined</td>
          <td>true</td>
          <td>Your modal view with check option</td>
        </tr>
        <tr>
          <th>id</th>
          <td>string</td>
          <td>undefined</td>
          <td>true</td>
          <td>It is used as a key value to distinguish the modal <strong>(important)</strong></td>
        </tr>
        <tr>
          <th>modalProps</th>
          <td>object</td>
          <td>undefined</td>
          <td>false</td>
          <td>RN's modal property except for <b>visible</b>
            <br/>
            <a herf="https://facebook.github.io/react-native/docs/modal#props-1" target="_blank" >Official document</a>
          </td>
        </tr>
        <tr>
          <th>modalVisible</th>
          <td>string</td>
          <td>false</td>
          <td>true</td>
          <td>Basically, determine if modal is visible or not</td>
        </tr>
        <tr>
          <th>hideChecked</th>
          <td>boolean</td>
          <td>false</td>
          <td>true</td>
          <td>Indicates whether the user checked the checkbox.
It does not work if the prop does not pass properly.</td>
        </tr>
        <tr>
          <th>invisibleDuration</th>
          <td>number</td>
          <td>null</td>
          <td>false</td>
          <td>Assuming the data is set, decide how long to hide the modal. Modal is not visible permanently unless you pass the duration <i>(millisecond)</i></td>
        </tr>
      </tbody>
</table>

### screenshots

<img src="img/default.gif" alt="screenshot1" height="550" />
<img src="img/withInvisibleDuration.gif" alt="screenshot1" height="550" style="margin-left: 30px"/>
