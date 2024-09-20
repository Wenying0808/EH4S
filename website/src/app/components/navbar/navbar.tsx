"use client";

import "./navbar.css";
import logoImg from "./img_logo.png";
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CustomButton from '../basic-button/customButton';
import CustomTab from '../nav-tab/customTab';
import { Menu, MenuItem } from '@mui/material';
import '../../../app/globals.css';

export default function Navbar (){
    const router = useRouter();
    const [aboutMenuAnchor, setAboutMenuAnchor] = useState<null | HTMLElement>(null);
    const isAboutMenuOpen = Boolean(aboutMenuAnchor);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check authentication status on component mount
        checkAuthStatus();
    }, []);

    const checkAuthStatus = () => {
        const token = localStorage.getItem('authToken');
        setIsAuthenticated(!!token);
    };

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
        navigateTo('/authentication/signup');
    };

    const handleSignIn = () => {
        navigateTo('/authentication/signin');
    };

    const handleSignOut = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
    };

    return (
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
                <CustomTab  label="Publications" onClick={() => navigateTo('/publications')}/>
                <CustomTab label="EH4S Platform" onClick={() => navigateTo('/eh4s')}/>
                <CustomTab label="Newsletter" onClick={() => navigateTo('/newsletter')}/>
                <CustomTab label="About Us" onClick={handleAboutMenuClick}/>
                <Menu
                    anchorEl={aboutMenuAnchor}
                    open={isAboutMenuOpen}
                    onClose={handleAboutMenuClose}
                >
                    <MenuItem onClick={() => navigateTo('/')}>Who We Are</MenuItem>
                    <MenuItem onClick={() => navigateTo('/about/what-we-do')}>What We Do</MenuItem>
                    <MenuItem onClick={() => navigateTo('/about/how-we-work')}>How We Work</MenuItem>
                    <MenuItem onClick={() => navigateTo('/about/events-activities')}>Events & Activities</MenuItem>
                </Menu>
                <CustomTab label="Contact" onClick={() => navigateTo('/contact')}/>
            </div>
                
            <div className="navbar-buttons" style={{ display: "flex", gap: "20px"}}>
                {!isAuthenticated ? (
                    <>
                        <CustomButton label="Sign Up" variant="contained" onClick={handleSignUp}/>
                        <CustomButton label="Sign In" variant="outlined" onClick={handleSignIn}/>
                    </>
                ) : (
                    <CustomButton label="Sign Out" variant="outlined" onClick={handleSignOut}/>
                )}
            </div>
        </div>
    );
}
