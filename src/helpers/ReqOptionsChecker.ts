import errorGenerator from './errorGenerator';

export default class ReqOptionsChecker {
  public readonly limit: number;
  public readonly offset: number;
  public readonly attribute: string;
  public readonly order: string;

  constructor(per_page: any, page: any, attribute: any, order: any) {
    this.limit = this.checkLimit(page);
    this.offset = this.checkOffset(per_page);
    this.attribute = this.checkAttribute(attribute);
    this.order = this.checkOrder(order);
  }

  private checkLimit = (limit: any): number => {
    const number = Number(limit);
    if (number === undefined || number < 0 || Number.isNaN(number)) return 5;
    if (number > 10) return 10;

    return number;
  };

  private checkOffset = (per_page: any): number => {
    const number = Number(per_page);
    if (number === undefined || number < 1 || Number.isNaN(number)) return 0;

    return (number - 1) * this.limit;
  };

  private checkOrder = (order: any): string => {
    if (order === undefined) return 'asc';
    if (order !== 'asc' && order !== 'desc')
      throw errorGenerator(404, 'value must be desc of asc');

    return order;
  };

  private checkAttribute = (atribute: any) => {
    if (atribute === undefined) return 'id';

    if (
      atribute !== 'name' &&
      atribute !== 'weight' &&
      atribute !== 'color' &&
      atribute !== 'tail_length'
    )
      throw errorGenerator(404, 'Incorrect value for attribute');

    return atribute;
  };
}
