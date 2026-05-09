# Guide de Déploiement sur OVH VPS

## Étapes pour Déployer le Backend sur OVH VPS
1. **Création d'un VPS** :
   - Connectez-vous à votre compte OVH.
   - Créez une nouvelle instance VPS en choisissant le système d'exploitation souhaité (par exemple, Ubuntu).

2. **Connexion au VPS** :
   ```bash
   ssh root@votre-ip-vps
   ```

3. **Installation des Dépendances** :
   - Mettez à jour le système :
   ```bash
   sudo apt update && sudo apt upgrade
   ```
   - Installez Node.js et npm :
   ```bash
   sudo apt install nodejs npm
   ```

4. **Transfert des Fichiers** :
   - Utilisez `scp` pour transférer vos fichiers backend :
   ```bash
   scp -r /chemin/vers/votre/projet root@votre-ip-vps:/chemin/destination
   ```

5. **Configuration de la Base de Données** :
   - Installez et configurez votre base de données (par exemple, MySQL ou MongoDB).

6. **Démarrage du Serveur** :
   - Accédez au dossier de votre projet et démarrez votre application :
   ```bash
   node votre-fichier.js
   ```

7. **Vérification** :
   - Vérifiez que votre backend fonctionne correctement en accédant à l'URL de votre VPS.

---
