import Animal from './animalModel';

(async () => {
  await Animal.create({
    name: 'Neo',
    color: 'red & amber',
    weight: 32,
    tail_length: 22
  }),
    await Animal.create({
      name: 'Jessy',
      color: 'black & white',
      weight: 14,
      tail_length: 7
    });
})();
