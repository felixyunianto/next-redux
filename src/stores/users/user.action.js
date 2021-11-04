import userApi from "../../api/users.api";
import storePlugin from "../../plugins/stores.plugin";
import userType from "./user.type";

const userAction = {
  browse(params = {}, callback = () => {}, onErr = () => {}) {  
    return (dispatch) => {
      storePlugin.action(
        async () => {
          const resp = await userApi.browse(params);
          dispatch({
            type: userType.USER_BROWSE_USERS,
            payload: resp,
          });
          callback();
        },
        dispatch,
        (err) => {
          onErr(err);
        }
      );
    };
  },
};

export default userAction;
