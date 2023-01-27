import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import { appColors } from '../../theme';

type StatType = 'registered' | 'contacted';

const colorMap: Record<StatType, { main: string; dark: string }> = {
  registered: {
    main: appColors.warning,
    dark: appColors.warningDark
  },
  contacted: {
    main: appColors.error,
    dark: appColors.errorDark
  }
};

interface DashboardStatBoxProps {
  value: any;
  label: string;
  type: StatType;
  link: string;
}

const click = (link: string) => {


  window.location.href = link;

};

const Display = (props: DashboardStatBoxProps) => {
  const { value, label, type, link } = props;

  const color = colorMap[type];

  return (

    <Stack onClick={() => click(link)} >
      <Stack bgcolor={color.main} py={2} px={3} color="white">
        <Typography fontSize={'75%'} fontWeight="bold">
          {value}
        </Typography>
        <Typography sx={{ typography: { sm: 'body1', xs: 'body2' } }} >{label}</Typography>

      </Stack>
      <Stack bgcolor={color.dark} height={30}>
      </Stack>
    </Stack>

  );
};


export default Display;
