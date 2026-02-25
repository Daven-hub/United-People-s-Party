import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Flag,
    Send,
    UploadCloud,
    CheckCircle
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProgrammeUPP = () => {
    const { t } = useTranslation();
    const [drag, setDrag] = useState(false);

    const [form, setForm] = useState({
        nom: "",
        prenom: "",
        naissance: "",
        telephone: "",
        email: "",
        ville: "",
        projetTitre: "",
        description: "",
        conditions: false,
        file: null as File | null
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleFile = (file: File) => {
        setForm(prev => ({ ...prev, file }));
    };

    const handleDrop = (e: any) => {
        e.preventDefault();
        setDrag(false);
        if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <>
            <Navigation />

            <section className="relative overflow-hidden px-3 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">

                {/* BACKGROUND IMAGE */}
                <div
                    className="absolute inset-0 "
                    style={{
                        backgroundImage: "url('/UPP.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-primary/5" />

                {/* BLOBS */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-primary/20 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-secondary/20 blur-3xl rounded-full" />
                </div>

                <div className="relative  max-w-7xl mx-auto">

                    {/* HERO */}
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">

                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 sm:px-6 py-2 mb-5">
                            <Flag className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            <span className="text-primary text-xs font-semibold">
                                {t("upp.badge")}
                            </span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                        >
                            {t("upp.title")}
                        </motion.h1>

                        <p className="text-primary/80 max-w-3xl mx-auto mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg px-2">
                            {t("upp.subtitleLong")}
                        </p>
                    </div>

                    {/* INFO CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-12 sm:mb-20">
                        <InfoCard icon={<CheckCircle />} title={t("upp.cards.0.title")} desc={t("upp.cards.0.desc")} />
                        <InfoCard icon={<CheckCircle />} title={t("upp.cards.1.title")} desc={t("upp.cards.1.desc")} />
                        <InfoCard icon={<CheckCircle />} title={t("upp.cards.2.title")} desc={t("upp.cards.2.desc")} />
                    </div>

                    {/* MAIN GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                        {/* LEFT CONTENT */}
                        <div className="space-y-6 sm:space-y-10">

                            <img
                                src="/uppl.jpg"
                                className="rounded-2xl shadow-xl w-full h-auto object-cover"
                                alt="programme"
                            />

                            <div className="bg-white/80 backdrop-blur p-5 sm:p-8 rounded-2xl shadow">
                                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">
                                    {t("upp.why")}
                                </h3>

                                <ul className="space-y-3 text-sm sm:text-base text-primary">
                                    <li>✓ {t("upp.points.0")}</li>
                                    <li>✓ {t("upp.points.1")}</li>
                                    <li>✓ {t("upp.points.2")}</li>
                                </ul>
                            </div>

                            <div className="bg-white/80 backdrop-blur p-5 sm:p-8 rounded-2xl shadow">
                                <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                                    {t("upp.processTitle")}
                                </h3>

                                <ol className="space-y-2 sm:space-y-3 text-sm sm:text-base text-primary">
                                    <li>1 — {t("upp.process.0")}</li>
                                    <li>2 — {t("upp.process.1")}</li>
                                    <li>3 — {t("upp.process.2")}</li>
                                    <li>4 — {t("upp.process.3")}</li>
                                </ol>
                            </div>
                        </div>

                        {/* FORM */}
                        <motion.form
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            onSubmit={handleSubmit}
                            className="bg-white/95 backdrop-blur p-5 sm:p-8 lg:p-10 rounded-2xl shadow-lg space-y-6"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-primary">
                                {t("upp.formTitle")}
                            </h3>

                            {/* PERSONAL */}
                            <div className="space-y-4">
                                <h4 className="font-semibold text-secondary text-sm sm:text-base">
                                    {t("upp.personal")}
                                </h4>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input name="nom" placeholder={t("upp.nom")} onChange={handleChange} className="input" />
                                    <input name="prenom" placeholder={t("upp.prenom")} onChange={handleChange} className="input" />
                                </div>

                                <input type="date" name="naissance" onChange={handleChange} className="input" />
                                <input name="telephone" placeholder={t("upp.telephone")} onChange={handleChange} className="input" />
                                <input name="email" placeholder={t("upp.email")} onChange={handleChange} className="input" />
                                <input name="ville" placeholder={t("upp.ville")} onChange={handleChange} className="input" />
                            </div>

                            {/* PROJECT */}
                            <div className="space-y-4">
                                <h4 className="font-semibold text-secondary text-sm sm:text-base">
                                    {t("upp.project")}
                                </h4>

                                <input name="projetTitre" placeholder={t("upp.projectTitle")} onChange={handleChange} className="input" />

                                <div>
                                    <textarea
                                        name="description"
                                        maxLength={300}
                                        onChange={handleChange}
                                        placeholder={t("upp.projectDesc")}
                                        className="input h-28 sm:h-32"
                                    />
                                    <p className="text-xs text-right mt-1 text-primary/60">
                                        {form.description.length}/300
                                    </p>
                                </div>

                                {/* UPLOAD */}
                                <div
                                    onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
                                    onDragLeave={() => setDrag(false)}
                                    onDrop={handleDrop}
                                    className={`border-2 border-dashed p-6 sm:p-8 rounded-xl text-center transition ${drag ? "bg-primary/10" : ""}`}
                                >
                                    <UploadCloud className="mx-auto mb-3" />
                                    <p className="text-sm">{t("upp.upload")}</p>

                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={(e: any) => handleFile(e.target.files[0])}
                                        className="mt-4 text-sm"
                                    />

                                    {form.file && (
                                        <p className="text-xs sm:text-sm mt-2 text-primary">
                                            {form.file.name}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* CONDITIONS */}
                            <label className="flex items-start gap-3 text-sm cursor-pointer">
                                <input type="checkbox" name="conditions" onChange={handleChange} className="mt-1" />
                                <span>{t("upp.conditions")}</span>
                            </label>

                            <button className="w-full bg-primary text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:scale-[1.02] transition">
                                <Send size={18} />
                                {t("upp.submit")}
                            </button>
                        </motion.form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default ProgrammeUPP;

/* CARD */
const InfoCard = ({ icon, title, desc }: any) => (
    <div className="bg-white/80 backdrop-blur p-6 sm:p-8 rounded-2xl shadow hover:shadow-xl transition">
        <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
            {icon}
        </div>
        <h3 className="font-bold text-base sm:text-lg mb-2">{title}</h3>
        <p className="text-sm text-primary/80">{desc}</p>
    </div>
);