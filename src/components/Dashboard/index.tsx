import React, { ReactNode } from "react";

// Styles
import { Container, Content } from "./styles";

// Components from DashBoard
import Aside from "../Aside";
import { Outlet } from "react-router-dom";

// Context
import { DashContextProvider } from "../../context/dashboard-context";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <DashContextProvider>
        <Aside />
        <Content>
          <Outlet />
        </Content>
      </DashContextProvider>
    </Container>
  );
};

export default Dashboard;
