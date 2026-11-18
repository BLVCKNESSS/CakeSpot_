// ===== CAKE SPOT — CATALOGUE JS =====

const WHATSAPP = '+237686019392';

let produits = [

  // ==================== CUPCAKES ====================
  // 9 images disponibles: cupcake1, cupcake3, cupcake4, cupcake5, cupcake6, cupcake7, cupcake8, cupcake9, WhatsApp 00.02.54.jpeg
  {
    id: 'cup1', nom: 'Cupcake Classique', categorie: 'Cupcakes',
    img: '/images/optimized/cupcake1.webp',
    prix: '500 Frs l\'unité', prixNum: 500, note: 4,
    desc: 'Nos cupcakes classiques, fondants et moelleux, garnis d\'une crème beurre onctueuse. Parfaits pour toutes les occasions.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Citron'],
    infos: { Taille: 'Standard (8cm)', Portions: '1 personne', Délai: '24h minimum', Conservation: '2-3 jours' },
    details: 'Cupcake classique — saveur au choix'
  },
  {
    id: 'cup2', nom: 'Cupcake Prestige', categorie: 'Cupcakes',
    img: '/images/optimized/cupcake7.webp',
    prix: '150 Frs l\'unité', prixNum: 150, note: 4,
    desc: 'Version premium avec décoration élaborée, crème beurre artisanale et garnitures gourmandes. Un vrai chef-d\'œuvre en miniature.',
    saveurs: ['Chocolat Noir', 'Caramel Beurre Salé', 'Framboise', 'Café'],
    infos: { Taille: 'Grand (10cm)', Portions: '1 personne', Délai: '24-48h', Conservation: '2-3 jours' },
    details: 'Cupcake prestige — saveur au choix'
  },
  {
    id: 'cup3', nom: 'Cupcake Fleuri', categorie: 'Cupcakes',
    img: '/images/optimized/cupcake3.webp',
    prix: '500 Frs l\'unité', prixNum: 500, note: 4,
    desc: 'Cupcake décoré de fleurs en sucre réalisées à la main. Idéal pour les mariages, baby showers ou événements printaniers.',
    saveurs: ['Rose', 'Lavande', 'Jasmin', 'Vanille'],
    infos: { Taille: 'Standard (8cm)', Portions: '1 personne', Délai: '48h minimum', Conservation: '2 jours' },
    details: 'Cupcake fleuri — décoration florale'
  },
  {
    id: 'cup4', nom: 'Cupcake Tropical', categorie: 'Cupcakes',
    img: '/images/optimized/cupcake4.webp',
    prix: '1 000 Frs l\'unité', prixNum: 1000, note: 4,
    desc: 'Explosion de saveurs tropicales dans un cupcake moelleux. Mangue, noix de coco et ananas se mélangent à merveille.',
    saveurs: ['Mangue-Coco', 'Ananas', 'Passion', 'Goyave'],
    infos: { Taille: 'Standard (8cm)', Portions: '1 personne', Délai: '24h', Conservation: '2-3 jours' },
    details: 'Cupcake tropical — saveur au choix'
  },
  {
    id: 'cup5', nom: 'Cupcake Chocolat', categorie: 'Cupcakes',
    img: '/images/optimized/cupcake5.webp',
    prix: '1000 Frs l\'unité', prixNum: 1000, note: 4,
    desc: 'Un cupcake tout chocolat pour les amateurs de cacao. Ganache fondante et base intense en chocolat belge.',
    saveurs: ['Chocolat Noir', 'Chocolat au Lait', 'Chocolat Blanc', 'Nutella'],
    infos: { Taille: 'Standard (8cm)', Portions: '1 personne', Délai: '24h', Conservation: '3 jours' },
    details: 'Cupcake chocolat — intensité au choix'
  },
  {
    id: 'cup9', nom: 'Gâteau Anniversaire Coco & Chocolat', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-05-27 at 00.02.54.webp',
    prix: '12 000 Frs', prixNum: 12000, note: 4,
    desc: 'Gâteau d’anniversaire généreux au chocolat et à la noix de coco, décoré de fruits, de gourmandises et d’un message personnalisé.',
    saveurs: ['Vanille', 'Citron', 'Coco', 'Chocolat'],
    infos: { Taille: 'Standard (7cm)', Portions: '10-15 personnes', Délai: '24h', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — décoration chocolat et message personnalisables'
  },

  // ==================== CAKES ====================
  // 12 images: cake1-6, cake7-12, + WhatsApp drip series
  {
    id: 'cake1', nom: 'Cake Fondant', categorie: 'Cakes',
    img: '/images/optimized/cake1.webp',
    prix: '3 500 Frs', prixNum: 3500, note: 4,
    desc: 'Un cake tendre et fondant, recouvert d\'une couche de glaçage satiné. Parfait pour un goûter ou un cadeau gourmand.',
    saveurs: ['Citron', 'Vanille', 'Amande', 'Orange'],
    infos: { Taille: 'Moyen (20cm)', Portions: '8-10 personnes', Délai: '24-48h', Conservation: '4-5 jours' },
    details: 'Cake fondant — saveur au choix'
  },
  {
    id: 'cake2', nom: 'Cake Premium', categorie: 'Cakes',
    img: '/images/optimized/cake2.webp',
    prix: '4 000 Frs', prixNum: 4000, note: 5,
    desc: 'Notre cake premium aux ingrédients soigneusement sélectionnés. Texture aérée, saveurs intenses et décoration soignée.',
    saveurs: ['Chocolat Belge', 'Caramel', 'Fruits Rouges', 'Noisette'],
    infos: { Taille: 'Grand (20cm)', Portions: '8-10 personnes', Délai: '48h', Conservation: '4-5 jours' },
    details: 'Cake premium — saveur au choix'
  },
  {
    id: 'cake3', nom: 'Cake Spécial', categorie: 'Cakes',
    img: '/images/optimized/cake3.webp',
    prix: '3 500 Frs', prixNum: 3500, note: 4,
    desc: 'Notre cake spécial avec un design artistique unique. Idéal pour les événements d\'exception et les moments qui méritent le meilleur.',
    saveurs: ['Chocolat Blanc Framboises', 'Pistache-Rose', 'Citron Pavot'],
    infos: { Taille: 'Grand (20cm)', Portions: '8-10 personnes', Délai: '72h minimum', Conservation: '4 jours' },
    details: 'Cake spécial — design personnalisé'
  },
  {
    id: 'cake4', nom: 'Cake Élégant', categorie: 'Cakes',
    img: '/images/optimized/cake4.webp',
    prix: '3 500 Frs', prixNum: 3500, note: 4,
    desc: 'Un cake au style épuré et raffiné, parfait pour une occasion chic ou un cadeau de qualité. Simple mais d\'une élégance remarquable.',
    saveurs: ['Vanille Bourbon', 'Thé Earl Grey', 'Lavande-Miel'],
    infos: { Taille: 'Moyen (20cm)', Portions: '6-8 personnes', Délai: '24-48h', Conservation: '4-5 jours' },
    details: 'Cake élégant — saveur raffinée'
  },
  {
    id: 'cake5', nom: 'Cake chocolat', categorie: 'Cakes',
    img: '/images/optimized/cake5.webp',
    prix: '5 000 Frs', prixNum: 5000, note: 5,
    desc: 'Fait à 100% à la main avec des recettes transmises avec soin. Authentique et généreux en saveurs, comme à la maison.',
    saveurs: ['Chocolat Noir', 'Vanille', 'Café', 'Spéculoos'],
    infos: { Taille: 'Grand (24cm)', Portions: '10-12 personnes', Délai: '48h', Conservation: '4-5 jours' },
    details: 'Cake chocolat — recette traditionnelle'
  },
  {
    id: 'cake7', nom: 'Cake Marbré', categorie: 'Cakes',
    img: '/images/optimized/cake7.webp',
    prix: '3 000 Frs', prixNum: 3000, note: 4,
    desc: 'Le classique marbré revisité : tourbillons de pâte vanille et chocolat, moelleux et fondant. Un incontournable de la pâtisserie.',
    saveurs: ['Vanille & Chocolat', 'Vanille & Caramel', 'Chocolat & Café'],
    infos: { Taille: 'Moyen (20cm)', Portions: '6-8 personnes', Délai: '24h', Conservation: '4-5 jours' },
    details: 'Cake marbré — tourbillons vanille-chocolat'
  },
  {
    id: 'cake8', nom: 'Cake choco brut', categorie: 'Cakes',
    img: '/images/optimized/cake8.webp',
    prix: '5 000 Frs', prixNum: 5000, note: 5,
    desc: 'Cake moelleux au chocolat qui fond en bouche. Moelleux, Léger et parfait pour les journées chaudes.',
    saveurs: ['Chocolat', 'Chocolat Blanc', 'Chocolat au Lait'],
    infos: { Taille: 'Moyen (20cm)', Portions: '6-8 personnes', Délai: '24h', Conservation: '4 jours' },
    details: 'Cake choco brut — fraîcheur garantie'
  },
  {
    id: 'cake9', nom: 'Cake Chocolat Intense', categorie: 'Cakes',
    img: '/images/optimized/cake9.webp',
    prix: '4 500 Frs', prixNum: 4500, note: 5,
    desc: 'Pour les vrais amateurs de chocolat : un cake dense, intense et fondant, recouvert d\'une ganache brillante. Irrésistible.',
    saveurs: ['Chocolat Noir 70%', 'Chocolat au Lait', 'Double Chocolat'],
    infos: { Taille: 'Grand (22cm)', Portions: '8-10 personnes', Délai: '24-48h', Conservation: '4 jours' },
    details: 'Cake chocolat intense — ganache brillante'
  },
  {
    id: 'cake10', nom: 'Cake Noix de Coco', categorie: 'Cakes',
    img: '/images/optimized/cake10.webp',
    prix: '4 500 Frs', prixNum: 4500, note: 4,
    desc: 'Cake à la noix de coco râpée avec un cœur crémeux et une décoration copeaux de coco grillés. Exotique et savoureux.',
    saveurs: ['Coco Pure', 'Coco & Citron', 'Coco & Ananas'],
    infos: { Taille: 'Moyen (20cm)', Portions: '6-8 personnes', Délai: '24h', Conservation: '3-4 jours' },
    details: 'Cake coco — copeaux grillés'
  },
  {
    id: 'cake11', nom: 'Cake Fraise & Crème', categorie: 'Cakes',
    img: '/images/optimized/cake11.webp',
    prix: '3 000 Frs', prixNum: 3000, note: 4,
    desc: 'Base génoise légère, généreuse garniture de crème chantilly et fraises fraîches. Le cake de saison par excellence.',
    saveurs: ['Fraise & Vanille', 'Fraise & Citron', 'Fraise & Chocolat Blanc'],
    infos: { Taille: 'Moyen (22cm)', Portions: '8-10 personnes', Délai: '24-48h', Conservation: '2-3 jours' },
    details: 'Cake fraise & crème — fruits frais'
  },
  {
    id: 'cake12', nom: 'Cake Caramel Noisette', categorie: 'Cakes',
    img: '/images/optimized/cake12.webp',
    prix: '6 000 Frs', prixNum: 6000, note: 5,
    desc: 'Cake garni d\'un praliné noisette maison et d\'un caramel coulant, recouvert d\'une crème beurre satinée. Un pur délice.',
    saveurs: ['Caramel & Noisette', 'Caramel & Chocolat', 'Praliné Pur'],
    infos: { Taille: 'Grand (22cm)', Portions: '8-10 personnes', Délai: '48h', Conservation: '4 jours' },
    details: 'Cake caramel noisette — praliné maison'
  },
  // Cakes Drip 2026
  {
    id: 'cake13', nom: 'Cake Chocolat Drip Oreo', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-05-26 at 23.38.18.webp',
    prix: '7 000 Frs', prixNum: 7000, note: 5,
    desc: 'Cake spectaculaire : crème vanille, ganache coulante au chocolat, couronné d\'Oreos, Kit-Kat et perles dorées. Régal visuel et gustatif.',
    saveurs: ['Chocolat & Vanille', 'Chocolat Noir', 'Chocolat au Lait'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-12 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Drip Oreo — chocolat coulant & biscuits'
  },
  {
    id: 'cake14', nom: 'Cake Drip Oreo & Vanille', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-05-26 at 23.38.18 (1).webp',
    prix: '12 000 Frs', prixNum: 12000, note: 4,
    desc: 'Base crème vanille avec socle d\'Oreo broyé, ganache chocolat en drip et macarons dorés en décoration. Message personnalisé possible.',
    saveurs: ['Vanille & Chocolat', 'Chocolat Noir'],
    infos: { Taille: 'Moyen (20cm)', Portions: '8-10 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Oreo & Vanille — message personnalisé possible'
  },
  {
    id: 'cake15', nom: 'Cake Choco Total', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-05-27 at 00.02.54 (1).webp',
    prix: '20 000 Frs', prixNum: 20000, note: 5,
    desc: 'Pour les vrais amateurs de chocolat ! Cake entièrement chocolat avec crème au beurre chocolatée, ganache miroir et bonbons chocolatés.',
    saveurs: ['Chocolat Noir Intense', 'Chocolat au Lait', 'Double Chocolat'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-15 personnes', Délai: '48h', Conservation: '4 jours' },
    details: 'Cake Choco Total — personnalisation possible'
  },
  {
    id: 'cake16', nom: 'Cake Drip Blanc & Chocolat', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-05-27 at 00.02.57.webp',
    prix: '12 000 Frs', prixNum: 12000, note: 4,
    desc: 'Élégant cake blanc recouvert d\'une ganache chocolat en drip avec Oreos et rouleaux gaufrés. Minimaliste et gourmand à la fois.',
    saveurs: ['Vanille & Chocolat', 'Fraise & Chocolat', 'Caramel & Chocolat'],
    infos: { Taille: 'Moyen (20cm)', Portions: '8-10 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Drip Blanc & Chocolat — message personnalisé'
  },
  {
    id: 'cake17', nom: 'Cake Bicolore Choco-Vanille', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-05-27 at 00.02.57 (1).webp',
    prix: '12 000 Frs', prixNum: 12000, note: 4,
    desc: 'Design unique mi-chocolat mi-vanille, avec cerises rouges et ganache chocolat d\'un côté, et crème chantilly de l\'autre.',
    saveurs: ['Chocolat & Vanille', 'Chocolat & Fraise'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-12 personnes', Délai: '48-72h', Conservation: '3 jours' },
    details: 'Cake bicolore — moitié choco moitié vanille'
  },
  {
    id: 'cake18', nom: 'Cake Drip Coco & Chocolat', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-05-27 at 00.02.54 (2).webp',
    prix: '7 000 Frs', prixNum: 7000, note: 4,
    desc: 'Cake noix de coco enrobé de crème beurre, couronné d\'un drip chocolat et de bonbons colorés. Frais, léger et très savoureux.',
    saveurs: ['Coco & Chocolat', 'Coco & Vanille'],
    infos: { Taille: 'Moyen (20cm)', Portions: '8-10 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Drip Coco & Chocolat — message personnalisé'
  },
  {
    id: 'cake19', nom: 'Cake Chocolat Drip Or', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-05-27 at 00.02.58.webp',
    prix: '10 000 Frs', prixNum: 10000, note: 4,
    desc: 'Cake ganache chocolat brillant, décoré de perles dorées et de feuilles d\'or comestible. Luxueux, gourmand et absolument inoubliable.',
    saveurs: ['Chocolat Noir', 'Chocolat & Caramel', 'Chocolat & Noisette'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-12 personnes', Délai: '48h', Conservation: '4 jours' },
    details: 'Cake Drip Or — décoration premium'
  },
  {
    id: 'cake20', nom: 'Cake Chocolat Drip Festif', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-05-27 at 00.02.58 (1).webp',
    prix: '8 000 Frs', prixNum: 8000, note: 4,
    desc: 'Cake blanc texturé avec ganache chocolat et décoration festive de petits animaux dorés. Parfait pour les fêtes.',
    saveurs: ['Chocolat & Vanille', 'Chocolat & Fraise'],
    infos: { Taille: 'Moyen (20cm)', Portions: '8-10 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Drip Festif — décoration personnalisable'
  },
  {
    id: 'cake21', nom: 'Cake Café Dark', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-05-27 at 00.02.57 (2).webp',
    prix: '10 000 Frs', prixNum: 10000, note: 5,
    desc: 'Cake entièrement ganache chocolat noir brillant avec Oreos dorés, pièces de monnaie chocolat et une rose en sucre.',
    saveurs: ['Chocolat Noir Intense', 'Chocolat & Café'],
    infos: { Taille: 'Moyen (20cm)', Portions: '8-10 personnes', Délai: '48h', Conservation: '4 jours' },
    details: 'Cake Café Dark — ganache chocolat noir'
  },
  {
    id: 'cake22', nom: 'Cake Choco Oreo Élaboré', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-05-27 at 00.02.55.webp',
    prix: '6 500 Frs', prixNum: 6500, note: 4,
    desc: 'Cake crème beurre avec ganache chocolat, couronné d\'Oreos, de rouleaux gaufrés et de pièces d\'or comestibles.',
    saveurs: ['Chocolat & Vanille', 'Chocolat Noir'],
    infos: { Taille: 'Moyen (20cm)', Portions: '8-10 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Choco Oreo — message personnalisé possible'
  },

  // ==================== ANNIVERSAIRE ====================
  // 10 produits — toutes les WhatsApp anniversaire + img_1, img_2, img_3
  {
    id: 'ann1', nom: 'Cake Anniversaire Festif Bleu', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-05-26 at 23.38.15 (2).webp',
    prix: '11 000 Frs', prixNum: 11000, note: 5,
    desc: 'Superbe cake d\'anniversaire bleu ciel avec boules pailletées, papillon en sucre et topper "Happy Birthday" doré. Personnalisable avec le prénom.',
    saveurs: ['Vanille', 'Fraise', 'Chocolat', 'Citron'],
    infos: { Taille: 'Grand (24cm)', Portions: '10-14 personnes', Délai: '48-72h', Conservation: '3-4 jours' },
    details: 'Cake Anniversaire Bleu — prénom + couleur personnalisables'
  },
  {
    id: 'ann2', nom: 'Cake Anniversaire Festif', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-05-26 at 23.38.15.webp',
    prix: '12 000 Frs', prixNum: 12000, note: 5,
    desc: 'Cake festif blanc & chocolat avec rosettes de crème beurre et perles dorées. Décorations de fête et message personnalisé.',
    saveurs: ['Vanille & Chocolat', 'Vanille Pure', 'Chocolat & Noisette'],
    infos: { Taille: 'Grand (24cm)', Portions: '10-12 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Festif — message et couleurs personnalisables'
  },
  {
    id: 'ann3', nom: 'Cake Enfant Paw Patrol Bleu', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-05-26 at 23.38.16 (1).webp',
    prix: '13 000 Frs', prixNum: 13000, note: 5,
    desc: 'Cake thème Paw Patrol bleu pour les fans de la série. Figurines en papier, badge officiel, ballons et confettis colorés. Prénom personnalisé.',
    saveurs: ['Vanille', 'Fraise', 'Chocolat', 'Caramel'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-14 personnes', Délai: '72h minimum', Conservation: '3 jours' },
    details: 'Cake Paw Patrol Bleu — prénom + âge personnalisables'
  },
  {
    id: 'ann4', nom: 'Cake Enfant Paw Patrol Rose', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-05-26 at 23.38.16.webp',
    prix: '15 000 Frs', prixNum: 15000, note: 5,
    desc: 'Version rose du cake Paw Patrol pour les petites filles. Décorations Skye & compagnie, drip chocolat et crème rose girly.',
    saveurs: ['Fraise', 'Framboise', 'Vanille', 'Chocolat'],
    infos: { Taille: 'Grand (22cm, format carré)', Portions: '10-14 personnes', Délai: '72h minimum', Conservation: '3 jours' },
    details: 'Cake Paw Patrol Rose — prénom + âge personnalisables'
  },
  {
    id: 'ann5', nom: 'Cake Enfant Paw Patrol Rond', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-05-26 at 23.38.17.webp',
    prix: '10 000 Frs', prixNum: 10000, note: 5,
    desc: 'Cake rond Paw Patrol bleu ciel avec figurines et badge personnalisé. Design festif et coloré qui ravira les enfants.',
    saveurs: ['Vanille', 'Fraise', 'Chocolat'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-12 personnes', Délai: '72h minimum', Conservation: '3 jours' },
    details: 'Cake Paw Patrol Rond — prénom + âge au choix'
  },
  {
    id: 'ann6', nom: 'Cake Paw Patrol Tower', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-05-26 at 23.38.15 (1).webp',
    prix: '14 000 Frs', prixNum: 14000, note: 5,
    desc: 'Version haute et impressive du cake Paw Patrol avec tour en sucre, toutes les figurines et perles de couleur. Le gâteau qui fait le wow.',
    saveurs: ['Vanille', 'Caramel', 'Chocolat', 'Fraise'],
    infos: { Taille: 'Haut (22cm x 15cm)', Portions: '12-16 personnes', Délai: '72h minimum', Conservation: '3 jours' },
    details: 'Cake Paw Patrol Tower — version haute premium'
  },
  {
    id: 'ann7', nom: 'Cake Anniversaire Bleu Royal', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-05-27 at 00.02.56.webp',
    prix: '10 000 Frs', prixNum: 10000, note: 4,
    desc: 'Cake blanc et bleu roi avec rosettes de crème beurre bleues et topper Happy Birthday argenté. Élégant et festif.',
    saveurs: ['Vanille', 'Chocolat', 'Citron', 'Caramel'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-12 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Bleu Royal — message personnalisé possible'
  },
  {
    id: 'ann8', nom: 'Cake Fleurette Chocolat', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-05-27 at 00.02.52.webp',
    prix: '8 500 Frs', prixNum: 8500, note: 5,
    desc: 'Cake blanc avec couronne de rosettes bicolores chocolat & vanille, ganache drip et assortiment de biscuits et bonbons.',
    saveurs: ['Chocolat & Vanille', 'Chocolat Noir', 'Caramel & Chocolat'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-14 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Fleurette Chocolat — message personnalisé possible'
  },
  {
    id: 'ann9', nom: 'Cake Oreo Anniversaire', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-05-27 at 00.02.52 (1).webp',
    prix: '7 000 Frs', prixNum: 7000, note: 5,
    desc: 'Cake blanc et chocolat avec ganache, Oreos, rouleaux de gaufres et message personnalisé. Le classique indémodable.',
    saveurs: ['Chocolat & Vanille', 'Double Chocolat'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-12 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Oreo Anniversaire — message au choix'
  },
  {
    id: 'ann10', nom: 'Cake Anniversaire Chic', categorie: 'Anniversaire',
    img: '/images/optimized/img_2.webp',
    prix: '11 000 Frs', prixNum: 11000, note: 5,
    desc: 'Cake anniversaire élégant avec décoration florale en crème beurre et topper doré personnalisé. Pour un anniversaire inoubliable.',
    saveurs: ['Vanille & Framboise', 'Chocolat & Fraise', 'Caramel & Vanille'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-12 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Anniversaire Chic — prénom & âge personnalisables'
  },
  {
    id: 'ann12', nom: 'Cake Anniversaire Rose', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 12.54.43.webp',
    prix: '16 000 Frs', prixNum: 16000, note: 5,
    desc: 'Cake anniversaire rose romantique avec rosettes en crème beurre, macarons et fleurs en sucre. Idéal pour les femmes et les jeunes filles.',
    saveurs: ['Rose & Framboise', 'Fraise & Vanille', 'Litchi & Rose'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-12 personnes', Délai: '48-72h', Conservation: '3-4 jours' },
    details: 'Cake Anniversaire Rose — prénom & message personnalisables'
  },

  // ==================== MARIAGE ====================
  // 7 produits — etage1-10 (sauf 5, 6, 9 libres → utilisés ici)
  {
    id: 'mar1', nom: 'Gâteau de Mariage Classique', categorie: 'Gateaux_de_marriage',
    img: '/images/optimized/etage1.webp',
    prix: '200 000 Frs', prixNum: 200000, note: 4,
    desc: 'Un gâteau de mariage à 3 étages, recouvert de fondant lisse et décoré de fleurs en sucre. Élégant et intemporel.',
    saveurs: ['Vanille & Framboise', 'Chocolat & Praliné', 'Citron & Fleur d\'Oranger'],
    infos: { Étages: '3 niveaux', Portions: '80-100 personnes', Délai: '2 semaines minimum', Livraison: 'Possible (+frais)' },
    details: 'Gâteau de mariage 3 étages — personnalisable'
  },
  {
    id: 'mar2', nom: 'Gâteau de Mariage Fleuri', categorie: 'Gateaux_de_marriage',
    img: '/images/optimized/etage2.webp',
    prix: '150 000 Frs', prixNum: 150000, note: 4,
    desc: 'Deux étages ornés de fleurs fraîches et de fleurs en sucre pour un rendu naturel et romantique.',
    saveurs: ['Rose & Litchi', 'Fraise & Vanille', 'Jasmin & Miel'],
    infos: { Étages: '2 niveaux', Portions: '50-60 personnes', Délai: '10 jours minimum', Livraison: 'Possible (+frais)' },
    details: 'Gâteau de mariage fleuri 2 étages'
  },
  {
    id: 'mar3', nom: 'Gâteau de Mariage Prestige', categorie: 'Gateaux_de_marriage',
    img: '/images/optimized/etage3.webp',
    prix: '230 000 Frs', prixNum: 230000, note: 4,
    desc: 'Une création d\'exception, 4 étages de magnificence. Décoration d\'or, dentelles en sucre et design sur-mesure.',
    saveurs: ['Champagne & Framboise', 'Vanille & Or', 'Chocolat & Caramel Fleur de Sel'],
    infos: { Étages: '4 niveaux', Portions: '120-150 personnes', Délai: '3 semaines', Livraison: 'Incluse Douala' },
    details: 'Gâteau de mariage prestige 4 étages'
  },
  {
    id: 'mar5', nom: 'Gâteau de Mariage Romantique', categorie: 'Gateaux_de_marriage',
    img: '/images/optimized/etage5.webp',
    prix: '190 000 Frs', prixNum: 190000, note: 5,
    desc: 'Trois étages avec un style bohème chic et des éléments de décoration élégants. Tendance et romantique.',
    saveurs: ['Fraise & Basilic', 'Pêche & Vanille', 'Framboise & Rose'],
    infos: { Étages: '3 niveaux', Portions: '70-80 personnes', Délai: '2 semaines', Livraison: 'Possible (+frais)' },
    details: 'Gâteau de mariage romantique'
  },
  {
    id: 'mar6', nom: 'Gâteau de Mariage Minimaliste', categorie: 'Gateaux_de_marriage',
    img: '/images/optimized/etage6.webp',
    prix: '150 000 Frs', prixNum: 150000, note: 4,
    desc: 'Le luxe dans la simplicité. Gâteau épuré avec une décoration minimaliste et raffinée.',
    saveurs: ['Vanille Pure', 'Citron Bergamote', 'Amande & Fleur d\'Oranger'],
    infos: { Étages: '2 niveaux', Portions: '50-60 personnes', Délai: '10 jours', Livraison: 'Possible (+frais)' },
    details: 'Gâteau de mariage minimaliste'
  },
  {
    id: 'mar7', nom: 'Gâteau de Mariage Bohème', categorie: 'Gateaux_de_marriage',
    img: '/images/optimized/etage8.webp',
    prix: '175 000 Frs', prixNum: 175000, note: 4,
    desc: 'Gâteau bohème chic avec textures rustiques, fleurs naturelles séchées et ruban satiné. Un rendu poétique et naturel.',
    saveurs: ['Lavande & Miel', 'Rose & Amande', 'Jasmin & Citron'],
    infos: { Étages: '2 niveaux', Portions: '50-70 personnes', Délai: '2 semaines', Livraison: 'Possible (+frais)' },
    details: 'Gâteau de mariage bohème'
  },
  {
    id: 'mar9', nom: 'Gâteau de Mariage Doré', categorie: 'Gateaux_de_marriage',
    img: '/images/optimized/etage9.webp',
    prix: '240 000 Frs', prixNum: 240000, note: 5,
    desc: 'Gâteau recouvert de poudre d\'or comestible, avec détails en feuilles d\'or et perles nacrées. Glamour et luxueux.',
    saveurs: ['Vanille & Champagne', 'Caramel & Fleur de Sel', 'Pistache & Framboise'],
    infos: { Étages: '3 niveaux', Portions: '90-110 personnes', Délai: '3 semaines', Livraison: 'Incluse Douala' },
    details: 'Gâteau mariage doré — finition or comestible'
  },
  {
    id: 'mar10', nom: 'Gâteau de Mariage Perles & Roses', categorie: 'Gateaux_de_marriage',
    img: '/images/optimized/etage10.webp',
    prix: '280 000 Frs', prixNum: 280000, note: 5,
    desc: 'Chef-d\'œuvre en 3 étages blancs texturés de perles comestibles, ornés de roses blanches fraîches et d\'un topper couple doré.',
    saveurs: ['Vanille & Fleur d\'Oranger', 'Rose & Litchi', 'Champagne & Framboise'],
    infos: { Étages: '3 niveaux', Portions: '100-130 personnes', Délai: '3 semaines minimum', Livraison: 'Incluse Douala' },
    details: 'Gâteau mariage Perles & Roses — avec topper personnalisé'
  },

  // ==================== BENTO ====================
  // 6 produits — bento2 + IMG_2823/2827/2829/2830/2995
  {
    id: 'ben1', nom: 'Bento Cake prémium', categorie: 'Bento',
    img: '/images/optimized/IMG_2823.webp',
    prix: '7 000 Frs', prixNum: 7000, note: 5,
    desc: 'Le bento cake signature de Cake Spot : petit format rond, décorations peintes à la main et message personnalisé. Le cadeau parfait.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Citron'],
    infos: { Taille: 'Petit (10x10cm)', Portions: '1-2 personnes', Délai: '24h', Conservation: '2-3 jours' },
    details: 'Bento Cake prémium — message personnalisé inclus'
  },
  {
    id: 'ben2', nom: 'Bento Cake Prestige', categorie: 'Bento',
    img: '/images/optimized/IMG_2827.webp',
    prix: '7 000 Frs', prixNum: 7000, note: 5,
    desc: 'Version prestige avec décoration élaborée, crème beurre artistique et emballage cadeau. Idéal pour une occasion spéciale.',
    saveurs: ['Chocolat Noir', 'Caramel Beurre Salé', 'Framboise', 'Café'],
    infos: { Taille: 'Moyen (12x12cm)', Portions: '2-3 personnes', Délai: '24-48h', Conservation: '2-3 jours' },
    details: 'Bento Cake prestige — emballage cadeau inclus'
  },
  {
    id: 'ben3', nom: 'Bento Cake Fleuri', categorie: 'Bento',
    img: '/images/optimized/IMG_2829.webp',
    prix: '6 000 Frs', prixNum: 6000, note: 4,
    desc: 'Bento cake décoré de fleurs en crème beurre peintes à la main. Romantique, délicat et parfait comme cadeau pour une femme.',
    saveurs: ['Rose & Framboise', 'Jasmin & Vanille', 'Lavande & Citron'],
    infos: { Taille: 'Petit (10x10cm)', Portions: '1-2 personnes', Délai: '48h', Conservation: '2-3 jours' },
    details: 'Bento Cake fleuri — décoration florale'
  },
  {
    id: 'ben5', nom: 'Bento Cake fantasy', categorie: 'Bento',
    img: '/images/optimized/IMG_2995.webp',
    prix: '13 000 Frs', prixNum: 13000, note: 5,
    desc: 'Bento cake fantasy : ganache intense, décor cacao et message personnalisé. Pour les amateurs de chocolat.',
    saveurs: ['Chocolat Noir', 'Chocolat au Lait', 'Chocolat Blanc'],
    infos: { Taille: 'Petit (10x10cm)', Portions: '1-2 personnes', Délai: '24h', Conservation: '2-3 jours' },
    details: 'Bento Cake fantasy — ganache intense'
  },
  {
    id: 'ben6', nom: 'Bento Cake Saint-Valentin', categorie: 'Bento',
    img: '/images/optimized/IMG_2830.webp',
    prix: '4 000 Frs', prixNum: 4000, note: 4,
    desc: 'Bento cake romantique en forme de cœur ou avec décoration Saint-Valentin. Le cadeau gourmand qui dit "je t\'aime".',
    saveurs: ['Fraise & Chocolat', 'Rose & Framboise', 'Vanille & Fraise'],
    infos: { Taille: 'Petit (10x10cm)', Portions: '1-2 personnes', Délai: '48h', Conservation: '2-3 jours' },
    details: 'Bento Cake Saint-Valentin — emballage romantique'
  },
  {
    id: 'new1', nom: 'Cake Noir & Blanc', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 11.59.41.webp', prix: '12 000 Frs', prixNum: 12000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Cake classique — personnalisation sur demande'
  },

  {
    id: 'new2', nom: 'Gâteau Anniversaire Personnalisé 2', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 12.02.13.webp', prix: '30 000 Frs', prixNum: 30000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new3', nom: 'Gâteau Anniversaire Personnalisé 3', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 12.04.25.webp', prix: '18 000 Frs', prixNum: 18000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new4', nom: 'Cake Drip Blanc & Chocolat', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 12.05.09.webp', prix: '8 000 Frs', prixNum: 8000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Cake classique — personnalisation sur demande'
  },

  {
    id: 'new5', nom: 'Gâteau Anniversaire Personnalisé 5', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 12.06.33.webp', prix: '10 000 Frs', prixNum: 10000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new6', nom: 'Donuts Gourmands', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 12.54.45.webp', prix: '3 500 Frs', prixNum: 3500, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Cake classique — personnalisation sur demande'
  },

  {
    id: 'new7', nom: 'Cake Vertical Fleuri', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 12.54.47.webp', prix: '200 000 Frs', prixNum: 200000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Cake classique — personnalisation sur demande'
  },

  {
    id: 'new8', nom: 'Cake Lettre Personnalisé', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 12.54.48.webp', prix: '20 000 Frs', prixNum: 20000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Cake classique — personnalisation sur demande'
  },

  {
    id: 'new9', nom: 'Cake Chocolat Drip', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 12.54.51.webp', prix: '10 000 Frs', prixNum: 10000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Cake classique — personnalisation sur demande'
  },

  {
    id: 'new10', nom: 'Cake Rosettes Chocolat', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 12.54.54.webp', prix: 'Sur devis', prixNum: 0, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Cake classique — personnalisation sur demande'
  },

  {
    id: 'new11', nom: 'Gâteau Anniversaire Personnalisé 11', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 12.54.57.webp', prix: '25 000 Frs', prixNum: 25000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new12', nom: 'Gâteau Anniversaire Personnalisé 12', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 13.06.43.webp', prix: '14 000 Frs', prixNum: 14000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new13', nom: 'Gâteau Anniversaire Personnalisé 13', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 13.06.50.webp', prix: '15 000 Frs', prixNum: 15000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new14', nom: 'Gâteau Anniversaire Personnalisé 14', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 13.06.58.webp', prix: '10 000 Frs', prixNum: 10000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new15', nom: 'Gâteau Anniversaire Personnalisé 15', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 13.07.00.webp', prix: '25 000 Frs', prixNum: 25000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new16', nom: 'Gâteau Anniversaire Personnalisé 16', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 13.07.09.webp', prix: '12 000 Frs', prixNum: 12000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new17', nom: 'Gâteau Anniversaire Personnalisé 17', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 13.07.23.webp', prix: '25 000 Frs', prixNum: 25000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new18', nom: 'Gâteau Anniversaire Personnalisé 18', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 13.07.26.webp', prix: '7 000 Frs', prixNum: 7000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new19', nom: 'Gâteau Anniversaire Personnalisé 19', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 13.07.30.webp', prix: '13 000 Frs', prixNum: 13000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new20', nom: 'Gâteau Anniversaire Personnalisé 20', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 13.07.39.webp', prix: '10 000 Frs', prixNum: 10000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new21', nom: 'Gâteau Anniversaire Personnalisé 21', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 13.07.44.webp', prix: '20 000 Frs', prixNum: 20000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new22', nom: 'Cake Chocolat Premium', categorie: 'Cakes',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 13.07.46.webp', prix: '20 000 Frs', prixNum: 20000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Cake classique — personnalisation sur demande'
  },

  {
    id: 'new23', nom: 'Gâteau Anniversaire Personnalisé 23', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 13.07.48.webp', prix: '25 000 Frs', prixNum: 25000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new24', nom: 'Gâteau Anniversaire Personnalisé 24', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2026-11-16 at 13.07.49.webp', prix: '25 000 Frs', prixNum: 25000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },
  {
    id: 'archive1', nom: 'Gâteau Anniversaire Personnalisé 1', categorie: 'Anniversaire',
    img: '/images/optimized/WhatsApp Image 2025-04-14 at 14.32.57_90a1076c.webp', prix: '12 000 Frs', prixNum: 12000, note: 5,
    desc: 'Une création signature de Cake Spot, pensée pour les célébrations et les commandes personnalisées.',
    saveurs: ['Vanille', 'Chocolat', 'Fruits rouges'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  }
];

const produitsLocaux = produits;

function mapRemoteProduct(product) {
  return {
    id: product.publicId,
    nom: product.name,
    categorie: product.category,
    img: product.imageUrl,
    prix: product.price,
    prixNum: product.priceNumber,
    note: product.rating,
    desc: product.description,
    saveurs: Array.isArray(product.flavors) ? product.flavors : [],
    infos: product.info || {},
    details: product.details,
  };
}

async function hydrateCatalogueFromManager() {
  const managerUrl = (window.CAKESPOT_MANAGER_API_URL || '').trim().replace(/\/$/, '');
  if (!managerUrl) return;
  try {
    const response = await fetch(`${managerUrl}/api/catalogue`, { cache: 'no-store', headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`Catalogue API ${response.status}`);
    const payload = await response.json();
    if (!Array.isArray(payload.products)) throw new Error('Réponse catalogue invalide');
    const remoteProducts = payload.products.map(mapRemoteProduct).filter(product => product.id && product.img);
    if (!remoteProducts.length) throw new Error('Catalogue distant vide');
    produits = remoteProducts;
    currentPage = 1;
    renderGrid();
    document.documentElement.dataset.catalogueSource = 'manager';
  } catch (error) {
    produits = produitsLocaux;
    document.documentElement.dataset.catalogueSource = 'fallback';
    console.warn('[CakeSpot] API Manager indisponible, fallback local utilisé.', error);
  }
}

// ===== STATE =====
let currentCategory = 'Tous';
let currentPage = 1;
const ITEMS_PER_PAGE = 12;
let selectedFlavors = {};
let currentProduct = null;

// ===== FILTER =====
function getFiltered() {
  if (currentCategory === 'Tous') return produits;
  return produits.filter(p => p.categorie === currentCategory);
}

// ===== STARS =====
function stars(note) {
  return '★'.repeat(note) + '☆'.repeat(5 - note);
}

// ===== RENDER GRID + PAGINATION =====
function renderPagination(total) {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;
  const pageCount = Math.ceil(total / ITEMS_PER_PAGE);
  if (pageCount <= 1) { pagination.innerHTML = ''; return; }
  const buttons = [];
  for (let page = 1; page <= pageCount; page++) {
    buttons.push(`<button class="page-btn ${page === currentPage ? 'active' : ''}" data-page="${page}" aria-label="Page ${page}" ${page === currentPage ? 'aria-current="page"' : ''}>${page}</button>`);
  }
  pagination.innerHTML = `<button class="page-btn page-arrow" data-page="${Math.max(1,currentPage-1)}" ${currentPage===1?'disabled':''} aria-label="Page précédente">‹</button>${buttons.join('')}<button class="page-btn page-arrow" data-page="${Math.min(pageCount,currentPage+1)}" ${currentPage===pageCount?'disabled':''} aria-label="Page suivante">›</button>`;
  pagination.querySelectorAll('[data-page]').forEach(btn => btn.addEventListener('click', () => {
    if (btn.disabled) return;
    currentPage = Number(btn.dataset.page);
    renderGrid();
    document.getElementById('productsGrid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
}

function renderGrid() {
  const grid = document.getElementById('productsGrid');
  const count = document.getElementById('filterCount');
  if (!grid) return;
  const items = getFiltered();
  const pageCount = Math.max(1, Math.ceil(items.length / ITEMS_PER_PAGE));
  currentPage = Math.min(currentPage, pageCount);
  const pageItems = items.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  if (count) count.textContent = `${items.length} création${items.length > 1 ? 's' : ''} · page ${currentPage}/${pageCount}`;
  grid.innerHTML = pageItems.map((p, i) => `
    <article class="product-card" data-product-id="${p.id}" tabindex="0" role="button" aria-label="Voir ${p.nom}" style="--card-delay:${i*0.045}s">
      ${p.note === 5 ? '<div class="product-card-badge">★ Top</div>' : ''}
      <div class="product-card-img">
        <img src="${p.img}" alt="${p.nom}" loading="${i < 4 ? 'eager' : 'lazy'}" ${i < 4 ? 'fetchpriority="high"' : ''} decoding="async">
        <button class="img-zoom-btn" data-zoom-img="${p.img}" data-zoom-name="${p.nom}" aria-label="Voir l'image en grand" title="Voir en grand">
          <i class="fa-solid fa-magnifying-glass-plus"></i>
        </button>
      </div>
      <div class="product-card-body">
        <div class="product-card-stars" aria-label="Note ${p.note} sur 5">${stars(p.note)}</div>
        <div class="product-card-name">${p.nom}</div>
        <div class="product-card-desc">${p.desc.substring(0,80)}…</div>
        <div class="product-card-foot"><div class="product-card-price">${formatPrice(p.prix)}</div><button class="btn-add-cart" data-add-id="${p.id}"><i class="fa-solid fa-plus"></i> Ajouter</button></div>
      </div>
    </article>`).join('');
  renderPagination(items.length);
}

// ===== QUICK ADD =====
function quickAdd(id) {
  const p = produits.find(x => x.id === id);
  if (!p) return;
  addToCart({ id: p.id, nom: p.nom, prix: p.prix, img: p.img, categorie: p.categorie, details: p.details });
}

// ===== MODAL =====
function openModal(id) {
  const p = produits.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  selectedFlavors[id] = selectedFlavors[id] || null;

  const infoRows = Object.entries(p.infos).map(([k, v]) => `
    <div class="modal-info-item">
      <div class="modal-info-label">${k}</div>
      <div class="modal-info-value">${v}</div>
    </div>
  `).join('');

  const flavorTags = p.saveurs.map(s => `
    <span class="flavor-tag ${selectedFlavors[id] === s ? 'selected' : ''}"
      onclick="selectFlavor('${id}','${s}')">${s}</span>
  `).join('');

  document.getElementById('modalContent').innerHTML = `
    <img src="${p.img}" alt="${p.nom}" class="modal-img"
      onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 700 400%22><rect fill=%22%23f9e%22 width=%22700%22 height=%22400%22/><text x=%22350%22 y=%22220%22 text-anchor=%22middle%22 font-size=%22100%22>🎂</text></svg>'">
    <div class="modal-body">
      <div class="modal-cat">${p.categorie.replace(/_/g,' ')}</div>
      <div class="modal-name">${p.nom}</div>
      <div class="modal-stars">${stars(p.note)}</div>
      <div class="modal-price-box">
        <div class="modal-price">${formatPrice(p.prix)}</div>
        <div class="modal-price-note">Prix de base • Personnalisation possible</div>
      </div>
      <p class="modal-desc">${p.desc}</p>
      <div class="modal-info-grid">${infoRows}</div>
      <div class="modal-options">
        <h4>🍓 Choisissez votre saveur :</h4>
        <div class="flavor-tags">${flavorTags}</div>
      </div>
      <div class="modal-customization">
        <h4>✍️ Personnalisation / Message</h4>
        <textarea id="customNote_${id}" rows="3" placeholder="Ex: Prénom, message à écrire sur le gâteau, couleur souhaitée, allergies…"></textarea>
      </div>
      <div class="modal-actions">
        <button class="btn-add-modal" onclick="addFromModal('${id}')">
          <i class="fa-solid fa-bag-shopping"></i> Ajouter au panier
        </button>
        <button class="btn-wa-modal" onclick="orderDirectWhatsApp('${id}')" title="Commander sur WhatsApp">
          <i class="fa-brands fa-whatsapp"></i>
        </button>
      </div>
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

function selectFlavor(id, flavor) {
  selectedFlavors[id] = flavor;
  document.querySelectorAll('.flavor-tag').forEach(el => {
    el.classList.toggle('selected', el.textContent === flavor);
  });
}

function addFromModal(id) {
  const p = produits.find(x => x.id === id);
  if (!p) return;
  const note = document.getElementById(`customNote_${id}`)?.value.trim() || '';
  const flavor = selectedFlavors[id];
  let details = p.details;
  if (flavor) details += ` | Saveur : ${flavor}`;
  if (note) details += ` | Note : ${note}`;
  addToCart({ id: p.id, nom: p.nom, prix: p.prix, img: p.img, categorie: p.categorie, details });
  closeModal();
  toggleCart();
}

function orderDirectWhatsApp(id) {
  const p = produits.find(x => x.id === id);
  if (!p) return;
  const note = document.getElementById(`customNote_${id}`)?.value.trim() || '';
  const flavor = selectedFlavors[id];
  let msg = `🎂 *COMMANDE CAKE SPOT*\n\n`;
  msg += `*Produit :* ${p.nom}\n`;
  msg += `*Catégorie :* ${p.categorie.replace(/_/g,' ')}\n`;
  msg += `*Prix :* ${p.prix}\n`;
  const imageUrl = getShareableImageUrl(p.img);
  if (imageUrl) msg += `*Photo :* ${imageUrl}\n`;
  if (flavor) msg += `*Saveur souhaitée :* ${flavor}\n`;
  if (note) msg += `*Personnalisation :* ${note}\n`;
  msg += `\nBonjour Cake Spot, je souhaite commander ce gâteau. Pouvez-vous confirmer la disponibilité et les détails ? Merci ! 🙏`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== LIGHTBOX =====
function openLightbox(src, name) {
  const overlay = document.getElementById('lightboxOverlay');
  const img     = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  if (!overlay || !img) return;
  img.src = src;
  img.alt = name;
  if (caption) caption.textContent = name;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  // Reset src après la transition pour éviter le flash
  setTimeout(() => {
    const img = document.getElementById('lightboxImg');
    if (img) img.src = '';
  }, 300);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.cat;
      currentPage = 1;
      renderGrid();
    });
  });
  const grid = document.getElementById('productsGrid');
  grid?.addEventListener('click', (event) => {
    const zoom = event.target.closest('[data-zoom-img]');
    if (zoom) { event.stopPropagation(); openLightbox(zoom.dataset.zoomImg, zoom.dataset.zoomName); return; }
    const add = event.target.closest('[data-add-id]');
    if (add) { quickAdd(add.dataset.addId); return; }
    const card = event.target.closest('[data-product-id]');
    if (card) openModal(card.dataset.productId);
  });
  grid?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      const card = event.target.closest('[data-product-id]');
      if (card) { event.preventDefault(); openModal(card.dataset.productId); }
    }
  });

  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat) {
    currentCategory = cat;
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.cat === cat);
    });
  }

  renderGrid();
  hydrateCatalogueFromManager();

  // Lightbox close events
  document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
  document.getElementById('lightboxOverlay')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget || e.target.id === 'lightboxOverlay') closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.getElementById('lightboxOverlay')?.classList.contains('open')) closeLightbox();
    }
  });
});
