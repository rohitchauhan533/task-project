import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Stack, Box, AccordionActions } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { deleteAccordionItem } from '../redux/actions/accordionAction';
import { Avatar } from '@material-ui/core';


function calculateAge(dob){

  return Number(new Date().getFullYear() - Number(new Date(dob).getFullYear()))

    
}

const AccordionItem = ({item}) => {


  
  const [editMode,setEditMode]  =  useState(false);

  const [user,setUser]  = useState({
    ...item
  });

  const {
   id, first, last, dob, gender, picture, country 
  } = item;

  const dispatch = useDispatch();

  const handleDelete = () => {
  dispatch(deleteAccordionItem(id));
  };

  const handleEdit = ()=>{

    setEditMode(true);

  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Stack direction={"row"} gap={"1rem"} alignItems={"center"}>
        <Avatar alt="Remy Sharp" src={picture} />
        {editMode  ?

        <input type='text' placeholder='enter name' value={`${user?.first} ${user?.last}`}/>
        
        :

        <Typography>{`${first}  ${last}`}</Typography>
        }
        
        </Stack>
 
      </AccordionSummary>
      <AccordionDetails>

        <Stack direction={"row"} justifyContent={"space-between"}>
         <Stack direction={"column"}  gap={".6rem"}>


        

          <Typography>age</Typography>
          <Typography>{calculateAge(item?.dob)} Years</Typography>


        
         </Stack>

         <Stack direction={"column"}  gap={".6rem"}>


        

<Typography>Gender</Typography>
<Typography>{user?.gender}</Typography>



</Stack>
<Stack direction={"column"}  gap={".6rem"}>


        

<Typography>Country</Typography>
<Typography>{user?.country}</Typography>



</Stack>
        </Stack>

        <Box my={"1rem"}>{user?.description}</Box>

        <AccordionActions>
        <Button color="secondary" onClick={handleDelete}>Delete</Button>
        <Button disabled={calculateAge(item?.dob) < 18} color="secondary" onClick={handleEdit}>
          Edit
          </Button>
        </AccordionActions>

      
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
