import Typography from "@mui/material/Typography";

interface BodyTextProps {
  text: string;
  sx?: any;
}

const BodyText: React.FC<BodyTextProps> = ({ text, sx }) => {
  return (
    <Typography variant="body1" component="div" sx={{ ...sx }}>
      {text}
    </Typography>
  );
};

export default BodyText;
