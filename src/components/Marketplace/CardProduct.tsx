import { 
  Paper, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  colors 
} from "@mui/material";
import Iphone from "../../assets/iphone.png"

export function CardProduct() {
  return (
    <Paper>
    <Card>
      <CardMedia
        component="img"
        sx={{ objectFit: 'cover' }}
        height="252"
        width="252"
        image={Iphone}
        alt="Sell Iphone 13"
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color={colors.green[500]}
        >
          $ 49.90
        </Typography>
        <Typography variant="h5" color={colors.green[300]}>
          Iphone 13
        </Typography>
        <Typography color={colors.green[100]}>
          Curitiba, PR
        </Typography>
      </CardContent>
    </Card>
  </Paper>
  )
}