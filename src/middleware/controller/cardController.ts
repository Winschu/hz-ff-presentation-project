import {inspect} from "util";
import {allCardsForTopicAdapter, createCardAdapter, getCardAdapter} from "../adapter/databaseAdapter";
import {Request, Response} from "express";
import {ParameterErrorResponse, ResponseObject} from "../helpers";

export const getAllCardsForTopic = async (req: Request, res: Response<ResponseObject>) => {
    if(!req.params.topicId) {
        res.status(500).json(ParameterErrorResponse(req));
    } else {
        res.status(200).json(await allCardsForTopicAdapter(req));
    }
}

export const getCard = async (req: Request, res: Response) => {
    if(!req.params.cardId) {
        res.status(500).json(ParameterErrorResponse(req));
    } else {
        const data = await getCardAdapter(req);
        console.log(inspect(data));
        res.json(data);
    }
}

export const createCard = async (req: Request, res: Response) => {
    console.log(`Card Object to create: ${inspect(req.query.card)}`);
    const data = await createCardAdapter(req, JSON.parse(String(req.query.card)));
    res.json(data);
}

export const updateCard = async (req: Request, res: Response) => {
    if(!req.params.topicId || !req.params.cardId) {
        res.status(500).json(ParameterErrorResponse(req));
    } else {
        res.status(200).json(await createCardAdapter(req, JSON.parse(String(req.query.card))));
    }
}