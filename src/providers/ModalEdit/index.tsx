import { ReactNode, useState, createContext} from "react";
interface ModalEditProviderProps{
    children:ReactNode
}

interface ModalEditData{
    actualEdited: number,
    settingActualEdited: (productId:number) => void,
    isModalEditShowing: boolean,
    settingShowingModal:() => void
}

export const ModalEditContext = createContext <ModalEditData>({} as ModalEditData)

export const ModalEditProvider = ({ children }:ModalEditProviderProps) =>{
    const [actualEdited, setActualEdited] = useState(0)
    const [isModalEditShowing, setIsModalEditShowing ] = useState(false)

   
    const settingShowingModal = () =>{
        setIsModalEditShowing(!isModalEditShowing)
    }
    const settingActualEdited = (productId:number) =>{
        setActualEdited(productId)
        settingShowingModal()
    } 

    return(
        <ModalEditContext.Provider value={{actualEdited, settingActualEdited, isModalEditShowing, settingShowingModal}}>
            { children }
        </ModalEditContext.Provider>
    )
}