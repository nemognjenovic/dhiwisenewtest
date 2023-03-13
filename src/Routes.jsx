import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SingleStory = React.lazy(() => import("pages/SingleStory"));
const VideoFullScreen = React.lazy(() => import("pages/VideoFullScreen"));
const PasswordRecovery = React.lazy(() => import("pages/PasswordRecovery"));
const MyFriends = React.lazy(() => import("pages/MyFriends"));
const Settings = React.lazy(() => import("pages/Settings"));
const DirectMessage = React.lazy(() => import("pages/DirectMessage"));
const VideoChat = React.lazy(() => import("pages/VideoChat"));
const Signup = React.lazy(() => import("pages/Signup"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Login = React.lazy(() => import("pages/Login"));
const SearchResults = React.lazy(() => import("pages/SearchResults"));
const UserProfile = React.lazy(() => import("pages/UserProfile"));
const SinglePhoto = React.lazy(() => import("pages/SinglePhoto"));
const GroupMessage = React.lazy(() => import("pages/GroupMessage"));
const SingleEvent = React.lazy(() => import("pages/SingleEvent"));
const SinglePost = React.lazy(() => import("pages/SinglePost"));
const Messages = React.lazy(() => import("pages/Messages"));
const Stories = React.lazy(() => import("pages/Stories"));
const MyProfile = React.lazy(() => import("pages/MyProfile"));
const Gallery = React.lazy(() => import("pages/Gallery"));
const SingleVideo = React.lazy(() => import("pages/SingleVideo"));
const Events = React.lazy(() => import("pages/Events"));
const Notifications = React.lazy(() => import("pages/Notifications"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/events" element={<Events />} />
          <Route path="/singlevideo" element={<SingleVideo />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/singlepost" element={<SinglePost />} />
          <Route path="/singleevent" element={<SingleEvent />} />
          <Route path="/groupmessage" element={<GroupMessage />} />
          <Route path="/singlephoto" element={<SinglePhoto />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/searchresults" element={<SearchResults />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/videochat" element={<VideoChat />} />
          <Route path="/directmessage" element={<DirectMessage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/myfriends" element={<MyFriends />} />
          <Route path="/passwordrecovery" element={<PasswordRecovery />} />
          <Route path="/videofullscreen" element={<VideoFullScreen />} />
          <Route path="/singlestory" element={<SingleStory />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
