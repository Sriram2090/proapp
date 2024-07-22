// DebateComponent.js
import React from 'react';
import WithDebates from './WithDebates';
import './DebateComponent.css'

const DebateComponent = ({ debates, addDebate, deleteDebate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const topicInput = e.target.elements.topic;
    const topic = topicInput.value.trim();
    if (topic !== '') {
      addDebate(topic);
      topicInput.value = ''; // Clear the input field
    }
  };

  return (
    <div className="debate-component-container">
      <h1 className="app-title">Debate Component</h1>
      <form className="debate-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="topic"
          name="topic"
          placeholder="Enter debate topic"
          className="input-field"
        />
        <button type="submit" className="add-button">Add Debate</button>
      </form>
      <DebateList debates={debates} onDelete={deleteDebate} />
    </div>
  );
};

const DebateList = ({ debates, onDelete }) => (
  <ul className="debate-list">
    {debates.map(debate => (
      <li key={debate.id} className="debate-item">
        {debate.topic}
        <button onClick={() => onDelete(debate.id)} className="delete-button">Delete</button>
      </li>
    ))}
  </ul>
);

export default WithDebates(DebateComponent);
