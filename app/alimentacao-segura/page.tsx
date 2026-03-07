'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Thermometer, ClipboardCheck, Droplets, UserCheck, AlertTriangle } from 'lucide-react';

export default function SafeFood() {
  const guidelines = [
    {
      icon: Thermometer,
      title: 'Controle de Temperatura',
      desc: 'Manutenção rigorosa da cadeia de frio e calor. Alimentos quentes devem ser mantidos acima de 60°C e frios abaixo de 5°C.',
      law: 'RDC 216/2004'
    },
    {
      icon: Droplets,
      title: 'Higienização de Hortifruti',
      desc: 'Lavagem em água corrente seguida de imersão em solução clorada (15 minutos) e enxágue final com água potável.',
      law: 'Portaria CVS 5/2013'
    },
    {
      icon: UserCheck,
      title: 'Higiene dos Manipuladores',
      desc: 'Uso obrigatório de uniformes limpos, cabelos protegidos, unhas curtas e sem adornos. Lavagem frequente das mãos.',
      law: 'RDC 216/2004'
    },
    {
      icon: ClipboardCheck,
      title: 'Documentação Obrigatória',
      desc: 'Manual de Boas Práticas e POPs (Procedimentos Operacionais Padronizados) atualizados e disponíveis para fiscalização.',
      law: 'RDC 216/2004'
    },
    {
      icon: ShieldCheck,
      title: 'Prevenção de Contaminação Cruzada',
      desc: 'Separação física e temporal de alimentos crus e cozidos. Uso de utensílios coloridos para diferentes grupos de alimentos.',
      law: 'Boas Práticas Anvisa'
    },
    {
      icon: AlertTriangle,
      title: 'Gestão de Resíduos',
      desc: 'Descarte adequado em recipientes com tampa e acionamento por pedal. Retirada frequente das áreas de manipulação.',
      law: 'RDC 216/2004'
    }
  ];

  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-20 px-5 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-emerald mb-3">
                Segurança Alimentar
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-black text-navy leading-tight mb-6">
                Alimentação Segura: Compromisso e Lei
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                A segurança alimentar não é apenas uma obrigação legal perante a Anvisa, mas o pilar fundamental de confiança entre seu restaurante e seus clientes.
              </p>
              <div className="p-8 bg-cream border-t-4 border-gold rounded-b-lg shadow-sm">
                <p className="text-lg italic text-navy leading-relaxed">
                  &quot;As Boas Práticas de Fabricação são procedimentos que devem ser adotados por serviços de alimentação a fim de garantir a qualidade higiênico-sanitária e a conformidade dos alimentos com a legislação sanitária.&quot;
                </p>
                <cite className="block mt-6 text-xs font-bold uppercase tracking-widest text-gold">— Guia Anvisa</cite>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guidelines.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-cream rounded-xl border border-black/5 hover:border-gold transition-colors group"
              >
                <item.icon className="text-navy mb-6 group-hover:text-gold transition-colors" size={32} />
                <h3 className="font-serif text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                <div className="text-[10px] font-bold text-emerald uppercase tracking-widest bg-emerald/10 px-2 py-1 rounded inline-block">
                  Ref: {item.law}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 bg-navy text-white p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern-dots-white opacity-10" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-6">Sua cozinha está em conformidade?</h2>
              <p className="text-white/70 mb-8">
                Oferecemos auditorias higiênico-sanitárias completas, elaboração de Manuais de Boas Práticas e treinamentos de equipe focados em Segurança Alimentar.
              </p>
              <Link href="/#contato" className="bg-gold text-navy px-8 py-3 rounded-md font-bold hover:bg-[#e0aa3e] transition-colors">
                Solicitar Auditoria Técnica
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
