import React from "react";
import { NavLink } from "react-router-dom";
import Facebook from "./img/facebook.svg";
import Instagram from "./img/instagram.svg";
import Twitter from "./img/twitter.svg";


const SocialMediaNav = () => (
    <div className="navigation">
                <ul>
                  <li>
                        <NavLink exact to="/" activeClassName="links">
                          Stories
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact to="/statistics" activeClassName="links">
                          Statistics
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact to="/how-to-help" activeClassName="links">
                          How To Help
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact to="/about" activeClassName="links">
                          About
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact to="/events" activeClassName="links">
                          Events
                        </NavLink>
                      </li>
                  <div className="social">
                    <div>
                      <div>
                        <a href={"https://www.facebook.com/Faces-of-DACA-131331447563706/"} target={"_blank"}><img id="facebook" src={Facebook} /></a>
                      </div>
                      <div>
                        <a href={"https://www.instagram.com/facesofdaca/"} target={"_blank"}><img src={Instagram} href={"https://www.instagram.com/facesofdaca/"} target={"_blank"} /></a>
                      </div>
                      <div>
                        <a href={"https://twitter.com/facesofdaca"} target={"_blank"}><img src={Twitter} /> </a>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
);

export default SocialMediaNav;