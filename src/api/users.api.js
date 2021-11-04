import envKey from "../key/env.key";
import httpPlugin from "../plugins/http.plugin";

const config = {
  service: envKey.usersService,
};

const pathUrl = `${config.service}`;

const userConfig = {
  baseUrl: envKey.apiUrl,
};

const userApi = {
  async browse(params) {
    try {
      const resp = await httpPlugin.get(pathUrl, {
        ...userConfig,
        params: params,
      });

      return resp.data;
    } catch (error) {
      throw error;
    }
  },
};

export default userApi;
