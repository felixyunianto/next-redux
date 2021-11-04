const httpInterceptor = {
  interceptorsRequestConf(config) {
    const { url } = config;

    return config;
  },

  interceptorsRequestErr(error) {
    return Promise.reject(error);
  },

  interceptorsResponseConf(config) {
    return config;
  },

  interceptorsResponseErr(error) {
    return Promise.reject(error);
  },
};

export default httpInterceptor;