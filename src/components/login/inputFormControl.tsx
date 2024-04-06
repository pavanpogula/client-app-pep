import { FormControl, Input, InputLabel, Typography } from '@mui/material'
import React from 'react'

type inputFormControl = {
    isError: boolean;
    name: string;
    onBlurHandler?: (event: React.FocusEvent<HTMLInputElement>) => void;
    inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    errorText: string;
    label: string;
    endAdornment?: React.ReactNode


}


const InputFormControl: React.FC<inputFormControl> = ({ isError, name, onBlurHandler, value, inputHandler, errorText, label, endAdornment }) => {

    return (
        <FormControl sx={{ m: 1, width: '25ch', mb: 0 }} variant="standard">
            <InputLabel
                htmlFor={`standard-adornment-lastname-${name}`}
                color={isError ? 'error' : 'primary'}>
                {label}
            </InputLabel>
            <Input
                autoComplete={name}
                name={name}
                id={`standard-adornment-lastname-${name}`}
                type={'text'}
                value={value}
                onChange={inputHandler}
                color={isError ? 'error' : 'primary'}
                endAdornment={endAdornment}
            />
            {isError && <Typography sx={{ lineHeight: 1, textAlign: 'left', fontSize: '12px', color: 'red' }}>{errorText}</Typography>}
        </FormControl>
    )
}

export default InputFormControl