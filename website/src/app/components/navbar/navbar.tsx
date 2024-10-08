"use client";

import "./navbar.css";
import logoImg from "./img_logo.png";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SessionProvider } from "next-auth/react"
import Image from 'next/image';
import NavbarAuthButtons from "../auth-buttons/navbar-auth-buttons/navbar-auth-buttons";
import CustomTab from '../nav-tab/customTab';
import { Menu, MenuItem } from '@mui/material';
import '../../../app/globals.css';

export default function Navbar (){
    const router = useRouter();
    const [aboutMenuAnchor, setAboutMenuAnchor] = useState<null | HTMLElement>(null);
    const isAboutMenuOpen = Boolean(aboutMenuAnchor);

    const handleAboutMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAboutMenuAnchor(event.currentTarget);
      };
    
    const handleAboutMenuClose = () => {
    setAboutMenuAnchor(null);
    };

    const navigateTo = (path: string) => {
        router.push(path);
        handleAboutMenuClose();
    };

    const handleSignUp = () => {
        navigateTo('/pages/authentication/signup');
    };

    const handleSignIn = () => {
        navigateTo('/pages/authentication/signin');
    };

    return (
        <SessionProvider>
            <div 
                className="navbar" 
                style={{ 
                    position: "fixed",
                    width: "100vw",
                    zIndex: 1000,
                    boxSizing: "border-box",
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    padding: "20px", 
                }}
            >
                <Image className="navbar-logo" src={logoImg} alt="logo" width={160} height={40}/>
                <div className="navbar-tabs" style={{ display: "flex", gap: "16px" }}>
                    <CustomTab  label="Publications" onClick={() => navigateTo('/pages/publications')}/>
                    <CustomTab label="EH4S Platform" onClick={() => navigateTo('/pages/eh4s')}/>
                    <CustomTab label="Newsletter" onClick={() => navigateTo('/pages/newsletter')}/>
                    <CustomTab label="About Us" onClick={handleAboutMenuClick}/>
                    <Menu
                        anchorEl={aboutMenuAnchor}
                        open={isAboutMenuOpen}
                        onClose={handleAboutMenuClose}
                    >
                        <MenuItem onClick={() => navigateTo('/')}>Who We Are</MenuItem>
                        <MenuItem onClick={() => navigateTo('/pages/about/what-we-do')}>What We Do</MenuItem>
                        <MenuItem onClick={() => navigateTo('/pages/about/how-we-work')}>How We Work</MenuItem>
                        <MenuItem onClick={() => navigateTo('/pages/about/events-activities')}>Events & Activities</MenuItem>
                    </Menu>
                    <CustomTab label="Contact" onClick={() => navigateTo('/pages/contact')}/>
                </div>
                <NavbarAuthButtons signUp={handleSignUp} signIn={handleSignIn}/>
            </div>
        </SessionProvider>
    );
}
