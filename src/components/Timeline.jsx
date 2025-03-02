import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

console.log(timeline);

const Timeline = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20 timeline" id="timeline">
      <div className="w-full md:w-7/12" >
        <Title id="timeline">Timeline</Title>
      {timeline.map((item) => (
        <TimelineItem
          key={item.id}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      )
      )}
      </div>
    </div>
  )
}

export default Timeline;