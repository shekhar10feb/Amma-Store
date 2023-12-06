import React, { useState, useEffect } from "react";
import photo from "../poster";

export const ProductSlider = () => {
  const [posters, setPosters] = useState(photo);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = posters.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, posters]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="w-full h-[16rem] my-2 z-0">
      <div className="w-full h-[16rem] flex justify-center items-center text-center relative my-0 mx-auto overflow-hidden">
        {posters.map((poster, posterIndex) => {
          const { id, image } = poster;

          let position = "nextSlide";

          if (posterIndex === index) {
            position = "activeSlide";
          }
          if (
            posterIndex === index - 1 ||
            (index === 0 &&
              posterIndex === posters.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt="Poster" className="poster-img" />
            </article>
          );
        })}
      </div>
    </section>
  );
};
