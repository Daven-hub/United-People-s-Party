import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.ang-agc.org',
    headers: {
        'Content-Type': 'application/json',
    },
});

export interface RejoindreFormData {
    prenom: string;
    nom: string;
    email: string;
    telephone: string;
    age: string;
    profession: string;
    ville: string;
    region: string;
    motivation: string;
    experience_politique: string;
    competences: string;
    disponibilite: string;
    accepte_charte: boolean;
    accepte_newsletter: boolean;
}

export interface ApiResponse {
    status: 'success' | 'error';
    message: string;
    data?: any;
}

export const RejoindreService = async (formData: RejoindreFormData): Promise<ApiResponse> => {
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

export const validateRejoindreData = (formData: RejoindreFormData): string[] => {
    const errors: string[] = [];

    if (!formData.prenom) errors.push('Le prénom est requis');
    if (!formData.nom) errors.push('Le nom est requis');
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.push('Un email valide est requis');
    if (!formData.telephone) errors.push('Le téléphone est requis');
    if (!formData.ville) errors.push('La ville est requise');
    if (!formData.region) errors.push('La région est requise');
    if (!formData.motivation) errors.push('Veuillez expliquer votre motivation');
    if (!formData.accepte_charte) errors.push('Vous devez accepter la charte de l\'ANG');

    return errors;
};