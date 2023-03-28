import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import List from './components/List';

export default function App() {
  return (
    <div className="App bg-zinc-800">
      <Header />
      <List />
    </div>
  );
}
