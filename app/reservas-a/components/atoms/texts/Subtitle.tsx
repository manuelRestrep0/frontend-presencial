import Typography from "@mui/material/Typography";

interface SubtitleProps {
  text: string;
  sx?: any;
}

const Subtitle: React.FC<SubtitleProps> = ({ text, sx }) => {
  return (
    <Typography variant="h5" component="div" sx={{ ...sx }}>
      {text}
    </Typography>
  );
};

export default Subtitle;
