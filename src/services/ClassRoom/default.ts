import { action } from 'mobx';
import { initRequest } from '../../utils/dispatcher';

const FetchClassRoom = (url: string, params?: Object) => action(() => {
     fetch(initRequest(url, params), {method: 'get'})
         .then(res => {
             res.json()
                 .then(response => {
                     return response
                 })
         })
})

export default FetchClassRoom