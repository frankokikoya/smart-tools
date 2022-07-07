import React, { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Box, Divider, FormControl, Select, MenuItem, Typography, Button } from '@mui/material';

import MainBox from '../../components/MainBox';

export const Designer = () => {
    const [filter, setFilter] = useState(10);

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Box sx={{ mx: 10 }}>
            <MainBox>
                <MainBox.SearchBox>
                    <Box
                        sx={{
                            my: 3,
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                        <Typography
                            component={Box}
                            variant='h4'
                            color='primary'
                            sx={{ fontWeight: "bold", ml: 3 }}
                            gutterBottom>
                            Diseños
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap"
                            }}>
                            <FormControl sx={{ display: "inline-block" }}>
                                <Typography
                                    component='label'
                                    htmlFor='select-filter-label'
                                    sx={{ mr: 2 }}>
                                    Filtrar por:
                                </Typography>
                                <Select
                                    labelId='select-filter-label'
                                    id='select-filter'
                                    value={filter}
                                    onChange={handleChange}
                                    sx={{ width: 200, mr: 2 }}>
                                    <MenuItem value={10}>Todos</MenuItem>
                                    <MenuItem value={20}>Activos</MenuItem>
                                    <MenuItem value={30}>Inactivos</MenuItem>
                                </Select>
                            </FormControl>
                            <Button
                                color='secondary'
                                variant='contained'
                                size='small'
                                endIcon={<AddIcon sx={{ color: "white" }} />}
                                sx={{ textTransform: "none", px: 6 }}
                            >
                                <Typography component='span' color='common.white'>
                                    Crear nuevo diseño
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                    <Divider style={{ width: '100%' }} />
                </MainBox.SearchBox>
                <MainBox.GridBox>
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                        }}>
                        <Box sx={{
                            mt: 20,
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "24px",
                                    color: "#bdbdbd"
                                }}
                                gutterBottom>
                                Aún no tienes ningún diseño/formulario de creado
                            </Typography>
                            <Box
                                component='img'
                                alt='questions-kikoya'
                                src='imgs/questions.png'
                                sx={{
                                    width: "40%",
                                    height: "40%"
                                }} />
                        </Box>
                    </Box>
                </MainBox.GridBox>
            </MainBox>
        </Box>
    )
};