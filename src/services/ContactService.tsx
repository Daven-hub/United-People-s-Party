import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.ang-agc.org',
    headers: {
        'Content-Type': 'application/json',
    },
});

export interface ContactFormData {
    nom: string;
    email: string;
    message: string;
    sujet: string;
    telephone: string;

}

export interface ApiResponse {
    status: 'success' | 'error';
    message: string;
    data?: any;
}

export const ContactService = async (formData: ContactFormData): Promise<ApiResponse> => {
    try {
        const response = await apiClient.post('/api/membership/apply', formData);

        return {
            status: 'success',
            message: response.data.message || 'Demande envoyée avec succès!',
            data: response.data
        };
    } catch (err: any) {
        if (err.response) {
            return {
                status: 'error',
                message: err.response.data?.message || 'Erreur lors de la soumission du formulaire'
            };
        } else if (err.request) {
            return {
                status: 'error',
                message: 'Problème de connexion. Veuillez vérifier votre connexion internet.'
            };
        } else {
            return {
                status: 'error',
                message: 'Erreur de configuration. Veuillez réessayer plus tard.'
            };
        }
    }
};

export const validateRejoindreData = (formData: ContactFormData): string[] => {
    const errors: string[] = [];

    // if (!formData.prenom) errors.push('Le prénom est requis');
    if (!formData.nom) errors.push('Le nom est requis');
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.push('Un email valide est requis');
    if (!formData.message) errors.push('Le message est requis');
    if (!formData.sujet) errors.push('Le sujet est requis');
    if (!formData.telephone) errors.push('Le telephone est requis');


    return errors;
};