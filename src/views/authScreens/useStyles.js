import useScale from '../../hooks/useScale';
import {StyleSheet} from 'react-native';
import { fullWidthCentered } from '../../styles/style';

export default function useStyles() {
  const {verticalScale,vh} = useScale();
  return {
    styles: StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems:"center"
      },
      buttons: {
        marginTop: verticalScale(22),
      },
      forgotPassStyle:{
        marginBottom: verticalScale(15)
      },
      socialButtons: {
        display: 'flex',
        flexDirection: 'row',
      },
      formOuterwrapper:{
        flex: 1,
        ...fullWidthCentered,
        justifyContent: 'flex-end',
      },
      formControl: fullWidthCentered
    }),
  };
}
