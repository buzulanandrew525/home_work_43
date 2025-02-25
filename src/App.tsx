import React, { createContext, useContext } from 'react';

const ColorContext = createContext('червоний');
const MaterialContext = createContext('залізо');

const App: React.FC = () => {
  return (
    <ColorContext.Provider value="чорний">
      <MaterialContext.Provider value="алюміній">
          <Car />
      </MaterialContext.Provider>
    </ColorContext.Provider>
  );

}

const Car = () => {
  // Використання контекстів в компоненті
  const color = useContext(ColorContext);
  const material = useContext(MaterialContext);

  return (
    <div>
      <h1>Машина має такі параметри:</h1>
      <h2>Колір: {color}</h2>
      <h2>Матеріал: {material}</h2>
      <Content />
    </div>
  );
}

const Content = () => {
  // Використання контекстів в іншому компоненті
  const color = useContext(ColorContext);
  const material = useContext(MaterialContext);

  return (
    <section>
      <p>Вибраний колір: {color}</p>
      <p>Вибраний матеріал: {material}</p>
    </section>
  );
}


export default App;