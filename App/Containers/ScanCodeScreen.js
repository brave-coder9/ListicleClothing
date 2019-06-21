import React, { Component } from 'react'
import { ImageBackground, Text, Image, View, TouchableOpacity, TextInput } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import Modal from 'react-native-modal'
import { Colors, Fonts } from '../Themes'
import Button from '../Components/Button'
import Product from '../Components/Product'
// Styles
import styles from './Styles/ScanCodeScreenStyles'

const PRODUCTS = [
    {
      sku: 'LJ107',
      image: 'https://cdn.filestackcontent.com/1mKmPcK9QnenrcK2sjmg',
      product: 'Cloth',
      quantity: 1,
      color: 'red',
      price: 100,
    },
    {
      sku: 'LJ1072',
      image: 'https://cdn.filestackcontent.com/1mKmPcK9QnenrcK2sjmg',
      product: 'Cloth',
      quantity: 1,
      color: 'red',
      price: 100,
    },
];
export default class ScanCodeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            product: null,
            sku: '',
        };
    }

    endHandle = () => {
        this.setState({product: PRODUCTS[0]})
    }

    onPress = (e) => {
        if(e == 'cancel'){
            this.props.navigation.navigate('CartScreen')
        }
        else{
            this.setState({isOpen: true})
        }
    }

    onModalPress = (e) => {
        this.setState({isOpen: false}, () => {
            if(e == 'add'){
                this.props.navigation.navigate('CartScreen')
            }
        })        
    }

    onSuccess = (e) => {
        console.log({ e })
    }

    render() {
        return (
            <View style={styles.container}>
                <QRCodeScanner
                    onRead={this.onSuccess}
                    cameraStyle={styles.camera}
                    topContent={
                        <View style={styles.btnWrapper}>
                            <Button title={'Cancel'} style={styles.btnCancel} textStyle={{color: Colors.white, fontSize: Fonts.size.medium }} onPress={()=>this.onPress('cancel')} />
                            <Button title={'Not working? Type name'} style={styles.btnTypeName} textStyle={{color: Colors.white, fontSize: Fonts.size.medium}} onPress={()=>this.onPress('type name')} />
                        </View>
                    }
                />
                <Modal isVisible={this.state.isOpen}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalBody}>
                            <View style={styles.searchView}>
                                <Text style={styles.txtLabel}>SKU: </Text>
                                <TextInput
                                    ref = {'sku'}
                                    name = {'SKU' }
                                    type = {'TextInput'}
                                    underlineColorAndroid = {Colors.transparent}
                                    autoCapitalize = {'none'}
                                    autoCorrect = {false}
                                    placeholder = {'SKU'}
                                    placeholderTextColor = {Colors.textHintColor}
                                    style = {styles.input_area}
                                    returnKeyType = 'go'
                                    selectionColor = {Colors.textHintColor}
                                    onChangeText = {(sku) => { this.setState({sku})}}
                                    onSubmitEditing={()=>this.endHandle()}
                                    onEndEditing={()=>this.endHandle()}
                                    maxLength = {100}/>
                            </View>
                            {
                                this.state.product ?
                                    <View style={styles.productStyle}>
                                        <View style={styles.imageWrapper}>
                                            <Image source={{uri: this.state.product.image}}  style={styles.image}/>
                                        </View>
                                        <View style={styles.detailWrapper}>
                                            <View style={styles.content_item}>
                                                <Text style={styles.content_item_lable}>Product </Text>
                                                <Text style={styles.content_item_txt}>{this.state.product.product}</Text>
                                            </View>
                                            <View style={styles.content_item}>
                                                <Text style={styles.content_item_lable}>SKU </Text>
                                                <Text style={styles.content_item_txt}>{this.state.product.sku}</Text>
                                            </View>
                                            <View style={styles.content_item}>
                                                <Text style={styles.content_item_lable}>Color </Text>
                                                <Text style={styles.content_item_txt}>{this.state.product.color}</Text>
                                            </View>
                                            <View style={styles.content_item}>
                                                <Text style={styles.content_item_lable}>Price </Text>
                                                <Text style={styles.content_item_txt}>{this.state.product.price}</Text>
                                            </View>
                                        </View>
                                    </View>
                                : null
                            }
                        </View>
                        <View style={styles.btnWrapper}>
                            <Button title={'Cancel'} style={styles.btnModalCancel} textStyle={{color: Colors.white, fontSize: Fonts.size.small }} onPress={()=>this.onModalPress('cancel')} />
                            <Button title={'Add'} style={styles.btnModalAdd} textStyle={{color: Colors.white, fontSize: Fonts.size.small}} onPress={()=>this.onModalPress('add')} />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}
