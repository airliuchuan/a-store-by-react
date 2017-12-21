import get from '../get';

export const getGoodsList = (page) => (
    get('http://localhost:1234/api/store/goodslist/' + page)
)