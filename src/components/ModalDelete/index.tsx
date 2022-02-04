import { Button, TextField } from '@mui/material';
import { useContext } from 'react';
import { ModalDeleteContext } from '../../providers/ModalDeleted';
import {Background, ModalWrapper,ModalContent,  InteractionForm} from './style'
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';
import { ProductsContext } from '../../providers/Products';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
interface ProductData{
  name:string,
  price:number,
  image:string,
  id:number
}
const ModalDelete = () => {
  const {settingShowingModalDeleted,settingActualDeleted,isModalDeletedShowing, actualDelete} = useContext(ModalDeleteContext)
  const { deleteProduct } = useContext(ProductsContext)
  
  const schema = yup.object().shape({
    name:yup.string().required("Nome obrigatório"),
    price:yup.string().required("Preço obrigatório")
  })
  const { register, handleSubmit, formState:{ errors } } = useForm<ProductData> ({resolver:yupResolver(schema)})

  const handleDelete = () =>{
    deleteProduct(actualDelete)
  } 
  return (
    <>
      {isModalDeletedShowing ? (
        <Background >
            <ModalWrapper >
              <ModalContent>
                  <InteractionForm>
                    <h1>Deletar</h1>
                    <CloseIcon sx={{cursor:"pointer", color:"red"}} onClick={settingShowingModalDeleted}/>
                  </InteractionForm>
                  <p>Deseja mesmo deletar ? </p>
                <Button type="submit" color="error" onClick={handleDelete}>Deletar</Button>
              </ModalContent>
            </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default ModalDelete