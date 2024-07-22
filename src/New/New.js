// App.jsx
import React, { useState } from 'react';
import './New.css'; // Import external CSS file

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

const DebateForm = ({ onSubmit }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic.trim() === '') return;
    onSubmit(topic);
    setTopic('');
  };

  return (
    <form className="debate-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter debate topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="add-button">Add Debate</button>
    </form>
  );
};

const New = () => {
  const [debates, setDebates] = useState([]);

  const addDebate = (topic) => {
    const newDebate = {
      id: debates.length + 1,
      topic,
    };
    setDebates([...debates, newDebate]);
  };

  const deleteDebate = (id) => {
    const updatedDebates = debates.filter(debate => debate.id !== id);
    setDebates(updatedDebates);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Debate App</h1>
      <DebateForm onSubmit={addDebate} />
      <DebateList debates={debates} onDelete={deleteDebate} />
    </div>
  );
};

export default New;
