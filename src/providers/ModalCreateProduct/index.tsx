import { ReactNode, useState, createContext} from "react";
interface ModalCreateProductProviderProps{
    children:ReactNode
}

interface ModalCreateProductData{
    actualCreateProduct: number,
    settingActualCreateProduct: (productId:number) => void,
    isModalCreateProductdShowing: boolean,
    settingShowingModalCreateProduct:() => void
}

export const ModalCreateProductContext = createContext <ModalCreateProductData>({} as ModalCreateProductData)

export const ModalCreateProductProvider = ({ children }:ModalCreateProductProviderProps) =>{
    const [actualCreateProduct, setActualCreateProduct] = useState(0)
    const [isModalCreateProductdShowing, setIsModalCreateProductdShowing ] = useState(false)

   
    const settingShowingModalCreateProduct = () =>{
        setIsModalCreateProductdShowing(!isModalCreateProductdShowing)
        console.log('aquiii', isModalCreateProductdShowing)
    }
    const settingActualCreateProduct = (productId:number) =>{
        setActualCreateProduct(productId)
        settingShowingModalCreateProduct()
    } 

    return(
        <ModalCreateProductContext.Provider value={{actualCreateProduct, isModalCreateProductdShowing, settingActualCreateProduct, settingShowingModalCreateProduct}}>
            { children }
        </ModalCreateProductContext.Provider>
    )
}