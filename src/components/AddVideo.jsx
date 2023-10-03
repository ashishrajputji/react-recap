import React,{useState} from 'react'
const initialState = {
    verified : false,
    title : "",
    img: "https://picsum.photos/200/300",
    views: "",
    time: "1 year ago"
};

function AddVideo({newVideo}) {
    const [video,setVideo] = useState(initialState);
    function handleSubmit(e){
        e.preventDefault();
        newVideo(video);
        setVideo(initialState);
    }
    function handleChange(e){
        e.stopPropagation();
        setVideo({...video,
            [e.target.name] : e.target.value
        });
    }
  return (
    <>
        <form action="">
            <input type="text" name="title" id=""  placeholder='title' value={video.title}  onChange={handleChange}/>
            <input type="text" name = "views" placeholder='views' value={video.views} onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Add Video</button>
        </form>
    </>
  )
}

export default AddVideo