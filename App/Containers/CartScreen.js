import React, { Component } from 'react'
import { ImageBackground, Text, TextInput, View, ScrollView } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'

import { Colors } from '../Themes'
import Button from '../Components/Button'
import CollapsibleView from '../Components/CollapsibleView'
import Product from '../Components/Product'
// Styles
import styles from './Styles/CartScreenStyles'

const SECTIONS = [
    {
      title: 'Account Info/Billing',
      content: {
            flag: 1,
            company: '1982fasdfasdfsadf sadfasdfasdfasd sadfasdfsadf',
            name: 'Besi',
            address: '11sdfsdf',
            country: 'United States',
            phone: '12345679',
            email: 'abc@gmail.com',
        }
    },
    {
      title: 'Shipping',
      content: {
            flag: 2,
            name: 'Besi',
            address1: '11sdfsdf',
            address2: '2222',
            city: 'city',
            state: 'LA',
            zip: '91604',
            country: 'United States',
        }
    },
  ];
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
  
export default class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venueList: [],
            value: '',
            username: '',
            activeSections: [0],
            shipping: {
                name: SECTIONS[1].content.name,
                address1: SECTIONS[1].content.address1,
                address2: SECTIONS[1].content.address2,
                city: SECTIONS[1].content.city,
                state: SECTIONS[1].content.state,
                zip: SECTIONS[1].content.zip,
                country: SECTIONS[1].content.country,
            },
        };
    }

    onChangeVenue = (val) => {

    }

    updateShipping = (val) => {
        console.log({val})
    }

    onPress = (index) => {
        if(index == 1) { // add item
            this.props.navigation.navigate('ScanCodeScreen')
        }
        else{ // submit order
            this.props.navigation.navigate('CheckOutScreen')
        }
    }  

    render () {
        console.log(this.state.shipping)
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.controlWrapper}>
                        <Text allowFontScaling={false} style={styles.txtLabel}>Select show:&nbsp;&nbsp;</Text>
                        <Dropdown
                            value={this.state.value}
                            dropdownOffset={{ top: 10, left: 0 }}
                            onChangeText={(val) => this.onChangeVenue(val)}
                            data={this.state.venueList}
                            rippleCentered={true}
                            fontSize={14}
                            inputContainerStyle={styles.inputContainer}
                            containerStyle={styles.dropdownContainer}
                        />
                    </View>
                    <View style={styles.controlWrapper}>
                        <Text allowFontScaling={false} style={styles.txtLabel}>Select user:&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                        <TextInput
                            ref = {'user'}
                            name = {'User' }
                            type = {'TextInput'}
                            underlineColorAndroid = {Colors.transparent}
                            autoCapitalize = {'none'}
                            autoCorrect = {false}
                            placeholder = {'User'}
                            placeholderTextColor = {Colors.textHintColor}
                            style = {styles.input_area}
                            returnKeyType = 'go'
                            selectionColor = {Colors.textHintColor}
                            onChangeText = {(username) => { this.setState({username})}}
                            maxLength = {100}/>
                    </View>
                    { SECTIONS.length > 0 ?
                        <View style={styles.controlInfo}>
                            <CollapsibleView data={SECTIONS} shipping={(shipping) => this.setState({shipping})}/>
                        </View>
                        : null
                    }    
                    { PRODUCTS.length > 0 ? 
                        <View style={styles.controlInfo}>
                        {
                            PRODUCTS.map((item) =>{
                                return (
                                    <Product key={item.sku} data={item} />
                                )
                            })
                        }
                            <View style={styles.total_item}>
                                <Text style={styles.total_item_lable}>Order Total </Text>
                                <Text style={styles.total_item_txt}>200</Text>
                            </View>
                        </View>
                        : null
                    }
                    <View style={styles.btnWrapper}>
                        <Button title={'Add Item'} style={styles.btnAdd} textStyle={{color: Colors.white}} onPress={()=>this.onPress(1)} />
                        <Button title={'Submit Order'} style={styles.btnSubmit} textStyle={{color: Colors.white}} onPress={()=>this.onPress(2)} />
                    </View>                    
                </View>
            </ScrollView>
        )
    }
}
