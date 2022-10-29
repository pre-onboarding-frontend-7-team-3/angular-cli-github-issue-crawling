import { IssueItemContainer } from "./Style";
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
      <div>{number}</div>
      <div>{title}</div>
      <div>{useFormatDate(created_at)}</div>
      <div>{login}</div>
      <div>{comments}</div>
    </IssueItemContainer>
  );
};

export default IssueListItem;
