import './App.css';
import Button from './Components/Button';
import GithubSearchHooks from './Components/GithubSearchHooks';
import Hooks from './Components/Hooks';

function App() {
  return (
    <div className="container mt-5">
      <Button label="Text Box" />
      <Hooks />
      <GithubSearchHooks/>
    </div>
  );
}

export default App;
