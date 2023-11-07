import './App.scss';
import Gallery from '@components/gallery/gallery.component';
import Header from '@components/header/header.component';
import SideBar from '@components/side-bar/side-bar.component';
import Overview from '@components/overview/overview.component';
import Description from '@components/description/description.component';
import UserReviews from '@components/user-reviews/user-reviews.component';

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
            <div className="detail">
              <Description />
              <UserReviews />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
