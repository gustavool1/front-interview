import { ReactNode, useState, useContext, createContext} from "react";
import api from '../../services/api'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { ModalEditContext } from "../ModalEdit";
import { ModalDeleteContext } from "../ModalDeleted";
interface ProductsProviderProps{
    children:ReactNode
}
interface Product{
    created_at: string,
    id: number,
    image: string,
    name: string,
    price: number,
    updated_at: any
}

interface ProductUpdated{
    name:string,
    price:number,
    image?:string,
    id?:number
}
interface ProductProviderData{
    products:Product[],
    teste:number,
    getProducts: () => void,
    editProduct: (product:ProductUpdated) => void
    deleteProduct:(id:number) => void 
}

export const ProductsContext = createContext <ProductProviderData>({} as ProductProviderData)

export const ProductsProvider = ({ children }:ProductsProviderProps) =>{
    const [ products, setProducts ] = useState<Product[]>([])
    const [teste] = useState(1)
    const { settingShowingModal } = useContext(ModalEditContext)
    const { settingShowingModalDeleted } = useContext(ModalDeleteContext)
    toast.configure()

    const getProducts = () =>{
        api.get("/products")
         .then((response)=> {
            setProducts(response.data)
         })
          .catch((err)=> console.log(err))
    }

    const editProduct = (product:ProductUpdated) =>{
        
        const id = product.id
        if (product.image && product.image.length === 0) {
            delete product.image

        }
        delete product.id
        api.patch(`/products/${id}`, product)
        .then((response)=> {
            getProducts()
            settingShowingModal()

            toast.success("Item editado com sucesso")

        })
         .catch((err)=> console.log(err))
    }

    const deleteProduct = (id:number) => {
        api.delete(`/products/${id}`)
        .then((response)=> {
            settingShowingModalDeleted()
            getProducts()
            toast.success("Item Deletado com sucesso")

        })
    }
   
    return(
        <ProductsContext.Provider value={{products,teste, getProducts, editProduct,deleteProduct}}>
            { children }
        </ProductsContext.Provider>
    )
}