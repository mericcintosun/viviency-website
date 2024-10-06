"use client";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function TimeLine({ service }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto p-6 sm:p-8 md:p-10 lg:p-12 my-12">
      <Timeline>
        {service.timeline.map((event, index) => (
          <motion.div
            key={event.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered effect
          >
            <TimelineItem className="transition duration-300 ease-in-out rounded-lg">
              {index < service.timeline.length - 1 && <TimelineConnector />}
              <TimelineHeader className="h-3">
                <TimelineIcon className="transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-[#F07F55] p-2 rounded-full" />{" "}
                {/* Added hover effect */}
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="leading-none hover:text-[#F07F55] transition duration-300 ease-in-out text-2xl sm:text-3xl md:text-4xl lg:text-4xl py-4"
                >
                  {event.title}
                </Typography>
              </TimelineHeader>
              <TimelineBody
                className={index < service.timeline.length - 1 ? "pb-8" : ""}
              >
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal transition duration-300 ease-in-out text-base sm:text-lg md:text-xl py-4"
                >
                  {event.description}
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </motion.div>
        ))}
      </Timeline>
    </div>
  );
}
