import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';

const news = [
  { id: 1, date: '2024-03-20', title: 'JST 全新系列連接器正式上市', category: '產品動態', desc: 'JST 推出全新系列連接器，針對工業自動化應用提供更高性能與穩定性。' },
  { id: 2, date: '2024-02-15', title: '德通端子參加 2024 台北國際電子產業展', category: '展覽訊息', desc: '德通端子將於 2024 台北國際電子產業展展出全系列 JST 連接器與客製化線材解決方案。' },
  { id: 3, date: '2024-01-10', title: '春節連假出貨公告', category: '公司公告', desc: '德通端子春節連假出貨時間調整公告，請各位客戶提前規劃採購需求。' },
  { id: 4, date: '2023-12-05', title: 'JST 產品價格調整通知', category: '產品動態', desc: '受全球原材料價格波動影響，JST 部分產品價格將於 2024 年起進行調整。' },
];

export default function News() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-[#002c4d] mb-4 tracking-tight">產業動態</h1>
          <div className="w-20 h-1 bg-[#005596] mx-auto"></div>
        </div>

        <div className="space-y-6">
          {news.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-100 p-8 rounded-sm shadow-sm hover:shadow-xl hover:border-[#005596]/20 transition-all cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-3 text-sm text-gray-400 min-w-[120px]">
                  <Calendar className="w-4 h-4 text-[#00a3e0]" />
                  <span>{item.date}</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-1 bg-blue-50 text-[#005596] text-[10px] font-bold uppercase tracking-widest rounded-sm">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#002c4d] group-hover:text-[#005596] transition-colors tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-3xl">
                    {item.desc}
                  </p>
                </div>

                <div className="hidden md:block">
                  <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#005596] group-hover:border-[#005596] transition-all">
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
