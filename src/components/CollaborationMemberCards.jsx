import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CardStack from "./CardStack";
import collaborations from "../assets/collaborationData.json";

function MemberCards({ onCardClick }) {
  const members = ["メンバー 1", "メンバー 2", "メンバー 3"];
  const splideRef = useRef(null);

  const splideOptions = {
    type: "loop",
    drag: true,
    autoplay: true,
    interval: 0, // duration (in ms) that each slide is displayed
    speed: 12000, // time it takes for one slide to move out of view
    easing: "linear",
    wheel: false,
    arrows: false,
    pagination: false,
    startIndex: 1,
    gap: '-8rem',
    perPage: 2,
  };

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.splide.go(1);
    }
  }, []);

  return (
    <Splide options={splideOptions} ref={splideRef}>
      {members.map((memberName, index) => (
        <SplideSlide key={memberName}>
          <div className="w-10/12 flex justify-center">
            <CardStack
              memberName={memberName}
              experiences={collaborations[`member${index + 1}`]}
              onCardClick={onCardClick}
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}

MemberCards.propTypes = {
  onCardClick: PropTypes.func.isRequired,
};

export default MemberCards;
