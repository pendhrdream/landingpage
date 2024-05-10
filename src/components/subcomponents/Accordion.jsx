import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [toggles, setToggles] = useState([true, false, false, false]);

  const handleClick = (toggleIndex) => {
    setToggles(
      toggles.map((toggle, index) => {
        if (toggleIndex === index) return !toggle;
        else return toggle;
      })
    );
  };

  const items = [
    {
      title: "Question number 1",
      content:
        "Answer of the quesiton. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Question number 2",
      content:
        "Answer of the quesiton. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Question number 3",
      content:
        "Answer of the quesiton. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Question number 4",
      content:
        "Answer of the quesiton. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="container mx-auto responsive-padding">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          open={toggles[index]}
          title={item.title}
          content={item.content}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Accordion;
