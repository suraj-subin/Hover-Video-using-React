import React, { useRef } from "react";
// import introvideo from "./src/assets/movie.mp4";
import introvideo from "../assets/movie.mp4";
import thum from "../assets/Tuddrom__A_Hub_For_Best.png";
import thumb from "../assets/Tuddrom_Dual_Driver_Earphone.png";
const VideoPlayer = () => {
  const videoRef1 = useRef();
  const videoRef2 = useRef();
  const videoRef3 = useRef();
  const videoRef4 = useRef();

  const handlefirstPlay = () => {
    videoRef1.current.play();
  };
  const handlefirstPause = () => {
    videoRef1.current.pause();
  };
  const handlesecondPlay = () => {
    videoRef2.current.play();
  };
  const handlesecondPause = () => {
    videoRef2.current.pause();
  };
  const handlethirdPlay = () => {
    videoRef3.current.play();
  };
  const handlethirdPause = () => {
    videoRef3.current.pause();
  };
  const handlefourthPlay = () => {
    videoRef4.current.play();
  };
  const handlefourthPause = () => {
    videoRef4.current.pause();
  };

  return (
    <>
      <div className="Main-Container">
        <div
          className="container"
          onMouseEnter={handlefirstPlay}
          onMouseLeave={handlefirstPause}
          style={{ border: "1px solid red" }}
        >
          <img src={thum} alt="Avatar" className="image" />
          <div className="middle">
            <video ref={videoRef1} loop controls className="forever-video">
              <source src={introvideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div
          className="container"
          onMouseEnter={handlesecondPlay}
          onMouseLeave={handlesecondPause}
          style={{ border: "1px solid red" }}
        >
          <img src={thum} alt="Avatar" className="image" />
          <div className="middle">
            <video ref={videoRef2} loop controls className="forever-video">
              <source src={introvideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div
          className="container"
          onMouseEnter={handlethirdPlay}
          onMouseLeave={handlethirdPause}
          style={{ border: "1px solid red" }}
        >
          <img src={thum} alt="Avatar" className="image" />
          <div className="middle">
            <video ref={videoRef3} loop controls className="forever-video">
              <source src={introvideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div
          className="container"
          onMouseEnter={handlefourthPlay}
          onMouseLeave={handlefourthPause}
          style={{ border: "1px solid red" }}
        >
          <img src={thum} alt="Avatar" className="image" />
          <div className="middle">
            <video ref={videoRef4} loop controls className="forever-video">
              <source src={introvideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
