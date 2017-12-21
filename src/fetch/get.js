import 'whatwg-fetch';
import 'es6-promise';

export default  (url) => (
    fetch(url,{
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    })
)