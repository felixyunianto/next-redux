import userType from "./user.type";

const initState = {
  user_list: [],
};

const userStore = (state = initState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case userType.USER_BROWSE_USERS:
      return {
        user_list: [...state.user_list, ...payload.data],
      };

    default:
      return state;
  }
};

export default userStore;
