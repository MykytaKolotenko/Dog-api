import Dog from './dogModel';

(async () => {
  await Dog.sync({ force: true });

  await Dog.create({
    name: 'Neo',
    color: 'red & amber',
    weight: 32,
    tail_length: 22
  }),
    await Dog.create({
      name: 'Jessy',
      color: 'black & white',
      weight: 14,
      tail_length: 7
    });
})();
