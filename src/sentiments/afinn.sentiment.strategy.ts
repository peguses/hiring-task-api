import Sentiment from "sentiment";

export const process = async (comment: string) => {

    console.log(comment);   

    const sentiment = new Sentiment();

    const result = sentiment.analyze(comment);

    console.log(result);
}