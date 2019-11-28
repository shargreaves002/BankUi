import axios from "axios";

export default axios.create({
    baseURL: "https://gentle-ravine-25371.herokuapp.com/",
    responseType: "json",
    headers: {"Access-Control-Allow-Origin": "*"}
});
