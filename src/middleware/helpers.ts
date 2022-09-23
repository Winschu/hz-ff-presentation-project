export interface ResponseObject {
    query: string
    params: string[]
    body: string,
    err: Error
}

export interface CardObject {
    id?: number;
    topicId: number;
    question: string,
    answer: string,
    hint: string
}