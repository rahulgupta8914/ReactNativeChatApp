import {useWindowDimensions, PixelRatio} from 'react-native';
import {GUIDE_LINE_HEIGHT, GUIDE_LINE_WIDTH} from '../constants/Geometry';

export default function useScale() {
  const windowHeight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;

  /**
   * [use it for scaling height]
   * @param  {[Number]} size [description]
   * @return {[Number]}      [description]
   */
  const verticalScale = size => {
    if (windowHeight < 600) {
      return (600 / GUIDE_LINE_HEIGHT) * size;
    } else if (windowHeight < 700) {
      return (700 / GUIDE_LINE_HEIGHT) * size;
    } else {
      return (windowHeight / GUIDE_LINE_HEIGHT) * size;
    }
  };

  /**
   * [use it for scaling width]
   * @param  {[Number]} size [description]
   * @return {[Number]}      [description]
   */
  const horizentalScale = size => (windowWidth / GUIDE_LINE_WIDTH) * size;

  /**
   * [use it for scaling font]
   * @param  {[Number]} size [description]
   * @return {[Number]}      [description]
   */
  const scaleFont = size => size * PixelRatio.getFontScale();

  return {
    verticalScale,
    horizentalScale,
    scaleFont,
  };
}
