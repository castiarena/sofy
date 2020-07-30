import keep from '.';
import Route from '../../drivers/Route';

describe('Keep route test suite', () => {
  it('should be a Route instance', () => {
    expect(keep).toBeInstanceOf(Route);
  });
});
