const { getUserRepos } = require("./github");

// TODO: Enter your GitHub username
const gitHubUser = "dylanrhodes098";

getUserRepos(gitHubUser).then((repos) => {
  console.log(repos);
});
