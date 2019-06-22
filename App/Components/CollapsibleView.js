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
            activeSections: [],
            name: this.props.data[1].content.name,
            address1: this.props.data[1].content.address1,
            address2: this.props.data[1].content.address2,
            city: this.props.data[1].content.city,
            state: this.props.data[1].content.state,
            zip: this.props.data[1].content.zip,
            country: this.props.data[1].content.country,
        };
    }

    onChangeHandle = (e, key) => {
        var param = {}
        if(key == 'name') {
            this.setState({name: e})
            param = {
                name: e,
                address1: this.state.address1,
                address2: this.state.address2,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                country: this.state.country,
            }
        }
        else if(key == 'address1') {
            this.setState({address1: e})
            param = {
                name: this.state.name,
                address1: e,
                address2: this.state.address2,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                country: this.state.country,
            }
        }
        else if(key == 'address2') {
            this.setState({address2: e})
            param = {
                name: this.state.name,
                address1: this.state.address1,
                address2: e,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                country: this.state.country,
            }
        }
        else if(key == 'city') {
            this.setState({city: e})
            param = {
                name: this.state.name,
                address1: this.state.address1,
                address2: this.state.address2,
                city: e,
                state: this.state.state,
                zip: this.state.zip,
                country: this.state.country,
            }
        }
        else if(key == 'state') {
            this.setState({state: e})
            param = {
                name: this.state.name,
                address1: this.state.address1,
                address2: this.state.address2,
                city: this.state.city,
                state: e,
                zip: this.state.zip,
                country: this.state.country,
            }
        }
        else if(key == 'zip') {
            this.setState({zip: e})
            param = {
                name: this.state.name,
                address1: this.state.address1,
                address2: this.state.address2,
                city: this.state.city,
                state: this.state.state,
                zip: e,
                country: this.state.country,
            }
        }
        else {
            this.setState({country: e})
            param = {
                name: this.state.name,
                address1: this.state.address1,
                address2: this.state.address2,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                country: e,
            }
        }
        this.props.shipping(param)
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
                        <TextInput
                            ref = {'name'}
                            name = {'Name' }
                            type = {'TextInput'}
                            underlineColorAndroid = {Colors.transparent}
                            autoCapitalize = {'none'}
                            autoCorrect = {false}
                            placeholder = {'Name'}
                            placeholderTextColor = {Colors.textHintColor}
                            style = {styles.input_area}
                            returnKeyType = 'go'
                            value={this.state.name}
                            selectionColor = {Colors.textHintColor}
                            onChangeText = {(e) => this.onChangeHandle(e, 'name')}
                            maxLength = {100}/>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>Address1</Text>
                        <TextInput
                            ref = {'address1'}
                            name = {'Address1' }
                            type = {'TextInput'}
                            underlineColorAndroid = {Colors.transparent}
                            autoCapitalize = {'none'}
                            autoCorrect = {false}
                            placeholder = {'Address1'}
                            placeholderTextColor = {Colors.textHintColor}
                            style = {styles.input_area}
                            returnKeyType = 'go'
                            value={this.state.address1}
                            selectionColor = {Colors.textHintColor}
                            onChangeText = {(e) => this.onChangeHandle(e, 'address1')}
                            maxLength = {100}/>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>Address2</Text>
                        <TextInput
                            ref = {'address2'}
                            name = {'Address2' }
                            type = {'TextInput'}
                            underlineColorAndroid = {Colors.transparent}
                            autoCapitalize = {'none'}
                            autoCorrect = {false}
                            placeholder = {'Address2'}
                            placeholderTextColor = {Colors.textHintColor}
                            style = {styles.input_area}
                            returnKeyType = 'go'
                            value={this.state.address2}
                            selectionColor = {Colors.textHintColor}
                            onChangeText = {(e) => this.onChangeHandle(e, 'address2')}
                            maxLength = {100}/>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>City</Text>
                        <TextInput
                            ref = {'city'}
                            name = {'City' }
                            type = {'TextInput'}
                            underlineColorAndroid = {Colors.transparent}
                            autoCapitalize = {'none'}
                            autoCorrect = {false}
                            placeholder = {'City'}
                            placeholderTextColor = {Colors.textHintColor}
                            style = {styles.input_area}
                            returnKeyType = 'go'
                            value={this.state.city}
                            selectionColor = {Colors.textHintColor}
                            onChangeText = {(e) => this.onChangeHandle(e, 'city')}
                            maxLength = {100}/>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>Region/State</Text>
                        <TextInput
                            ref = {'state'}
                            name = {'State' }
                            type = {'TextInput'}
                            underlineColorAndroid = {Colors.transparent}
                            autoCapitalize = {'none'}
                            autoCorrect = {false}
                            placeholder = {'State'}
                            placeholderTextColor = {Colors.textHintColor}
                            style = {styles.input_area}
                            returnKeyType = 'go'
                            value={this.state.state}
                            selectionColor = {Colors.textHintColor}
                            onChangeText = {(e) => this.onChangeHandle(e, 'state')}
                            maxLength = {100}/>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>Zip/Postal Code</Text>
                        <TextInput
                            ref = {'zip'}
                            name = {'Zip' }
                            type = {'TextInput'}
                            underlineColorAndroid = {Colors.transparent}
                            autoCapitalize = {'none'}
                            autoCorrect = {false}
                            placeholder = {'Zip'}
                            placeholderTextColor = {Colors.textHintColor}
                            style = {styles.input_area}
                            returnKeyType = 'go'
                            value={this.state.zip}
                            selectionColor = {Colors.textHintColor}
                            onChangeText = {(e) => this.onChangeHandle(e, 'zip')}
                            maxLength = {100}/>
                    </View>
                    <View style={styles.content_item}>
                        <Text style={styles.content_item_lable}>Country</Text>
                        <TextInput
                            ref = {'country'}
                            name = {'Country' }
                            type = {'TextInput'}
                            underlineColorAndroid = {Colors.transparent}
                            autoCapitalize = {'none'}
                            autoCorrect = {false}
                            placeholder = {'Country'}
                            placeholderTextColor = {Colors.textHintColor}
                            style = {styles.input_area}
                            returnKeyType = 'go'
                            value={this.state.country}
                            selectionColor = {Colors.textHintColor}
                            onChangeText = {(e) => this.onChangeHandle(e, 'country')}
                            maxLength = {100}/>
                    </View>
                </View>
            )
        }
    }

    _updateSections = (activeSections) => {
        this.setState({ activeSections })
    }

    render() {
        
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
