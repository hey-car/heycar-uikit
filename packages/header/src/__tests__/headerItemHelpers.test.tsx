import { headerClickTracking } from '../Header.constants';
import { itemOnClick } from '../utils/headerItemHelpers';

describe('headerItemHelpers', () => {
  const label = 'Test';
  const trackingFn = jest.fn();
  const onClickCB = jest.fn();

  describe('itemOnClick', () => {
    it('calls nothing if only given a label', () => {
      itemOnClick(label);

      expect(trackingFn).not.toHaveBeenCalled();
      expect(onClickCB).not.toHaveBeenCalled();
    });

    it('calls tracking function with label details, if tracking function is passed', () => {
      itemOnClick(label, trackingFn);

      expect(trackingFn).toHaveBeenCalledTimes(1);
      expect(trackingFn).toHaveBeenLastCalledWith({
        ...headerClickTracking,
        label,
      });
      expect(onClickCB).not.toHaveBeenCalled();
    });

    it('only calls onClick if given a label and onClick, but no tracking function', () => {
      itemOnClick(label, undefined, onClickCB);

      // call from previous 'it'
      expect(trackingFn).toHaveBeenCalledTimes(1);
      // call from this 'it'
      expect(onClickCB).toHaveBeenCalledTimes(1);
    });

    it('calls tracking function with label details and onClick, if given a label, tracking function and onClick function', () => {
      const newLabel = 'Test 2';

      itemOnClick(newLabel, trackingFn, onClickCB);

      expect(trackingFn).toHaveBeenCalledTimes(2);
      expect(trackingFn).toHaveBeenLastCalledWith({
        ...headerClickTracking,
        label: newLabel,
      });

      expect(onClickCB).toHaveBeenCalledTimes(2);
    });
  });
});
