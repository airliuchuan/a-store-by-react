import 'whatwg-fetch';
import 'es6-promise';

function obj2params(obj) {
    let result = '';
    let item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }

    if (result) {
        result = result.slice(1);
    }

    return result;
}

export default (url, paramsObj) => (
    fetch(url,{
        method:'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        },
        body: obj2params(paramsObj)
    })
)