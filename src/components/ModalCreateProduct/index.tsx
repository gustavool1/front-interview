import { Button, TextField } from '@mui/material';
import { useContext } from 'react';
import { ModalWrapper,ModalContent, InteractionForm, Form, Background} from './style'
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalCreateProductContext } from '../../providers/ModalCreateProduct';
import { ProductsContext } from '../../providers/Products';
interface ProductData{
  name:string,
  price:number,
  image:string,
  id:number
}
const ModalCreateProduct = () => {
  const {isModalCreateProductdShowing, settingShowingModalCreateProduct} = useContext(ModalCreateProductContext)
  const { createProduct } = useContext(ProductsContext)
  const schema = yup.object().shape({
    name:yup.string().required("Nome obrigatório"),
    price:yup.string().required("Preço obrigatório")
  })
  const { register, handleSubmit, formState:{ errors } } = useForm<ProductData> ({resolver:yupResolver(schema)})

  const onSubmit = (data:ProductData) =>{
    createProduct(data)
  }
  return (
    <>
      {isModalCreateProductdShowing ? (
        <Background>
            <ModalWrapper >
              <ModalContent>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InteractionForm>
                      <h1>Criar Produto</h1>
                      <CloseIcon sx={{cursor:"pointer", color:"red"}} onClick={settingShowingModalCreateProduct}/>
                    </InteractionForm>
                    <TextField sx={{m:1}} label="Nome do Produto" variant="outlined" {...register("name")} helperText={errors.name?.message} error={!!errors.name}/>
                    <TextField sx={{m:1}} label="Preço" type="number" variant="outlined" {...register("price")} helperText={errors.price?.message} error={!!errors.price}/>
                    <TextField sx={{m:1}} label="URL da imagem" variant="outlined" {...register("image")}/>
                    <Button type="submit">Enviar</Button>
                  </Form>
                </ModalContent>
            </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default ModalCreateProduct