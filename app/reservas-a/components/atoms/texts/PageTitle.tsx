import Typography from "@mui/material/Typography";

interface PageTitleProps {
  text: string;
  sx?: any;
}

const PageTitle: React.FC<PageTitleProps> = ({ text, sx }) => {
  return (
    <Typography
      variant="h5"
      component="div"
      sx={{
        flexGrow: 1,
        display: { xs: "none", sm: "block" },
        color: "#1E88E5",
        marginLeft: "20%",
        ...sx,
      }}
    >
      {text}
    </Typography>
  );
};

export default PageTitle;
