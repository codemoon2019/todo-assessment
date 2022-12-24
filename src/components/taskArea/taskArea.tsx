import { Box, Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';

import { Task } from '../task/task';
import { TaskCounter } from '../taskCounter/taskCounter';
import { format } from 'date-fns';

import {  useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { ITask } from '../task/interfaces/ITask';
import { Status } from '../createTaskForm/enums/Status';


export const TaskArea: FC = (): ReactElement => {


  const taskList = useSelector((state: RootState) => state);
  
  
  return (
    <Grid item md={8} px={4}>
      <Box mb={3} px={4} sx={{textAlign:'center'}}>
        <h2>
          Status Of Your Tasks As On{' '}
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={4}
        >
          <TaskCounter status={Status.todo} count={taskList.filter((task)=>task.status ==Status.todo).length}/>
          <TaskCounter status={Status.inProgress} count={taskList.filter((task)=>task.status ==Status.inProgress).length}/>
          <TaskCounter status={Status.completed} count={taskList.filter((task)=>task.status ==Status.completed).length}/>
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          xs={10}
          md={8}
        >
          {taskList.map((task:ITask, idx:number) => (
            <Task key={idx} id={task.id} title={task.title} date={task.date} description={task.description} status={task.status} priority={task.priority}/>
          ))
          }
        </Grid>
      </Grid>
    </Grid>
  );
};
