import React from 'react';
import useStore from '../store/bearStore.js'

const HomePage = () => {
  const bears = useStore((state) => state.bears)
  const increasePopulation = useStore((state) => state.increasePopulation)
  return (
    <div className="card">
        <button onClick={() => increasePopulation((count) => count + 1)}>
          count is {bears}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
    </div>
  );
};

export default HomePage;
