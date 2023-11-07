import Gallery from '@components/gallery/gallery.component';
import './App.scss';
import Header from '@components/header/header.component';
import SideBar from '@components/side-bar/side-bar.component';
import Overview from '@components/overview/overview.component';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="content">
          <SideBar />
          <main className="hotel-view">
            <Gallery />
            <Overview />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
