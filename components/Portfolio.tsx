import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { Project } from '../types';
import { X, ArrowRight } from 'lucide-react';

const projects: Project[] = [
  { 
    id: 1, 
    title: 'Casa Horizonte', 
    category: 'Residencial', 
    imageUrl: 'https://picsum.photos/800/600?random=2',
    description: 'Uma residência projetada para se fundir com a linha do horizonte. Grandes vãos livres e uso extensivo de vidro trazem a natureza para dentro dos ambientes de convívio.',
    challenge: 'O terreno possuía um declive acentuado de 15 metros, dificultando a implantação tradicional.',
    solution: 'Criamos uma estrutura em balanço que projeta a área social sobre a vista, utilizando o declive para criar níveis privativos inferiores.',
    additionalImages: ['https://picsum.photos/800/600?random=21', 'https://picsum.photos/800/600?random=22']
  },
  { 
    id: 2, 
    title: 'Loft Industrial', 
    category: 'Interiores', 
    imageUrl: 'https://picsum.photos/800/600?random=3',
    description: 'Reforma completa de um antigo galpão convertido em loft residencial. Mantivemos a brutalidade do concreto aparente suavizada por madeira natural e tecidos orgânicos.',
    challenge: 'Aquecer o ambiente que possuía pé-direito duplo e pouca incidência de luz direta.',
    solution: 'Instalação de claraboias estratégicas e uso de painéis de madeira freijó que revestem as paredes altas, trazendo conforto térmico e visual.',
    additionalImages: ['https://picsum.photos/800/600?random=31', 'https://picsum.photos/800/600?random=32']
  },
  { 
    id: 3, 
    title: 'Edifício Aura', 
    category: 'Comercial', 
    imageUrl: 'https://picsum.photos/800/600?random=4',
    description: 'Um edifício boutique comercial no coração da cidade. Fachada ativa e brises móveis permitem controle solar dinâmico pelos usuários.',
    challenge: 'Criar um marco arquitetônico em um lote estreito entre dois edifícios históricos.',
    solution: 'Uma fachada minimalista e recuada que respeita a altura dos vizinhos, criando um respiro urbano e uma praça de entrada.',
    additionalImages: ['https://picsum.photos/800/600?random=41', 'https://picsum.photos/800/600?random=42']
  },
  { 
    id: 4, 
    title: 'Vila Minimalista', 
    category: 'Residencial', 
    imageUrl: 'https://picsum.photos/800/600?random=5',
    description: 'Conjunto de 3 casas integradas por um jardim central. A privacidade é garantida por muros verdes e posicionamento estratégico das aberturas.',
    challenge: 'Maximizar a área construída sem perder a sensação de amplitude e verde.',
    solution: 'Jardins internos e pátios privativos para cada unidade, garantindo ventilação cruzada e luz natural em todos os cômodos.',
    additionalImages: ['https://picsum.photos/800/600?random=51', 'https://picsum.photos/800/600?random=52']
  },
  { 
    id: 5, 
    title: 'Escritório Open', 
    category: 'Comercial', 
    imageUrl: 'https://picsum.photos/800/600?random=6',
    description: 'Sede de uma startup de tecnologia. O conceito foi "transparência e fluidez", eliminando salas fechadas em favor de pods acústicos e áreas de descompressão.',
    challenge: 'Acústica em um ambiente 100% aberto.',
    solution: 'Uso de nuvens acústicas no teto e carpetes de alta densidade, além de barreiras de vegetação natural entre as ilhas de trabalho.',
    additionalImages: ['https://picsum.photos/800/600?random=61', 'https://picsum.photos/800/600?random=62']
  },
  { 
    id: 6, 
    title: 'Apartamento Garden', 
    category: 'Interiores', 
    imageUrl: 'https://picsum.photos/800/600?random=7',
    description: 'Integração total entre a varanda gourmet e o living. Um oásis urbano com paisagismo vertical e mobiliário assinado.',
    challenge: 'Camuflar a estrutura de pilares existente que segmentava o espaço.',
    solution: 'Revestimos os pilares com espelhos bronze, fazendo-os "desaparecer" e ampliando a percepção do jardim vertical.',
    additionalImages: ['https://picsum.photos/800/600?random=71', 'https://picsum.photos/800/600?random=72']
  },
];

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Portfólio Selecionado" subtitle="Nossas Obras" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => openModal(project)}
              className="group relative overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-brand-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <span className="text-gold-500 text-xs tracking-widest uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-serif translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 mb-4">
                  {project.title}
                </h3>
                <span className="text-white text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                  Ver Detalhes <ArrowRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-brand-black font-semibold border-b-2 border-brand-black pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors">
            Ver Todo o Portfólio
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-brand-black/90 backdrop-blur-sm" onClick={closeModal}></div>
          
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl animate-fade-in-up">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full text-brand-black hover:text-gold-600 transition-colors shadow-lg"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Main Image Column */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto sticky top-0">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Column */}
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                  {selectedProject.category}
                </span>
                <h2 className="text-4xl font-serif text-brand-black mb-6">
                  {selectedProject.title}
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wide text-gray-400 mb-2">Conceito</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {selectedProject.description || "Descrição detalhada do projeto indisponível no momento."}
                    </p>
                  </div>

                  {selectedProject.challenge && (
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wide text-gray-400 mb-2">Desafio</h4>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>
                  )}

                  {selectedProject.solution && (
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wide text-gray-400 mb-2">Solução</h4>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  )}

                  {selectedProject.additionalImages && (
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wide text-gray-400 mb-4">Galeria</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedProject.additionalImages.map((img, idx) => (
                          <img key={idx} src={img} alt={`Detalhe ${idx}`} className="w-full h-32 object-cover rounded-sm hover:opacity-90 transition-opacity cursor-pointer" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};