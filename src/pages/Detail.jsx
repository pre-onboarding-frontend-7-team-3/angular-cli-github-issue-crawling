/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Issue from "../components/Issue";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Octokit } from "octokit";
import { TOKEN } from "../config";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Loading from "../components/Loading";

const Detail = () => {
  const params = useParams();
  const id = params.id;
  const [issue, setIssue] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const octokit = new Octokit({
    auth: TOKEN.USER,
  });

  const DetailApi = async () => {
    setLoading(true);
    try {
      const { data } = await octokit.request(`GET /repos/{owner}/{repo}/issues/${id}`, {
        owner: "angular",
        repo: "angular-cli",
      });
      setIssue(data);
      setUser(data.user);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    DetailApi();
  }, []);

  return (
    <DetailLayout>
      {loading ? <Loading /> : null}
      <DetailListLayout>
        <Profile>
          <ProfileImg src={user.avatar_url} alt="profileImg" />
        </Profile>
        <Issue
          number={issue.number}
          title={issue.title}
          login={user.login}
          created_at={issue.created_at}
          comments={issue.comments}
        />
      </DetailListLayout>
      <IssueBody>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
      </IssueBody>
    </DetailLayout>
  );
};

export default Detail;

export const DetailLayout = styled.div`
  height: 100vh;
  margin: 100px 30px 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailListLayout = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Profile = styled.div`
  height: 100px;
  width: 100px;
  margin: 30px;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const IssueBody = styled.div`
  width: 100%;
  height: 100vh;
  margin: 20px 1000px 0 1000px;
`;
