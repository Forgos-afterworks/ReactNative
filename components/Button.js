import React from "react";
import { Text,TouchableOpacity } from "react-native";

const Button = ({title, ...otherProps}) => {
    return (
        <TouchableOpacity {...otherProps}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;