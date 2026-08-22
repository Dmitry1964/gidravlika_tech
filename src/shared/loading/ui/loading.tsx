import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import cls from './loading.module.scss';

const Loading = () => {
  return (
    <Box className={cls.loadingContainer}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
