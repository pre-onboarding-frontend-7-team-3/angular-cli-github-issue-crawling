import { Octokit } from "octokit";
import { owner, repo } from "../constant/repo";

const octokit = new Octokit({
  auth: process.env.REACT_APP_TOKEN,
});

const octokitDetailAPI = async (issue_number) => {
  try {
    const res = await octokit.request("GET /repos/{owner}/{repo}/issues/{issue_number}", {
      owner: owner,
      repo: repo,
      issue_number: issue_number,
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

const octokitAPI = async (pageNum) => {
  try {
    const res = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: owner,
      repo: repo,
      state: "open",
      sort: "comments",
      per_page: 20,
      page: pageNum,
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export { octokitAPI, octokitDetailAPI };
