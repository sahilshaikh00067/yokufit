import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Progress({ value }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= value) {
          clearInterval(timer);
          return value;
        }
        return Math.min(oldProgress + 1, value); // increase smoothly
      });
    }, 15); // smaller delay = faster animation

    return () => clearInterval(timer);
  }, [value]);

  return (
    <Box sx={{ width: '80%' }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 5,
          borderRadius: 2,
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#547670',
          },
          backgroundColor: '#e0e0e0',
        }}
      />
    </Box>
  );
}
