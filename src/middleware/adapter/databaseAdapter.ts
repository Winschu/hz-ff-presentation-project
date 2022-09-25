// Initialize the JS client
import {createClient} from '@supabase/supabase-js'
import {inspect} from "util";
import {CardObject, supabaseAdapterResponse as response} from "../helpers";
import {Request} from "express";

const supabase = createClient("https://dgjkrgzwiwdioslnawzd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnamtyZ3p3aXdkaW9zbG5hd3pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM5MzI5NTMsImV4cCI6MTk3OTUwODk1M30.TXN04wE5oQkamOOZc917Yk3GYrvKmG08pEwQSN57QQU")

// Make a request

export const allTopicsAdapter = async (req: Request) => response(req, await supabase
    .from('topics')
    .select(`name`));

export const allCardsForTopicAdapter = async (req: Request) => response(req, await supabase
    .from('topics')
    .select(`name, cards(question, answer, hint)`)
    .eq('id', req.params.topicId));

export const allCardsAdapter = async (req: Request) => response(req, await supabase
    .from('cards')
    .select(`name`));

export const getCardAdapter = async (req: Request) => response(req, await supabase
    .from('cards')
    .select(`question, answer, hint`)
    .eq('id', req.params.cardId))

export const createCardAdapter = async (req: Request, card: CardObject) => response(req, await supabase
        .from('cards')
        .insert([card]));