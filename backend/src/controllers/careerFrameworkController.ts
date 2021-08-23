import { NextFunction, Request, Response } from "express";
import { CareerFramework } from "../db/models";

export default {
  getCareerFramework: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const cf = await CareerFramework.findByPk(id);
    res.json(cf);
  },

  createFramework: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body;
      if (!name) {
        res.status(400).send("Missing 'name' parameter");
        return;
      }
      const cf = await CareerFramework.create({ name });
      res.json(cf);
    } catch (err) {
      next(err);
    }
  },
};
