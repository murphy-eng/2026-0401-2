import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#002c4d] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-6 tracking-tight">德通端子股份有限公司</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              德通端子為JST代理商，致力於提供高品質的連接器與客製化線材解決方案。
              我們以專業的技術支援與優質的服務，成為客戶最信賴的合作夥伴。
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-[#00a3e0]" />
                <span>247 新北市蘆洲區中山二路176巷18號</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-[#00a3e0]" />
                <span>02-22863629 #770</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-[#00a3e0]" />
                <span>justin@tokutsu-tp.com.tw</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#00a3e0]">快速連結</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">關於德通</Link></li>
              <li><Link to="/history" className="hover:text-white transition-colors">公司沿革</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">產品介紹</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">產業動態</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">聯絡我們</Link></li>
            </ul>
          </div>

          {/* Partner Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#00a3e0]">合作夥伴</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="https://www.jst.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  JST Official Website <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.jst-mfg.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  JST Manufacturing <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} TOKUTSU 德通端子股份有限公司. All Rights Reserved.</p>
          <p>統一編號: 20938737</p>
        </div>
      </div>
    </footer>
  );
}
