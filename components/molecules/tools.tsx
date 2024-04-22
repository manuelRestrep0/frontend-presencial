import React from "react";
import { PrincipalText } from "@components/atoms/text";
function TextInformationFlight (props: {
    label: string,
    data: string
}): JSX.Element { 
    return (
        <>
        <PrincipalText text={props.label}></PrincipalText>
        <PrincipalText text={props.data}></PrincipalText>
        </>
    );
}

export default TextInformationFlight;