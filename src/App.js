  import './App.css';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import ListMovies from './components/ListMovies';
 
function App() {
  return (
    <div className="App">
      <header className='apps' >
          <h1>
            Firebase🔥🔥 Firestore React 🤝🤝
          </h1>
      </header>
      <main>
        <ListMovies/>
        {/* <RealMovies/> */}
        <AddMovie/>
        <EditMovie/>
      </main>
    </div>
  );
}

export default App;
