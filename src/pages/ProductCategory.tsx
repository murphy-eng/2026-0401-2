import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight, Box, Cable } from 'lucide-react';

const productData = {
  'connectors': {
    title: '連接器',
    enTitle: 'Connectors',
    icon: Box,
    products: [
      { id: 1, name: 'PH Series', desc: 'Wire-to-Board Crimp style Connectors', link: 'https://www.jst-mfg.com/product/detail.php?series=199' },
      { id: 2, name: 'XH Series', desc: 'Wire-to-Board Crimp style Connectors', link: 'https://www.jst-mfg.com/product/detail.php?series=277' },
      { id: 3, name: 'VH Series', desc: 'Wire-to-Board Crimp style Connectors', link: 'https://www.jst-mfg.com/product/detail.php?series=262' },
      { id: 4, name: 'SH Series', desc: 'Wire-to-Board Crimp style Connectors', link: 'https://www.jst-mfg.com/product/detail.php?series=231' },
      { id: 5, name: 'ZH Series', desc: 'Wire-to-Board Crimp style Connectors', link: 'https://www.jst-mfg.com/product/detail.php?series=283' },
      { id: 6, name: 'EH Series', desc: 'Wire-to-Board Crimp style Connectors', link: 'https://www.jst-mfg.com/product/detail.php?series=58' },
    ]
  },
  'custom-cables': {
    title: '客製化線材',
    enTitle: 'Custom Cables',
    icon: Cable,
    products: [
      { id: 1, name: 'LVDS Cable', desc: 'High-speed signal transmission cable assembly', link: '#' },
      { id: 2, name: 'Power Harness', desc: 'Custom power distribution wire harness', link: '#' },
      { id: 3, name: 'Signal Wire', desc: 'Multi-core signal wire assembly', link: '#' },
      { id: 4, name: 'Automotive Harness', desc: 'Custom automotive grade wire harness', link: '#' },
      { id: 5, name: 'Industrial Cable', desc: 'Heavy duty industrial control cable', link: '#' },
      { id: 6, name: 'Medical Grade Cable', desc: 'High precision medical device cable assembly', link: '#' },
    ]
  }
};

export default function ProductCategory() {
  const { categoryId } = useParams();
  const data = productData[categoryId as keyof typeof productData];

  if (!data) return <div className="pt-32 text-center">Category not found</div>;

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-12">
          <Link to="/products" className="hover:text-[#005596]">產品介紹</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#005596] font-medium">{data.title}</span>
        </nav>

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <data.icon className="w-10 h-10 text-[#005596]" />
            <div>
              <h1 className="text-4xl font-bold text-[#002c4d] tracking-tight">{data.title}</h1>
              <p className="text-xs uppercase tracking-widest text-gray-400">{data.enTitle}</p>
            </div>
          </div>
          <div className="w-20 h-1 bg-[#005596]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.products.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-100 p-8 rounded-sm shadow-sm hover:shadow-xl hover:border-[#005596]/20 transition-all"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#005596] transition-colors">
                    <data.icon className="w-6 h-6 text-[#005596] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#002c4d] mb-2 group-hover:text-[#005596] transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {product.desc}
                  </p>
                </div>
                
                <div className="mt-auto pt-6 border-t border-gray-50">
                  <a 
                    href={product.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#005596] hover:text-[#002c4d] transition-colors"
                  >
                    查看詳細規格 <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
