import React, { useState } from "react";
import "./Comment.css";

const Comment = ({ profileId }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment(""); // clear the input after submitting
    }
  };

  return (
    <div className="comment-section">
      <h4>Comments</h4>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Add a comment..."
        rows="4"
      />
      <button onClick={handleSubmitComment} className="submit-comment-btn">
        Submit
      </button>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
