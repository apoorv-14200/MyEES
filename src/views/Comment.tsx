import { FC } from "react";
import SuspenseLoader from "../components/SuspenseLoader";
import history from "../history";

const handleClick = () => {
  history.back();
};

export interface commentinterface {
  content: String;
}
interface Props {
  comment: commentinterface;
  role: string;
}
const Comment: FC<Props> = ({ children, role, comment }) => {
  console.log("Comment", children);
  return (
    <>
      <p>{comment.content}</p>
    </>
  );
};

export default Comment;
