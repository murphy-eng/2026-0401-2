import { motion } from 'framer-motion';

const timeline = [
  { year: '1980s', title: '公司創立', desc: '德通端子股份有限公司正式成立，開始深耕電子零組件產業。' },
  { year: '1995', title: 'JST 授權代理', desc: '正式取得 JST 授權代理，開始為台灣客戶提供高品質連接器產品。' },
  { year: '2005', title: '客製化線材加工', desc: '擴展業務範圍，建立客製化線材加工中心，提供一站式解決方案。' },
  { year: '2015', title: '業務版圖擴張', desc: '業務範圍擴展至東南亞市場，服務更多國際客戶。' },
  { year: '2024', title: '數位轉型與創新', desc: '持續優化供應鏈管理，提供更快速、更精準的技術支援與服務。' }
];

export default function History() {
  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-[#002c4d] mb-4 tracking-tight">公司沿革</h1>
          <div className="w-20 h-1 bg-[#005596] mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200 hidden md:block"></div>

          <div className="space-y-16">
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`p-8 bg-white rounded-lg shadow-sm border border-gray-100 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-2xl font-bold text-[#005596] mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold text-[#002c4d] mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10 w-4 h-4 bg-[#005596] rounded-full border-4 border-white shadow-sm hidden md:block"></div>
                
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
