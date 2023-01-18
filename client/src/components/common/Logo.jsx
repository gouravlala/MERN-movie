import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      G<span style={{ color: theme.palette.primary.main }}>O</span>U<span style={{ color: theme.palette.primary.main }}>R</span>A<span style={{ color: theme.palette.primary.main }}>V</span>
    </Typography>
  );
};

export default Logo;