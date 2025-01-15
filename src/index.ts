/** @format */

import { databaseSetup } from "./setup";
import { backendSetup } from "./setup/backend.setup";
import { validateConfiguration } from "./setup/validate.configuration";
import { Logger, MESSAGES } from "./utils";

const setupServer = async () => {

  validateConfiguration();
  
  try {
    await databaseSetup();
    Logger.info(MESSAGES.CONNECTED_DATABASE);
  } catch (err) {
    Logger.error(err);
    Logger.info(MESSAGES.FAILED_TO_CONNECT_DATABASE);
  }

  try {
    await backendSetup();
    Logger.info(MESSAGES.SERVER_RUNNING);
  } catch (err) {
    Logger.error(err);
    Logger.info(MESSAGES.SERVER_RUNNING_FAILED);
  }
};

setupServer();
