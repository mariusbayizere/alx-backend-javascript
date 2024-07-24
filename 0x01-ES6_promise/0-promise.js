// 0-promise.js
function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success");
        }, 1000);
    });
}

export default getResponseFromAPI;
