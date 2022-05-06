import React, { createContext, ReactNode, useState, useContext } from 'react';

import { IResponse } from "../components/Aside/service";

interface IContext {
    resultRequest: Array<IResponse>
    setResultRequest: React.Dispatch<React.SetStateAction<IResponse[]>>
}

const DefaultValue = {
    resultRequest: [],
    setResultRequest: () => {}
}

const DashContext = createContext<IContext>(DefaultValue);

type Props = {
    children: ReactNode
};
export const DashContextProvider: React.FC<Props> = ({children}) => {
    const [resultRequest, setResultRequest] = useState<IResponse[]>(DefaultValue.resultRequest);

    return (
        <DashContext.Provider value={{resultRequest, setResultRequest}}>
            {children}
        </DashContext.Provider>
    )
}

export const useDashContext = () => {
    const context = useContext(DashContext);
    const { resultRequest, setResultRequest } = context;
    return { resultRequest, setResultRequest };
}