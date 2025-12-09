import axios from 'axios';

export function getImagesByQuery (query) {{
    return axios.get ('https://pixabay.com/api/', {
        params: {
            key: '53618010-1b89e63a15719169e29158a57',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true
        }
    })
    .then (response => response.data)
    .catch (error => error)
}}