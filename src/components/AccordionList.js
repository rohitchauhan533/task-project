import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Accordion } from '@material-ui/core';
import AccordionItem from './AccordionItem';

const AccordionList = () => {
  const accordionItems = useSelector(state => state.accordionItems);

  const [selectedUser,setSelectedUser]   =  useState(null);

  const [editMode,setEditMode] =  useState(false);

  function handleSelectUser(user){
    setSelectedUser(user);
  }


  return (
    <div>
      {accordionItems.map(item => (
        <AccordionItem selectedUser={selectedUser} editMode = {editMode} setEditMode={setEditMode} handleSelectUser={handleSelectUser} key={item.id} item={item} />
      ))}
    </div>
  );
};

export default AccordionList;
