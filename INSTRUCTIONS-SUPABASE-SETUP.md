# 🚀 INSTRUCTIONS POUR CONFIGURER SUPABASE

## ⚠️ **IMPORTANT - À FAIRE MAINTENANT !**

La page événements affiche actuellement des données statiques car les tables Supabase n'existent pas encore.
Vous devez exécuter le script SQL pour créer les tables nécessaires.

---

## ✅ **ÉTAPE 1 : ACCÉDER À SUPABASE**

1. Allez sur https://supabase.com
2. Connectez-vous à votre compte
3. Sélectionnez votre projet **Maroc-2030**
4. Dans le menu de gauche, cliquez sur **SQL Editor**

---

## ✅ **ÉTAPE 2 : EXÉCUTER LE SCRIPT SQL**

### **Option A : Créer les tables événements et newsletter**

1. Dans le SQL Editor, cliquez sur **New Query**
2. Ouvrez le fichier : `EVENEMENTS-AND-NEWSLETTER-TABLES.sql`
3. Copiez tout le contenu du fichier
4. Collez-le dans le SQL Editor de Supabase
5. Cliquez sur **Run** (ou appuyez sur Ctrl+Enter)
6. ✅ Attendez le message de succès

**Ce script va créer** :
- ✅ Table `evenements` avec 6 événements pré-remplis
- ✅ Table `newsletter_subscriptions`
- ✅ Index pour les performances
- ✅ Politiques RLS (Row Level Security)
- ✅ Vues utiles
- ✅ Triggers automatiques

---

## ✅ **ÉTAPE 3 : VÉRIFIER LES TABLES**

### **Vérifier la table `evenements`** :

```sql
SELECT * FROM evenements;
```

**Résultat attendu** : 6 événements affichés
- Festival des Roses à Kelaa M'Gouna
- Marathon des Sables
- Festival des Arts Populaires de Alger
- Festival Gnaoua et Musiques du Monde
- Festival International du Film de Alger
- Moussem de Tan-Tan

### **Vérifier la table `newsletter_subscriptions`** :

```sql
SELECT * FROM newsletter_subscriptions;
```

