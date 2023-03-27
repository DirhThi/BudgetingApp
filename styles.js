/*How to use those styles:
- Go to the code file that you want to use the styles.
- Add import: 
  import styles from './styles';
- Use the style, for examples:

  export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello, world!</Text>
      </View>
    );
  }
}

  If you want to add more styles, add them here, not in other files.
*/

import { StyleSheet } from "react-native";
import { colors } from "./colors";

const styles = StyleSheet.create({

    container: {    
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 40,
        flexDirection: 'column',
    },

    //Text styles:

    headingOne: {
        fontWeight: '500',
        fontSize: 30,
        lineHeight: 36,
    },
        
    headingTwo: {
        fontWeight: '500',
        fontSize: 22,
        lineHeight: 27,
    },

    headingThree: {
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 24,
    },

    headingFour: {
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 22,
    },

    headingFive: {
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 22,
    },

    headingSix: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 17,
    },

    labelThree, subtitleOne: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
    },

    labelOne: {
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 16,
    },

    labelTwo: {
        textTransform: 'uppercase',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17,
    },

    labelThree: {
        textTransform: 'uppercase',
        fontWeight: '400',
        fontSize: 22,
        lineHeight: 27,
    },

    subtitleTwo: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 15,
    },

    subtitleThree: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 15,
    },

    subtitleFour, labelFour: {
        fontWeight: '400',
        fontSize: 8,
        lineHeight: 10,
    },

    //buttons:

    buttonGeneral: {
        borderRadius: 25,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },

    buttonLgRg: {
        position: 'absolute',
        width: 310,
        height: 43,
    },

    buttonLogin: {
        backgroundColor: colors.primary,
        color: colors.white,
    },

    buttonReg: {
        backgroundColor: colors.lightGrey,
        color: colors.primary,
    },

    buttonAdd: {
        position: 'absolute',
        width: 42,
        height: 42,
        backgroundColor: colors.primary,
        color: colors.white,
    }
})


export default styles;