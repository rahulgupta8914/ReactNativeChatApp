import {centered} from '../../styles/style';
import {spacingFromMainScreen} from '../../constants/Geometry';
import useScale from '../../hooks/useScale';
import {StyleSheet} from 'react-native';

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
      buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      socialButtons: {
        ...centered,
        flex: 0.4,
        flexDirection: 'row',
      },
      formControl: {
        flex: 1.2,
        justifyContent: 'space-evenly',
      },
    }),
  };
}
