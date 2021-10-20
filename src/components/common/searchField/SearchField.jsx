import React from "react";
import {Formik} from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as yup from 'yup'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const SearchField = ({searchType, items, redirectIngredient, setItems}) => {

    const regexp = /^[a-zA-Z0-9_., -]*$/

    const validationSchema = yup.object().shape({
        items: yup
            .string()
            .required(`Field can't be empty`)
            .max(150, `Max length is 150 symbols`)
            .matches(regexp, `Only english letters and digits`)
    })

    return (
        <Formik
            initialValues={{
                items: redirectIngredient ? redirectIngredient : items
            }}
            validateOnBlur
            onSubmit={((values) => {
                setItems(values.items)
            })}
            validationSchema={validationSchema}
        >
            {({
                  values, errors, handleChange, handleReset,
                  handleBlur, handleSubmit, isValid, dirty
              }) => (
                <form>
                    <Grid container
                          justifyContent="center"
                          sx={{width: `80%`, margin: `50px auto`}}
                    >
                        <Grid item xs={12} md={10}>
                            <TextField
                                error={errors.items ? true : false}
                                label={errors.items || `Search for cocktails`}
                                variant="outlined"
                                name='items'
                                value={values.items}
                                onChange={handleChange}
                                onClick={ (e) => e.target.value = `` }
                                fullWidth
                                size='small'
                                color={`input`}
                                onBlur={handleBlur}
                                helperText={searchType === `byIngredient` ? `Requires full ingredient name` : ``}
                            />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Box>
                                <Button
                                    disabled={!isValid && !dirty}
                                    variant='contained'
                                    color={'button'}
                                    onClick={handleSubmit}
                                    type='submit'
                                    fullWidth
                                    size='large'
                                    sx={{display: `block`}}
                                >
                                    Search
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            )}

        </Formik>
    )
}

export default SearchField
