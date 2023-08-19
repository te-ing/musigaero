import React from 'react';
import { Typography, Stack, Container, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Box } from '@mui/system';
import { Restore, Favorite, LocationOn } from '@mui/icons-material';

const Home = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h2">
          Vite-MUI-TS Template
        </Typography>
        <Typography textAlign="center" variant="subtitle1">
          React + TS + Vite + Redux + RTK + MUI + RRD + Prettier
        </Typography>
      </Stack>

      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<Restore />} />
          <BottomNavigationAction label="Favorites" icon={<Favorite />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
        </BottomNavigation>
      </Box>
    </Container>
  );
};

export default Home;
