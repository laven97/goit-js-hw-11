import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import 'simplelightbox/dist/simple-lightbox.min.css';

import { 
    clearGallery, 
    hideLoader, 
    showLoader, 
    createGallery 
} from "./js/render-function";

import { getImagesByQuery } from './js/pixabay-api';


const refs = {
    form: document.querySelector(".form"),
    loader: document.querySelector(".loader"),
};

refs.form.addEventListener("submit", event => {
    event.preventDefault();

    clearGallery();

    const searchQuery = event.target.elements['search-text'].value.trim();

    if (searchQuery === "") {
        iziToast.error({
            message: 'Please enter a search query',
            messageColor: 'white',
            messageSize: '20',
            backgroundColor: 'red',
            position: 'topRight',
            timeout: 2000,
        });
        return;
    }

    showLoader();

    getImagesByQuery(searchQuery)
        .then(data => {

            if (data.hits.length === 0) {
                iziToast.error({
                    message: 'No images found. Please try again.',
                    messageColor: 'white',
                    messageSize: '20',
                    backgroundColor: 'red',
                    position: 'topRight',
                    timeout: 2000,
                });
                return;
            }

            createGallery(data.hits);
        })
        .catch(() => {
            iziToast.error({
                message: "Something went wrong",
                messageColor: 'white',
                messageSize: '20',
                backgroundColor: 'red',
                position: 'topRight',
                timeout: 2000,
            });
        })
        
});
