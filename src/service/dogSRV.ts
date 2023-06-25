import Dog from '../db/dogModel';
import errorGenerator from '../helpers/errorGenerator';
import { IAnimalCreate } from '../interfaces/IAnimal';

Dog.sync();

const getAll = async () => await Dog.findAll();

const getById = async (id: number) => await Dog.findByPk(id);

const create = async (data: IAnimalCreate) => {
  try {
    const response = await Dog.create({ ...data });
    Dog;
    return response;
  } catch (error) {
    if (
      error instanceof Error &&
      error.name === 'SequelizeUniqueConstraintError'
    ) {
      throw errorGenerator(400, error.name);
    }
  }
};

const deleteByID = async (id: number) => await Dog.destroy({ where: { id } });

const update = async (data: IAnimalCreate, id: number) =>
  await Dog.update(data, { where: { id } });

export default { getAll, getById, create, update, deleteByID };
