import React, { useEffect, useState } from "react";
import "./Contentes.css";

const Contentes = () => {
  const [videos, setVideos] = useState([]);
  const [mainVideo, setMainVideo] = useState({});
  const [activeVideoId, setActiveVideoId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating fetching data from an API
        const data = [
          {
            id: "a1",
            title: "manipulate text background",
            name: "manipulate text background.mp4",
            duration: "2:47",
          },
          {
            id: "a2",
            title: "build gauge with css",
            name: "build gauge with css.mp4",
            duration: "2:45",
          },
          // Add more video data as needed...
        ];
        setVideos(data);
        setMainVideo(data[0]);
        setActiveVideoId(data[0].id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleVideoClick = (video) => {
    setMainVideo(video);
    setActiveVideoId(video.id);
  };

  return (
    <main className="container flex h-screen  flex-col md:flex-row bg-red-300">
      <section className="main-video   bg-slate-400 w-full md:w-4/6">
        <video
          src={`videos/${mainVideo.name}`}
          controls
          autoPlay
          muted
          className="w-full rounded-lg"
        ></video>
        <h3
          className="title mt-8 ml-2 capitalize font-bold text-3xl "
        >
          {mainVideo.title}
        </h3>
        <div className="m-5 font-medium
">
          <p>
            Im Derek, an astro-engineer based in Tattooine. I like to build
            X-Wings at
            <a class="underline decoration-sky-500">My Company, Inc</a>. Outside
            of work, I like to{" "}
            <a class="underline decoration-pink-500">watch pod-racing</a> and
            have <a class="underline decoration-indigo-500">light-saber</a>{" "}
            fights.
          </p>
        </div>
      </section>

      <section className="video-playlist bg-slate-100 text-black w-full md:w-1/3 p-4">
        <h3 className="title text-center mb-4 mt-8 text-4xl">
          Title of Video Playlist
        </h3>
        <p className="mt-2 text-center text-2xl">
          10 lessons &nbsp; . &nbsp; 50m 48s
        </p>
        <div className="videos mt-2 max-h-80 overflow-y-auto scrollbar-thin  scrollbar-thumb-white">
          {videos.map((video, index) => (
            <div
              className={`video bg-red-300 mt-5 flex items-center cursor-pointer max-w-sm p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-400 dark:border-gray-700${
                video.id === activeVideoId ? "active" : ""
              }`}
              key={index}
              data-id={video.id}
              onClick={() => handleVideoClick(video)}
            >
              <img src="images/play.svg" alt="" className="w-6 h-6 mr-2" />
              <p className="mr-4">
                {index + 1 > 9 ? index + 1 : "0" + (index + 1)}.{" "}
              </p>
              <h3 className="title  ">{video.title}</h3>
              <p className="time">{video.duration}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Contentes;
