# Ancolie — site de démonstration OSINT

Site fictif utilisé pour un exercice de sensibilisation à la fuite d'identifiants (SAE5.Cyber.03). Aucune donnée réelle : boutique, personne et identifiants sont inventés pour l'exercice.

## Les 3 niveaux

1. **Commentaire HTML** (`index.html`) — identifiants en clair dans un commentaire "TODO avant mise en prod", visibles via *Afficher le code source*.
2. **Fichier JS en clair** (`js/config.js`, variables `ADMIN_LOGIN` / `ADMIN_PASSWORD`) — nécessite d'explorer les fichiers chargés par la page (onglet Sources / Réseau).
3. **Fichier JS encodé** (`js/config.js`, objet `ADMIN_AUTH`) — mêmes identifiants encodés en base64, à décoder.

`admin/index.html` est un panneau de connexion factice, purement côté client, qui valide ces identifiants pour matérialiser la découverte.

## Déploiement sur GitHub Pages

```bash
git init
git add .
git commit -m "Site de démo Ancolie"
git branch -M main
git remote add origin <url-du-repo>
git push -u origin main
```

Puis dans les paramètres du dépôt GitHub : **Settings → Pages → Source: Deploy from a branch → main / (root)**.

Le site sera servi en HTTP simple (pas de build), donc aucune étape supplémentaire n'est nécessaire.
"# SAE5.CYBER.3-OSINT" 
