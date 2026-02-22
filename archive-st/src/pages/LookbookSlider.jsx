import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { brandsData } from '../data/brands';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

export default function LookbookSlider() {
    const { id, year } = useParams();
    const navigate = useNavigate();
    const brand = brandsData.find(b => b.id === id);
    const season = brand?.years.find(y => y.year === year);

    const [currentIndex, setCurrentIndex] = useState(0);

    if (!season || !season.images.length) return <div className="text-white p-20">No Images Found</div>;

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % season.images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + season.images.length) % season.images.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 bg-black z-50 flex flex-col justify-center items-center overflow-hidden"
        >
            {/* Top Navigation */}
            <div className="absolute top-0 w-full p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference text-white">
                <div className="flex flex-col">
                    <span className="text-xs tracking-[0.4em] font-black uppercase opacity-50">Studio Jerrumi</span>
                    <span className="text-sm font-bold tracking-widest mt-1">{brand.name} {year}</span>
                </div>
                <button onClick={() => navigate(-1)} className="hover:rotate-90 transition-transform duration-500">
                    <X size={32} strokeWidth={1} />
                </button>
            </div>

            {/* Main Image View */}
            <div className="relative w-full h-full flex items-center justify-center p-0 md:p-12">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={season.images[currentIndex]}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full object-contain absolute inset-0 m-auto"
                        alt={`${brand.name} ${year} Lookbook Image ${currentIndex + 1}`}
                    />
                </AnimatePresence>
            </div>

            {/* Controls & Progress */}
            <div className="absolute bottom-10 w-full px-10 flex justify-between items-center z-50 mix-blend-difference text-white">
                <div className="text-xs tracking-widest font-mono">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(season.images.length).padStart(2, '0')}
                </div>

                <div className="flex gap-8">
                    <button onClick={handlePrev} className="hover:-translate-x-2 transition-transform">
                        <ArrowLeft size={28} strokeWidth={1} />
                    </button>
                    <button onClick={handleNext} className="hover:translate-x-2 transition-transform">
                        <ArrowRight size={28} strokeWidth={1} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
