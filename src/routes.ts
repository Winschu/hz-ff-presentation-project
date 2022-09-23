import {Express, Request, Response} from "express";
import {createCard, getAllCards} from "./middleware/controller/cardController";

export const routes = (app: Express) => {
    app
        .get("/project/:id", (req: Request, res: Response) => res.status(200).json('Get project by id: ' + req.params.id))
        .post("/project", (req: Request, res: Response) => res.status(200).json('Project created'))
        .put("/project", (req: Request, res: Response) => res.status(200).json({success: 'Well done this route is working perfectly'}))
        .delete("/project", (req: Request, res: Response) => res.status(500).json({error: 'Too bad this route does mean something does not work correctly'}))

    app
        //get all cards
        .get("/topic/:topicId/cards", getAllCards)
        //get card
        .get("/project/:projectId/cards/:cardId", (req: Request, res: Response) => {

        })
        //create card for topic
        .post("/topic/:topicId/cards", createCard)
        //edit or update card
        .put("/project/:projectId/card/:cardId", (req: Request, res: Response) => {

        })
};