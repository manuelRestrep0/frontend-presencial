import Stack from "@mui/material/Stack";
import React from "react";
import Cajoncito from "../atoms/inputs/Cajoncito";

interface PersonalInfoProps {
  disabled: boolean;
  required: boolean;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ disabled, required }) => {
  return (
    <Stack spacing={1} direction="column">
      <Cajoncito title={"Nombre"} disabled={disabled} required={required} />
      <Cajoncito title={"Apellidos"} disabled={disabled} required={required} />
      <Cajoncito title={"Correo"} disabled={disabled} required={required} />
      <Cajoncito title={"Teléfono"} disabled={disabled} required={required} />
      <Cajoncito
        title={"Dirección en caso de pérdida de equipaje"}
        disabled={disabled}
        required={required}
      />
    </Stack>
  );
};

export default PersonalInfo;
