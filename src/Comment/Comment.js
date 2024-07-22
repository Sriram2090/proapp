import React, { useState } from 'react';

const Comment
 = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      {/* Display existing comments */}
      <div style={{ marginBottom: '20px' }}>
        <h4>Comments:</h4>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {comments.map((comment, index) => (
            <li key={index} style={{ marginBottom: '8px', borderBottom: '1px solid #ccc' }}>
              {comment}
            </li>
          ))}
        </ul>
      </div>

      {/* Add a new comment */}
      <div>
        <textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={handleCommentChange}
          style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleAddComment}
          style={{ backgroundColor: '#3897f0', color: '#fff', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', border: 'none' }}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default Comment;
