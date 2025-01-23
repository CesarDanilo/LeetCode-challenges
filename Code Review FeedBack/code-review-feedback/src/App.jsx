import React from "react";
import "./App.css";
import "h8k-components";
import FeedbackSystem from "./components/CodeReviewFeedback";

const title = "Code Review Feedback";

const App = () => {
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <FeedbackSystem />
    </div>
  );
};

export default App;
