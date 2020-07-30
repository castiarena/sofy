import Route from '../../drivers/Route';

const keep = new Route('/keep');

keep.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

export default keep;
