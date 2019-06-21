import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Fonts } from '../Themes'
import Button from '../Components/Button'
// Styles
import styles from './Styles/CheckOutScreenStyles'

export default class CheckOutScreen extends Component {

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backBtn}>
                        <Icon name='arrow-back' style = {styles.icon_back}/>
                    </TouchableOpacity>
                </View>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        console.log(barcodes);
                    }}
                />
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={() => this.takePicture()} style={styles.capture}>
                        <Text style={styles.bottomText}> OK </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
