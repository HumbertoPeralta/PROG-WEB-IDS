import { getBreedDetails } from './api.js';
import { displayBreedDetails } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
    const breedId = new URLSearchParams(window.location.search).get('id');
    
    if (breedId) {
        try {
            const breed = await getBreedDetails(breedId);
            displayBreedDetails(breed);
        } catch (error) {
            console.error('No se pudo cargar la información de la raza:', error);
        }
    } else {
        console.error('No se proporcionó ningún ID de raza en la URL');
    }
});