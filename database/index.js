const cassandra = require('cassandra-driver');
const uuid = require('uuid/v4')

const client = new cassandra.Client({
  contactPoints: ['172.31.5.84'],
  localDataCenter: 'datacenter1'
})

client.connect(function (err) {
  if(err){
    console.log(err)
  }
});

exports.get = (homeId) => {
  return new Promise((resolve, reject) => {
    client.execute(`SELECT * from data_lodge.photos where homeid = ${homeId}`, (err, result) => {
      if(err){
        reject(err)
      } else {
        resolve(result.rows)
      }
    })
  })
}

exports.post = (homeId) => {
  return new Promise((resolve, reject) => {
    client.execute(`INSERT into data_lodge.photos(homeid, photoid, url, thumb_url, is_primary, description) VALUES(${homeId}, '${uuid()}', 
      55, 55, 'false', 'stress test')`, (err, result) => {
        if(err){
          reject(err)
        } else {
          resolve(result)
        }
    })
  })
}
