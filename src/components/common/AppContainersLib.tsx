import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import { appColors } from '../../theme';

export const ListViewContainer = styled(Box)({
  padding: '16px',
  backgroundColor: 'white',
  flex: 1,
  borderTop: `3px solid ${appColors.lightGray}`,
  overflow: 'hidden'
});

export const ControlsContainer = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '16px'
});

export const PageWithTableContainer = styled(Stack)({
  flex: 1,
  maxHeight: 'calc(100vh - 120px)'
});

export const DashboardContainer = styled(Stack)({
  flex: 1,
  maxHeight: 'calc(100vh - 120px)'
});

export const PaperTableContainer = styled(Paper)({
  width: '100%',
  overflow: 'hidden',
  height: 'calc(100% - 40px)',
  maxHeight: 'calc(100% - 40px)'
});
