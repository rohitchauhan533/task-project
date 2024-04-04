import React from 'react';
import { useSelector } from 'react-redux';
import { Accordion } from '@material-ui/core';
import AccordionItem from './AccordionItem';

const AccordionList = () => {
  const accordionItems = useSelector(state => state.accordionItems);

  return (
    <div>
      {accordionItems.map(item => (
        <AccordionItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default AccordionList;
