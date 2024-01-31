import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Link,
  FormHelperText,
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
} from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useLocation, NavLink } from "react-router-dom";

import { ILogin } from "../interface/type";
import CloseIcon from "@mui/icons-material/Close";
import { paths } from "../routes/path";

import { WhatsApp } from "@mui/icons-material";

interface LoginProps {
  onLogin?(): void;
  requiredHeading?: boolean;
  onRegisterLinkClick?(): void;
}

const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("PhoneNumber is required")
    .matches(
      /[6-9]{1}[0-9 ]{4}[0-9 ]{4}[0-9]{1}/,
      "Please enter a valid phone number"
    )
    .max(10, "Phone number must be 10 digits"),
  password: yup.string().required("Password is required"),
});

function Login({ onLogin, requiredHeading, onRegisterLinkClick }: LoginProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const isFromNavbar = state?.fromNavbar || false;
  const isFromOrders = state?.fromOrders || false;
  const isFromSignup = state?.fromSignup || false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const handleLogin = () => {

  };

  const handleRegisterLinkClick = () => {
    if (isFromNavbar) {
      navigate(`/${paths.SIGNUP}`, { state: { fromNavbarLogin: true } });
    }
    if (isFromOrders) {
      navigate(`/${paths.SIGNUP}`, { state: { fromOrdersLogin: true } });
    }
    if (isFromSignup) {
      navigate(`/${paths.SIGNUP}`, { state: { fromSignupLogin: true } });
    } else {
      if (onRegisterLinkClick) onRegisterLinkClick();
    }
  };

  const handleForgotPasswordClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box>
          {requiredHeading && (
            <Typography variant="h5" align="center" gutterBottom>
              Login
            </Typography>
          )}
          <form onSubmit={handleSubmit(handleLogin)}>
            <Typography>
              PhoneNumber<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              type="tel"
              {...register("phoneNumber")}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message?.toString()}
              autoComplete="new"
              required
            />
            <Typography>
              Password<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              type="password"
              autoComplete="new"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message?.toString()}
              required
            />
            <Link sx={{ float: "right" }} onClick={handleForgotPasswordClick}>
              Forgot Password?
            </Link>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              sx={{ marginTop: 3 }}
              type="submit"
            >
              Login
            </Button>
            <FormHelperText sx={{ textAlign: "center", paddingTop: "5px" }}>
              <Box sx={{ cursor: "pointer" }} fontSize="15px">
                Don't have an Account?
                <br /> Please &nbsp;
                <Link onClick={handleRegisterLinkClick}>Register</Link>
              </Box>
            </FormHelperText>
          </form>
        </Box>
      </Box>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          <strong>Reset Password</strong>
          <CloseIcon
            sx={{ position: "absolute", right: 20, top: 20 }}
            onClick={handleCloseDialog}
          />
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ textAlign: "center", padding: "10px 24px" }}>
          <Typography variant="h6">Contact Details</Typography>
          <Typography variant="body2">
            Please contact to the phone number or WhatsApp for the password
            reset
          </Typography>
          <Typography sx={{ mt: 2 }} fontWeight="bold">
            Call: 7010456239
            <br />
            (or)
          </Typography>

          <NavLink to={import.meta.env.VITE_NKS_WHATSAPP} target="_blank">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#25D366",
                marginTop: "4px",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#1A9533",
                },
              }}
              startIcon={<WhatsApp fontSize="large" />}
            >
              Chat Now
            </Button>
          </NavLink>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Login;
