import { Response, Request } from 'express';

const getVersion = (_req: Request, res: Response) => {
  const { VERSION } = process.env;
  res.status(200).json({ version: `Dogshouseservice.Version${VERSION}` });
};

export default { getVersion };
