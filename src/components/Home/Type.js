import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Android App Developer",
          "Software Engineer",
          "Freelancer",
          "Full Stack Mobile Developer",
          "Kotlin, KTOR and KMM Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
