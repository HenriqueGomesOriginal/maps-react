import api from "../../service/globalService";

interface IParams {
    addressArray: Array<IAddressObj>
}

interface IAddressObj {
    address: String
}

export interface IResponse {
    addressArray: Array<IAddressObj>,
    distance: Number,
    closest: Boolean,
    furtjer: Boolean
}

export const postCalculateDistance = async (address : IParams) : Promise<IResponse[]> => {
    let obj = {} as IResponse[]
    await api.post<IResponse[]>('api/v1/Maps', address)
    .then(response => {
        obj = response.data;
        return obj;
    })
    .catch(err => {
        console.log('erro: ' + err);
    })

    return obj;
}