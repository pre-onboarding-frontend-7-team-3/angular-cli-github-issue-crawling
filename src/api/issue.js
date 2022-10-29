import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });

const octokitApi = {
  getIssueList: (optionParams) => {
    return octokit.request(
      "GET /repos/{owner}/{repo}/issues?sort={sort}&page={page}",
      optionParams,
    );
  },

  getIssue: (optionParams) => {
    return octokit.request("GET /repos/{owner}/{repo}/issues/{issue_number}", optionParams);
  },
};

export default octokitApi;
