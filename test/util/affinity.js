import * as affinity from '../../dist/util/affinity';

test(
  'Whether is `affinity.createComparator` function object.',
  () => expect(affinity.createComparator).toBeInstanceOf(Function),
);
