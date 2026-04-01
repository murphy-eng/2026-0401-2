import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Cable } from 'lucide-react';

const categories = [
  {
    id: 'connectors',
    name: '連接器',
    enName: 'Connectors',
    icon: Box,
    desc: 'JST 授權代理，提供各類高品質連接器，包括線對板、板對板及線對線連接器。廣泛應用於各類電子設備。',
    image: 'https://images.unsplash.com/photo-1558467523-46113f1fef72?auto=format&fit=crop&q=80&w=2070',
    path: '/products/connectors'
  },
  {
    id: 'custom-cables',
    name: '客製化線材',
    enName: 'Custom Cables',
    icon: Cable,
    desc: '專業線材加工服務，根據客戶規格需求，提供高品質的客製化線束解決方案。從打樣到量產一應俱全。',
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=2070',
    path: '/products/custom-cables'
  }
];

export default function Products() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-[120px] -z-10 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-[120px] -z-10 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <span className="text-[#005596] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Product Catalog</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#002c4d] mb-6 tracking-tight">產品介紹</h1>
          <div className="w-20 h-1.5 bg-[#005596] mx-auto"></div>
          <p className="mt-8 text-gray-500 max-w-2xl mx-auto leading-relaxed font-light text-lg">
            德通端子為 JST 授權代理商，提供全系列高品質連接器產品，並具備專業的客製化線材加工能力，滿足您多樣化的應用需求。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <Link to={cat.path} className="block">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3]">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002c4d] via-[#002c4d]/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                        <cat.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold tracking-tight">{cat.name}</h3>
                        <p className="text-xs uppercase tracking-widest text-blue-300 font-bold">{cat.enName}</p>
                      </div>
                    </div>
                    <p className="text-blue-100/80 leading-relaxed mb-8 max-w-sm font-light">
                      {cat.desc}
                    </p>
                    <div className="flex items-center gap-3 text-sm font-bold text-[#00a3e0] group-hover:text-white transition-colors">
                      <span>探索產品細節</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Decorative background element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#005596] -z-10 rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
