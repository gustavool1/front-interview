import { ReactNode, useState, createContext} from "react";
interface ModalDeleteProviderProps{
    children:ReactNode
}

interface ModalDeleteData{
    actualDelete: number,
    settingActualDeleted: (productId:number) => void,
    isModalDeletedShowing: boolean,
    settingShowingModalDeleted:() => void
}

export const ModalDeleteContext = createContext <ModalDeleteData>({} as ModalDeleteData)

export const ModalDeleteProvider = ({ children }:ModalDeleteProviderProps) =>{
    const [actualDelete, setActualDelete] = useState(0)
    const [isModalDeletedShowing, setIsModalDeletedShowing ] = useState(false)

   
    const settingShowingModalDeleted = () =>{
        setIsModalDeletedShowing(!isModalDeletedShowing)
        console.log('aquiii', isModalDeletedShowing)
    }
    const settingActualDeleted = (productId:number) =>{
        console.log(productId, 'settingActualDeleted')
        setActualDelete(productId)
        settingShowingModalDeleted()
    } 

    return(
        <ModalDeleteContext.Provider value={{actualDelete, isModalDeletedShowing, settingActualDeleted, settingShowingModalDeleted}}>
            { children }
        </ModalDeleteContext.Provider>
    )
}