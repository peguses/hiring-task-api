# Home Sentiment Analysis Application

## Description

Back-end configuration and deployment instructions

## Requirements

   - Node 22.0.0, Yarn, Postgres, Docker(for dockerized Postgres )


## Instructions

   - You may run docker `docker compose up -d` or have a up and running local Postgres instance.
   - Configure .env according to your Postgres configurations.
   - Configure sentiment analysis service 
      * afinn service : set  `SENTIMENT_SERVICE` as `AFINN_SERVICE`
      * vader service : set  `SENTIMENT_SERVICE` as `VADER_SERVICE`
      * Google service : set  `SENTIMENT_SERVICE` as `GOOGLE_SERVICE`
   - Node: if you use google service you have to enable google cloud NLU service, download Key JSON file from IAM and configure it in package JSON script section `GOOGLE_APPLICATION_CREDENTIALS` or set as local environment variable `export GOOGLE_APPLICATION_CREDENTIALS=<path to key JSON file>`
   - Run `yarn run dev`

