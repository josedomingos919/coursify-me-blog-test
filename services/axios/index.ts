import axios from "axios";
import { BASE_URL, TIMEOUT } from "./util";
import { ApiType } from './type'

export const API = ({ headers }: ApiType)=> axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    headers
  });
 