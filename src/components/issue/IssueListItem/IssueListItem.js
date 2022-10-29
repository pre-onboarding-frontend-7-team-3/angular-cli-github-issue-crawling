import { IssueItemContainer } from "./Style";
import { FlexColumnContainer, FlexRowContainer } from "./Style";
import useFormatDate from "../../../hooks/useFormatDate";

const IssueListItem = ({ issue }) => {
  const {
    number,
    title,
    created_at,
    comments,
    user: { login },
  } = issue;

  return (
    <IssueItemContainer>
      <FlexColumnContainer>
        <h4>
          ##{number}
          {title}
        </h4>
        <FlexRowContainer>
          <span>작성자 :</span>
          {useFormatDate(created_at)}, <span>작성일 : </span>
          {login}
        </FlexRowContainer>
      </FlexColumnContainer>
      <FlexColumnContainer>
        <div>코멘트 : {comments}</div>
      </FlexColumnContainer>
    </IssueItemContainer>
  );
};

export default IssueListItem;
