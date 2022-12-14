import { MapController } from "@modules/map/infra/http/controllers/MapController";
import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { routeAdapter } from "../adapters/routeAdapter";


const mapRoutes = Router();

const mapController = new MapController();

mapRoutes.post("/", celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }), 
  routeAdapter(mapController, 'create')
  );

  mapRoutes.get("/", routeAdapter(mapController, 'list'))

export { mapRoutes }