import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { brandsData } from '../data/brands';

export default function BrandPage() {
    const { id } = useParams();
    const brand = brandsData.find(b => b.id === id);

    if (!brand) return <div className="text-white p-20">Not Found</div>;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-[#111] text-white flex flex-col pt-32 px-4 md:px-20"
        >
            <nav className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference">
                <Link to="/" className="text-xs tracking-[0.4em] font-black uppercase hover:text-gray-400 transition-colors">Studio Jerrumi</Link>
                <div className="text-xs tracking-widest text-gray-400">SEASONS</div>
            </nav>

            <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
                className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12"
            >
                {brand.name}
            </motion.h1>

            <div className="flex flex-col gap-8 w-full max-w-2xl border-t border-gray-800 pt-8">
                {brand.years.map((y, index) => (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        key={y.year}
                    >
                        <Link
                            to={`/brand/${brand.id}/${y.year}`}
                            className="group flex justify-between items-center w-full"
                        >
                            <h2 className="text-4xl md:text-5xl tracking-tighter font-bold text-gray-500 group-hover:text-white transition-colors duration-300">
                                {y.year}
                            </h2>
                            <span className="text-gray-600 text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                                View Archive &rarr;
                            </span>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
