import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/ProductStyles'

export default class Product extends Component {
  
  render () {
    const { image, sku, product, color,quantity, price } = this.props.data
    return (
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image source={{uri: image}}  style={styles.image}/>
          </View>
          <View style={styles.detailWrapper}>
                <View style={styles.content_item}>
                    <Text style={styles.content_item_lable}>Product </Text>
                    <Text style={styles.content_item_txt}>{product}</Text>
                </View>
                <View style={styles.content_item}>
                    <Text style={styles.content_item_lable}>SKU </Text>
                    <Text style={styles.content_item_txt}>{sku}</Text>
                </View>
                <View style={styles.content_item}>
                    <Text style={styles.content_item_lable}>Color </Text>
                    <Text style={styles.content_item_txt}>{color}</Text>
                </View>
                <View style={styles.content_item}>
                    <Text style={styles.content_item_lable}>Quantity </Text>
                    <Text style={styles.content_item_txt}>{quantity}</Text>
                </View>
                <View style={styles.content_item}>
                    <Text style={styles.content_item_lable}>Price </Text>
                    <Text style={styles.content_item_txt}>{price}</Text>
                </View>
          </View>
          <TouchableOpacity style={styles.deleteWrapper}>
            <Image source={Images.remove}  style={styles.remove_icon}/>
          </TouchableOpacity>
        </View>
    )
  }
}
