import { useState } from 'react';
import AddVideo from './components/AddVideo';
import './App.css';
import videosDB from './data/data';
import VideoList from './components/VideoList';

function App() {
const [videos,setVideos] = useState(videosDB);

function newVideo(newVdo){
  setVideos([
    ...videos,{...newVdo, id : videos.length+1}
  ]);
}
  return (
    <>
      <AddVideo newVideo={newVideo}/>
      <VideoList videos={videos} />
    </>
  );
}

export default App;