**Résultat attendu** : Table vide (normal, aucune inscription pour l'instant)

---

## ✅ **ÉTAPE 4 : TESTER LE SITE**

### **1. Redémarrer le serveur** :

```bash
# Dans le terminal
Ctrl + C
npm run dev
```

### **2. Tester la page événements** :

```
http://localhost:5173/evenements
```

**Vérifications** :
- ✅ Les 6 événements s'affichent
- ✅ Les prix sont visibles
- ✅ Le bouton "Réserver maintenant" fonctionne
- ✅ Aucune erreur dans la console

### **3. Tester la newsletter** :

**Dans le footer** :
1. Scroller vers le bas
2. Entrer un email
3. Cliquer "S'abonner"
4. ✅ Voir "Merci de votre inscription !"

**Dans la page événements** :
1. Scroller vers le bas
2. Entrer un email
3. Cliquer "S'abonner"
4. ✅ Voir "Merci de votre inscription !"

### **4. Vérifier dans Supabase** :

```sql
SELECT * FROM newsletter_subscriptions ORDER BY subscribed_at DESC;
```

**Résultat attendu** : Vos emails de test apparaissent

---

## ✅ **ÉTAPE 5 : TESTER UNE RÉSERVATION**

1. Aller sur http://localhost:5173/evenements
2. Cliquer sur "Réserver maintenant" sur un événement
3. Remplir le formulaire :
   - Nom complet
   - Email
   - Téléphone
   - Nombre de personnes
   - Date de début
4. ✅ Voir le prix total calculé automatiquement
5. Entrer une carte de test Stripe :
   - Numéro : `4242 4242 4242 4242`
   - Date : N'importe quelle date future
   - CVC : N'importe quel 3 chiffres
6. Cliquer "Confirmer le paiement"
7. ✅ Voir le message de confirmation

### **Vérifier la réservation dans Supabase** :

```sql
SELECT * FROM bookings 
WHERE service_type = 'circuit' 
ORDER BY created_at DESC 
LIMIT 1;
```

**Résultat attendu** : Votre réservation apparaît

### **Vérifier le paiement dans Supabase** :

```sql
SELECT * FROM payments 
WHERE service_type = 'circuit' 
ORDER BY paid_at DESC 
LIMIT 1;
```

**Résultat attendu** : Votre paiement apparaît

---

## ✅ **ÉTAPE 6 : GÉRER LES ÉVÉNEMENTS DEPUIS LE DASHBOARD ADMIN**

1. Aller sur http://localhost:5173/admin
2. Se connecter avec vos identifiants admin
3. Aller dans **Gestion des Événements**
4. Vous pouvez maintenant :
   - ✅ Voir tous les événements
   - ✅ Ajouter un nouvel événement
   - ✅ Modifier un événement existant
   - ✅ Supprimer un événement
   - ✅ Activer/désactiver la disponibilité

---

## 🔧 **DÉPANNAGE**

### **Problème : "Erreur lors du chargement des événements"**

**Solution** :
- La page affiche des données statiques en attendant
- Exécutez le script SQL `EVENEMENTS-AND-NEWSLETTER-TABLES.sql`
- Redémarrez le serveur

### **Problème : "Table 'evenements' does not exist"**

**Solution** :
1. Vérifiez que vous avez bien exécuté le script SQL
2. Vérifiez que vous êtes dans le bon projet Supabase
3. Réexécutez le script si nécessaire

### **Problème : "Cet email est déjà inscrit"**

**Solution** :
- C'est normal ! La table empêche les doublons
- Utilisez un autre email pour tester
- Ou supprimez l'email existant :
  ```sql
  DELETE FROM newsletter_subscriptions WHERE email = 'votre@email.com';
  ```

### **Problème : Paiement refusé**

**Solution** :
- Utilisez une carte de test Stripe : `4242 4242 4242 4242`
- Vérifiez que `VITE_STRIPE_PUBLIC_KEY` est configuré dans `.env`
- Vérifiez que le backend Stripe est configuré

---

## 📊 **REQUÊTES UTILES**

### **Voir tous les événements disponibles** :
```sql
SELECT * FROM evenements WHERE available = true;
```

### **Voir toutes les inscriptions newsletter** :
```sql
SELECT * FROM newsletter_subscriptions ORDER BY subscribed_at DESC;
```

### **Compter les inscriptions par source** :
```sql
SELECT source, COUNT(*) as total
FROM newsletter_subscriptions
GROUP BY source;
```

### **Voir les réservations d'événements** :
```sql
SELECT * FROM bookings 
WHERE service_type = 'circuit' 
ORDER BY created_at DESC;
```

### **Voir les paiements d'événements** :
```sql
SELECT * FROM payments 
WHERE service_type = 'circuit' 
ORDER BY paid_at DESC;
```

### **Statistiques newsletter** :
```sql
SELECT * FROM newsletter_stats;
```

---

## ✅ **CHECKLIST FINALE**

Avant de considérer que tout fonctionne, vérifiez :

- [ ] Script SQL exécuté sans erreur
- [ ] Table `evenements` créée avec 6 événements
- [ ] Table `newsletter_subscriptions` créée
- [ ] Page événements affiche les événements
- [ ] Bouton "Réserver maintenant" fonctionne
- [ ] Formulaire de réservation s'ouvre
- [ ] Prix total calculé dynamiquement
- [ ] Newsletter footer fonctionne
- [ ] Newsletter page événements fonctionne
- [ ] Réservation test réussie
- [ ] Paiement test réussi
- [ ] Données visibles dans Supabase
- [ ] Dashboard admin peut gérer les événements

---

## 🎉 **FÉLICITATIONS !**

Si toutes les étapes sont complétées, vous avez maintenant :

✅ **Système de réservation d'événements complet**
✅ **Newsletter fonctionnelle (footer + page événements)**
✅ **Synchronisation complète avec Supabase**
✅ **Paiements Stripe intégrés**
✅ **Dashboard admin opérationnel**

---

## 📁 **FICHIERS IMPORTANTS**

- `EVENEMENTS-AND-NEWSLETTER-TABLES.sql` - Script SQL à exécuter
- `EVENEMENTS-BOOKING-ET-NEWSLETTER.md` - Documentation complète
- `NEWSLETTER-FOOTER-FONCTIONNELLE.md` - Documentation newsletter
- `src/Pages/Evenements.tsx` - Page événements
- `src/components/Footer.tsx` - Footer avec newsletter

---

**Commencez par l'ÉTAPE 1 maintenant !** 🚀
