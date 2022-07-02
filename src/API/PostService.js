import axios from 'axios';

export default class PostService {
    static async get(count, page) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: count,
                _page: page
            }
        });
        return response;
    }
    
    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        return response;
    }

    static async getResponses(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');
        return response;
    }
}
