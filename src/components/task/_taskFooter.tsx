import {Box,Button,FormControlLabel,Switch, Typography} from '@mui/material';
import React, { FC, ReactElement } from 'react';

import { ITaskFooter } from './interfaces/ITaskFooter';
import PropTypes from 'prop-types';
import { Status } from '../createTaskForm/enums/Status';

export const TaskFooter: FC<ITaskFooter> = (
  props,
): ReactElement => {
  //  Destructure props
  const {
    status = Status.completed,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  const IsInprogress:boolean = status === Status.inProgress;
  const IsCompleted:boolean = status === Status.completed;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      {!IsCompleted && 
        <FormControlLabel
        label="In Progress"
        checked={IsInprogress}
        control={
          <Switch
            onChange={(e) => onStatusChange(e)}
            color="warning"
          />
        }
      />
      }
      
      {IsCompleted ? 
       <Typography variant="subtitle1" sx={{color:"#46b142ed", width: '100%',textAlign: 'end'}}>COMPLETED</Typography>
      : 
      <Button
      variant="contained"
      color="success"
      size="small"
      sx={{ color: '#ffffff' }}
      onClick={(e) => onClick(e)}
    >
      Mark Complete
    </Button>
      }
      
    </Box>
  );
};

TaskFooter.propTypes = {
  status: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
