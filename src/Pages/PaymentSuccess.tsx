import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle, Download, Home, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

const PaymentSuccess: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { paymentId, bookingId, totalPrice, serviceTitle } = location.state || {};

  useEffect(() => {
    // Animation de confettis
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Vérifier si les données sont présentes
    if (!paymentId || !bookingId) {
      navigate('/dashboard/client');
    }
  }, [paymentId, bookingId, navigate]);

  const handleDownloadReceipt = () => {
    // Logique pour télécharger le reçu (à implémenter)
    alert('Téléchargement du reçu en cours...');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Carte de succès */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
              {/* Icône de succès */}
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>

              {/* Titre */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Paiement réussi !
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Votre réservation a été confirmée avec succès
              </p>

              {/* Détails de la réservation */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
                <h2 className="font-semibold text-gray-900 mb-4">Détails de la réservation</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Numéro de réservation</span>
                    <span className="font-medium text-gray-900">#{bookingId?.slice(0, 8).toUpperCase()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service</span>
                    <span className="font-medium text-gray-900">{serviceTitle}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Numéro de transaction</span>
                    <span className="font-medium text-gray-900">#{paymentId?.slice(0, 8).toUpperCase()}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Montant payé</span>
                      <span className="font-bold text-green-600 text-xl">
                        {totalPrice?.toLocaleString()} €
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informations supplémentaires */}
              <div className="bg-emerald-50 border border-blue-200 rounded-lg p-4 mb-8 text-left">
                <p className="text-sm text-emerald-800">
                  <strong>✅ Réservation confirmée</strong><br />
                  Votre paiement a été traité avec succès. Tous les détails de votre réservation sont disponibles ci-dessous.
                </p>
              </div>

              {/* Boutons d'action */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={handleDownloadReceipt}
                  className="flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Télécharger le reçu
                </button>

                <button
                  onClick={() => navigate('/dashboard/client/bookings')}
                  className="flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Mes réservations
                </button>

                <button
                  onClick={() => navigate('/')}
                  className="flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  <Home className="h-5 w-5 mr-2" />
                  Retour à l'accueil
                </button>
              </div>

              {/* Message de remerciement */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600">
                  Merci pour votre confiance ! 🎉<br />
                  <span className="text-sm">
                    Notre équipe vous contactera prochainement pour finaliser les détails.
                  </span>
                </p>
              </div>
            </div>

            {/* Prochaines étapes */}
            <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Prochaines étapes</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-semibold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Réservation confirmée</p>
                    <p className="text-sm text-gray-600">Tous les détails sont disponibles ci-dessous</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-semibold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Contact du partenaire</p>
                    <p className="text-sm text-gray-600">Le partenaire vous contactera sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-semibold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Profitez de votre service</p>
                    <p className="text-sm text-gray-600">Préparez-vous pour une expérience inoubliable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentSuccess;
