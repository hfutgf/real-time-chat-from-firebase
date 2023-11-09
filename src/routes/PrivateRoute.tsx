import React, { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

type Props = {
  children: ReactNode;
};

export const PrivateRoute: FC<Props> = ({ children }) => {
  const { currentUser } = UserAuth();

  if (!currentUser) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
};
