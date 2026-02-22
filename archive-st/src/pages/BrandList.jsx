import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { brandsData } from '../data/brands';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function BrandList() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-center px-4 md:px-20 py-20">
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference"
            >
                <div className="text-xs tracking-[0.4em] font-black uppercase">Studio Jerrumi</div>
                <div className="text-xs tracking-widest text-gray-500">2024 COLLECTIVE</div>
            </motion.nav>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-2 md:gap-4 mt-20"
            >
                {brandsData.map((brand) => (
                    <motion.div key={brand.id} variants={item}>
                        <Link
                            to={`/brand/${brand.id}`}
                            className="group block w-fit"
                        >
                            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase text-gray-500 hover:text-white transition-colors duration-500 ease-out leading-none">
                                {brand.name}
                            </h1>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
