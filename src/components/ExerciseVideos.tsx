
interface Props{
    exerciseVideos: any[];
    name:string
}

const ExerciseVideos = ({ exerciseVideos, name }:Props) => {
  if (!exerciseVideos) return <h1>Loading</h1>;

  return (
    <div>
      <h1 className='text-5xl mb-11 text-center mt-11 text-orange-100'>
        Watch <span style={{ textTransform: 'capitalize' }} className="text-orange-400">{name}</span> exercise videos
      </h1>
      <div className='flex flex-wrap justify-around'>
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img  src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div>
              <h1 className='text-orange-400 text-xl'>
                {item.video.title}
              </h1>
              <h2 className='text-xs'>
                {item.video.channelName}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;