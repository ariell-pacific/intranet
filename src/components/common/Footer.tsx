import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { appColors } from '../../theme';

const Footer = () => {
  return (
    <Stack
      component="footer"
      id="intranet-footer"
      bgcolor={appColors.primary}
      color="white"
      py={{ xs: 6, sm: 2.5 }}
      height={{ xs: 'auto', sm: 315 }}
      alignItems="center">
      <Stack
        width="95%"
        flexDirection={{ xs: 'column', sm: 'row' }}
        gap={{ xs: 1, sm: 1 }}
        alignItems="center"
        justifyContent="space-between">
        <Stack
          gap={1}
          width="50%"
          alignItems="space-around"
          textAlign="left">
          <Typography fontWeight="bold" variant='h5' mt={2}>
            Get in touch with us!
          </Typography>
          <Stack>
            <Typography fontWeight="bold" fontSize={15}>
              For client inquiries and support:
            </Typography>
            <Typography fontSize={15}>
              +63 2 8230-8511
            </Typography>
            <Typography fontSize={15}>
              Available 24 hours a day, 7 days a week
            </Typography>
          </Stack>
          <Stack>
            <Typography fontWeight="bold" fontSize={15}>
              For corporate transactions:
            </Typography>
            <Typography fontSize={15}>
              +63 2 8899-8001
            </Typography>
            <Typography fontSize={15}>
              Available from 8:30 am to 5:30 pm, Monday to Friday
            </Typography>
          </Stack>
          <Typography fontWeight="bold" fontSize={15}>
            Pacific Cross Insurance, Inc. - All rights reserved 2023
          </Typography>
        </Stack>
        <Stack
          gap={1}
          width="50%"
          justifyContent="space-around"
          textAlign="right">
          <Stack>
            <Typography fontWeight="bold" mt={2} variant='h6'>
              Head Office
            </Typography>
          </Stack>
          <Stack>
            <Typography fontSize={15}>
              2nd Floor (Client & Partner Center), 8th Floor
            </Typography><Typography fontSize={15}>
              (Sales & Customer Service Center) and 18th
            </Typography>
            <Typography fontSize={15}>
              Floor (Operations & Executive Center)
            </Typography>
            <Typography fontSize={15}>
              8 Rockwell Building, Hidalgo Drive, Makati City,
            </Typography>
            <Typography fontSize={15}>
              Metro Manila, Philippines
            </Typography>
            <Typography fontSize={15}>
              Open from 8:30 am to 5:30 pm,
            </Typography>
            <Typography fontSize={15}>
              Monday to Friday (except holidays)
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack >
  );
};

export default Footer;
