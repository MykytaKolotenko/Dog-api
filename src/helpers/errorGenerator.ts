export class CustomError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

const errorGenerator = (status: number, message: string = '') => {
  switch (message) {
    case 'SequelizeUniqueConstraintError':
      return new CustomError(status, 'This dog name is in a unique constraint');

    default:
      return new CustomError(status, message || 'Something went wrong');
  }
};

export default errorGenerator;
