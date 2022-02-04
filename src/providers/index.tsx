import { ReactNode } from "react";
import { ModalCreateProductProvider } from "./ModalCreateProduct";
import { ModalDeleteProvider } from "./ModalDeleted";
import { ModalEditProvider } from "./ModalEdit";

import { ProductsProvider } from "./Products";

interface ProviderProps{
    children:ReactNode
}
const Providers = ({children}:ProviderProps) =>{
    return(
        <ModalEditProvider>
                <ModalDeleteProvider>
                    <ModalCreateProductProvider>
                        <ProductsProvider>
                            {children}
                        </ProductsProvider>
                    </ModalCreateProductProvider>
                </ModalDeleteProvider>
        </ModalEditProvider>
    )
}

export default Providers