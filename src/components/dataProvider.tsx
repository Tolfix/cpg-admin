import jsonServerProvider from 'ra-data-json-server';
import { fetchUtils } from 'react-admin';
import {Domain} from "../config.json"


const fetchJson = (url: string, options: any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    options.headers.set('Authorization', `Bearer ${JSON.parse(localStorage.getItem("auth") ?? "{}").token}`);
    return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider(`${Domain}/v2`, fetchJson);
export default dataProvider;