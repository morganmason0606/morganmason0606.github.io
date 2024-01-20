import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/classes" activeStyle>
                        School Classes
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Personal Projects
                    </NavLink>
                    <NavLink to="/work_experience" activeStyle>
                        Work Experience
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;
