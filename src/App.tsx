import Header from '@pages/header/header.page';
import './App.scss';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="content">
          <nav className="sidebar">Navigation</nav>
          <main className="hotel-view">Hotel view</main>
        </div>
      </div>
    </>
  );
}

export default App;
