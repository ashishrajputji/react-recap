import './video.css';

function Video({title,img,views, time, verified,id}){
    let channel = "CodeOnAir";
    return (
        <>
            <div className="container" id={id}>
             <div className="thumbnail">
                    <img src={img} alt="thumbnail" />
                </div>
                <div className="">
                    <h2 className="title">{title}</h2>
                </div>
                <div className=''>
                    <h2 className="channel">{channel}{verified ? '✅': null}</h2>
                </div>
                <div className="view">
                    <p>{views}</p>
                    <p className='dot'>.</p>
                    <p>{time}</p>
                </div>
            </div>
        </>
    );
}
export default Video;