import { FC } from "react";

interface Props {
  role: string;
}

const HomePage: FC<Props> = ({ children, role }) => {
  console.log("Home page");
  return (
    <>
      <p>Home Page</p>
    </>
  );
};

export default HomePage;
