export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  priceLabel: string;
  originalPrice: number;
  originalPriceLabel: string;
  currency: string;
  chariowUrl: string;
  badge?: string;
  featured?: boolean;
  color: string;
  accentColor: string;
  emoji: string;
}

export const products: Product[] = [
  {
    id: "ecom-tracker-pro",
    name: "ECOM TRACKER PRO",
    subtitle: "Gère tes ventes facilement (Google Sheets)",
    description:
      "Calcule automatiquement ta marge nette, identifie tes produits stars et compare tes canaux de vente (WhatsApp, TikTok, Shopify...) en moins de 30 secondes par jour.",
    price: 8500,
    priceLabel: "8 500 FCFA",
    originalPrice: 14000,
    originalPriceLabel: "14 000 FCFA",
    currency: "FCFA",
    chariowUrl: "https://timamydigital.com/timamy/prd_lvpho4",
    color: "#3B82F6",
    accentColor: "#60A5FA",
    emoji: "📊",
  },
  {
    id: "ai-revenue-blueprint",
    name: "AI REVENUE BLUEPRINT",
    subtitle: "Passe de zéro à tes premiers revenus avec l'IA",
    description:
      "Un système structuré pour choisir une niche rentable, créer une offre qui se vend et réaliser tes premières ventes en 30 jours, avec 5 bonus inclus.",
    price: 5500,
    priceLabel: "5 500 FCFA",
    originalPrice: 12000,
    originalPriceLabel: "12 000 FCFA",
    currency: "FCFA",
    chariowUrl: "https://timamydigital.com/timamy/prd_y57s4i",
    badge: "Ebook + Méthode SCALE™",
    color: "#7B35E8",
    accentColor: "#9B5CF6",
    emoji: "📘",
  },
  {
    id: "ai-revenue-blueprint-os",
    name: "AI REVENUE BLUEPRINT OS",
    subtitle: "Système Notion tout-en-un pour entrepreneurs digitaux",
    description:
      "Pilote tout ton business IA depuis un seul espace Notion — objectifs, contenu, revenus, produits, prospects et automatisations. 8 modules interconnectés, exemples pré-remplis, guide de démarrage et roadmap 90 jours inclus.",
    price: 15000,
    priceLabel: "15 000 FCFA",
    originalPrice: 15000,
    originalPriceLabel: "",
    currency: "FCFA",
    chariowUrl: "https://timamydigital.com/timamy/prd_s62jbi31",
    badge: "⭐ Offre phare",
    featured: true,
    color: "#00D4FF",
    accentColor: "#00D4FF",
    emoji: "🧠",
  },
];

export const blueprintOsModules = [
  "Dashboard CEO — vue d'ensemble de ton business en temps réel",
  "AI Prompt Vault — bibliothèque de prompts IA organisée par usage",
  "Content Factory — système de création de contenu automatisé",
  "Revenue Tracker — suivi de tes revenus et objectifs financiers",
  "Product Builder — espace de conception de tes produits digitaux",
  "CRM & Leads — gestion de tes prospects et clients",
  "Automation Center — hub de tes workflows et automatisations",
  "CEO Workspace — planification stratégique et revue hebdomadaire",
];
