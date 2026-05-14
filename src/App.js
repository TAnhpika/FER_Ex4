import React, { useState } from 'react';
import './App.css';

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};

// 7. Make a new object
const { name: nameC0, category: catC0 } = companies[0];
const newObj = {
  name: nameC0,
  category: catC0,
  print() {
    return this.name;
  }
};

// 8. Create a function that takes an unknown number of arguments that are numbers and return their sum
const sumArgs = (...args) => args.reduce((a, b) => a + b, 0);

// 9. Make a function that takes an unknown number of arguments of any type and adds them in an array
const makeArray = (...args) => {
  const arr = [];
  args.forEach(arg => {
    if (Array.isArray(arg)) {
      arr.push(...arg);
    } else {
      arr.push(arg);
    }
  });
  return arr;
};

// 10. Destructuring the property street
const { address: { street } } = person;

// 11. Write a function that every time you call it, it returns a number that increments starting from 0
const createCounter = () => {
  let count = 0;
  return () => count++;
};
const incrementCounter = createCounter();

// 12. Create a function that destructors the query parameters of a URL
const parseQuery = (url) => {
  const queryString = url.split('?')[1] || '';
  const params = new URLSearchParams(queryString);
  const obj = {};
  for (const [key, value] of params.entries()) {
    obj[key] = value;
  }
  return obj;
};

function App() {
  const [count, setCount] = useState(incrementCounter());

  // 1. Print the name of each company using forEach
  const forEachNames = [];
  companies.forEach(c => forEachNames.push(c.name));

  // 2. Print the name of each company that started after 1987
  const startedAfter1987 = companies.filter(c => c.start > 1987);

  // 3. Retail companies, increment start by 1
  const retailCompanies = companies
    .filter(c => c.category === 'Retail')
    .map(c => ({ ...c, start: c.start + 1 }));

  // 4. Sort companies by end date in ascending order
  const sortedCompanies = [...companies].sort((a, b) => a.end - b.end);

  // 5. Sort ages array descending
  const sortedAges = [...ages].sort((a, b) => b - a);

  // 6. Sum ages using reduce
  const sumOfAges = ages.reduce((a, b) => a + b, 0);

  return (
    <div className="container" style={{ display: 'block', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>JS ES6 Exercises (Part 3)</h1>

      <div className="section">
        <h3>1. forEach names:</h3>
        <p>{forEachNames.join(', ')}</p>
      </div>

      <div className="section">
        <h3>2. Started after 1987:</h3>
        <p>{startedAfter1987.map(c => c.name).join(', ')}</p>
      </div>

      <div className="section">
        <h3>3. Retail Companies (Start incremented by 1):</h3>
        <div className="retail-table-container">
          <div className="retail-table">
            {retailCompanies.map((c, i) => (
              <div className="retail-row" key={i}>
                <div className="cell">{c.name}</div>
                <div className="cell">{c.start}</div>
                <div className="cell">{c.end}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h3>4. Sorted companies by end date (asc):</h3>
        <ul>
          {sortedCompanies.map(c => (
            <li key={c.name}>{c.name} (End: {c.end})</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>5. Sorted ages (desc):</h3>
        <p>{sortedAges.join(', ')}</p>
      </div>

      <div className="section">
        <h3>6. Sum of ages:</h3>
        <p>{sumOfAges}</p>
      </div>

      <div className="section">
        <h3>7. New Object print():</h3>
        <p>{newObj.print()} (Category: {newObj.category})</p>
      </div>

      <div className="section">
        <h3>8. sumArgs(1, 2, 3, 4, 5):</h3>
        <p>{sumArgs(1, 2, 3, 4, 5)}</p>
      </div>

      <div className="section">
        <h3>9. makeArray(1, "hello", [2, 3]):</h3>
        <p>{JSON.stringify(makeArray(1, "hello", [2, 3]))}</p>
      </div>

      <div className="section">
        <h3>10. Destructured street:</h3>
        <p>{street}</p>
      </div>

      <div className="section">
        <h3>11. Increment function:</h3>
        <p>Current count: {count} <button onClick={() => setCount(incrementCounter())}>Call Function Again</button></p>
      </div>

      <div className="section">
        <h3>12. parseQuery("http://example.com?page=1&sort=desc"):</h3>
        <pre>{JSON.stringify(parseQuery("http://example.com?page=1&sort=desc"), null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
