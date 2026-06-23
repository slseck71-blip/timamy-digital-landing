export interface Testimonial {
  name: string;
  initials: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  color: string;
}

// ─── Témoignages réels ───────────────────────────────────────────────────────
// Ajoutez vos vrais retours clients ici. Chaque objet = une carte.
// Supprimez les placeholders ci-dessous une fois vos témoignages prêts.
// ─────────────────────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  // PLACEHOLDER 1 — à remplacer par un vrai témoignage client
  {
    name: "Témoignage à venir",
    initials: "?",
    role: "Entrepreneur",
    company: "Votre business",
    text: "Ce témoignage sera bientôt remplacé par un retour client réel. Vous pouvez éditer ce fichier (data/testimonials.ts) pour ajouter vos vrais témoignages.",
    rating: 5,
    color: "#7B35E8",
  },

  // PLACEHOLDER 2 — à remplacer par un vrai témoignage client
  {
    name: "Témoignage à venir",
    initials: "?",
    role: "Freelance / Coach",
    company: "Votre business",
    text: "Ce témoignage sera bientôt remplacé par un retour client réel. Remplacez le texte, le nom, le rôle et l'entreprise dans data/testimonials.ts.",
    rating: 5,
    color: "#00D4FF",
  },

  // PLACEHOLDER 3 — à remplacer par un vrai témoignage client
  {
    name: "Témoignage à venir",
    initials: "?",
    role: "Créateur / Agence",
    company: "Votre business",
    text: "Ce témoignage sera bientôt remplacé par un retour client réel. Éditez uniquement ce fichier — le reste du site se met à jour automatiquement.",
    rating: 5,
    color: "#3B82F6",
  },
];

// ─── Archive : exemples de format ────────────────────────────────────────────
// Copiez-collez ce modèle pour chaque nouveau témoignage :
//
// {
//   name: "Prénom Nom",
//   initials: "PN",
//   role: "Titre / Métier",
//   company: "Nom de l'entreprise",
//   text: "Le texte du témoignage ici. Soyez spécifique sur les résultats obtenus.",
//   rating: 5,
//   color: "#7B35E8", // violet | "#00D4FF" cyan | "#3B82F6" bleu | "#9B5CF6" lavande
// },
