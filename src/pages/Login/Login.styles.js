import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  gridContainder: {
    height: "100vh",
    width: "100vw",
    margin: 0,
  },
  gridItem: {
    height: "100vh",
    background: "url(imgs/bg-login.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
}, { index: 1 });

export default useStyles;