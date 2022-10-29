import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });

export const octokitApi = async (page) => {
  const res = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "angular",
    repo: "angular-cli",
    state: "open",
    sort: "comments",
    per_page: 10,
    page,
  });
  return res;
};

export const octokitDetailApi = async (id) => {
  const res = await octokit.request("GET /repos/{owner}/{repo}/issues/{issue_number}", {
    owner: "angular",
    repo: "angular-cli",
    issue_number: id,
  });
  return res;
};
