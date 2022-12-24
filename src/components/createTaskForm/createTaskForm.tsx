import { Box, Stack, Typography, Button,SelectChangeEvent} from '@mui/material';
import React, { useState, FC, ReactElement } from 'react';

import { Priority } from './enums/Priority';
import { Status } from './enums/Status';
import { TaskDateField } from './_taskDateField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskSelectField } from './_taskSelectField';
import { TaskTitleField } from './_taskTitleField';
import { addTodo } from "../../redux/todoSlice";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";



import { ITask } from "../task/interfaces/ITask";

export const CreateTaskForm: FC = (): ReactElement => {

  const [states, setStates] = useState<ITask>({title:"Title Of Task", 
                     description:"Task Description", status:Status.todo, priority:Priority.normal})
  const dispatch = useDispatch<AppDispatch>();

  const handleTitleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setStates({
      ...states,
      title: e.target.value,
    });
  };
  const handleDescriptionChange  = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setStates({
      ...states,
      title: e.target.value,
    });
  };

  const handleDateChange = (
    date: Date | null
  ) => {
    if(!date) date = new Date()
    setStates({
      ...states,
      date: date,
    });
  };

  const handleSelectChange = (
    e: SelectChangeEvent
  ) => {
    
    setStates({
      ...states,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField disabled={false} onChange={handleTitleChange} />
        <TaskDescriptionField disabled={false} onChange={handleDescriptionChange}/>
        <TaskDateField onChange={handleDateChange} />

        <Stack
          sx={{ width: '100%' }}
          direction="row"
          spacing={2}
        >
          <TaskSelectField
            label="Status"
            name="status"
            value={states.status}
            onChange={handleSelectChange}
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
            
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            value={states.priority}
            onChange={handleSelectChange}
            items={[
              {
                value: Priority.low,
                label: Priority.low,
              },
              {
                value: Priority.normal,
                label: Priority.normal,
              },
              {
                value: Priority.high,
                label: Priority.high,
              },
            ]}
          />

        </Stack>
        <Stack>
          <Button
            variant="contained"
            color="success"
            size="small"
            sx={{ color: '#ffffff' }}
            onClick={() => dispatch(addTodo(states))}
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
