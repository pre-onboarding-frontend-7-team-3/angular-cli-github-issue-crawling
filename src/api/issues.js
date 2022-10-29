import { Octokit } from "octokit";
import { owner, repo } from "../constant/repo";

const IssueList = () => {
  const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });
  const octokitApi = async () => {
    try {
      const res = await octokit.request("GET /repos/{owner}/{repo}/issues/{issue_number}", {
        owner: owner,
        repo: repo,
        issue_number: 1,
      });
      console.log(res.data);
    } catch (err) {
      throw new Error(`Error! Status: ${err.status}. Message: ${err.response.data.message}`);
    }
  };
  return (
    <div
      onClick={() => {
        octokitApi();
      }}
    >
      {" "}
      Issue List{" "}
    </div>
  );
};
export default IssueList;
