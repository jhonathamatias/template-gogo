import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

function Select(props) {
    const { options, MenuItemProps, ...other } = props;
    return (
        <TextField
            {...other}
        >
            {options.map((option, i) => (
                <MenuItem 
                    key={i} 
                    value={option.value} 
                    {...MenuItemProps}
                >
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}

export default Select;