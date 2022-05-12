import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LoadingButton from "@mui/lab/LoadingButton";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { LoginGrid } from "../../components/LoginGrid";
import { LabelTextInput } from "../../components/LabelTextInput";
import { useFetchAndLoad } from "../../hooks";
import { createPassword } from "./services/recovery.service";

const useStyles = {
    formTitle: {
        p: 1,
        width: "100%",
        fontWeight: "bold",
        marginBottom: 3,
    },
    formInput: { p: 1, width: "100%" },
    loginContent: {
        marginTop: 1,
        flexWrap: "wrap",
        display: "flex",
        justifyContent: "space-between",
    },
    loadingButton: { textTransform: "none", borderRadius: 10, width: "100%", p: 1 },
    textButton: { fontWeight: "bold", fontSize: 14 },
    listError: { listStyle: "none" },
    listItem: { display: "flex", flexWrap: "wrap", alignItems: "center" }
};

const NewPassword = () => {
    const { loading, callEndpoint } = useFetchAndLoad();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const getToken = searchParams.get("token");
    const { formTitle, formInput, loginContent, loadingButton, textButton, listError, listItem } = useStyles;
    const [errors, setErrors] = useState({ hasMin: false, hasUpperCase: false, hasLowerCase: false, hasNumber: false, hasSymbole: false });
    const [enableButton, setEnableButton] = useState(true);

    const initialValues = {
        password: "",
        confirmPassword: "",
    };

    const onSubmit = async ({ confirmPassword }) => {
        try {
            const newPass = await callEndpoint(createPassword({ password: confirmPassword, token: getToken }));
            console.log(newPass);
            navigate("/success-password");
        } catch (error) {
            console.log("Error generate-pass ", error);
            navigate("/error-token");
            // if (error?.response?.data) setErrorMessage(error.response.data.message);
        }
    };

    const validationSchema = Yup.object({
        password: Yup.string()
            .required("Campo obligatorio")
            .test("", "", (value, context) => {
                const hasMin = value?.length >= 8;
                const hasUpperCase = /[A-Z]/.test(value) && value?.length > 0;
                const hasLowerCase = /[a-z]/.test(value) && value?.length > 0;
                const hasNumber = /[0-9]/.test(value) && value?.length > 0;
                const hasSymbole = /[!@#%&]/.test(value) && value?.length > 0;
                // console.log({ hasMin, hasLowerCase, hasUpperCase, hasNumber, hasSymbole });
                setErrors({ hasMin, hasLowerCase, hasUpperCase, hasNumber, hasSymbole });
                const passTest = hasMin && hasLowerCase && hasUpperCase && hasNumber && hasSymbole;
                setEnableButton(!passTest);
                return passTest;
            }),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
            .required("Campo obligatorio"),
    });

    return (
        <LoginGrid>
            <Typography component={Box} variant="h4" sx={{ ...formTitle }} gutterBottom>
                Genera una nueva contraseña
            </Typography>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {(formik) => (
                    <Form>
                        <LabelTextInput
                            type="password"
                            name="password"
                            label="Contraseña nueva"
                            labelProps={{ ml: 1 }}
                            placeholder="**********"
                            variant="outlined"
                            sx={{ ...formInput }}
                        />
                        <Box
                            component={Paper}
                            elevation={3}
                            sx={{ width: "100%", height: "40%", py: 1, mb: 1 }}>
                            <ul style={{ ...listError }}>
                                <Typography component="li" sx={{ ...listItem, color: errors.hasMin ? "#1BB55C" : "#D32F2F" }}>{errors.hasMin ? <CheckIcon sx={{ mr: 1 }} /> : <CloseIcon sx={{ mr: 1 }} />} Mínimo 8 carácteres</Typography>
                                <Typography component="li" sx={{ ...listItem, color: errors.hasUpperCase ? "#1BB55C" : "#D32F2F" }}>{errors.hasUpperCase ? <CheckIcon sx={{ mr: 1 }} /> : <CloseIcon sx={{ mr: 1 }} />}Incluye al menos una letra mayúscula</Typography>
                                <Typography component="li" sx={{ ...listItem, color: errors.hasLowerCase ? "#1BB55C" : "#D32F2F" }}>{errors.hasLowerCase ? <CheckIcon sx={{ mr: 1 }} /> : <CloseIcon sx={{ mr: 1 }} />}Incluye al menos una letra minúscula</Typography>
                                <Typography component="li" sx={{ ...listItem, color: errors.hasNumber ? "#1BB55C" : "#D32F2F" }}>{errors.hasNumber ? <CheckIcon sx={{ mr: 1 }} /> : <CloseIcon sx={{ mr: 1 }} />}Incluye al menos un número</Typography>
                                <Typography component="li" sx={{ ...listItem, color: errors.hasSymbole ? "#1BB55C" : "#D32F2F" }}>{errors.hasSymbole ? <CheckIcon sx={{ mr: 1 }} /> : <CloseIcon sx={{ mr: 1 }} />}Incluye al menos un caracter especial.<br />Ej. !,#,$,%,&,/,(),[],-,_,+</Typography>
                            </ul>
                        </Box>
                        <LabelTextInput
                            type="password"
                            name="confirmPassword"
                            label="Confirmar la contraseña nueva"
                            labelProps={{ ml: 1 }}
                            placeholder="Confirma tu contraseña"
                            variant="outlined"
                            sx={{ ...formInput }}
                        />
                        <Box sx={{ ...loginContent }}>
                            <Box sx={{ width: "50%", height: "100%" }}>
                                <LoadingButton type="submit" variant="contained" size="medium" loading={loading} sx={{ ...loadingButton }} disabled={enableButton}>
                                    <Typography component="span" color="common.white" sx={{ ...textButton }}>
                                        Cambiar contraseña
                                    </Typography>
                                </LoadingButton>
                            </Box>
                            {getToken}
                        </Box>
                    </Form>
                )}
            </Formik>
        </LoginGrid>
    )
};

export { NewPassword };