import "./App.css";

function App() {
  const people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ];

  const firstTeenager = people.find(person => person.age >= 10 && person.age <= 20);
  const allTeenagers = people.filter(person => person.age >= 10 && person.age <= 20);
  const isEveryTeenager = people.every(person => person.age >= 10 && person.age <= 20);
  const isAnyTeenager = people.some(person => person.age >= 10 && person.age <= 20);

  return (
    <div className="container">
      <div className="results-card">
        <h2>Array Methods Results</h2>
        
        <div className="result-section">
          <h3>1. First Teenager:</h3>
          <p>{firstTeenager ? `${firstTeenager.name} (${firstTeenager.age})` : "None"}</p>
        </div>

        <div className="result-section">
          <h3>2. All Teenagers:</h3>
          <ul>
            {allTeenagers.map((person, index) => (
              <li key={index}>{person.name} ({person.age})</li>
            ))}
          </ul>
        </div>

        <div className="result-section">
          <h3>3. Is every person a teenager?</h3>
          <p>{isEveryTeenager ? "True" : "False"}</p>
        </div>

        <div className="result-section">
          <h3>4. Is any person a teenager?</h3>
          <p>{isAnyTeenager ? "True" : "False"}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
