import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questiions, setQuestions] = useState(data)

  return <main>
    <div className="container">
      <h3>Questions and Answer Board</h3>
      <section className="info">
        {questiions.map(question => {
          return <SingleQuestion key={question.id} {...question} />
        })}
      </section>
    </div>
  </main>
}
export default App;
