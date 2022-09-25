import {ParamsDictionary} from "express-serve-static-core";
import {Request} from "express";

export interface ResponseObject {
    query: string
    params: string[] | ParamsDictionary
    sender: string | number
    body: {
        length: number
        data: object | supabaseErrorObject
    },
}

interface supabaseErrorObject {
    code: string,
    details: null,
    hint: string,
    message: string
}

export interface CardObject {
    id?: number;
    topicId: number;
    question: string,
    answer: string,
    hint: string
}

export const supabaseAdapterResponse = (req: Request, response: { data: object | null, error: object | null }) => {
    return {
        query: req.url,
        params: req.params,
        sender: "Service",
        body: {
            length: 4,
            data: response.data || response.error
        }
    }
}

export const ParameterErrorResponse = (req: Request): ResponseObject => ({
    query: req.url,
    params: req.params,
    sender: "Service",
    body: {
        length: 4,
        data: {"error": "Didn't provided necessary parameters"}
    },
})

export interface AdapterResponse {
    state: "success" | "error",
    body: object;
}