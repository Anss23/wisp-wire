import React, { useState } from "react";
import SideMenu from "../components/side-menu-component";
import Email from "../components/email-component";
import "../App.css";

const Inbox = () => {
    const [menuState, setMenuState] = useState([
        {value:"test1@wispwire.com"}, 
        {value:"test2@wispwire.com"}, 
        {value:"test3@wispwire.com"},
        {value:"test4@wispwire.com"},
        {value:"test5@wispwire.com"},
        {value:"test6@wispwire.com"},
        {value:"test7@wispwire.com"},
        {value:"test8@wispwire.com"},
        {value:"test9@wispwire.com"},
        {value:"test10@wispwire.com"},
        {value:"test11@wispwire.com"},
        {value:"test12@wispwire.com"},
        {value:"test13@wispwire.com"},
        {value:"test14@wispwire.com"},
        {value:"test15@wispwire.com"},
        {value:"test16@wispwire.com"},
        {value:"test17@wispwire.com"},
        {value:"test18@wispwire.com"},
        {value:"test19@wispwire.com"},
        {value:"test20@wispwire.com"},
    ]);

    const [selectedEmail, setSelectedEmail] = useState("");

    const selectEmail = (selectedItem) => {
        setSelectedEmail(selectedItem);
    };

    return(
        <>
        <div className="wispwire-container">
            <div className="header">
                <div className="header-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" className="wispwire-logo-svg" style={{width: '300px', height: '100px'}}>
                        <defs>
                        <linearGradient id="wispGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor:"#adb5bd", stopOpacity:1}} />
                            <stop offset="100%" style={{stopColor:"#6c757d", stopOpacity:1}} />
                        </linearGradient>
                        </defs>
                        
                        <path 
                        d="M20,50 Q40,20 60,50 T100,50" 
                        fill="none" 
                        stroke="url(#wispGradient)" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                        strokeDasharray="0,8"
                        />
                        
                        <text x="110" y="65" fontFamily="'Roboto Mono', monospace" fontSize="40" fontWeight="700" fill="#343a40">
                        WISP<tspan fill="#495057">WIRE</tspan>
                        </text>
                    </svg>
                    <p className="wispwire-tagline">
                            Inboxes that disappear when you do
                    </p>
                </div>
            </div>
            
            <div className="inbox-flex-container">
                <div className="inbox-side-menu" style={{overflowY: 'auto', maxHeight: 'calc(100vh - 150px)'}}>
                    <SideMenu menuItems={menuState} selectedItem={selectEmail}/>
                </div>
               
                <div className="inbox-email">
                    <Email emailAddress={selectedEmail}/>
                </div>
            </div>

            <div className="footer">
            </div>
        </div>
        </>
    );
};

export default Inbox;