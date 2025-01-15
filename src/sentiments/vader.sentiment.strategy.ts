import vader from "vader-sentiment";

export const process = async (comment: string) => {
    const result = vader.SentimentIntensityAnalyzer.polarity_scores(comment);
    console.log(result)
}