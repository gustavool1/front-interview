import AddIcon from '@mui/icons-material/Add';
import { useContext } from 'react';
import { ModalCreateProductContext } from '../../providers/ModalCreateProduct';
import { Container, IconContainer } from './style';

const CreateProduct = () =>{

    const {settingShowingModalCreateProduct} = useContext(ModalCreateProductContext)
    return(
        <Container>
            <IconContainer>
                <AddIcon sx={{fontSize:40}} onClick={settingShowingModalCreateProduct}/>
            </IconContainer>
        </Container>
    )
}

export default CreateProduct 