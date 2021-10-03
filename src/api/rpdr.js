import apiUrl from '../apiConfig'
import axios from 'axios'

export const queens = () => {
    return axios({
        method: 'GET',
        url: apiUrl + '/queens/',
        headers: {
            'Authorization': `Token token=${user.token}`
        }
    })
}