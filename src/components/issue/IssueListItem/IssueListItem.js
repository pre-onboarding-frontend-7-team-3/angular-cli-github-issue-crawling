import { IssueItemContainer } from "./Style";
import { Link } from "react-router-dom";
import { FlexColumnContainer, FlexRowContainer, FlexCenterContainer, UserAvatar } from "./Style";
import useFormatDate from "../../../hooks/useFormatDate";

const IssueListItem = ({ issue }) => {
  const {
    number,
    title,
    created_at,
    comments,
    user: { avatar_url, html_url, login },
  } = issue;

  return (
    <IssueItemContainer>
      <FlexColumnContainer metaContent='true'>
        <FlexCenterContainer>
          <a href={html_url} target="_blank" rel="noreferrer">
            <UserAvatar src={avatar_url} />
          </a>
          <Link to={`/${number}`} style={{ color: "inherit", textDecoration: "inherit" }}>
            <h4>
              ##{number} - <span>{title}</span>
            </h4>
          </Link>
        </FlexCenterContainer>
        <FlexRowContainer>
          <span>작성일 :</span>
          {useFormatDate(created_at)}, <span>작성자 : </span  >
          {login}
        </FlexRowContainer>
      </FlexColumnContainer>
      <FlexColumnContainer>
        <span>코멘트 : {comments}</span>
      </FlexColumnContainer>
    </IssueItemContainer>
  );
};

export default IssueListItem;
