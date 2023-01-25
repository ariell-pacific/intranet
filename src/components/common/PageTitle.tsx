import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { appColors } from '../../theme';
import pic from '../../assets/images/logo.png'
interface IPageTitleProps {
  title: String;
}

const PageTitle = (props: IPageTitleProps) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center">
      <Stack
        mt = {1}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        width={'85%'}
      >
        <img src={pic} width={'200px'} alt="Pacific Cross"/>
        <Typography
          pt={3}
          pb={1}
          sx={{ textTransform: 'uppercase' }}
          color={appColors.primary}
          fontSize={19}
          fontWeight={"bold"}
          alignSelf="center"
          maxWidth={"100%"}>
          {props.title}
        </Typography>
      </Stack >
    </Stack >
  );
};

export default PageTitle;
