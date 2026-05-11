import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Hero from "../components/Hero";
import CallModal from "../components/CallModal";
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface HomeProps {
  onOpenBooking: (apartment: any) => void;
}

const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);

  

  const services: Service[] = [
    {
      title: "Tourisme & Excursions",
      description: "Découvrez la France avec nos visites guidées et activités touristiques.",
      image: "/assets/hero/4.jpg",
      link: "/services/tourisme"
    },
    {
      title: "Location de voitures",
      description: "Trouvez la voiture idéale pour vos déplacements à travers la France.",
      image: "https://img.sixt.com/1600/040f316a-9ef9-4d94-8752-d6574d68c99d.jpg",
      link: "/services/voitures"
    },
    {
      title: "Appartements",
      description: "Découvrez nos appartements et locations de vacances sélectionnés avec soin.",
      image: "/assets/hero/20.webp",
      link: "/services/appartements"
    },
    {
      title: "Villas",
      description: "Profitez de nos villas de luxe pour des vacances inoubliables en France.",
      image: "/assets/hero/2.jpg",
      link: "/services/villas"
    },
    {
      title: "Hôtels",
      description: "Découvrez nos hôtels sélectionnés pour votre confort et votre détente.",
      image: "/assets/hero/1.jpg",
      link: "/services/hotels"
    }
  ];

  const nextService = () => {
    setActiveService((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevService = () => {
    setActiveService((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(nextService, 5000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [activeService, isHovered]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const activeServiceData = services[activeService];

  return (
    <div className="overflow-x-hidden">
      <Hero />

      {/* Section Services */}
      <section className="relative py-20 bg-gradient-to-b from-white to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services Exceptionnels</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez une gamme complète de services pour rendre votre séjour en France inoubliable
            </p>
          </motion.div>

          <div 
            className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                {activeServiceData && (
                  <img 
                    src={activeServiceData.image} 
                    alt={activeServiceData.title}
                    className="w-full h-full object-cover transition-transform duration-10000 ease-linear"
                    style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1.1)' }}
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    {activeServiceData && (
                      <>
                        <h3 className="text-3xl md:text-5xl font-bold mb-4">{activeServiceData.title}</h3>
                        <p className="text-xl mb-6 max-w-2xl">{activeServiceData.description}</p>
                        <button 
  onClick={() => navigate(activeServiceData.link)}
  className="
    ml-4
    bg-gradient-to-r from-blue-700 via-gray-100 to-red-600
    text-black
    px-5 py-2.5
    rounded-lg
    text-sm
    font-bold
    hover:brightness-110
    hover:scale-105
    transition-all duration-300
    shadow-md hover:shadow-lg
    flex items-center gap-2
  "
>
  Réserver maintenant <FiArrowRight className="ml-2" />
</button>
                      </>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button 
              onClick={prevService}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Service précédent"
            >
              <FiChevronLeft size={24} />
            </button>
            <button 
              onClick={nextService}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Service suivant"
            >
              <FiChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 ">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-30 ${
                    index === activeService ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Aller au service ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {services.map((service) => (
              <motion.div 
                key={service.title}
                variants={item}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a 
                    href={service.link}
                    className="text-primary font-medium hover:underline inline-flex items-center"
                  >
                    En savoir plus <FiArrowRight className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Événements à Venir</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les événements incontournables qui vous attendent en France
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "La Nuit Européenne des Musées",
                date: "Le 23 mai 2026",
                location: "Le Musée Montagnard des Houches",
                image: "/assets/hero/6.jpg"
              },
              {
                title: "Jazz sous les Pommiers ",
                date: "Du 8 au 16 mai 2026",
                location: "Coutances",
                image: "/assets/hero/JZ.avif"
              },
              {
                title: "D-Day Festival Normandy ",
                date: "Du 30 mai au 6 juin 2026",
                location: "Normandie",
                image: "/assets/hero/15.avif"
              }
            ].map((event, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500">{event.date}</span>
                    <span className="text-sm font-medium text-primary">{event.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{event.title}</h3>
                  <a 
                    href="/evenements"
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Voir tous les événements <FiArrowRight className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi Nous Choisir ?</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez ce qui fait de nous le partenaire idéal pour votre voyage en France
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expérience Locale",
                description: "Notre équipe locale vous fait découvrir les trésors cachés de Meknès que seuls les initiés connaissent.",
                icon: "🌍"
              },
              {
                title: "Service Personnalisé",
                description: "Nous créons des itinéraires sur mesure qui correspondent parfaitement à vos envies et à votre budget.",
                icon: "✨"
              },
              {
                title: "Engagement Qualité",
                description: "Nous sélectionnons avec soin nos partenaires pour vous garantir des prestations de qualité supérieure.",
                icon: "🏆"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/apropos"
              className="inline-flex items-center px-8 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              En savoir plus sur nous <FiArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r bg-black/30 to-white text-black">
        <div className="container mx-auto px-3 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à vivre l'aventure Française   ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour créer le voyage de vos rêves en France
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact"
              className="px-8 py-3 bg-black/30 text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contactez-nous
            </a>
            <button 
              onClick={() => setShowCallModal(true)}
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Appelez-nous
            </button>
          </div>
        </div>
      </section>
      <Outlet />
      
      {/* Modal d'appel */}
      <CallModal isOpen={showCallModal} onClose={() => setShowCallModal(false)} />
    </div>
  );
};

export default Home;
