import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  setTimeout(() => {
    setOpen(false);
    navigate("/result");
  }, "3000");

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};
export default Loader;
