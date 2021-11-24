import React from 'react';
import { Text,Appearance } from 'react-native';
import { Color } from '../../../utils/colors';
//import {fontXSmall, fontSmall, fontNormal, fontLarge, fontXLarge, fontXXLarge} from 'src/utils/theme';
// import Theme from "../../../utils/ThemeUtils"
import PropTypes from 'prop-types';
import wp from '../../../utils/themeUtils';


export  var fontColor = Color.BLACK
const colorScheme = Appearance.getColorScheme();

if (colorScheme === 'dark') {
  // Use dark color scheme
  fontColor = Color.BLACK ;
}


class Label extends React.Component {

    // constructor() {
    //     super();
    //     if (Text.defaultProps == null) Text.defaultProps = {};
    //     Text.defaultProps.allowFontScaling = false;     //<--------Set allowFontScaling false for Screen
    //   }

    onClick = () => {
        if (this.props.onPress)
            this.props.onPress();
    };

    render() {
        let stylesArray = [];
        if (this.props.xxxxlarge)
            stylesArray.push({ fontSize: wp.relativeHeight(4) });
        else if (this.props.xxxlarge)
            stylesArray.push({ fontSize: wp.relativeHeight(3.4) });
        else if (this.props.xxlarge)
            stylesArray.push({ fontSize: wp.relativeHeight(2.8) });
        else if (this.props.xlarge)
            stylesArray.push({ fontSize: wp.relativeHeight(2.5) });
        else if (this.props.large)
            stylesArray.push({ fontSize: wp.relativeHeight(2.1) });
        else if (this.props.normal)
            stylesArray.push({ fontSize: wp.relativeHeight(1.9) });
        else if (this.props.small)
            stylesArray.push({ fontSize: wp.relativeHeight(1.7) });
        else if (this.props.xsmall)
            stylesArray.push({ fontSize: wp.relativeHeight(1.5) });
        else if (this.props.xxsmall)
            stylesArray.push({ fontSize: wp.relativeHeight(1.2) });
        else
            stylesArray.push({ fontSize: wp.relativeHeight(1.9) });

        if (this.props.bold)
            stylesArray.push({ fontWeight: "500" });
        else if (this.props.bolder)
            stylesArray.push({ fontWeight: "bold" });
        else if (this.props.light)
            stylesArray.push({ fontWeight: "400" });
        else if (this.props.lighter)
            stylesArray.push({ fontWeight: "200" });
        else
            stylesArray.push({ fontWeight: "normal" });

        stylesArray.push({
            color: this.props.vLabel ? this.props.color : fontColor,
            marginTop: this.props.mt,
            marginBottom: this.props.mb,
            marginStart: this.props.ms,
            marginEnd: this.props.me,
            textAlign: this.props.align,
            lineHeight: this.props.lineHeight,
            padding: this.props.padding
        });
        stylesArray.push(this.props.style);
        return (
            <Text allowFontScaling={false} numberOfLines={this.props.singleLine ? 1 : null} style={stylesArray}
                onPress={this.props.onPress ? this.onClick : null} >
                {this.props.children}
            </Text>
        );
    }
}

Label.defaultProps = {
    xxsmall: false,
    xsmall: false,
    small: false,
    normal: false,
    large: false,
    xlarge: false,
    xxlarge: false,
    bold: false,
    bolder: false,
    lighter: false,
    light: false,
    color: Color.TEXT_PRIMARY,
    roboto_regular: false,
    roboto_medium: false,
    device_info: false,
    align: "left",
    mt: 0,
    mb: 0,
    ms: 0,
    me: 0,
    padding: 0,
    singleLine: false,
    sofia_medium: false,
    poopins_regular: false,
    poopins_semibold: false
};
Label.propTypes = {
    xxsmall: PropTypes.bool,
    xsmall: PropTypes.bool,
    small: PropTypes.bool,
    normal: PropTypes.bool,
    large: PropTypes.bool,
    xlarge: PropTypes.bool,
    xxlarge: PropTypes.bool,
    bold: PropTypes.bool,
    bolder: PropTypes.bool,
    light: PropTypes.bool,
    lighter: PropTypes.bool,
    color: PropTypes.string,
    roboto_medium: PropTypes.bool,
    roboto_regular: PropTypes.bool,
    device_info: PropTypes.bool,
    mt: PropTypes.number,
    mb: PropTypes.number,
    ms: PropTypes.number,
    me: PropTypes.number,
    padding: PropTypes.number,
    align: PropTypes.string,
    singleLine: PropTypes.bool,
    sofia_medium: PropTypes.bool,
    poopins_regular: PropTypes.bool,
    poopins_semibold: PropTypes.bool
};
export default Label;