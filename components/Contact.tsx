import React from 'react';
import { SectionTitle } from './SectionTitle';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-black text-white relative">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <SectionTitle title="Entre em Contato" subtitle="Vamos conversar" centered={true} />
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif mb-6 text-white">Estamos ansiosos para ouvir sobre seu projeto.</h3>
          <p className="text-gray-400 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Utilize nossos canais diretos abaixo para agendar uma reunião ou solicitar um orçamento.
            Nossa equipe responderá em até 24h úteis.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-sm hover:border-gold-500 transition-colors group">
              <span className="block text-gold-500 text-xs uppercase tracking-widest mb-4 group-hover:text-white transition-colors">Email</span>
              <a href="mailto:contato@crra.arq.br" className="text-lg text-white hover:text-gold-500 transition-colors break-all">
                contato@crra.arq.br
              </a>
            </div>
            
            <div className="p-8 border border-white/10 rounded-sm hover:border-gold-500 transition-colors group">
              <span className="block text-gold-500 text-xs uppercase tracking-widest mb-4 group-hover:text-white transition-colors">Telefone</span>
              <a href="tel:+5511999999999" className="text-lg text-white hover:text-gold-500 transition-colors">
                +55 11 99999-9999
              </a>
            </div>
            
            <div className="p-8 border border-white/10 rounded-sm hover:border-gold-500 transition-colors group">
              <span className="block text-gold-500 text-xs uppercase tracking-widest mb-4 group-hover:text-white transition-colors">Endereço</span>
              <p className="text-lg text-gray-300">
                Av. Paulista, 1000<br />São Paulo, SP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};