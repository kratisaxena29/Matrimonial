import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IconButton, InputAdornment, TextField } from "@mui/material";
import logo from "../images/logo_maroon.png";
import bigImage from "../images/hero_image2.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from 'react-router-dom';

function NewPassword() {
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    });
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setPasswordError("Passwords do not match");
            toast.error("Passwords do not match");
        } else {
            setPasswordError("");
            console.log("...password..",formData.password)
            console.log("Form submitted successfully");
            // Add your form submission logic here
        }
    };

    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                background: "#F7E7CE",
            }}
        >
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        maxWidth: "500px",
                        padding: "40px",
                        borderRadius: "8px",
                        boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
                        background: "#fff",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src={logo}
                            width={100}
                            height={100}
                            alt="logo"
                            loading="lazy"
                            className="ic-logo"
                        />
                        <h2
                            style={{
                                textAlign: "center",
                                marginBottom: "30px",
                                fontSize: "35px",
                                color: "#EC184A",
                                textTransform: "uppercase",
                                fontWeight: "600",
                            }}
                        >
                            Reset Password
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: "30px" }}>
                            <label
                                style={{
                                    display: "block",
                                    marginBottom: "10px",
                                    fontSize: "18px",
                                    color: "#555",
                                }}
                                htmlFor="password"
                            >
                                New Password
                            </label>
                            <TextField
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Enter Password"
                                value={formData.password}
                                onChange={handleChange}
                                style={{ width: "100%" }}
                                required
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <VisibilityOffIcon />
                                                ) : (
                                                    <VisibilityIcon />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div style={{ position: "relative", marginBottom: "10px" }}>
                            <label
                                style={{
                                    display: "block",
                                    marginBottom: "10px",
                                    fontSize: "18px",
                                    color: "#555",
                                }}
                                htmlFor="confirmPassword"
                            >
                                Confirm Password
                            </label>
                            <TextField
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Enter Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                style={{ width: "100%" }}
                                required
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                edge="end"
                                            >
                                                {showConfirmPassword ? (
                                                    <VisibilityOffIcon />
                                                ) : (
                                                    <VisibilityIcon />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {passwordError && (
                                <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                                    {passwordError}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            style={{
                                width: "100%",
                                padding: "15px",
                                borderRadius: "8px",
                                border: "none",
                                background: "#F68C1E",
                                color: "#fff",
                                fontSize: "18px",
                                cursor: "pointer",
                                transition: "background 0.3s",
                            }}
                            onMouseOver={(e) => (e.target.style.background = "#e07b17")}
                            onMouseOut={(e) => (e.target.style.background = "#F68C1E")}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    background: `url(${bigImage}) no-repeat center center`,
                    backgroundSize: 'cover',
                }}
            />
            <ToastContainer />
        </div>
    )
}

export default NewPassword;
