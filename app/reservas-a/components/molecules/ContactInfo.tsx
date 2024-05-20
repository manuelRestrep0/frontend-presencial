import Stack from "@mui/material/Stack";
import React from "react";
import Cajoncito from "../atoms/inputs/Cajoncito";
import BodyText from "../atoms/texts/BodyText";

interface ContactInfoProps {
  disabled: boolean;
  required: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ disabled, required }) => {
  return (
    <Stack spacing={1} direction="column" alignItems="center">
      <BodyText text="Contacto de emergencia:" sx={{ fontWeight: "bold" }} />
      <BodyText text="Es necesario un contacto de emergencia" />
      <Cajoncito title={"Nombre"} disabled={disabled} required={required} />
      <Cajoncito title={"Apellidos"} disabled={disabled} required={required} />
      <Cajoncito title={"Teléfono"} disabled={disabled} required={required} />
    </Stack>
  );
};

export default ContactInfo;
