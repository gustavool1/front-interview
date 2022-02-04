import './style'
import { Container } from './style'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { ModalEditContext } from '../../providers/ModalEdit';
import { ModalDeleteContext } from '../../providers/ModalDeleted';
interface ProductProps{
  product:{
  created_at: string,
  id: number,
  image: string,
  name: string,
  price: number,
  updated_at: any
  }
}
const Product = ({product}: ProductProps) =>{
    const {settingActualEdited, settingShowingModal} = useContext(ModalEditContext)
    const { settingActualDeleted } = useContext(ModalDeleteContext)
    return(
             <Card sx={{ maxWidth: 345, m:2, minWidth:320}}>
                 <CardMedia
                    component="img"
                    height="140"
                    image={product.image.length>1 ? product.image : "data:image/png;base64,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"}
                    alt="green iguana"
                />
                  <Typography gutterBottom variant="h5" component="div" align="left" sx={{m:1}}>
                        {product.name}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" align="left" sx={{m:1, fontSize:15}} >
                   <Typography> <strong>Preço</strong>:</Typography> R${product.price}
                  </Typography>
                <CardContent>
                  
                </CardContent>
                <CardActions>
                    <Button size="small" color="error" onClick={()=>settingActualDeleted(product.id)}>Remover</Button>
                    <Button size="small" color="warning" onClick={()=>settingActualEdited(product.id)}>Editar</Button>
      </CardActions>
    </Card>

    )
}

export default Product