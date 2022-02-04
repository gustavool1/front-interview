import { ReactNode, useState, useContext, createContext} from "react";
import api from '../../services/api'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { ModalEditContext } from "../ModalEdit";
import { ModalDeleteContext } from "../ModalDeleted";
import { ModalCreateProductContext } from "../ModalCreateProduct";
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
    getProducts: () => void,
    editProduct: (product:ProductUpdated) => void
    deleteProduct:(id:number) => void,
    createProduct :(product:ProductUpdated) => void
}

export const ProductsContext = createContext <ProductProviderData>({} as ProductProviderData)

export const ProductsProvider = ({ children }:ProductsProviderProps) =>{
    const [ products, setProducts ] = useState<Product[]>([])
    const { settingShowingModal } = useContext(ModalEditContext)
    const { settingShowingModalDeleted } = useContext(ModalDeleteContext)
    const { settingShowingModalCreateProduct} = useContext(ModalCreateProductContext)
    toast.configure()

    const getProducts = () =>{
        api.get("/products")
         .then((response)=> {
            setProducts(response.data)
         })
         .catch(()=> toast.error("Ocorreu um erro, tente novamente"))
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
        .catch(()=> toast.error("Ocorreu um erro, tente novamente"))
        
    }

    const deleteProduct = (id:number) => {
        api.delete(`/products/${id}`)
        .then((response)=> {
            settingShowingModalDeleted()
            getProducts()
            toast.success("Item Deletado com sucesso")

        })
    }
    const createProduct = (data:ProductUpdated) =>{
        data.price = Number(data.price)
        api.post(`/products`, data)
        .then((response)=> {
            getProducts()
            settingShowingModalCreateProduct()
            toast.success("Item criado com sucesso")

        })
        .catch(()=> toast.error("Ocorreu um erro, tente novamente"))
    }
   
    return(
        <ProductsContext.Provider value={{products, getProducts, editProduct,deleteProduct, createProduct}}>
            { children }
        </ProductsContext.Provider>
    )
}