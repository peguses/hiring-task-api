import vader from "vader-sentiment";

export const process = async (comment: string) : Promise<number> => {
    const result = vader.SentimentIntensityAnalyzer.polarity_scores(comment);
    return result.compound
}