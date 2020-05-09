import {centered} from '../../styles/style';
import {spacingFromMainScreen} from '../../constants/Geometry';
import useScale from '../../hooks/useScale';
import { StyleSheet } from 'react-native';

export default function useStyles() {
  const {verticalScale} = useScale();
  return {
    styles: StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'space-evenly',
        paddingLeft: spacingFromMainScreen,
        paddingRight: spacingFromMainScreen,
      },
      formControl: {
        marginBottom: verticalScale(spacingFromMainScreen),
      },
      buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: verticalScale(20),
        marginBottom: verticalScale(15),
      },
      socialButtons: {
        ...centered,
        flex: 0,
        flexDirection: 'row',
        marginBottom: verticalScale(20),
      },
    }),
  };
}


// export default {
//   container: {
//     flex: 1,
//     justifyContent: 'space-evenly',
//     paddingLeft: spacingFromMainScreen,
//     paddingRight: spacingFromMainScreen,
//   },
//   formControl: {
//     marginBottom: spacingFromMainScreen,
//   },
//   buttons: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//     marginBottom: 15,
//   },
//   socialButtons: {
//     ...centered,
//     flex: 0,
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
// };
