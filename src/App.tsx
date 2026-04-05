/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock, ArrowRight, AlertCircle, ShieldCheck } from "lucide-react";

export default function App() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const CORRECT_PASSWORD = "certiportuz";
  const REDIRECT_URL = "https://certiportadmin.vercel.app";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      if (password === CORRECT_PASSWORD) {
        window.location.href = REDIRECT_URL;
      } else {
        setError(true);
        setIsSubmitting(false);
        // Reset error after 3 seconds
        setTimeout(() => setError(false), 3000);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-100 py-4 px-6 flex justify-between items-center bg-white sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tighter text-[#00718f]">
              CERTIPORT<span className="text-[#f7941d] font-black">®</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
              A PEARSON VUE BUSINESS
            </span>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pearson_logo.svg/2560px-Pearson_logo.svg.png" 
            alt="Pearson Education" 
            className="h-8 opacity-80"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 relative overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none overflow-hidden">
          <p className="text-8xl font-black text-slate-900 leading-tight text-center max-w-4xl uppercase">
            Certiport Exam System Management Portal Authorized Personnel Only
          </p>
        </div>

        <div className="w-full max-w-md z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 md:p-10"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#00718f]/10 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-[#00718f]" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-center text-slate-800 mb-2">
              Xavfsiz Kirish
            </h1>
            <p className="text-slate-500 text-center text-sm mb-8 leading-relaxed">
              Ushbu tizim Certiport tomonidan imtihon jarayonlarini muvofiqlashtirish uchun yaratilgan. 
              Ro'yxatdan o'tib to'lov qila olmagan nomzodlar o'rniga bo'sh joylarni boshqarish uchun mo'ljallangan.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 block ml-1">
                  Kirish uchun parolni kiriting
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className={`w-5 h-5 transition-colors ${error ? 'text-red-500' : 'text-slate-400 group-focus-within:text-[#00718f]'}`} />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError(false);
                    }}
                    placeholder="••••••••"
                    className={`w-full pl-11 pr-4 py-3.5 bg-slate-50 border-2 rounded-xl outline-none transition-all duration-200 font-mono tracking-widest
                      ${error 
                        ? 'border-red-200 focus:border-red-500 bg-red-50' 
                        : 'border-slate-100 focus:border-[#00718f] focus:bg-white shadow-sm focus:shadow-md'
                      }`}
                    required
                  />
                </div>
                
                <AnimatePresence>
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-2 mt-2 text-red-600 text-sm font-medium"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>Xato! Parol noto'g'ri.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00718f] hover:bg-[#005a72] text-white font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#00718f]/20 active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Davom etish
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Info Text in Grey */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mx-auto font-medium">
              Bu sayt nima uchun kerak: ro'yxatdan o'tib to'lov qila olmagan insonlar imtihondan chetlashtiriladi va imtihon uchun bo'sh ish joyi qoladi. Kompaniya zarar ko'rmasligi uchun bu sayt yana odamlar olib imtihon o'tkazish uchun Certiport tomonidan yaratilgan.
            </p>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 grayscale opacity-60">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pearson_logo.svg/2560px-Pearson_logo.svg.png" 
              alt="Pearson" 
              className="h-6"
              referrerPolicy="no-referrer"
            />
            <div className="h-4 w-[1px] bg-slate-300"></div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Certiport Authorized</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            <a href="#" className="hover:text-[#00718f] transition-colors">Asosiy</a>
            <a href="#" className="hover:text-[#00718f] transition-colors">Sertifikatlar</a>
            <a href="#" className="hover:text-[#00718f] transition-colors">Biz haqimizda</a>
            <a href="#" className="hover:text-[#00718f] transition-colors">Shartlar va qoidalar</a>
          </div>

          <p className="text-[10px] text-slate-400 font-medium">
            © {new Date().getFullYear()} Certiport. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </footer>
    </div>
  );
}
