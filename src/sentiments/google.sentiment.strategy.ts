import language  from "@google-cloud/language";

const client = new language.LanguageServiceClient();

export const process = async (comment: string) :Promise<number> => {

    const document = {
        content: comment,
        type: 1
    };

    const [result] = await client?.analyzeSentiment({ document} );
    const sentiment = result?.documentSentiment;
    return sentiment?.score || 0;
}