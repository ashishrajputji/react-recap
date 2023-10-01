import Video from './components/Video';
import './App.css';
import videos from './data/data';
function App() {
 
  return (
    <>
      <section className='main-container'>
        {
        videos.map(video => <Video title={videos.title} img={video.img} verified={video.verified} views={video.views} time={video.time} />)  
        }
      </section>
    </>
  );
}

export default App;
