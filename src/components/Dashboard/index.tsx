import React, { ReactNode } from 'react';

// Styles
import { 
    Container,
    Content
 } from './styles';

// Components from DashBoard
import Aside from "../Aside";
import { Outlet } from "react-router-dom";

interface IDashboard {
    children?: ReactNode
}

const Dashboard: React.FC<IDashboard> = ({children}) => {
  return (
    <Container>
        <Aside/>
        <Content>
            {children}
            <Outlet/>
        </Content>
    </Container>
  );
}

export default Dashboard;