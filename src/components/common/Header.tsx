import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { appColors } from '../../theme';
import PhoneIcon from '@mui/icons-material/PhoneEnabled';
import MailIcon from '@mui/icons-material/Mail';
const Footer = () => {
    return (
        <Stack
            component="footer"
            id="intranet-footer"
            bgcolor={appColors.primary}
            color="white"
            py={{ xs: 6, sm: 2.5 }}
            height={{ xs: 'auto', sm: 35 }}
            alignItems="center"
            justifyContent="flex-start"
            direction="row">
            <Stack 
            px={4} direction="row" gap={2}>
                <Stack direction="row" alignItems="center" gap={1}>
                    <MailIcon sx={{ fontWeight: "bold", fontSize: 20, color: 'white' }} />
                    <Typography>info@pacificcross.com.ph</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" gap={1}>
                    <PhoneIcon sx={{ fontWeight: "bold", fontSize: 20, color: 'white' }} />
                    <Typography>+63 2 8899-8001</Typography>
                </Stack>
            </Stack>
        </Stack>

    );
};

export default Footer;
