import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <span className="text-[#005596] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#002c4d] mb-6 tracking-tight">關於德通</h1>
          <div className="w-20 h-1.5 bg-[#005596]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 text-gray-600 leading-relaxed"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#005596]">德通端子股份有限公司 (TOKUTSU)</h2>
              <p className="text-lg text-gray-500 font-light italic">
                "四十載專注，只為每一次完美的連結。"
              </p>
            </div>
            <p>
              德通端子股份有限公司成立於 1980 年代，深耕電子零組件產業多年。
              身為全球知名連接器品牌 JST 的授權代理商，我們致力於為客戶提供最優質的連接器產品與技術支援。
            </p>
            <p>
              我們的產品廣泛應用於消費性電子、工業自動化、汽車電子、醫療設備及通訊產業。
              除了標準品的供應，德通端子更具備強大的客製化開發能力，能根據客戶的特殊需求，
              提供從設計、打樣到量產的一站式客製化線材加工服務。
            </p>
            <div className="bg-blue-50/50 p-10 rounded-2xl border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#005596]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-xl font-bold text-[#002c4d] mb-4 tracking-tight">我們的使命</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                以專業的技術與誠信的服務，成為客戶在電子連接方案上的首選合作夥伴，
                協助客戶提升產品競爭力，共創雙贏。
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070" 
                alt="Office" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#005596] -z-10 rounded-full opacity-5 blur-3xl"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-dashed border-blue-100 rounded-full -z-10 animate-pulse-soft"></div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="py-24 border-t border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#002c4d] mb-4 tracking-tight">核心價值</h2>
            <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Our Core Values</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Target, title: "專業精準", desc: "追求技術的極致，確保每一個細節都符合最高標準。" },
              { icon: Heart, title: "誠信服務", desc: "以誠待客，建立長久且穩固的合作關係。" },
              { icon: Lightbulb, title: "創新開發", desc: "不斷尋求更好的解決方案，應對多變的市場需求。" },
              { icon: TrendingUp, title: "永續成長", desc: "與客戶共同成長，實現企業的長遠發展。" }
            ].map((value, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#005596] transition-all duration-300">
                  <value.icon className="w-8 h-8 text-[#005596] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#002c4d] mb-3 tracking-tight">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
