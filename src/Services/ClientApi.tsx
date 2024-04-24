import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://g183k2nx-7029.brs.devtunnels.ms',
    headers: {
        'Content-Type': 'application/json'
    }
})


export const fetchPage = (symbol: string)  => {
   return apiClient.get<any>(`https://rvh98qbf-44321.brs.devtunnels.ms/share/${symbol}`);
}