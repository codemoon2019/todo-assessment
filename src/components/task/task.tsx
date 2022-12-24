import React, { FC, ReactElement } from 'react';

import { Box } from '@mui/material';
import { ITask } from './interfaces/ITask';
import { Priority } from '../createTaskForm/enums/Priority';
import PropTypes from 'prop-types';
import { Status } from '../createTaskForm/enums/Status';
import { TaskDescription } from './_taskDescription';
import { TaskFooter } from './_taskFooter';
import { TaskHeader } from './_taskHeader';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';

import {setTodoStatus } from "../../redux/todoSlice";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

export const Task: FC<ITask> = (props): ReactElement => {
  //  Destructure props
  const {
    title = 'Test Title',
    date = new Date(),
    description = 'Lorem ipsum dolor sit amet',
    priority = Priority.normal,
    status = Status.completed,
    id="id"
  } = props;

  const StatusChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    let new_status:string;
    e.target.checked ? new_status = Status.inProgress : new_status=Status.todo
    dispatch(setTodoStatus({status:new_status,id:id}))
  }

  const HandleClick =() =>{
    dispatch(setTodoStatus({status:Status.completed,id:id}))
  }


  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        
        status={status}
        onClick={HandleClick}
        onStatusChange={StatusChangeHandler}
      />
    </Box>
  );
};

Task.propTypes = {
  id:PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  priority: PropTypes.string,
  status: PropTypes.string,
};
