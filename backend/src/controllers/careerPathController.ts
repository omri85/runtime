import { NextFunction, Request, Response } from "express";
import CareerPath from "../db/models/CareerPath";

export default {
  getCareerPath: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const cp = await CareerPath.findByPk(id);
      res.json(cp);
    } catch (err) {
      next(err);
    }
  },

  createCareerPath: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body;
      if (!name) {
        res.status(400).send("Missing 'name' parameter");
        return;
      }
      const cp = await CareerPath.create({ name });
      res.json(cp);
    } catch (err) {
      next(err);
    }
  },
};
