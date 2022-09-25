import {Express, Request, Response} from "express";
import {createCard, getAllCardsForTopic, getCard, updateCard} from "./middleware/controller/cardController";

export const routes = (app: Express) => {
    app
        //get topic by id
        .get("/topic/:id", (req: Request, res: Response) => res.status(200).json('Get project by id: ' + req.params.id))
        //create topic
        .post("/topic", (req: Request, res: Response) => res.status(200).json('Project created'))
        //update topic
        .put("/topic", (req: Request, res: Response) => res.status(200).json({success: 'Well done this route is working perfectly'}))
        //delete topic
        .delete("/topic", (req: Request, res: Response) => res.status(500).json({error: 'Too bad this route does mean something does not work correctly'}))
        //get all cards
        .get("/topic/:topicId/cards", getAllCardsForTopic)
    app

        //get card
        .get("/cards/:cardId", getCard)
        //create card for topic
        .post("/topic/:topicId/cards", createCard)
        //edit or update card
        .put("/topic/:topicId/card/:cardId", updateCard)
};