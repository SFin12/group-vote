import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {

  children: ReactNode;
};

const Layout: React.FC<Props> = ({children}) => (
  <div>
    <Header/>
    <div className="p-2">{children}</div>
  </div>
);

export default Layout;
