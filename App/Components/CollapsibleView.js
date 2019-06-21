import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import { Colors } from '../Themes'
import styles from './Styles/CollapsibleViewStyles'

export default class CollapsibleView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSections: []
        };
    }

    _renderHeader = (section, index, isActive, sections) => {
        return (
            <View style={[styles.header, { backgroundColor: (isActive? Colors.border: 'transparent')}]}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        )
    }

    _renderContent = (section, index, isActive, sections) => {
        if(section.content.flag == 1){
            return (
                <View style={styles.content}>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>Company</Text>
                        <Text style={styles.content_item_txt}>{section.content.company}</Text>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>Name</Text>
                        <Text style={styles.content_item_txt}>{section.content.name}</Text>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>Address</Text>
                        <Text style={styles.content_item_txt}>{section.content.address}</Text>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>Country</Text>
                        <Text style={styles.content_item_txt}>{section.content.country}</Text>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>Phone</Text>
                        <Text style={styles.content_item_txt}>{section.content.phone}</Text>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>Email</Text>
                        <Text style={styles.content_item_txt}>{section.content.email}</Text>
                    </View>
                </View>
            )
        }
        else{            
            return (
                <View style={styles.content}>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>Name</Text>
                        <Text style={styles.content_item_txt}>{section.content.name}</Text>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>Address1</Text>
                        <Text style={styles.content_item_txt}>{section.content.address1}</Text>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>Address2</Text>
                        <Text style={styles.content_item_txt}>{section.content.address2}</Text>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>City</Text>
                        <Text style={styles.content_item_txt}>{section.content.city}</Text>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>Region/State</Text>
                        <Text style={styles.content_item_txt}>{section.content.state}</Text>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>Zip/Postal Code</Text>
                        <Text style={styles.content_item_txt}>{section.content.zip}</Text>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>Country</Text>
                        <Text style={styles.content_item_txt}>{section.content.country}</Text>
                    </View>
                </View>
            )
        }
    }

    _updateSections = (activeSections) => {
        this.setState({ activeSections })
    }

    render() {
        const { title } = this.props
        return (
            <View style={styles.container}>
                <Accordion
                    sections={this.props.data}
                    activeSections={this.state.activeSections}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                />
            </View>
        )
    }
}
