import { StyleSheet, Appearance } from 'react-native'
import wh from '../../../utils/themeUtils'
import { Color } from '../../../utils/colors'
import { fontColor } from '../label';

export var fontcolor = Color.BLACK


const colorScheme = Appearance.getColorScheme();

if (colorScheme === 'dark')
    fontColor = Color.BLACK

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
    marginVertical:wh.relativeHeight(1),
        borderColor:Color.DARK_GREY,
        backgroundColor:Color.WHITE,
        borderRadius:25,
        borderWidth:2,
        height:wh.relativeHeight(7),
        width:wh.relativeWidth(75),
        alignItems:'center'

    },
    iconstyle: {
        fontSize:25,
        color:Color.BLACK,
        marginLeft:wh.relativeWidth(4)
    },
    inputstyle: {
       color:fontColor,

    },
    closeIcon: {
        position:'absolute',
        right:13,
        color:fontcolor
    }

})

export default styles;