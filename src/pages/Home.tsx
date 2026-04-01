import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Settings, Award, Users, Globe, CheckCircle2, Send, Box, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section - Enfold Style */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-[#f8f9fa]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
            alt="Industrial Background" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#005596]/5 skew-x-12 transform translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#005596] text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-blue-100">
                Authorized JST Distributor
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-[#002c4d] leading-[1.1] mb-8 tracking-tight">
                專業 JST 代理 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005596] to-[#00a3e0]">
                  連接器與線材
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light max-w-lg">
                德通端子為 JST 正式授權代理商，提供全系列高品質連接器與專業客製化線束加工服務。
                我們以四十年的產業經驗，為您的產品提供最可靠的連結方案。
              </p>
              <div className="flex flex-wrap gap-5">
                <Link 
                  to="/products" 
                  className="bg-[#005596] text-white px-10 py-4 rounded-sm font-bold hover:bg-[#003d6b] transition-all flex items-center gap-2 shadow-2xl shadow-blue-900/30 group"
                >
                  查看產品目錄 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-white text-[#005596] border-2 border-[#005596] px-10 py-4 rounded-sm font-bold hover:bg-gray-50 transition-all"
                >
                  立即諮詢
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative z-10 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=1000" 
                  alt="Product Showcase" 
                  className="rounded-2xl shadow-2xl border-8 border-white"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Quality Assurance</p>
                    <p className="text-lg font-bold text-[#002c4d]">100% 原廠正品</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full -z-10 opacity-50 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, label: "產業經驗", value: "40+", suffix: "年" },
              { icon: Users, label: "服務客戶", value: "1000+", suffix: "" },
              { icon: Box, label: "產品種類", value: "5000+", suffix: "" },
              { icon: Globe, label: "行銷地區", value: "10+", suffix: "國" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-[#00a3e0]" />
                </div>
                <p className="text-3xl font-bold text-[#002c4d] mb-1">{stat.value}{stat.suffix}</p>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#fcfdfe] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#005596] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Our Strengths</span>
            <h2 className="text-4xl font-bold text-[#002c4d] mb-6 tracking-tight">為什麼選擇德通端子？</h2>
            <div className="w-16 h-1 bg-[#005596] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: ShieldCheck,
                title: "正品保證",
                desc: "身為 JST 正式授權代理商，我們保證所有產品均為原廠正品，品質符合國際標準，杜絕仿冒品風險。"
              },
              {
                icon: Zap,
                title: "快速響應",
                desc: "專業的業務團隊與技術支援，能在最短時間內提供您所需的產品資訊、報價與樣品，加速您的開發進程。"
              },
              {
                icon: Settings,
                title: "客製化服務",
                desc: "除了標準連接器，我們也提供專業的客製化線束加工服務，從設計諮詢到成品量產，滿足您的特殊規格需求。"
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#005596] transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-[#005596] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-[#002c4d] mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#002c4d]">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#005596] skew-x-[-20deg] transform translate-x-1/4 opacity-50"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-12 md:p-20 rounded-3xl overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00a3e0] rounded-full blur-[100px] opacity-20"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#005596] rounded-full blur-[100px] opacity-20"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <span className="text-[#00a3e0] font-bold text-sm tracking-[0.2em] uppercase mb-6 block">Ready to start?</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                  需要專業的 <br />
                  <span className="text-[#00a3e0]">連接器解決方案</span> 嗎？
                </h2>
                <p className="text-xl text-blue-100/80 mb-10 max-w-xl font-light leading-relaxed">
                  不論是標準品採購、大宗訂單報價，或是複雜的客製化線束開發，德通端子的專業團隊都已準備好為您提供最精準的協助。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/contact" 
                    className="bg-white text-[#002c4d] px-10 py-4 rounded-sm font-bold hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-2"
                  >
                    立即聯繫團隊 <Send className="w-5 h-5" />
                  </Link>
                  <div className="flex items-center gap-4 px-6 py-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">Call us directly</p>
                      <p className="text-white font-bold">02-22863629</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:grid grid-cols-2 gap-4">
                {[
                  { label: "技術諮詢", desc: "專業工程師一對一解答" },
                  { label: "樣品提供", desc: "快速打樣與規格確認" },
                  { label: "大宗報價", desc: "具競爭力的採購方案" },
                  { label: "售後支援", desc: "完整的產品技術保障" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <p className="text-white font-bold mb-1">{item.label}</p>
                    <p className="text-blue-200/60 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
