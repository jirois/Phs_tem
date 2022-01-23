import React from 'react';

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrapper,
    SidebarRouter
} from './sidebarElements';
const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="discover">
                        Discover
                    </SidebarLink>
                    <SidebarLink to="service">
                        Service
                    </SidebarLink>
                    <SidebarLink to="signup">
                        Sign up
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrapper>
                    <SidebarRouter to='/signin'>Sign In</SidebarRouter>
                </SidebarBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    );
};



export default Sidebar;
