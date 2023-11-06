import Header from '@pages/header/header.page';
import './App.scss';
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
