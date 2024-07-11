import shroomish from '../../../assets/pics/shroomish.png';
import './not-found-page-style.css';

function NotFoundPage() {
  return (
    <div className="not-found-page-container">
      <h2>Oh no... Sorry, but this page is not existing</h2>
      <img src={shroomish} alt="sad-shromish-pic" />
    </div>
  );
}

export default NotFoundPage;
