import { ReactNode } from "react";
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
                    <ProductsProvider>
                        {children}
                    </ProductsProvider>
                </ModalDeleteProvider>
        </ModalEditProvider>
    )
}

export default Providers