const baseUrl = "https://api.github.com/users";

const request = async (url) => {
  const results = await fetch (url);
  const response = await results.json();
  return response;
}

const getUser = async(login) => {
  const url = `${baseUrl}/${login}`;
  return request(url);
}

const getRepo = async(repos_url) => {
  const url = `${baseUrl}/${repos_url}`;
  return request(url);
}