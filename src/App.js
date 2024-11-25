import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Jemal!</h1>
      <h1>Welcome to React App!</h1>
      <p>This is a additional content.</p>
      {/* First section */}
      <div className="section-one">
        <h2>My project Topics:</h2>
        <ul>
          <li>Creating and managing a GitHub repository</li>
          <li>Using GitHub to trigger a CodePipeline deployment
          </li>
          <li>Setting up S3 to host a ReactJS application</li>
          <li>React.js</li>
          <li>AWS CI/CD</li>
          <li>Web Development</li>
        </ul>
      </div>

      {/* Second section */}
      <div className="section-two">
        <h2>About Me:</h2>
        <p>I am passionate about building scalable web applications.</p>
      </div>
    </div>
  );
}

export default App;
