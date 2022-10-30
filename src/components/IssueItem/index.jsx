import caculateDifOfTime from "utils/changeDate";

import Icon from "components/common/Icon";

import * as Style from "./style";

const IssueItem = ({ ItemInfo }) => {
  return (
    <Style.Wrapper>
      <Style.ContentWrapper>
        <Style.Title>{ItemInfo.title}</Style.Title>

        {`#${ItemInfo.number} opened by ${caculateDifOfTime(ItemInfo.created_at)} by ${
          ItemInfo.user.login
        }`}
      </Style.ContentWrapper>
      <Style.CommentWrapper>
        <Icon icon="Comment" />
        {ItemInfo.comments}
      </Style.CommentWrapper>
    </Style.Wrapper>
  );
};

export default IssueItem;
