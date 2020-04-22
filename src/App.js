import React, { useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect( () => {
    api.get('/repositories').then(response => {
        setRepositories(response.data);
    })
  }, []);

  async function handleAddRepository() {
    const response = await api.post('/repositories', {
      title: "Conceitos React Native",
      url: "https://github.com/caioproft/desafio-conceitos-reactjs",
      techs: ["ReactJS", "Javascript"]
    });

    const repository = response.data;
    console.log(response.data)
    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>

      {repositories.map( repository =>
        <>

        <ul data-testid="repository-list">
          <li key={repository.id}> {repository.title}</li> 
        
        <button onClick={() => handleRemoveRepository(1)}>
          Remover
        </button>

        </ul>
       </>
      )}
    
      

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
