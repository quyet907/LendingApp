import { IConfig } from "./IConfig";

const localConfig: IConfig = {
  api: {
    lendingAPI: "http://localhost:4001",
    userAPI: "http://localhost:4000",
  },
};

const devConfig: IConfig = {
  api: {
    lendingAPI: "https://devapilending.afivn.com",
    userAPI: "https://devapilending.afivn.com",
  },
};

const stagingConfig: IConfig = {
  api: {
    lendingAPI: "https://devapilending.afivn.com",
    userAPI: "https://devapilending.afivn.com",
  },
};

const prodConfig: IConfig = {
  api: {
    lendingAPI: "https://devapilending.afivn.com",
    userAPI: "https://devapilending.afivn.com",
  },
};

const config =
  process.env.EXPO_NODE_ENV == "production"
    ? prodConfig
    : process.env.EXPO_NODE_ENV == "staging"
    ? stagingConfig
    : process.env.EXPO_NODE_ENV == "development"
    ? devConfig
    : localConfig;

// export default {API_URL, KEY}

export { config };
