import { FC } from "react";
import SuspenseLoader from "../components/SuspenseLoader";
import history from "../history";
import { commentinterface } from "./Comment";
import NewPost from "./newPost";
import { Button } from "antd";

interface Props {
  role: string;
}

const handleClick = () => {
  history.back();
};

interface post {
  _id: string;
  comment: commentinterface[];
  content: string;
  createdAt: string;
  likes: any[];
  updatedAt: string;
  user: {
    _id: string;
    email: string;
    name: string;
  };
}
let posts: post[];

posts = [
  {
    _id: "615e7da783183b41f51bbf63",
    comment: [
      {
        content: "hello apoorv",
      },
    ],
    content: "Hello Guys today i got admitted to IITBHU Electronics ",
    createdAt: "2021-10-07T04:55:03.855Z",
    likes: [],
    updatedAt: "2021-10-18T11:06:50.918Z",
    user: {
      _id: "61554949696d57fd4871b701",
      email: "apoorv@123.com",
      name: "Apoorv jain",
    },
  },
];

const FeedPosts: FC<Props> = ({ children, role }) => {
  console.log("Feed Posts", children);
  return (
    <div className="postcontainer">
      <NewPost />
      <NewPost />
      <NewPost />
      <NewPost />
      <NewPost />
      <NewPost />
      <NewPost />
      <NewPost />
      <NewPost />
      <NewPost />
    </div>
  );
};

export default FeedPosts;
