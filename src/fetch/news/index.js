import get from '../get';

export const getNewsList = (page) => (
    get('http://localhost:1234/api/store/newslist/' + page)
)