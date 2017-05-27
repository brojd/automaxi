import data from '../mocks/main'

export const fetchMainData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
})