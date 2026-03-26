import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle2, ChevronRight, CreditCard, Users, ShieldCheck, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const pkg = location.state?.pkg;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-16 relative px-4">
           <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-slate-200 w-full z-0 rounded-full" />
           <div 
             className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-emerald-600 transition-all duration-500 z-0 rounded-full" 
             style={{ width: `${((step - 1) / 2) * 100}%` }}
           />
           {[1, 2, 3].map((s) => (
             <div 
               key={s} 
               className={`relative z-10 h-10 w-10 rounded-full flex items-center justify-center font-black text-sm transition-all duration-500 ${step >= s ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' : 'bg-white text-slate-400 border-2 border-slate-200'}`}
             >
               {step > s ? <CheckCircle2 size={20} /> : s}
             </div>
           ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Content */}
          <div className="flex-1">
             <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1" 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-8"
                  >
                     <h2 className="text-3xl font-black text-slate-900 mb-8">Traveler <span className="text-emerald-600">Details</span></h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                           <input type="text" className="input-field" placeholder="Lead Traveler Name" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                           <input type="email" className="input-field" placeholder="your@email.com" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                           <input type="tel" className="input-field" placeholder="+92 300 1234567" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Travel Date</label>
                           <input type="date" className="input-field" />
                        </div>
                     </div>
                     <button 
                       onClick={nextStep}
                       className="w-full py-6 bg-slate-900 text-white rounded-[28px] font-black text-sm uppercase tracking-widest shadow-xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 group"
                     >
                        <span>Continue to Payment</span>
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                     </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    key="step2" 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-8"
                  >
                     <button onClick={prevStep} className="flex items-center gap-2 text-xs font-black text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest mb-4">
                        <ArrowLeft size={16} /> Back
                     </button>
                     <h2 className="text-3xl font-black text-slate-900">Secure <span className="text-emerald-600">Payment</span></h2>
                     
                     <div className="space-y-4">
                        {['Credit/Debit Card', 'Bank Transfer', 'Payoneer'].map((method) => (
                           <div key={method} className="p-6 rounded-[32px] bg-white border border-slate-100 flex items-center justify-between group hover:border-emerald-200 transition-all cursor-pointer">
                              <div className="flex items-center gap-4">
                                 <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 transition-colors">
                                    <CreditCard size={24} />
                                 </div>
                                 <h4 className="font-black text-slate-800">{method}</h4>
                              </div>
                              <input type="radio" name="payment" className="h-5 w-5 text-emerald-600 focus:ring-emerald-500" />
                           </div>
                        ))}
                     </div>

                     <div className="p-8 rounded-[32px] bg-emerald-50 border border-emerald-100 flex items-start gap-4">
                        <ShieldCheck className="text-emerald-600 shrink-0" size={24} />
                        <p className="text-xs font-bold text-slate-600 leading-relaxed">
                           Your payment is secured with 256-bit SSL encryption. We do not store your credit card details on our servers.
                        </p>
                     </div>

                     <button 
                       onClick={nextStep}
                       className="w-full py-6 bg-emerald-600 text-white rounded-[28px] font-black text-sm uppercase tracking-widest shadow-xl shadow-emerald-500/20 hover:bg-emerald-700 transition-all"
                     >
                        Confirm & Pay Securely
                     </button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div 
                    key="step3" 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-8"
                  >
                     <div className="mx-auto h-24 w-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                        <CheckCircle2 size={48} />
                     </div>
                     <div>
                        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Booking Confirmed!</h2>
                        <p className="text-slate-500 font-medium max-w-sm mx-auto">Thank you for choosing Pakistan Explorer. Your booking reference is <span className="text-slate-900 font-black">#PE-10293</span>. Check your email for details.</p>
                     </div>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                          onClick={() => navigate('/')}
                          className="px-10 py-5 bg-slate-900 text-white rounded-[24px] font-black text-sm uppercase tracking-widest shadow-xl"
                        >
                           Go to Home
                        </button>
                        <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-[24px] font-black text-sm uppercase tracking-widest shadow-sm">
                           View Receipt
                        </button>
                     </div>
                  </motion.div>
                )}
             </AnimatePresence>
          </div>

          {/* Order Summary Sidebar */}
          <aside className="lg:w-80 space-y-8">
             <div className="p-10 rounded-[48px] bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 space-y-8">
                <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Order Summary</h4>
                
                <div className="flex gap-4">
                   <div className="h-16 w-16 rounded-2xl bg-slate-100 overflow-hidden shrink-0">
                      <img src={pkg?.image} alt="" className="h-full w-full object-cover" />
                   </div>
                   <div>
                      <h5 className="font-extrabold text-sm text-slate-900 line-clamp-1">{pkg?.title || 'Selected Package'}</h5>
                      <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{pkg?.duration || 0} Days Tour</p>
                   </div>
                </div>

                <hr className="border-slate-50" />

                <div className="space-y-4">
                   <div className="flex justify-between text-xs font-bold text-slate-500">
                      <span>Package Price</span>
                      <span className="text-slate-900">PKR {pkg?.price?.toLocaleString() || 0}</span>
                   </div>
                   <div className="flex justify-between text-xs font-bold text-slate-500">
                      <span>Service Fee</span>
                      <span className="text-slate-900">PKR 1,500</span>
                   </div>
                   <div className="flex justify-between text-xs font-bold text-slate-500">
                      <span>Tax (GST)</span>
                      <span className="text-slate-900">PKR 850</span>
                   </div>
                   <hr className="border-slate-50" />
                   <div className="flex justify-between items-baseline pt-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total</span>
                      <span className="text-2xl font-black text-emerald-600">PKR {(pkg?.price + 2350 || 0).toLocaleString()}</span>
                   </div>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
