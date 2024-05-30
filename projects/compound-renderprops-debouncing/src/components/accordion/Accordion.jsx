import { createContext, useContext, useState } from "react";
import { AccordionItem } from "./AccordionItem";
import { AccordionTitle } from "./AccordionTitle";
import { AccordionContent } from "./AccordionContent";

const AccordionContext = createContext();

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context)
    throw Error(
      "The context must be provided, Accordion-related components must be wrapped by <Accordion>"
    );

  return context;
};

export const Accordion = ({ children, className }) => {
  const [openItemId, setOpenItemId] = useState();

  const toggleItem = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  const value = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={value}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
