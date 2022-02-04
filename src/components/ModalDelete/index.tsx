import { Button } from '@mui/material';
import { useContext } from 'react';
import { ModalDeleteContext } from '../../providers/ModalDeleted';
import { ModalWrapper,ModalContent,  InteractionForm, Background} from './style'
import CloseIcon from '@mui/icons-material/Close';
import { ProductsContext } from '../../providers/Products';

const ModalDelete = () => {
  const {settingShowingModalDeleted,isModalDeletedShowing, actualDelete} = useContext(ModalDeleteContext)
  const { deleteProduct } = useContext(ProductsContext)
  


  const handleDelete = () =>{
    deleteProduct(actualDelete)
  } 
  return (
    <>
      {isModalDeletedShowing ? (
        <Background>
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