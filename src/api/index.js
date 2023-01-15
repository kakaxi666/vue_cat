import requests from "./request";

export function getFile(data) {
    return requests({
        url:"/get/file",
        method:"post",
        data
    });
}