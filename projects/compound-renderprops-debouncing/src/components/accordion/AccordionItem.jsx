import React, { createContext, useContext } from "react";

const AccordionItemContext = createContext();

export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);
  if (!context)
    throw Error(
      "The context must be provided, AccordionItem-related components must be wrapped by <Accordion.Item>"
    );
  return context;
};

export const AccordionItem = ({ id, className, children }) => {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
};

/* export const AccordionItem = ({ id, children, title, className }) => {
  const { openItemId, toggleItem } = useAccordionContext();
  const isOpen = openItemId === id;

  const handleClick = () => {
    toggleItem(id);
  };

  return (
    <li className={className}>

        {children}

    </li>
  );
};
 */
