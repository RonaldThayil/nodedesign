import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialIcons'
import styles,{fontColor} from './style'
// import CloseIcon from 'react-native-vector-icons/Ionicons'

class InputText extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <Icon name={this.props.iconname} style={styles.iconstyle} /> */}
                <TextInput
                    style={styles.inputstyle}
                    placeholder={this.props.placeholder}
                    onChangeText={this.props.onChangeText}
                    secureTextEntry={Boolean(this.props.secureTextEntry)}
                    value={this.props.value}
                    maxLength={this.props.maxLength}
                    keyboardType={this.props.keyboardType}
                    placeholderTextColor={fontColor}
                />
                {/* <CloseIcon name={this.props.CloseIconName}
                    size={this.props.CloseIconSize}
                    style={styles.closeIcon}
                    onPress={this.props.onPress}
                /> */}


            </View>
        )
    }
}


export default InputText