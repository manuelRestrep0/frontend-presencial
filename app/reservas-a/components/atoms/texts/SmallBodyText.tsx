import Typography from "@mui/material/Typography";

interface SmallBodyTextProps {
  text: string;
  sx?: any;
}

const SmallBodyText: React.FC<SmallBodyTextProps> = ({ text, sx }) => {
  return (
    <Typography variant="body2" component="div" sx={{ ...sx }}>
      {text}
    </Typography>
  );
};

export default SmallBodyText;
