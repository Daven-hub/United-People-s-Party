import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const ComminSoonModal = ({ isOpen, onClose }) => {
  // Fermer avec la touche "Escape"
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-[6.5%] bg-black bg-opacity-65 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto py-12 md:py-24 px-10 relative animate-fadeInScale"
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant dans le modal
      >
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
          aria-label="Fermer"
        >
          ×
        </button>

        {/* <h2 className="text-2xl text-black font-bold mb-4">Politique de Confidentialité</h2> */}

        <div className="space-y-6 flex flex-col items-center text-gray-800 text-sm sm:text-base leading-relaxed">
            {/* <div className='bg-[#F7F9F9] flex flex-col items-center justify-center'> */}
                <span className='font-semibold text-[2.5rem] max-md:text-[1.1rem] text-center'>Site en cour de construction ...</span>
                <span className='font-medium text-[1.2rem] max-md:text-[.86rem] space-x-3'>Nous contactez via <NavLink className={'text-blue-700 font-semibold'} to={'mailto:info@cng-ngc.org'}>info@cng-ngc.org</NavLink></span>
                <NavLink className='bg-primary w-full md:w-[60%] text-center text-white mt-4 text-[.92rem] px-6 py-2.5 rounded-md' to={'/'}>Retour vers la page d'acceuil</NavLink>
            {/* </div> */}

          {/* <p className="text-sm text-gray-500">Dernière mise à jour : 21 juillet 2025</p> */}
        </div>
      </div>
    </div>
  );
};

export default ComminSoonModal;
