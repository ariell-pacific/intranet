import React from 'react';
import Stack from '@mui/material/Stack';
import Display from './DashboardStatBox';
import PageTitle from '../common/PageTitle';
import { useSelector } from 'react-redux';
import {
  getLinks
} from '../../store/links/selectors';
import { Grid } from '@mui/material';

const LinksBody = () => {
  const links = useSelector(getLinks)
  return (
    <React.Fragment>
      <PageTitle title="Quick Links" />
      <Stack
        p={{ xs: '50px', sm: '50px' }}
        direction="row"
        gap={2}
        width='100%'
        position="relative"
        color="white">

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {links.map(el => {
            return <Grid item xs={4} sm={4} md={4} key={el.linkId+"key"}>
              <Display
                key={el?.linkId}
                value={el?.linkName}
                label={el?.linkDescription}
                link={el?.url}
                type="registered" />

            </Grid>
          })}
        </Grid>
        <Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default LinksBody;
