import React from 'react';

// Array of YouTube video links
const videoData = [
  { id: 1, title: 'Video 1', url: 'https://www.youtube.com/embed/yJktcDKcNiE?si=Lk0TxdZEwUvsbvcD" title="YouTube video player' },
  { id: 2, title: 'Video 2', url: 'https://www.youtube.com/embed/yJktcDKcNiE?si=Lk0TxdZEwUvsbvcD" title="YouTube video player' },
  { id: 3, title: 'Video 3', url: 'https://www.youtube.com/embed/yJktcDKcNiE?si=Lk0TxdZEwUvsbvcD" title="YouTube video player' },
  // Add more videos as needed
];

const Video = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Gallery Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoData.map((video) => (
          <div key={video.id} className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
            <iframe
              width="100%"
              height="315"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
