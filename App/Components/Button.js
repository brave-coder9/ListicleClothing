import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/ButtonStyles'

export default class Button extends Component {
  static defaultProps = { show: true }

  static propTypes = {
    title: PropTypes.string,
    style: PropTypes.object
  }

  render () {
    const { title } = this.props
    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        onPress={() => this.props.onPress()}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title && title.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
