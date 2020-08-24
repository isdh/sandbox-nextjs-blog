/** fetch external API */
import fetch from 'node-fetch';
const url = 'https://qiita.com/api/v2/users/isdh/followees';

export async function getFollowee() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch(url);
  const json = await res.json();

  const allPostsData = json.map(user => {
    return {
      id: user.id,
      title: user.description,
      date: user.location 
    }
  });
  console.log(allPostsData);
  return allPostsData
}

/** query the database directly */
// import someDatabaseSDK from 'someDatabaseSDK'
/*
const databaseClient = someDatabaseSDK.createClient(...)

export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from a database
  return databaseClient.query('SELECT posts...')
}
*/
