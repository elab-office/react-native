export default (state = null, action) => {
  switch (action.type) {
    case 'select_technology':
      return action.payload;
    default:
      return state;
  }
};