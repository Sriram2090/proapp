// withDebates.js
import React, { useState } from 'react';

const WithDebates = (WrappedComponent) => {
  return function WithDebates(props) {
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
      <WrappedComponent
        debates={debates}
        addDebate={addDebate}
        deleteDebate={deleteDebate}
        {...props}
      />
    );
  };
};

export default WithDebates;
