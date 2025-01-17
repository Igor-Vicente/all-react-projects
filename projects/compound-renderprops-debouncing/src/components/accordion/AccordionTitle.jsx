import React from "react";
import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export const AccordionTitle = ({ className, children }) => {
  const { toggleItem } = useAccordionContext();
  const id = useAccordionItemContext();

  return (
    <h3 onClick={() => toggleItem(id)} className={className}>
      {children}
    </h3>
  );
};
