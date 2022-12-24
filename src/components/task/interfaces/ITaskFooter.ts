import React from 'react';
import { Status } from '../../createTaskForm/enums/Status';

export interface ITaskFooter {
  status?:string,
  onStatusChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
  ) => void;
}
