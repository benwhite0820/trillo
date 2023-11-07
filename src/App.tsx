import './App.scss';
import Header from '@components/header/header.component';
import SideBar from '@components/side-bar/side-bar.component';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="content">
          <SideBar />
          <main className="hotel-view">Hotel view</main>
        </div>
      </div>
    </>
  );
}

export default App;
