import React, { useState } from 'react';

function Madlib() {
  const [noun1, setNoun1] = useState('');
  const [noun2, setNoun2] = useState('');
  const [adjective1, setAdjective1] = useState('');
  const [adjective2, setAdjective2] = useState('');
  const [adjective3, setAdjective3] = useState('');
  const [color, setColor] = useState('');
  const [story, setStory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStory = `There was a ${adjective1} ${color} ${noun1} who loved a ${adjective2} ${noun2}. They would often go on ${adjective3} adventures together.`;
    setStory(newStory);
  };

  return (
  <div className="madlib">Madlib!
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a noun"
          value={noun1}
          onChange={(e) => setNoun1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter another noun"
          value={noun2}
          onChange={(e) => setNoun2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter an adjective"
          value={adjective1}
          onChange={(e) => setAdjective1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter a color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Get Story</button>
      </form>
      {story && <p>{story}</p>}
    </div>
  </div>
  );
}

export default Madlib;
