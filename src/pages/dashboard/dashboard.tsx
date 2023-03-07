import React, { FC, ReactElement } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { customTheme } from '../../theme/customTheme';

import { Grid } from '@mui/material';
import { Sidebar } from '../../components/sidebar/sidebar';
import { TaskArea } from '../../components/taskArea/taskArea';

export const Dashboard: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Grid container minHeight="100vh" p={0} m={0}>
      <TaskArea />
      <Sidebar />
      </Grid>
    </ThemeProvider>
  );
};
