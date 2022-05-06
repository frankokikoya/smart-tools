import React from "react";
import * as Yup from "yup";
import "yup-phone-lite";
import { Formik, Form } from "formik";
import { Button, Box, MenuItem } from "@mui/material";
import { FormDialog } from "../../../../components/FormDialog";
import { LabelTextInput } from "../../../../components/LabelTextInput";
import { LabelSelectInput } from "../../../../components/LabelSelectInput";

const styles = {
    form: { display: "flex", flexDirection: "column", width: "100%", height: "100%", pl: 2 },
    inputLabel: { fontWeight: "bold", py: 1 },
    widthInput: { width: "45ch" },
    button: { textTransform: "none", fontWeight: "bold", fontSize: "1.2em", borderRadius: 10, minWidth: "25%", mt: 2, mr: 1 }

};

const CreateUserForm = ({ handleClose, onSubmit }) => {

    const requiredAndOnlyLetters = Yup.string().required("Éste campos es requerido").matches(/^[aA-zZ\s]+$/, "Formato inválido, solo se admiten letras");


    const initialValues = {
        name: "",
        surname: "",
        secondSurname: "",
        email: "",
        phone: "",
        role: 0,
        branch: 0
    };

    const validationSchema = Yup.object({
        name: requiredAndOnlyLetters,
        surname: requiredAndOnlyLetters,
        secondSurname: requiredAndOnlyLetters,
        email: Yup.string()
            .email('Formato inválido, sólo se admite el formato "correo@ejemplo.com"')
            .required("Éste campo es requerido"),
        phone: Yup.string()
            .phone("MX", "Formato inválido, sólo se admiten números")
            .required("Éste campo es requerido"),
        role: Yup.number().moreThan(0, "Elige una opción válida").required("Éste campo es requerido"),
        branch: Yup.number().moreThan(0, "Elige una opción válida").required("Éste campo es requerido"),
    });

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {(formik) => (
                <Box
                    component={Form}
                    sx={{ ...styles.form }}
                >
                    <Box sx={{ display: "flex" }}>
                        <LabelTextInput
                            type="text"
                            name="name"
                            label="Nombre*"
                            labelProps={{ ...styles.inputLabel }}
                            placeholder="example@example.com"
                            variant="outlined"
                            sx={{ ...styles.widthInput }}
                        />
                        <LabelTextInput
                            type="text"
                            name="surname"
                            label="Primer apellido*"
                            labelProps={{ ...styles.inputLabel }}
                            placeholder="example@example.com"
                            variant="outlined"
                            divProps={{ ml: 5 }}
                            sx={{ ...styles.widthInput }}
                        />
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <LabelTextInput
                            type="text"
                            name="secondSurname"
                            label="Segundo apellido"
                            labelProps={{ ...styles.inputLabel }}
                            placeholder="example@example.com"
                            variant="outlined"
                            sx={{ ...styles.widthInput }}
                        />
                        <LabelTextInput
                            type="text"
                            name="email"
                            label="Correo electrónico*"
                            labelProps={{ ...styles.inputLabel }}
                            placeholder="example@example.com"
                            variant="outlined"
                            divProps={{ ml: 5 }}
                            sx={{ ...styles.widthInput }}
                        />
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <LabelTextInput
                            type="text"
                            name="phone"
                            label="Teléfono"
                            labelProps={{ ...styles.inputLabel }}
                            placeholder="+53 55 55 55 55 55"
                            variant="outlined"
                            sx={{ ...styles.widthInput }}
                        />
                        <LabelSelectInput
                            name="role"
                            label="Roles y permisos"
                            labelProps={{ ...styles.inputLabel }}
                            divProps={{ ml: 5 }}
                            sx={{ ...styles.widthInput }}
                        >
                            <MenuItem value={0}>Seleccionar un rol</MenuItem>
                            <MenuItem value={1}>Usuario administrador</MenuItem>
                            <MenuItem value={2}>Usuario financiero</MenuItem>
                            <MenuItem value={3}>Usuario invitado</MenuItem>
                        </LabelSelectInput>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <LabelSelectInput
                            name="branch"
                            label="Sucursal"
                            labelProps={{ ...styles.inputLabel }}
                            sx={{ ...styles.widthInput }}
                        >
                            <MenuItem value={0}>Selecionar una sucursal</MenuItem>
                            <MenuItem value={2000200001}>Sucursal kikoya</MenuItem>
                        </LabelSelectInput>
                    </Box>
                    <FormDialog.Actions>
                        <Button onClick={handleClose} variant="outlined" sx={{ ...styles.button }}>
                            Cancelar
                        </Button>
                        <Button type="submit" variant="contained" sx={{ ...styles.button }}>
                            Crear usuario
                        </Button>
                    </FormDialog.Actions>
                </Box>
            )}
        </Formik>
    )
}

export default CreateUserForm;