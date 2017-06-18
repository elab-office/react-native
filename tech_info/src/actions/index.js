export const selectTechnology = (technologyId) => {
  return {
    type: 'select_technology',
    payload: technologyId
  };
};