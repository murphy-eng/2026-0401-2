import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-[#002c4d] mb-4 tracking-tight">聯絡我們</h1>
          <div className="w-20 h-1 bg-[#005596] mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            如果您有任何產品需求、技術諮詢或合作機會，歡迎透過以下方式與我們聯繫，我們將竭誠為您服務。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-12">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#005596]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#002c4d] mb-2 tracking-tight">公司地址</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  247 新北市蘆洲區中山二路176巷18號
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-[#005596]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#002c4d] mb-2 tracking-tight">聯絡電話</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  02-22863629 #770
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-[#005596]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#002c4d] mb-2 tracking-tight">電子郵件</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  justin@tokutsu-tp.com.tw
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-10 rounded-sm shadow-2xl shadow-blue-900/5 border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">姓名</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:border-[#005596] transition-colors"
                    placeholder="您的姓名"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">公司名稱</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:border-[#005596] transition-colors"
                    placeholder="您的公司名稱"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">電子郵件</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:border-[#005596] transition-colors"
                    placeholder="您的電子郵件"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">聯絡電話</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:border-[#005596] transition-colors"
                    placeholder="您的聯絡電話"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">需求內容</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm focus:outline-none focus:border-[#005596] transition-colors resize-none"
                  placeholder="請輸入您的需求內容..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#005596] text-white py-4 rounded-sm font-bold hover:bg-[#003d6b] transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-900/10"
              >
                提交訊息 <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
