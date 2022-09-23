// Initialize the JS client
import {createClient} from '@supabase/supabase-js'
import {inspect} from "util";
import {CardObject} from "../helpers";

const supabase = createClient("https://dgjkrgzwiwdioslnawzd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnamtyZ3p3aXdkaW9zbG5hd3pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM5MzI5NTMsImV4cCI6MTk3OTUwODk1M30.TXN04wE5oQkamOOZc917Yk3GYrvKmG08pEwQSN57QQU")

// Make a request

export const allCardsForTopic = async (topicId: number) => {
    console.log(`Get Cards for topicID: ${topicId}`);
    // Make a request
    const {data: dataObj, error: errObj} = await supabase
        .from('topics')
        .select(`name, cards(question, answer, hint)`)
        .eq('id', topicId)
    if (errObj) console.error(`Error: ${inspect(errObj)}`)
    else return dataObj
}

export const createCardAdapter = async (topicId: number, card: CardObject) => {
    console.log(`Get Cards for topicID: ${topicId}`);
    // Make a request
    const {data: dataObj, error: errObj} = await supabase
        .from('cards')
        .insert([card])
    if (errObj) console.error(`Error: ${inspect(errObj)}`)
    else return dataObj
}