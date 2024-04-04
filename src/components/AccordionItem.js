import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { deleteAccordionItem } from '../actions/accordionActions';

const AccordionItem = ({ id, first, last, dob, gender, email, picture, country }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteAccordionItem(id));
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{`Name: ${first} ${last}`}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{`DOB: ${dob}, Gender: ${gender}, Email: ${email}, Picture: ${picture}, Country: ${country}`}</Typography>
        <Button color="secondary" onClick={handleDelete}>Delete</Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
