import { ValidationError } from 'sequelize';
import Dog from '../db/dogModel';
import errorGenerator from '../helpers/errorGenerator';
import ReqOptionsChecker from '../helpers/ReqOptionsChecker';
import { IAnimalRequest } from '../interfaces/IAnimal';

const getAll = async (options: ReqOptionsChecker) => {
  let { limit, offset, attribute, order } = options;

  return await Dog.findAll({
    order: [[attribute, order]],
    limit,
    offset
  });
};

const getById = async (id: number) => await Dog.findByPk(id);

const create = async (data: IAnimalRequest) => {
  try {
    const response = await Dog.create({ ...data });

    return response;
  } catch (error) {
    if (error instanceof ValidationError) {
      throw errorGenerator(404, error.errors[0].message);
    }
  }
};

const deleteByID = async (id: number) => await Dog.destroy({ where: { id } });

const update = async (data: IAnimalRequest, id: number) => {
  try {
    return await Dog.update(data, { where: { id } });
  } catch (error) {
    if (error instanceof ValidationError) {
      throw errorGenerator(404, error.errors[0].message);
    }
  }
};

export default { getAll, getById, create, update, deleteByID };
