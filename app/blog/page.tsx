'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: 'Como Reduzir o CMV em 20% sem Perder Qualidade',
    excerpt: 'Descubra as estratégias práticas para otimizar suas compras e reduzir o desperdício na cozinha.',
    date: '15 Mar, 2025',
    category: 'Gestão Financeira',
    image: 'https://picsum.photos/seed/restaurant-finance/800/600'
  },
  {
    id: 2,
    title: 'Engenharia de Cardápio: O Guia Definitivo',
    excerpt: 'Aprenda a classificar seus pratos entre Estrelas, Cavalos de Carga, Quebra-cabeças e Cães.',
    date: '10 Mar, 2025',
    category: 'Estratégia',
    image: 'https://picsum.photos/seed/restaurant-menu-design/800/600'
  },
  {
    id: 3,
    title: 'Legislação Anvisa 2025: O que Mudou?',
    excerpt: 'Fique por dentro das novas exigências sanitárias para bares e restaurantes no Brasil.',
    date: '05 Mar, 2025',
    category: 'Segurança Alimentar',
    image: 'https://picsum.photos/seed/food-safety-inspection/800/600'
  },
  {
    id: 4,
    title: 'O Poder da Crítica Gastronômica Técnica',
    excerpt: 'Como uma avaliação externa pode identificar falhas invisíveis para quem está no dia a dia.',
    date: '01 Mar, 2025',
    category: 'Consultoria',
    image: 'https://picsum.photos/seed/food-critic-tasting/800/600'
  },
  {
    id: 5,
    title: 'Gestão de Estoque: Curva ABC na Prática',
    excerpt: 'Pare de imobilizar capital em itens de baixo giro e foque no que realmente traz lucro.',
    date: '25 Fev, 2025',
    category: 'Operação',
    image: 'https://picsum.photos/seed/restaurant-inventory/800/600'
  },
  {
    id: 6,
    title: 'Treinamento de Equipe: Padronização é a Chave',
    excerpt: 'Como garantir que o prato saia perfeito todas as vezes, independente de quem esteja na cozinha.',
    date: '20 Fev, 2025',
    category: 'Equipe',
    image: 'https://picsum.photos/seed/chef-training-kitchen/800/600'
  }
];

export default function Blog() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-20 px-5 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-emerald mb-3">
              Blog & Artigos
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-black text-navy leading-tight">
              Inteligência Gastronômica
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Conteúdo técnico e estratégico para transformar a gestão do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-navy text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">
                    {article.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-xs text-gray-400 mb-2">{article.date}</div>
                  <h2 className="font-serif text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <Link href={`/blog/${article.id}`} className="text-xs font-bold text-navy uppercase tracking-widest border-b-2 border-gold pb-1 hover:text-gold transition-colors">
                    Ler artigo completo
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
