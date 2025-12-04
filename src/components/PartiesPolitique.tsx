import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PoliticalPartyCardProps {
    logo: string;
    name: string;
    description: string;
    color: string;
    initialDelay?: number;
    isActive: boolean;
    onClick: () => void;
}

const PartiesPolitiquecard: React.FC<PoliticalPartyCardProps> = ({
    logo,
    name,
    description,
    color,
    initialDelay = 0,
    isActive,
    onClick,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: initialDelay * 0.1 }}
            className={`p-6 border  shadow-lg text-center cursor-pointer transition-all duration-300 ${isActive
                ? `border-${color}-500 shadow-${color}-500/30 scale-105`
                : 'border-gray-200 hover:shadow-gray-400/20 hover:border-gray-300'
                }`}
            onClick={onClick}
            whileHover={{ scale: 1.03 }}
        >
            <motion.div
                className="flex justify-center mb-4"
                whileHover={{ rotate: isActive ? 0 : 5 }}
            >
                <img
                    src={logo}
                    alt={`Logo ${name}`}
                    className={`h-20 w-20 object-contain ${isActive ? 'opacity-100' : 'opacity-80'}`}
                />
            </motion.div>
            <h3 className={`text-xl font-bold mb-2 ${isActive ? `text-${color}-600` : 'text-gray-700'}`}>
                {name}
            </h3>
            <motion.p
                className="text-sm text-gray-600"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: isActive ? 1 : 0.8 }}
            >
                {description}
            </motion.p>
            {isActive && (
                <motion.div
                    className={`mt-4 h-1 bg-${color}-500 rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                />
            )}
        </motion.div>
    );
};

const PartiesPolitique: React.FC = () => {
    const [activeParty, setActiveParty] = useState<number | null>(null);

    const parties = [
        {
            id: 1,
            logo: '/parties/ptn.png',
            name: 'Parti du Triangle National',
            description: 'Un parti progressiste qui prône la justice sociale, les réformes éducatives et un système de santé accessible à tous.',
            color: 'blue',
        },

    ];

    const handlePartyClick = (id: number) => {
        setActiveParty(activeParty === id ? null : id);
    };

    return (
        <div className="py-12 ">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                    Les Partis <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"> Politiques </span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                    Découvrez les principales formations politiques et leurs engagements
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {parties.map((party, index) => (
                    <PartiesPolitiquecard
                        key={party.id}
                        logo={party.logo}
                        name={party.name}
                        description={party.description}
                        color={party.color}
                        initialDelay={index}
                        isActive={activeParty === party.id}
                        onClick={() => handlePartyClick(party.id)}
                    />
                ))}
            </div>

            {activeParty !== null && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 p-6 bg-gray-50 rounded-lg"
                >
                    <h3 className="text-lg font-medium text-gray-900">
                        En savoir plus sur {parties.find(p => p.id === activeParty)?.name}
                    </h3>
                    <p className="mt-2 text-gray-600">
                        {/* Ici vous pourriez ajouter plus de détails ou un lien */}
                        Cliquez sur le logo du parti pour visiter leur site officiel.
                    </p>
                </motion.div>
            )}
        </div>
    );
};

export default PartiesPolitique;