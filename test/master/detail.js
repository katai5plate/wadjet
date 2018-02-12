import detail from '../../dist/master/detail';
import { nature } from '../../dist/enum';

test(
  'Whether is `detail` general object.',
  () => expect(detail).toBeInstanceOf(Function),
);
test(
  'Whether possible to obtain correct value corresponding to correct input.',
  () => {
    nature.forEach((n) => {
      const desc = detail(n);
      expect(desc).toBeTruthy();
      expect(desc.communication).toBeTruthy();
      expect(desc.management).toBeTruthy();
      expect(desc.response).toBeTruthy();
      expect(desc.position).toBeTruthy();
      expect(desc.motivation).toBeTruthy();
      expect(desc.brain).toBeTruthy();
      expect(desc.business).toBeTruthy();
      expect(desc.romance).toBeTruthy();
    });
  },
);
test(
  'Whether possible to obtain empty value corresponding to incorrect input.',
  () => {
    const desc = detail('');
    expect(desc).toBeTruthy();
    expect(desc.communication).toBeFalsy();
    expect(desc.management).toBeFalsy();
    expect(desc.response).toBeFalsy();
    expect(desc.position).toBeFalsy();
    expect(desc.motivation).toBeFalsy();
    expect(desc.brain).toBeFalsy();
    expect(desc.business).toEqual({});
    expect(desc.romance).toEqual({});
  },
);
