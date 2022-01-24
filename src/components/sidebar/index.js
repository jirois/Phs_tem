import React from 'react';

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRouter
} from './sidebarElements';
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="service" onClick={toggle}>
                        Service
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Sign up
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRouter to='/signin'>Sign In</SidebarRouter>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};



export default Sidebar;
