import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/notifications">Notifications</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/singlevideo">SingleVideo</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/myprofile">MyProfile</Link>
        </li>
        <li>
          <Link to="/stories">Stories</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
        <li>
          <Link to="/singlepost">SinglePost</Link>
        </li>
        <li>
          <Link to="/singleevent">SingleEvent</Link>
        </li>
        <li>
          <Link to="/groupmessage">GroupMessage</Link>
        </li>
        <li>
          <Link to="/singlephoto">SinglePhoto</Link>
        </li>
        <li>
          <Link to="/userprofile">UserProfile</Link>
        </li>
        <li>
          <Link to="/searchresults">SearchResults</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/home1">Home1</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/videochat">VideoChat</Link>
        </li>
        <li>
          <Link to="/directmessage">DirectMessage</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/myfriends">MyFriends</Link>
        </li>
        <li>
          <Link to="/passwordrecovery">PasswordRecovery</Link>
        </li>
        <li>
          <Link to="/videofullscreen">VideoFullScreen</Link>
        </li>
        <li>
          <Link to="/singlestory">SingleStory</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
