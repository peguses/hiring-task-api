import Sentiment from "sentiment";

export const process = async (comment: string) :Promise<number> => { 

    const sentiment = new Sentiment();

    const result = sentiment.analyze(comment);

    return result.score;
}