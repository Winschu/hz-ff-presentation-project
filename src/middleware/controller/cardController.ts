import {inspect} from "util";
import {allCardsForTopicAdapter, createCardAdapter} from "../adapter/databaseAdapter";
import {Request, Response} from "express";

export const getAllCardsForTopic = async (req: Request, res: Response) => {
    const data = await allCardsForTopicAdapter(Number(req.params.topicId));
    console.log(inspect(data));
    res.json(data);
}

export const createCard = async (req: Request, res: Response) => {
    console.log(`Card Object to create: ${inspect(req.query.card)}`);
    const data = await createCardAdapter(Number(req.params.topicId), JSON.parse(String(req.query.card)));
    res.json(data);
}