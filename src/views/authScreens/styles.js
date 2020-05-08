import {centered} from '../../styles/style';
import {spacingFromMainScreen} from '../../constants/Geometry';
export default {
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingLeft: spacingFromMainScreen,
    paddingRight: spacingFromMainScreen,
  },
  formControl: {
    marginBottom: spacingFromMainScreen,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 15,
  },
  socialButtons: {
    ...centered,
    flex: 0,
    flexDirection: 'row',
    marginBottom: 20,
  },
};
