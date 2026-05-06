# **NeonFeed 🌐**

**Un agrégateur de flux RSS modulable avec interface drag-and-drop et style synthwave**

**A customizable RSS feed aggregator with drag-and-drop interface and synthwave style**

---

---

## **📌 À propos / About**

### **Français**

**NeonFeed** est un agrégateur de flux RSS **modulable et stylisé** qui te permet de :

- **Ajouter des flux RSS** en les glissant-déposant ou via une URL.
- **Organiser ton interface** avec un système de drag-and-drop.
- **Personnaliser l’affichage** avec un style **synthwave/retro**.
- **Contourner les restrictions CORS** grâce à un proxy local (Node.js).

Parfait pour suivre tes actualités, blogs, ou projets préférés **sans quitter ton interface personnalisée**.

### **English**

**NeonFeed** is a **customizable and stylish** RSS feed aggregator that allows you to:

- **Add RSS feeds** by drag-and-drop or via URL.
- **Organize your interface** with a drag-and-drop system.
- **Customize the display** with a **synthwave/retro** style.
- **Bypass CORS restrictions** using a local proxy (Node.js).

Perfect for following your favorite news, blogs, or projects **without leaving your personalized interface**.

---

---

## **✨ Fonctionnalités / Features**

| ✅ **Drag-and-Drop** | Ajoutez des flux en glissant-déposant des liens RSS. / Add feeds by dragging and dropping RSS links. |

| ✅ **Interface modulable** | Organisez vos widgets comme vous le souhaitez. / Organize your widgets as you like. |

| ✅ **Style Synthwave** | Thème rétro avec couleurs néon et animations. / Retro theme with neon colors and animations. |

| ✅ **Proxy CORS local** | Contourne les restrictions des navigateurs. / Bypasses browser CORS restrictions. |

| ✅ **Parsing manuel des flux** | Pas de dépendance externe pour lire les RSS. / No external dependency to parse RSS feeds. |

| ✅ **Sauvegarde locale** | Vos flux et leur ordre sont sauvegardés. / Your feeds and their order are saved locally. |

| ✅ **Bilingue (FR/EN)** | Interface et documentation en français et anglais. / Bilingual interface and documentation (FR/EN). |

---

---

## **🛠 Installation / Installation**

### **Prérequis / Prerequisites**

- [Node.js](https://nodejs.org/) (version 18+ recommandée).
- Un navigateur moderne (Opera GX, Chrome, Firefox, etc.).

### **Français**

1. Clonez le dépôt :
   git clone https://github.com/SynthSpecter/NeonFeed.git

2. Installez les dépendances :
   cd NeonFeed
   npm install

3. Lancez le serveur backend (pour le proxy CORS) :
   node server.js
   (Laissez la console ouverte)

4. Ouvrez index.html dans votre navigateur :
   Utilisez l’extension Live Server (VS Code) pour éviter les problèmes de CORS côté frontend.
   Ou ouvrez directement le fichier index.html (mais certains navigateurs peuvent bloquer les requêtes fetch depuis file://).

5. Ajoutez des flux RSS :
   Glissez-déposez un lien RSS dans la zone dédiée.
   Ou cliquez sur "Ajouter manuellement" et collez une URL (ex. : https://github.com/trending.rss).

### **English**

1. Clone the repository:
   git clone https://github.com/SynthSpecter/NeonFeed.git

2. Install dependancies :
   cd NeonFeed
   npm install

3. Start the backend server (for CORS proxy) :
   node server.js
   (keep the console open)

4. Open index.html in your browser :
   Use the Live Server extension (VS Code) to avoid frontend CORS issues.
   Or open the index.html file directly (but some browsers may block fetch requests from file://).

5. Add RSS feeds:
   Drag and drop an RSS link into the drop zone.
   Or click "Add manually" and paste a URL (e.g., https://github.com/trending.rss).

---

---

## Contribuer / Contribute

### **Français**

Les contributions sont les bienvenues ! Voici comment faire :

1. Forkez le projet.

2. Créez une branche (git checkout -b ma-fonctionnalite).

3. Commitez vos changements (git commit -m "Ajout de X").

4. Pushez la branche (git push origin ma-fonctionnalite).

5. Ouvrez une Pull Request.

**Idées d’améliorations :**

- Ajouter un système de thèmes personnalisables (couleurs, polices).

- Intégrer un backend pour sauvegarder les flux en ligne (Firebase, etc.).

- Ajouter des notifications pour les nouveaux articles.

- Améliorer l’accessibilité (contrastes, navigation clavier).

### **English**

Contributions are welcome! Here’s how:

1. Fork the project.

2. Create a branch (git checkout -b my-feature).

3. Commit your changes (git commit -m "Added X").

4. Push the branch (git push origin my-feature).

5. Open a Pull Request.

**Improvement ideas :**

- Add a customizable theme system (colors, fonts).

- Integrate a backend to save feeds online (Firebase, etc.).

- Add notifications for new articles.

- Improve accessibility (contrast, keyboard navigation).

---

---

## Remarques | Notes

Ce projet a été développé avec l’assistance d’un système d’IA. Le code est fonctionnel mais reste perfectible et pourrait être amélioré pour atteindre une qualité de production.  
| This project was developed with the assistance of an AI system. The code works but could be improved to reach production quality.

---

---

## Contact

Auteur : Kévin T.L.  
📧 Email : kev.tl63@gmail.com

---

---

## Remerciements | Acknowledgments

Merci à l’assistant IA pour son aide, et aux futurs développeurs qui feront évoluer NeonFeed.  
| Thanks to the AI assistant for its help, and to future developers who will improve NeonFeed.
