import axios from "axios";

const fetch = axios.create({

    baseURL: "http://localhost:3333"
});

export default fetch;