import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Vibration,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner';
import Camera from 'react-native-camera';

class RNCamera extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barcode: '',
      cameraType: 'back',
      text: 'Bar Code Result',
      torchMode: 'off',
      type: '',
    };
  }

  barcodeReceived(e) {
    if (e.data !== this.state.barcode || e.type !== this.state.type);
    console.log(e);

    this.setState({
      barcode: e.data,
      text: `${e.data} (${e.type})`,
      type: e.type,
    });
  }

  onClear() {

    this.setState({
      barcode: '',
      text: '',
      type: ''
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <BarcodeScanner
          onBarCodeRead={this.barcodeReceived.bind(this)}
          style={{ flex: 1 }}
          barCodeTypes={[Camera.constants.BarCodeType.pdf417]}
          torchMode={this.state.torchMode}
          cameraType={this.state.cameraType}
        />
        <View style={styles.statusBar}>
          <Text style={styles.statusBarText}>{this.state.text}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.3} />
           <Button onPress={() => this.onClear()}  title={'Clear'}></Button>
        <TouchableOpacity />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarText: {
    fontSize: 20,
  },
});

AppRegistry.registerComponent('RNCamera', () => RNCamera);

