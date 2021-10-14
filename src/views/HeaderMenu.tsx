import { FC } from "react";
import SuspenseLoader from "../components/SuspenseLoader";

interface Props {
  role: string;
}

const HeaderMenu: FC<Props> = ({ children, role }) => {
  console.log("Header menu", children);
  return (
    <>
      <p>Header</p>
      <SuspenseLoader>{children}</SuspenseLoader>
    </>
  );
};

export default HeaderMenu;
