const storePlugin = {
  async action(callback, dispatch, onError = () => {}) {
    try {
      await callback();
    } catch (error) {
      console.log("ERROR", error);
      onError(error);
    }
  },
};

export default storePlugin;
