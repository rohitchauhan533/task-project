import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Accordion } from '@material-ui/core';
import {TextField} from "@mui/material";
import AccordionItem from './AccordionItem';
import useDebounce from '../hooks/useDebounce';
import {useDispatch} from "react-redux";
import { ClearSearchAccordionItem, SearchAccordionItem } from '../redux/actions/accordionAction';

const AccordionList = () => {
  const accordionItems = useSelector(state => state.accordionItems);

  const [selectedUser,setSelectedUser]   =  useState(null);

  const [editMode,setEditMode] =  useState(false);

  const [search,setSearch] =  useState("");

  const debounceSearch =  useDebounce(search,1000);


  const dispatch  =  useDispatch();

  function handleSelectUser(user){
      
    setSelectedUser(user);

  }


  function handleInputSearch(e){


    if(e?.target?.value === ""){
      dispatch(ClearSearchAccordionItem());
    }

    setSearch(e?.target?.value);
  
  }
  

  

  useEffect(()=>{
    if(debounceSearch){

      dispatch(SearchAccordionItem(debounceSearch.toLowerCase()));

    }
  },[debounceSearch]);








  return (
    <div>

      <TextField fullWidth placeholder='search user' onChange={handleInputSearch}/>


      {accordionItems.map(item => (
        <AccordionItem selectedUser={selectedUser} editMode = {editMode} setEditMode={setEditMode} handleSelectUser={handleSelectUser} key={item.id} item={item} />
      ))}
    </div>
  );
};

export default AccordionList;
