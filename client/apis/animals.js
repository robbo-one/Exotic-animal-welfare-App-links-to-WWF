import request from 'superagent'

const rootUrl = '/api/v1'

export function getAnimals () {
  return request.get(rootUrl + '/animals')
    .then(res => {
      console.log(res.body)
      return res.body.animals;
    })
};
