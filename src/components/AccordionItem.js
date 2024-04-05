import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Stack, Box, AccordionActions } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { deleteAccordionItem, editAccordionItem } from '../redux/actions/accordionAction';
import { Avatar } from '@material-ui/core';
import {ErrorMessage, Field, Form, Formik} from "formik";
import { validationSchema } from '../schema/AccordionSchema';


function calculateAge(dob){

  return Number(new Date().getFullYear() - Number(new Date(dob).getFullYear()))

}

const AccordionItem = ({item,selectedUser,handleSelectUser,editMode,setEditMode}) => {


  

  // const [user,setUser]  = useState({
  //   ...item
  // });

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



  // const handleSubmit = (values) => {



  //   console.log(values,"onsubmit called");
  // };


  function CurrentUserEdit (item){
    return editMode && (item?.id === selectedUser?.id);
  }







  return (

    <Formik
    initialValues={item}
    validationSchema={validationSchema}
    onSubmit={(vals)=>{
      console.log(vals,"values");
      dispatch(editAccordionItem(item?.id,vals))
      setEditMode(false);
    }}
  >
    {({ errors, touched,handleSubmit,setValues }) => (
      <Form>

<Accordion expanded={selectedUser?.id === item?.id} onClick={()=>{
if(!editMode){
handleSelectUser(item)
}
}}>

  <AccordionSummary expandIcon={<ExpandMoreIcon />}>

    <Stack direction={"row"} gap={"1rem"} alignItems={"center"}>
    <Avatar alt="Remy Sharp" src={picture} />
    {CurrentUserEdit(item)  ?

<Stack direction={"row"} gap={"2rem"}>
<div>
  <Field type="text" id="first" name="first" />
  <ErrorMessage name="first" component="div" className="error" />
</div>

<div>
  <Field type="text" id="last" name="last" />
  <ErrorMessage name="last" component="div" className="error" />
</div>
</Stack>
       
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

{CurrentUserEdit(item) ?  
  <div>
          <Field as="select" id="gender" name="gender">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="rather not to say">Rather not to say</option>
            <option value="trangender">Transgender</option>
            <option value="other">Other</option>
          </Field>
          <ErrorMessage name="gender" component="div" className="error" />
        </div>
:

<Typography>{item?.gender}</Typography>
}




</Stack>
<Stack direction={"column"}  gap={".6rem"}>


    

<Typography>Country</Typography>


{CurrentUserEdit(item) ?   
   <div>
   <Field type="text" id="country" name="country" />
   <ErrorMessage name="country" component="div" className="error" />
 </div>
:
<Typography>{item?.country}</Typography>
}




</Stack>
    </Stack>
    {
      CurrentUserEdit(item) ? 
      <div>
      <Field type="textArea" as="input"  id="description" name="description" />
      <ErrorMessage name="description" component="div" className="error" />
    </div>
      : <>
       <Box my={"1rem"}>{item?.description}</Box>
      </>
    }

    <AccordionActions>
      {CurrentUserEdit(item) ?  <>
      <Button color="secondary" type='button' onClick={()=>{
          setEditMode(false) }}>Cancel</Button>
      <Button type='submit' color="secondary" onClick={handleSubmit}>
      Save
      </Button>
      </>     : <>
      <Button color="secondary" onClick={handleDelete} type='button'>Delete</Button>
      <Button disabled={calculateAge(item?.dob) < 18} color="secondary" type="button" onClick={e=>{
        e.preventDefault()
        setValues(item);
        handleEdit();
      }}>
      Edit
      </Button>
      </>}
    </AccordionActions>
  </AccordionDetails>
</Accordion> 
      </Form>
    )}
  </Formik>
 
  );
};

export default AccordionItem;
