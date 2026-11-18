// ===== CAKE SPOT — CATALOGUE JS =====

const WHATSAPP = '+237686019392';

let produits = [

  // ==================== CUPCAKES ====================
  // 9 images disponibles: cupcake1, cupcake3, cupcake4, cupcake5, cupcake6, cupcake7, cupcake8, cupcake9, WhatsApp 00.02.54.jpeg
  {
    id: 'cup1', nom: 'Cupcake Classique', categorie: 'Cupcakes',
    img: 'images/optimized/cupcake1.webp',
    prix: '500 Frs l\'unité', prixNum: 500, note: 4,
    desc: 'Nos cupcakes classiques, fondants et moelleux, garnis d\'une crème beurre onctueuse. Parfaits pour toutes les occasions.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Citron'],
    infos: { Taille: 'Standard (8cm)', Portions: '1 personne', Délai: '24h minimum', Conservation: '2-3 jours' },
    details: 'Cupcake classique — saveur au choix'
  },
  {
    id: 'cup2', nom: 'Cupcake Prestige', categorie: 'Cupcakes',
    img: 'images/optimized/cupcake7.webp',
    prix: '150 Frs l\'unité', prixNum: 150, note: 4,
    desc: 'Version premium avec décoration élaborée, crème beurre artisanale et garnitures gourmandes. Un vrai chef-d\'œuvre en miniature.',
    saveurs: ['Chocolat Noir', 'Caramel Beurre Salé', 'Framboise', 'Café'],
    infos: { Taille: 'Grand (10cm)', Portions: '1 personne', Délai: '24-48h', Conservation: '2-3 jours' },
    details: 'Cupcake prestige — saveur au choix'
  },
  {
    id: 'cup3', nom: 'Cupcake Fleuri', categorie: 'Cupcakes',
    img: 'images/optimized/cupcake3.webp',
    prix: '500 Frs l\'unité', prixNum: 500, note: 4,
    desc: 'Cupcake décoré de fleurs en sucre réalisées à la main. Idéal pour les mariages, baby showers ou événements printaniers.',
    saveurs: ['Rose', 'Lavande', 'Jasmin', 'Vanille'],
    infos: { Taille: 'Standard (8cm)', Portions: '1 personne', Délai: '48h minimum', Conservation: '2 jours' },
    details: 'Cupcake fleuri — décoration florale'
  },
  {
    id: 'cup4', nom: 'Cupcake Tropical', categorie: 'Cupcakes',
    img: 'images/optimized/cupcake4.webp',
    prix: '1 000 Frs l\'unité', prixNum: 1000, note: 4,
    desc: 'Explosion de saveurs tropicales dans un cupcake moelleux. Mangue, noix de coco et ananas se mélangent à merveille.',
    saveurs: ['Mangue-Coco', 'Ananas', 'Passion', 'Goyave'],
    infos: { Taille: 'Standard (8cm)', Portions: '1 personne', Délai: '24h', Conservation: '2-3 jours' },
    details: 'Cupcake tropical — saveur au choix'
  },
  {
    id: 'cup5', nom: 'Cupcake Chocolat', categorie: 'Cupcakes',
    img: 'images/optimized/cupcake5.webp',
    prix: '1000 Frs l\'unité', prixNum: 1000, note: 4,
    desc: 'Un cupcake tout chocolat pour les amateurs de cacao. Ganache fondante et base intense en chocolat belge.',
    saveurs: ['Chocolat Noir', 'Chocolat au Lait', 'Chocolat Blanc', 'Nutella'],
    infos: { Taille: 'Standard (8cm)', Portions: '1 personne', Délai: '24h', Conservation: '3 jours' },
    details: 'Cupcake chocolat — intensité au choix'
  },
  {
    id: 'cup9', nom: 'Gâteau Anniversaire Coco & Chocolat', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-coco-et-chocolat.webp',
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
    img: 'images/optimized/cake1.webp',
    prix: '3 500 Frs', prixNum: 3500, note: 4,
    desc: 'Un cake tendre et fondant, recouvert d\'une couche de glaçage satiné. Parfait pour un goûter ou un cadeau gourmand.',
    saveurs: ['Citron', 'Vanille', 'Amande', 'Orange'],
    infos: { Taille: 'Moyen (20cm)', Portions: '8-10 personnes', Délai: '24-48h', Conservation: '4-5 jours' },
    details: 'Cake fondant — saveur au choix'
  },
  {
    id: 'cake2', nom: 'Cake Premium', categorie: 'Cakes',
    img: 'images/optimized/cake2.webp',
    prix: '4 000 Frs', prixNum: 4000, note: 5,
    desc: 'Notre cake premium aux ingrédients soigneusement sélectionnés. Texture aérée, saveurs intenses et décoration soignée.',
    saveurs: ['Chocolat Belge', 'Caramel', 'Fruits Rouges', 'Noisette'],
    infos: { Taille: 'Grand (20cm)', Portions: '8-10 personnes', Délai: '48h', Conservation: '4-5 jours' },
    details: 'Cake premium — saveur au choix'
  },
  {
    id: 'cake3', nom: 'Cake Spécial', categorie: 'Cakes',
    img: 'images/optimized/cake3.webp',
    prix: '3 500 Frs', prixNum: 3500, note: 4,
    desc: 'Notre cake spécial avec un design artistique unique. Idéal pour les événements d\'exception et les moments qui méritent le meilleur.',
    saveurs: ['Chocolat Blanc Framboises', 'Pistache-Rose', 'Citron Pavot'],
    infos: { Taille: 'Grand (20cm)', Portions: '8-10 personnes', Délai: '72h minimum', Conservation: '4 jours' },
    details: 'Cake spécial — design personnalisé'
  },
  {
    id: 'cake4', nom: 'Cake Élégant', categorie: 'Cakes',
    img: 'images/optimized/cake4.webp',
    prix: '3 500 Frs', prixNum: 3500, note: 4,
    desc: 'Un cake au style épuré et raffiné, parfait pour une occasion chic ou un cadeau de qualité. Simple mais d\'une élégance remarquable.',
    saveurs: ['Vanille Bourbon', 'Thé Earl Grey', 'Lavande-Miel'],
    infos: { Taille: 'Moyen (20cm)', Portions: '6-8 personnes', Délai: '24-48h', Conservation: '4-5 jours' },
    details: 'Cake élégant — saveur raffinée'
  },
  {
    id: 'cake5', nom: 'Cake chocolat', categorie: 'Cakes',
    img: 'images/optimized/cake5.webp',
    prix: '5 000 Frs', prixNum: 5000, note: 5,
    desc: 'Fait à 100% à la main avec des recettes transmises avec soin. Authentique et généreux en saveurs, comme à la maison.',
    saveurs: ['Chocolat Noir', 'Vanille', 'Café', 'Spéculoos'],
    infos: { Taille: 'Grand (24cm)', Portions: '10-12 personnes', Délai: '48h', Conservation: '4-5 jours' },
    details: 'Cake chocolat — recette traditionnelle'
  },
  {
    id: 'cake7', nom: 'Cake Marbré', categorie: 'Cakes',
    img: 'images/optimized/cake7.webp',
    prix: '3 000 Frs', prixNum: 3000, note: 4,
    desc: 'Le classique marbré revisité : tourbillons de pâte vanille et chocolat, moelleux et fondant. Un incontournable de la pâtisserie.',
    saveurs: ['Vanille & Chocolat', 'Vanille & Caramel', 'Chocolat & Café'],
    infos: { Taille: 'Moyen (20cm)', Portions: '6-8 personnes', Délai: '24h', Conservation: '4-5 jours' },
    details: 'Cake marbré — tourbillons vanille-chocolat'
  },
  {
    id: 'cake8', nom: 'Cake choco brut', categorie: 'Cakes',
    img: 'images/optimized/cake8.webp',
    prix: '5 000 Frs', prixNum: 5000, note: 5,
    desc: 'Cake moelleux au chocolat qui fond en bouche. Moelleux, Léger et parfait pour les journées chaudes.',
    saveurs: ['Chocolat', 'Chocolat Blanc', 'Chocolat au Lait'],
    infos: { Taille: 'Moyen (20cm)', Portions: '6-8 personnes', Délai: '24h', Conservation: '4 jours' },
    details: 'Cake choco brut — fraîcheur garantie'
  },
  {
    id: 'cake9', nom: 'Cake Chocolat Intense', categorie: 'Cakes',
    img: 'images/optimized/cake9.webp',
    prix: '4 500 Frs', prixNum: 4500, note: 5,
    desc: 'Pour les vrais amateurs de chocolat : un cake dense, intense et fondant, recouvert d\'une ganache brillante. Irrésistible.',
    saveurs: ['Chocolat Noir 70%', 'Chocolat au Lait', 'Double Chocolat'],
    infos: { Taille: 'Grand (22cm)', Portions: '8-10 personnes', Délai: '24-48h', Conservation: '4 jours' },
    details: 'Cake chocolat intense — ganache brillante'
  },
  {
    id: 'cake10', nom: 'Cake Noix de Coco', categorie: 'Cakes',
    img: 'images/optimized/cake10.webp',
    prix: '4 500 Frs', prixNum: 4500, note: 4,
    desc: 'Cake à la noix de coco râpée avec un cœur crémeux et une décoration copeaux de coco grillés. Exotique et savoureux.',
    saveurs: ['Coco Pure', 'Coco & Citron', 'Coco & Ananas'],
    infos: { Taille: 'Moyen (20cm)', Portions: '6-8 personnes', Délai: '24h', Conservation: '3-4 jours' },
    details: 'Cake coco — copeaux grillés'
  },
  {
    id: 'cake11', nom: 'Cake Fraise & Crème', categorie: 'Cakes',
    img: 'images/optimized/cake11.webp',
    prix: '3 000 Frs', prixNum: 3000, note: 4,
    desc: 'Base génoise légère, généreuse garniture de crème chantilly et fraises fraîches. Le cake de saison par excellence.',
    saveurs: ['Fraise & Vanille', 'Fraise & Citron', 'Fraise & Chocolat Blanc'],
    infos: { Taille: 'Moyen (22cm)', Portions: '8-10 personnes', Délai: '24-48h', Conservation: '2-3 jours' },
    details: 'Cake fraise & crème — fruits frais'
  },
  {
    id: 'cake12', nom: 'Cake Caramel Noisette', categorie: 'Cakes',
    img: 'images/optimized/cake12.webp',
    prix: '6 000 Frs', prixNum: 6000, note: 5,
    desc: 'Cake garni d\'un praliné noisette maison et d\'un caramel coulant, recouvert d\'une crème beurre satinée. Un pur délice.',
    saveurs: ['Caramel & Noisette', 'Caramel & Chocolat', 'Praliné Pur'],
    infos: { Taille: 'Grand (22cm)', Portions: '8-10 personnes', Délai: '48h', Conservation: '4 jours' },
    details: 'Cake caramel noisette — praliné maison'
  },
  // Cakes Drip 2026
  {
    id: 'cake13', nom: 'Cake Chocolat Drip Oreo', categorie: 'Cakes',
    img: 'images/optimized/cake-chocolat-drip-oreo.webp',
    prix: '7 000 Frs', prixNum: 7000, note: 5,
    desc: 'Cake spectaculaire : crème vanille, ganache coulante au chocolat, couronné d\'Oreos, Kit-Kat et perles dorées. Régal visuel et gustatif.',
    saveurs: ['Chocolat & Vanille', 'Chocolat Noir', 'Chocolat au Lait'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-12 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Drip Oreo — chocolat coulant & biscuits'
  },
  {
    id: 'cake14', nom: 'Cake Drip Oreo & Vanille', categorie: 'Cakes',
    img: 'images/optimized/cake-drip-oreo-et-vanille.webp',
    prix: '12 000 Frs', prixNum: 12000, note: 4,
    desc: 'Base crème vanille avec socle d\'Oreo broyé, ganache chocolat en drip et macarons dorés en décoration. Message personnalisé possible.',
    saveurs: ['Vanille & Chocolat', 'Chocolat Noir'],
    infos: { Taille: 'Moyen (20cm)', Portions: '8-10 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Oreo & Vanille — message personnalisé possible'
  },
  {
    id: 'cake15', nom: 'Cake Choco Total', categorie: 'Cakes',
    img: 'images/optimized/cake-choco-total.webp',
    prix: '20 000 Frs', prixNum: 20000, note: 5,
    desc: 'Pour les vrais amateurs de chocolat ! Cake entièrement chocolat avec crème au beurre chocolatée, ganache miroir et bonbons chocolatés.',
    saveurs: ['Chocolat Noir Intense', 'Chocolat au Lait', 'Double Chocolat'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-15 personnes', Délai: '48h', Conservation: '4 jours' },
    details: 'Cake Choco Total — personnalisation possible'
  },
  {
    id: 'cake16', nom: 'Cake Drip Blanc & Chocolat', categorie: 'Cakes',
    img: 'images/optimized/cake-drip-blanc-et-chocolat.webp',
    prix: '12 000 Frs', prixNum: 12000, note: 4,
    desc: 'Élégant cake blanc recouvert d\'une ganache chocolat en drip avec Oreos et rouleaux gaufrés. Minimaliste et gourmand à la fois.',
    saveurs: ['Vanille & Chocolat', 'Fraise & Chocolat', 'Caramel & Chocolat'],
    infos: { Taille: 'Moyen (20cm)', Portions: '8-10 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Drip Blanc & Chocolat — message personnalisé'
  },
  {
    id: 'cake17', nom: 'Cake Bicolore Choco-Vanille', categorie: 'Cakes',
    img: 'images/optimized/cake-bicolore-choco-vanille.webp',
    prix: '12 000 Frs', prixNum: 12000, note: 4,
    desc: 'Design unique mi-chocolat mi-vanille, avec cerises rouges et ganache chocolat d\'un côté, et crème chantilly de l\'autre.',
    saveurs: ['Chocolat & Vanille', 'Chocolat & Fraise'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-12 personnes', Délai: '48-72h', Conservation: '3 jours' },
    details: 'Cake bicolore — moitié choco moitié vanille'
  },
  {
    id: 'cake18', nom: 'Cake Drip Coco & Chocolat', categorie: 'Cakes',
    img: 'images/optimized/cake-drip-coco-et-chocolat.webp',
    prix: '7 000 Frs', prixNum: 7000, note: 4,
    desc: 'Cake noix de coco enrobé de crème beurre, couronné d\'un drip chocolat et de bonbons colorés. Frais, léger et très savoureux.',
    saveurs: ['Coco & Chocolat', 'Coco & Vanille'],
    infos: { Taille: 'Moyen (20cm)', Portions: '8-10 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Drip Coco & Chocolat — message personnalisé'
  },
  {
    id: 'cake19', nom: 'Cake Chocolat Drip Or', categorie: 'Cakes',
    img: 'images/optimized/cake-chocolat-drip-or.webp',
    prix: '10 000 Frs', prixNum: 10000, note: 4,
    desc: 'Cake ganache chocolat brillant, décoré de perles dorées et de feuilles d\'or comestible. Luxueux, gourmand et absolument inoubliable.',
    saveurs: ['Chocolat Noir', 'Chocolat & Caramel', 'Chocolat & Noisette'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-12 personnes', Délai: '48h', Conservation: '4 jours' },
    details: 'Cake Drip Or — décoration premium'
  },
  {
    id: 'cake20', nom: 'Cake Chocolat Drip Festif', categorie: 'Cakes',
    img: 'images/optimized/cake-chocolat-drip-festif.webp',
    prix: '8 000 Frs', prixNum: 8000, note: 4,
    desc: 'Cake blanc texturé avec ganache chocolat et décoration festive de petits animaux dorés. Parfait pour les fêtes.',
    saveurs: ['Chocolat & Vanille', 'Chocolat & Fraise'],
    infos: { Taille: 'Moyen (20cm)', Portions: '8-10 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Drip Festif — décoration personnalisable'
  },
  {
    id: 'cake21', nom: 'Cake Café Dark', categorie: 'Cakes',
    img: 'images/optimized/cake-cafe-dark.webp',
    prix: '10 000 Frs', prixNum: 10000, note: 5,
    desc: 'Cake entièrement ganache chocolat noir brillant avec Oreos dorés, pièces de monnaie chocolat et une rose en sucre.',
    saveurs: ['Chocolat Noir Intense', 'Chocolat & Café'],
    infos: { Taille: 'Moyen (20cm)', Portions: '8-10 personnes', Délai: '48h', Conservation: '4 jours' },
    details: 'Cake Café Dark — ganache chocolat noir'
  },
  {
    id: 'cake22', nom: 'Cake Choco Oreo Élaboré', categorie: 'Cakes',
    img: 'images/optimized/cake-choco-oreo-elabore.webp',
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
    img: 'images/optimized/cake-anniversaire-festif-bleu.webp',
    prix: '11 000 Frs', prixNum: 11000, note: 5,
    desc: 'Superbe cake d\'anniversaire bleu ciel avec boules pailletées, papillon en sucre et topper "Happy Birthday" doré. Personnalisable avec le prénom.',
    saveurs: ['Vanille', 'Fraise', 'Chocolat', 'Citron'],
    infos: { Taille: 'Grand (24cm)', Portions: '10-14 personnes', Délai: '48-72h', Conservation: '3-4 jours' },
    details: 'Cake Anniversaire Bleu — prénom + couleur personnalisables'
  },
  {
    id: 'ann2', nom: 'Cake Anniversaire Festif', categorie: 'Anniversaire',
    img: 'images/optimized/cake-anniversaire-festif.webp',
    prix: '12 000 Frs', prixNum: 12000, note: 5,
    desc: 'Cake festif blanc & chocolat avec rosettes de crème beurre et perles dorées. Décorations de fête et message personnalisé.',
    saveurs: ['Vanille & Chocolat', 'Vanille Pure', 'Chocolat & Noisette'],
    infos: { Taille: 'Grand (24cm)', Portions: '10-12 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Festif — message et couleurs personnalisables'
  },
  {
    id: 'ann3', nom: 'Cake Enfant Paw Patrol Bleu', categorie: 'Anniversaire',
    img: 'images/optimized/cake-enfant-paw-patrol-bleu.webp',
    prix: '13 000 Frs', prixNum: 13000, note: 5,
    desc: 'Cake thème Paw Patrol bleu pour les fans de la série. Figurines en papier, badge officiel, ballons et confettis colorés. Prénom personnalisé.',
    saveurs: ['Vanille', 'Fraise', 'Chocolat', 'Caramel'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-14 personnes', Délai: '72h minimum', Conservation: '3 jours' },
    details: 'Cake Paw Patrol Bleu — prénom + âge personnalisables'
  },
  {
    id: 'ann4', nom: 'Cake Enfant Paw Patrol Rose', categorie: 'Anniversaire',
    img: 'images/optimized/cake-enfant-paw-patrol-rose.webp',
    prix: '15 000 Frs', prixNum: 15000, note: 5,
    desc: 'Version rose du cake Paw Patrol pour les petites filles. Décorations Skye & compagnie, drip chocolat et crème rose girly.',
    saveurs: ['Fraise', 'Framboise', 'Vanille', 'Chocolat'],
    infos: { Taille: 'Grand (22cm, format carré)', Portions: '10-14 personnes', Délai: '72h minimum', Conservation: '3 jours' },
    details: 'Cake Paw Patrol Rose — prénom + âge personnalisables'
  },
  {
    id: 'ann5', nom: 'Cake Enfant Paw Patrol Rond', categorie: 'Anniversaire',
    img: 'images/optimized/cake-enfant-paw-patrol-rond.webp',
    prix: '10 000 Frs', prixNum: 10000, note: 5,
    desc: 'Cake rond Paw Patrol bleu ciel avec figurines et badge personnalisé. Design festif et coloré qui ravira les enfants.',
    saveurs: ['Vanille', 'Fraise', 'Chocolat'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-12 personnes', Délai: '72h minimum', Conservation: '3 jours' },
    details: 'Cake Paw Patrol Rond — prénom + âge au choix'
  },
  {
    id: 'ann6', nom: 'Cake Paw Patrol Tower', categorie: 'Anniversaire',
    img: 'images/optimized/cake-paw-patrol-tower.webp',
    prix: '14 000 Frs', prixNum: 14000, note: 5,
    desc: 'Version haute et impressive du cake Paw Patrol avec tour en sucre, toutes les figurines et perles de couleur. Le gâteau qui fait le wow.',
    saveurs: ['Vanille', 'Caramel', 'Chocolat', 'Fraise'],
    infos: { Taille: 'Haut (22cm x 15cm)', Portions: '12-16 personnes', Délai: '72h minimum', Conservation: '3 jours' },
    details: 'Cake Paw Patrol Tower — version haute premium'
  },
  {
    id: 'ann7', nom: 'Cake Anniversaire Bleu Royal', categorie: 'Anniversaire',
    img: 'images/optimized/cake-anniversaire-bleu-royal.webp',
    prix: '10 000 Frs', prixNum: 10000, note: 4,
    desc: 'Cake blanc et bleu roi avec rosettes de crème beurre bleues et topper Happy Birthday argenté. Élégant et festif.',
    saveurs: ['Vanille', 'Chocolat', 'Citron', 'Caramel'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-12 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Bleu Royal — message personnalisé possible'
  },
  {
    id: 'ann8', nom: 'Cake Fleurette Chocolat', categorie: 'Anniversaire',
    img: 'images/optimized/cake-fleurette-chocolat.webp',
    prix: '8 500 Frs', prixNum: 8500, note: 5,
    desc: 'Cake blanc avec couronne de rosettes bicolores chocolat & vanille, ganache drip et assortiment de biscuits et bonbons.',
    saveurs: ['Chocolat & Vanille', 'Chocolat Noir', 'Caramel & Chocolat'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-14 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Fleurette Chocolat — message personnalisé possible'
  },
  {
    id: 'ann9', nom: 'Cake Oreo Anniversaire', categorie: 'Anniversaire',
    img: 'images/optimized/cake-oreo-anniversaire.webp',
    prix: '7 000 Frs', prixNum: 7000, note: 5,
    desc: 'Cake blanc et chocolat avec ganache, Oreos, rouleaux de gaufres et message personnalisé. Le classique indémodable.',
    saveurs: ['Chocolat & Vanille', 'Double Chocolat'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-12 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Oreo Anniversaire — message au choix'
  },
  {
    id: 'ann10', nom: 'Cake Anniversaire Chic', categorie: 'Anniversaire',
    img: 'images/optimized/img_2.webp',
    prix: '11 000 Frs', prixNum: 11000, note: 5,
    desc: 'Cake anniversaire élégant avec décoration florale en crème beurre et topper doré personnalisé. Pour un anniversaire inoubliable.',
    saveurs: ['Vanille & Framboise', 'Chocolat & Fraise', 'Caramel & Vanille'],
    infos: { Taille: 'Grand (22cm)', Portions: '10-12 personnes', Délai: '48h', Conservation: '3-4 jours' },
    details: 'Cake Anniversaire Chic — prénom & âge personnalisables'
  },
  {
    id: 'ann12', nom: 'Cake Anniversaire Rose', categorie: 'Anniversaire',
    img: 'images/optimized/cake-anniversaire-rose.webp',
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
    img: 'images/optimized/etage1.webp',
    prix: '200 000 Frs', prixNum: 200000, note: 4,
    desc: 'Un gâteau de mariage à 3 étages, recouvert de fondant lisse et décoré de fleurs en sucre. Élégant et intemporel.',
    saveurs: ['Vanille & Framboise', 'Chocolat & Praliné', 'Citron & Fleur d\'Oranger'],
    infos: { Étages: '3 niveaux', Portions: '80-100 personnes', Délai: '2 semaines minimum', Livraison: 'Possible (+frais)' },
    details: 'Gâteau de mariage 3 étages — personnalisable'
  },
  {
    id: 'mar2', nom: 'Gâteau de Mariage Fleuri', categorie: 'Gateaux_de_marriage',
    img: 'images/optimized/etage2.webp',
    prix: '150 000 Frs', prixNum: 150000, note: 4,
    desc: 'Deux étages ornés de fleurs fraîches et de fleurs en sucre pour un rendu naturel et romantique.',
    saveurs: ['Rose & Litchi', 'Fraise & Vanille', 'Jasmin & Miel'],
    infos: { Étages: '2 niveaux', Portions: '50-60 personnes', Délai: '10 jours minimum', Livraison: 'Possible (+frais)' },
    details: 'Gâteau de mariage fleuri 2 étages'
  },
  {
    id: 'mar3', nom: 'Gâteau de Mariage Prestige', categorie: 'Gateaux_de_marriage',
    img: 'images/optimized/etage3.webp',
    prix: '230 000 Frs', prixNum: 230000, note: 4,
    desc: 'Une création d\'exception, 4 étages de magnificence. Décoration d\'or, dentelles en sucre et design sur-mesure.',
    saveurs: ['Champagne & Framboise', 'Vanille & Or', 'Chocolat & Caramel Fleur de Sel'],
    infos: { Étages: '4 niveaux', Portions: '120-150 personnes', Délai: '3 semaines', Livraison: 'Incluse Douala' },
    details: 'Gâteau de mariage prestige 4 étages'
  },
  {
    id: 'mar5', nom: 'Gâteau de Mariage Romantique', categorie: 'Gateaux_de_marriage',
    img: 'images/optimized/etage5.webp',
    prix: '190 000 Frs', prixNum: 190000, note: 5,
    desc: 'Trois étages avec un style bohème chic et des éléments de décoration élégants. Tendance et romantique.',
    saveurs: ['Fraise & Basilic', 'Pêche & Vanille', 'Framboise & Rose'],
    infos: { Étages: '3 niveaux', Portions: '70-80 personnes', Délai: '2 semaines', Livraison: 'Possible (+frais)' },
    details: 'Gâteau de mariage romantique'
  },
  {
    id: 'mar6', nom: 'Gâteau de Mariage Minimaliste', categorie: 'Gateaux_de_marriage',
    img: 'images/optimized/etage6.webp',
    prix: '150 000 Frs', prixNum: 150000, note: 4,
    desc: 'Le luxe dans la simplicité. Gâteau épuré avec une décoration minimaliste et raffinée.',
    saveurs: ['Vanille Pure', 'Citron Bergamote', 'Amande & Fleur d\'Oranger'],
    infos: { Étages: '2 niveaux', Portions: '50-60 personnes', Délai: '10 jours', Livraison: 'Possible (+frais)' },
    details: 'Gâteau de mariage minimaliste'
  },
  {
    id: 'mar7', nom: 'Gâteau de Mariage Bohème', categorie: 'Gateaux_de_marriage',
    img: 'images/optimized/etage8.webp',
    prix: '175 000 Frs', prixNum: 175000, note: 4,
    desc: 'Gâteau bohème chic avec textures rustiques, fleurs naturelles séchées et ruban satiné. Un rendu poétique et naturel.',
    saveurs: ['Lavande & Miel', 'Rose & Amande', 'Jasmin & Citron'],
    infos: { Étages: '2 niveaux', Portions: '50-70 personnes', Délai: '2 semaines', Livraison: 'Possible (+frais)' },
    details: 'Gâteau de mariage bohème'
  },
  {
    id: 'mar9', nom: 'Gâteau de Mariage Doré', categorie: 'Gateaux_de_marriage',
    img: 'images/optimized/etage9.webp',
    prix: '240 000 Frs', prixNum: 240000, note: 5,
    desc: 'Gâteau recouvert de poudre d\'or comestible, avec détails en feuilles d\'or et perles nacrées. Glamour et luxueux.',
    saveurs: ['Vanille & Champagne', 'Caramel & Fleur de Sel', 'Pistache & Framboise'],
    infos: { Étages: '3 niveaux', Portions: '90-110 personnes', Délai: '3 semaines', Livraison: 'Incluse Douala' },
    details: 'Gâteau mariage doré — finition or comestible'
  },
  {
    id: 'mar10', nom: 'Gâteau de Mariage Perles & Roses', categorie: 'Gateaux_de_marriage',
    img: 'images/optimized/etage10.webp',
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
    img: 'images/optimized/bento-cake-premium.webp',
    prix: '7 000 Frs', prixNum: 7000, note: 5,
    desc: 'Le bento cake signature de Cake Spot : petit format rond, décorations peintes à la main et message personnalisé. Le cadeau parfait.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Citron'],
    infos: { Taille: 'Petit (10x10cm)', Portions: '1-2 personnes', Délai: '24h', Conservation: '2-3 jours' },
    details: 'Bento Cake prémium — message personnalisé inclus'
  },
  {
    id: 'ben2', nom: 'Bento Cake Prestige', categorie: 'Bento',
    img: 'images/optimized/bento-cake-prestige.webp',
    prix: '7 000 Frs', prixNum: 7000, note: 5,
    desc: 'Version prestige avec décoration élaborée, crème beurre artistique et emballage cadeau. Idéal pour une occasion spéciale.',
    saveurs: ['Chocolat Noir', 'Caramel Beurre Salé', 'Framboise', 'Café'],
    infos: { Taille: 'Moyen (12x12cm)', Portions: '2-3 personnes', Délai: '24-48h', Conservation: '2-3 jours' },
    details: 'Bento Cake prestige — emballage cadeau inclus'
  },
  {
    id: 'ben3', nom: 'Bento Cake Fleuri', categorie: 'Bento',
    img: 'images/optimized/bento-cake-fleuri.webp',
    prix: '6 000 Frs', prixNum: 6000, note: 4,
    desc: 'Bento cake décoré de fleurs en crème beurre peintes à la main. Romantique, délicat et parfait comme cadeau pour une femme.',
    saveurs: ['Rose & Framboise', 'Jasmin & Vanille', 'Lavande & Citron'],
    infos: { Taille: 'Petit (10x10cm)', Portions: '1-2 personnes', Délai: '48h', Conservation: '2-3 jours' },
    details: 'Bento Cake fleuri — décoration florale'
  },
  {
    id: 'ben5', nom: 'Bento Cake fantasy', categorie: 'Bento',
    img: 'images/optimized/bento-cake-fantasy.webp',
    prix: '13 000 Frs', prixNum: 13000, note: 5,
    desc: 'Bento cake fantasy : ganache intense, décor cacao et message personnalisé. Pour les amateurs de chocolat.',
    saveurs: ['Chocolat Noir', 'Chocolat au Lait', 'Chocolat Blanc'],
    infos: { Taille: 'Petit (10x10cm)', Portions: '1-2 personnes', Délai: '24h', Conservation: '2-3 jours' },
    details: 'Bento Cake fantasy — ganache intense'
  },
  {
    id: 'ben6', nom: 'Bento Cake Saint-Valentin', categorie: 'Bento',
    img: 'images/optimized/bento-cake-saint-valentin.webp',
    prix: '4 000 Frs', prixNum: 4000, note: 4,
    desc: 'Bento cake romantique en forme de cœur ou avec décoration Saint-Valentin. Le cadeau gourmand qui dit "je t\'aime".',
    saveurs: ['Fraise & Chocolat', 'Rose & Framboise', 'Vanille & Fraise'],
    infos: { Taille: 'Petit (10x10cm)', Portions: '1-2 personnes', Délai: '48h', Conservation: '2-3 jours' },
    details: 'Bento Cake Saint-Valentin — emballage romantique'
  },
  {
    id: 'new1', nom: 'Cake Noir & Blanc', categorie: 'Cakes',
    img: 'images/optimized/cake-noir-et-blanc.webp', prix: '12 000 Frs', prixNum: 12000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Cake classique — personnalisation sur demande'
  },

  {
    id: 'new2', nom: 'Gâteau Anniversaire Personnalisé 2', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-personnalise-2.webp', prix: '30 000 Frs', prixNum: 30000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new3', nom: 'Gâteau Anniversaire Personnalisé 3', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-personnalise-3.webp', prix: '18 000 Frs', prixNum: 18000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new4', nom: 'Cake Drip Blanc & Chocolat', categorie: 'Cakes',
    img: 'images/optimized/cake-drip-blanc-et-chocolat-new4.webp', prix: '8 000 Frs', prixNum: 8000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Cake classique — personnalisation sur demande'
  },

  {
    id: 'new5', nom: 'Gâteau Anniversaire Personnalisé 5', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-personnalise-5.webp', prix: '10 000 Frs', prixNum: 10000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new6', nom: 'Donuts Gourmands', categorie: 'Cakes',
    img: 'images/optimized/donuts-gourmands.webp', prix: '3 500 Frs', prixNum: 3500, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Cake classique — personnalisation sur demande'
  },

  {
    id: 'new7', nom: 'Cake Vertical Fleuri', categorie: 'Cakes',
    img: 'images/optimized/cake-vertical-fleuri.webp', prix: '200 000 Frs', prixNum: 200000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Cake classique — personnalisation sur demande'
  },

  {
    id: 'new8', nom: 'Cake Lettre Personnalisé', categorie: 'Cakes',
    img: 'images/optimized/cake-lettre-personnalise.webp', prix: '20 000 Frs', prixNum: 20000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Cake classique — personnalisation sur demande'
  },

  {
    id: 'new9', nom: 'Cake Chocolat Drip', categorie: 'Cakes',
    img: 'images/optimized/cake-chocolat-drip.webp', prix: '10 000 Frs', prixNum: 10000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Cake classique — personnalisation sur demande'
  },

  {
    id: 'new10', nom: 'Cake Rosettes Chocolat', categorie: 'Cakes',
    img: 'images/optimized/cake-rosettes-chocolat.webp', prix: 'Sur devis', prixNum: 0, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Cake classique — personnalisation sur demande'
  },

  {
    id: 'new11', nom: 'Gâteau Anniversaire Personnalisé 11', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-personnalise-11.webp', prix: '25 000 Frs', prixNum: 25000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new12', nom: 'Gâteau Anniversaire Personnalisé 12', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-personnalise-12.webp', prix: '14 000 Frs', prixNum: 14000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new13', nom: 'Gâteau Anniversaire Personnalisé 13', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-personnalise-13.webp', prix: '15 000 Frs', prixNum: 15000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new14', nom: 'Gâteau Anniversaire Personnalisé 14', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-personnalise-14.webp', prix: '10 000 Frs', prixNum: 10000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new15', nom: 'Gâteau Anniversaire Personnalisé 15', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-personnalise-15.webp', prix: '25 000 Frs', prixNum: 25000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new16', nom: 'Gâteau Anniversaire Personnalisé 16', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-personnalise-16.webp', prix: '12 000 Frs', prixNum: 12000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new17', nom: 'Gâteau Anniversaire Personnalisé 17', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-personnalise-17.webp', prix: '25 000 Frs', prixNum: 25000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new18', nom: 'Gâteau Anniversaire Personnalisé 18', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-personnalise-18.webp', prix: '7 000 Frs', prixNum: 7000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new19', nom: 'Gâteau Anniversaire Personnalisé 19', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-personnalise-19.webp', prix: '13 000 Frs', prixNum: 13000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new20', nom: 'Gâteau Anniversaire Personnalisé 20', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-personnalise-20.webp', prix: '10 000 Frs', prixNum: 10000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new21', nom: 'Gâteau Anniversaire Personnalisé 21', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-personnalise-21.webp', prix: '20 000 Frs', prixNum: 20000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new22', nom: 'Cake Chocolat Premium', categorie: 'Cakes',
    img: 'images/optimized/cake-chocolat-premium.webp', prix: '20 000 Frs', prixNum: 20000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Cake classique — personnalisation sur demande'
  },

  {
    id: 'new23', nom: 'Gâteau Anniversaire Personnalisé 23', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-personnalise-23.webp', prix: '25 000 Frs', prixNum: 25000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },

  {
    id: 'new24', nom: 'Gâteau Anniversaire Personnalisé 24', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-personnalise-24.webp', prix: '25 000 Frs', prixNum: 25000, note: 5,
    desc: 'Une création Cake Spot récemment ajoutée à notre collection. Contactez-nous pour choisir les saveurs et la personnalisation.',
    saveurs: ['Vanille', 'Chocolat', 'Fraise', 'Caramel'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  },
  {
    id: 'archive1', nom: 'Gâteau Anniversaire Personnalisé 1', categorie: 'Anniversaire',
    img: 'images/optimized/gateau-anniversaire-personnalise-1.webp', prix: '12 000 Frs', prixNum: 12000, note: 5,
    desc: 'Une création signature de Cake Spot, pensée pour les célébrations et les commandes personnalisées.',
    saveurs: ['Vanille', 'Chocolat', 'Fruits rouges'],
    infos: { Taille: 'Sur mesure', Portions: 'Selon le format', Délai: '48h minimum', Conservation: '3-4 jours' },
    details: 'Gâteau anniversaire — prénom et message personnalisables'
  }
];

const CATEGORIES = ['Tous', 'Anniversaire', 'Cakes', 'Cupcakes', 'Gateaux_de_marriage', 'Bento'];
const SORTS = ['pertinence', 'prix-asc', 'prix-desc', 'note'];

// Normalise un produit (local ou distant) : types sûrs, longueurs bornées, image résolue.
function normalizeProduct(p) {
  if (!p || typeof p !== 'object') return null;
  const id = String(p.id ?? '').trim().slice(0, 64);
  const img = resolveAssetUrl(p.img);
  if (!id || !/^[\w-]+$/.test(id) || !img) return null;
  const note = Math.min(5, Math.max(0, Math.round(Number(p.note) || 0)));
  const infos = {};
  if (p.infos && typeof p.infos === 'object') {
    Object.entries(p.infos).slice(0, 8).forEach(([k, v]) => { infos[String(k).slice(0, 40)] = String(v ?? '').slice(0, 120); });
  }
  const prix = String(p.prix ?? 'Sur devis').slice(0, 40);
  return {
    id,
    nom: String(p.nom ?? '').slice(0, 120),
    categorie: String(p.categorie ?? '').slice(0, 60),
    img,
    prix,
    prixNum: Number(p.prixNum) > 0 ? Number(p.prixNum) : getPrixNum(prix),
    note,
    desc: String(p.desc ?? '').slice(0, 1000),
    saveurs: Array.isArray(p.saveurs) ? p.saveurs.slice(0, 12).map(s => String(s).slice(0, 60)) : [],
    infos,
    details: String(p.details ?? '').slice(0, 200),
  };
}

produits = produits.map(normalizeProduct).filter(Boolean);
const produitsLocaux = produits;

function mapRemoteProduct(product) {
  return normalizeProduct({
    id: product.publicId,
    nom: product.name,
    categorie: product.category,
    img: product.imageUrl,
    prix: product.price,
    prixNum: product.priceNumber,
    note: product.rating,
    desc: product.description,
    saveurs: product.flavors,
    infos: product.info,
    details: product.details,
  });
}

async function hydrateCatalogueFromManager() {
  const managerUrl = (window.CAKESPOT_MANAGER_API_URL || '').trim().replace(/\/$/, '');
  if (!managerUrl) return;
  try {
    if (!/^https:\/\//i.test(managerUrl)) throw new Error('L’API Manager doit être servie en HTTPS');
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const response = await fetch(`${managerUrl}/api/catalogue`, {
      cache: 'no-store', credentials: 'omit', signal: controller.signal, headers: { Accept: 'application/json' }
    });
    clearTimeout(timer);
    if (!response.ok) throw new Error(`Catalogue API ${response.status}`);
    const payload = await response.json();
    if (!Array.isArray(payload.products)) throw new Error('Réponse catalogue invalide');
    const remoteProducts = payload.products.map(mapRemoteProduct).filter(Boolean);
    if (!remoteProducts.length) throw new Error('Catalogue distant vide');
    produits = remoteProducts;
    state.page = 1;
    updateCategoryCounts();
    renderGrid();
    document.documentElement.dataset.catalogueSource = 'manager';
  } catch (error) {
    produits = produitsLocaux;
    document.documentElement.dataset.catalogueSource = 'fallback';
    console.warn('[CakeSpot] API Manager indisponible, fallback local utilisé.', error);
  }
}

// ===== ÉTAT =====
const ITEMS_PER_PAGE = 12;
const state = { category: 'Tous', page: 1, query: '', sort: 'pertinence' };
const selectedFlavors = {};
let currentProduct = null;
let modalQty = 1;

const normalizeText = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

function getFiltered() {
  const q = normalizeText(state.query).trim();
  let items = state.category === 'Tous' ? produits.slice() : produits.filter(p => p.categorie === state.category);
  if (q) {
    const terms = q.split(/\s+/);
    items = items.filter(p => {
      const hay = normalizeText(`${p.nom} ${p.desc} ${p.categorie} ${p.saveurs.join(' ')}`);
      return terms.every(t => hay.includes(t));
    });
  }
  const priced = p => (p.prixNum > 0 ? p.prixNum : Infinity);
  if (state.sort === 'prix-asc') items.sort((a, b) => priced(a) - priced(b));
  if (state.sort === 'prix-desc') items.sort((a, b) => (b.prixNum || 0) - (a.prixNum || 0));
  if (state.sort === 'note') items.sort((a, b) => b.note - a.note);
  return items;
}

function stars(note) {
  return '★'.repeat(note) + '☆'.repeat(5 - note);
}

function syncUrl() {
  const params = new URLSearchParams();
  if (state.category !== 'Tous') params.set('cat', state.category);
  if (state.query) params.set('q', state.query);
  if (state.sort !== 'pertinence') params.set('tri', state.sort);
  if (state.page > 1) params.set('page', String(state.page));
  const qs = params.toString();
  try { history.replaceState(null, '', `${window.location.pathname}${qs ? `?${qs}` : ''}`); } catch { /* file:// */ }
}

// ===== RENDU =====
function updateCategoryCounts() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const cat = btn.dataset.cat;
    const n = cat === 'Tous' ? produits.length : produits.filter(p => p.categorie === cat).length;
    let badge = btn.querySelector('.filter-num');
    if (!badge) { badge = document.createElement('span'); badge.className = 'filter-num'; btn.appendChild(badge); }
    badge.textContent = `(${n})`;
  });
}

function renderPagination(total) {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;
  const pageCount = Math.ceil(total / ITEMS_PER_PAGE);
  if (pageCount <= 1) { pagination.innerHTML = ''; return; }
  const btn = (page, label, extra = '') => `<button type="button" class="page-btn" data-page="${page}" ${extra}>${label}</button>`;
  const buttons = [];
  for (let page = 1; page <= pageCount; page++) {
    buttons.push(btn(page, page, `aria-label="Page ${page}"${page === state.page ? ' aria-current="page"' : ''}`));
  }
  pagination.innerHTML =
    btn(Math.max(1, state.page - 1), '‹', `aria-label="Page précédente"${state.page === 1 ? ' disabled' : ''}`) +
    buttons.join('') +
    btn(Math.min(pageCount, state.page + 1), '›', `aria-label="Page suivante"${state.page === pageCount ? ' disabled' : ''}`);
}

function cardTemplate(p, i) {
  const nom = escapeHtml(p.nom);
  const full = escapeHtml(p.img);
  const thumb = escapeHtml(thumbUrl(p.img));
  const eager = i < 2 && state.page === 1;
  const desc = p.desc.length > 110 ? `${p.desc.slice(0, 110).trim()}…` : p.desc;
  const srcset = thumb !== full ? ` srcset="${thumb} 480w, ${full} 1000w" sizes="(max-width: 600px) 50vw, 300px"` : '';
  return `
  <li>
    <article class="product-card" data-product-id="${escapeHtml(p.id)}">
      ${p.note === 5 ? '<span class="product-card-badge">★ Top</span>' : ''}
      <div class="product-card-img">
        <img src="${thumb}"${srcset} alt="${nom} — ${escapeHtml(p.categorie.replace(/_/g, ' '))} Cake Spot Douala" width="480" height="480" loading="${eager ? 'eager' : 'lazy'}"${eager ? ' fetchpriority="high"' : ''} decoding="async">
        <button type="button" class="img-zoom-btn" data-zoom-id="${escapeHtml(p.id)}" aria-label="Agrandir la photo : ${nom}">${icon('magnifying-glass-plus')}</button>
      </div>
      <div class="product-card-body">
        <p class="product-card-stars"><span aria-hidden="true">${stars(p.note)}</span><span class="visually-hidden">Note : ${p.note} sur 5</span></p>
        <h3 class="product-card-name"><button type="button" class="card-link" data-open-id="${escapeHtml(p.id)}">${nom}</button></h3>
        <p class="product-card-desc">${escapeHtml(desc)}</p>
        <div class="product-card-foot">
          <p class="product-card-price">${escapeHtml(formatPrice(p.prix))}</p>
          <button type="button" class="btn-add-cart" data-add-id="${escapeHtml(p.id)}" aria-label="Ajouter ${nom} au panier">${icon('plus')} <span>Ajouter</span></button>
        </div>
      </div>
    </article>
  </li>`;
}

function renderGrid() {
  const grid = document.getElementById('productsGrid');
  const count = document.getElementById('filterCount');
  if (!grid) return;
  const items = getFiltered();
  const pageCount = Math.max(1, Math.ceil(items.length / ITEMS_PER_PAGE));
  state.page = Math.min(Math.max(1, state.page), pageCount);
  const pageItems = items.slice((state.page - 1) * ITEMS_PER_PAGE, state.page * ITEMS_PER_PAGE);
  if (count) count.textContent = `${items.length} création${items.length > 1 ? 's' : ''}${pageCount > 1 ? ` · page ${state.page}/${pageCount}` : ''}`;

  grid.innerHTML = pageItems.length ? pageItems.map(cardTemplate).join('') : `
    <li class="catalogue-empty">
      ${icon('cake-candles')}
      <p>Aucune création ne correspond à votre recherche.</p>
      <button type="button" class="btn-outline" data-reset-filters>Réinitialiser les filtres</button>
    </li>`;
  // Délai d’apparition en cascade (via CSSOM : compatible avec une CSP sans 'unsafe-inline')
  grid.querySelectorAll('.product-card').forEach((el, i) => el.style.setProperty('--card-delay', `${(i * 0.04).toFixed(2)}s`));
  renderPagination(items.length);
  syncUrl();
}

function setCategory(cat) {
  state.category = CATEGORIES.includes(cat) ? cat : 'Tous';
  document.querySelectorAll('.filter-btn').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.cat === state.category)));
}

// ===== AJOUT RAPIDE =====
function productToCartItem(p) {
  return { id: p.id, nom: p.nom, prix: p.prix, prixNum: p.prixNum, img: p.img, categorie: p.categorie, details: p.details };
}

function quickAdd(id, button) {
  const p = produits.find(x => x.id === id);
  if (!p) return;
  const img = button.closest('.product-card')?.querySelector('.product-card-img img');
  addToCart(productToCartItem(p), { sourceImg: img });
  button.classList.add('added');
  button.innerHTML = `${icon('check')} <span>Ajouté</span>`;
  setTimeout(() => {
    button.classList.remove('added');
    button.innerHTML = `${icon('plus')} <span>Ajouter</span>`;
  }, 1400);
}

// ===== MODALE PRODUIT =====
function openModal(id) {
  const p = produits.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  modalQty = 1;
  const selected = selectedFlavors[id] || null;

  const infoRows = Object.entries(p.infos).map(([k, v]) => `
    <div class="modal-info-item"><dt>${escapeHtml(k)}</dt><dd>${escapeHtml(v)}</dd></div>`).join('');
  const flavorTags = p.saveurs.map((s, idx) => `
    <button type="button" class="flavor-tag" data-flavor-index="${idx}" aria-pressed="${selected === s}">${escapeHtml(s)}</button>`).join('');

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <img src="${escapeHtml(p.img)}" alt="${escapeHtml(p.nom)}" class="modal-img" width="760" height="475" decoding="async">
    <div class="modal-body">
      <p class="modal-cat">${escapeHtml(p.categorie.replace(/_/g, ' '))}</p>
      <h2 class="modal-name" id="modalTitle">${escapeHtml(p.nom)}</h2>
      <p class="modal-stars"><span aria-hidden="true">${stars(p.note)}</span><span class="visually-hidden">Note : ${p.note} sur 5</span></p>
      <div class="modal-price-box">
        <p class="modal-price">${escapeHtml(formatPrice(p.prix))}</p>
        <p class="modal-price-note">Prix de base · personnalisation possible</p>
      </div>
      <p class="modal-desc">${escapeHtml(p.desc)}</p>
      ${infoRows ? `<dl class="modal-info-grid">${infoRows}</dl>` : ''}
      ${flavorTags ? `<div class="modal-section"><h3 id="flavorTitle">Choisissez votre saveur</h3><div class="flavor-tags" role="group" aria-labelledby="flavorTitle">${flavorTags}</div></div>` : ''}
      <div class="modal-section modal-customization">
        <label for="customNote">Personnalisation / message</label>
        <textarea id="customNote" rows="3" maxlength="300" aria-describedby="customNoteCount" placeholder="Ex : prénom, message à écrire, couleur souhaitée, allergies…"></textarea>
        <span class="char-count" id="customNoteCount">0 / 300</span>
      </div>
      <div class="modal-buy">
        <div class="qty" role="group" aria-label="Quantité">
          <button type="button" class="qty-btn" data-modal-qty="-1" aria-label="Diminuer la quantité" disabled>${icon('minus')}</button>
          <span class="qty-val" id="modalQty" aria-live="polite">1</span>
          <button type="button" class="qty-btn" data-modal-qty="1" aria-label="Augmenter la quantité">${icon('plus')}</button>
        </div>
        <button type="button" class="btn-add-modal" data-modal-action="add">${icon('bag-shopping')} Ajouter au panier</button>
        <button type="button" class="btn-wa-modal" data-modal-action="whatsapp" aria-label="Commander directement sur WhatsApp">${icon('whatsapp')}</button>
      </div>
    </div>`;

  const modal = document.getElementById('productModal');
  modal.setAttribute('aria-labelledby', 'modalTitle');
  openDialog(modal);
  modal.querySelector('.modal-scroll')?.scrollTo(0, 0);
}

function closeModal() { closeDialog(document.getElementById('productModal')); }

function selectFlavor(flavor) {
  if (!currentProduct) return;
  selectedFlavors[currentProduct.id] = selectedFlavors[currentProduct.id] === flavor ? null : flavor;
  document.querySelectorAll('#modalContent .flavor-tag').forEach(el => {
    el.setAttribute('aria-pressed', String(el.textContent === selectedFlavors[currentProduct.id]));
  });
}

function setModalQty(delta) {
  modalQty = Math.min(CART_MAX_QTY, Math.max(1, modalQty + delta));
  const val = document.getElementById('modalQty');
  if (val) val.textContent = modalQty;
  const minus = document.querySelector('[data-modal-qty="-1"]');
  if (minus) minus.disabled = modalQty <= 1;
}

function getCustomNote() {
  return (document.getElementById('customNote')?.value || '').trim().slice(0, 300);
}

function addFromModal() {
  const p = currentProduct;
  if (!p) return;
  const img = document.querySelector('#modalContent .modal-img');
  addToCart(productToCartItem(p), { qty: modalQty, saveur: selectedFlavors[p.id] || '', note: getCustomNote(), sourceImg: img });
  closeModal();
}

function orderDirectWhatsApp() {
  const p = currentProduct;
  if (!p) return;
  const note = getCustomNote();
  const flavor = selectedFlavors[p.id];
  let msg = `🎂 *COMMANDE CAKE SPOT*\n\n`;
  msg += `*Produit :* ${p.nom}\n`;
  msg += `*Quantité :* ${modalQty}\n`;
  msg += `*Catégorie :* ${p.categorie.replace(/_/g, ' ')}\n`;
  msg += `*Prix :* ${p.prix}\n`;
  const imageUrl = getShareableImageUrl(p.img);
  if (imageUrl) msg += `*Photo :* ${imageUrl}\n`;
  if (flavor) msg += `*Saveur souhaitée :* ${flavor}\n`;
  if (note) msg += `*Personnalisation :* ${note}\n`;
  msg += `\nBonjour Cake Spot, je souhaite commander ce gâteau. Pouvez-vous confirmer la disponibilité et les détails ? Merci ! 🙏`;
  openWhatsApp(msg);
}

// ===== LIGHTBOX =====
function openLightbox(id) {
  const p = produits.find(x => x.id === id);
  const box = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if (!p || !box || !img) return;
  img.src = p.img;
  img.alt = p.nom;
  document.getElementById('lightboxCaption').textContent = p.nom;
  openDialog(box);
}

// ===== JSON-LD : liste des produits pour Google =====
function injectProductListSchema() {
  if (document.getElementById('catalogueSchema')) return;
  const pageUrl = new URL('Pages/Catalogue.html', SITE_ROOT).href;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Catalogue Cake Spot',
    url: pageUrl,
    numberOfItems: produitsLocaux.length,
    itemListElement: produitsLocaux.map((p, i) => {
      const product = {
        '@type': 'Product',
        name: p.nom,
        image: p.img,
        description: p.desc,
        category: p.categorie.replace(/_/g, ' '),
        brand: { '@type': 'Brand', name: 'Cake Spot' },
      };
      if (p.prixNum > 0) {
        product.offers = { '@type': 'Offer', price: p.prixNum, priceCurrency: 'XAF', availability: 'https://schema.org/PreOrder', url: pageUrl };
      }
      return { '@type': 'ListItem', position: i + 1, item: product };
    }),
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'catalogueSchema';
  script.textContent = JSON.stringify(schema).replace(/</g, '\\u003c');
  document.head.appendChild(script);
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  // État initial depuis l'URL
  const params = new URLSearchParams(window.location.search);
  setCategory(params.get('cat'));
  state.query = (params.get('q') || '').slice(0, 60);
  state.sort = SORTS.includes(params.get('tri')) ? params.get('tri') : 'pertinence';
  state.page = parseInt(params.get('page'), 10) || 1;
  const search = document.getElementById('catalogueSearch');
  const sort = document.getElementById('catalogueSort');
  if (search) search.value = state.query;
  if (sort) sort.value = state.sort;

  document.getElementById('filterCats')?.addEventListener('click', (event) => {
    const btn = event.target.closest('.filter-btn');
    if (!btn) return;
    setCategory(btn.dataset.cat);
    state.page = 1;
    renderGrid();
  });

  let searchTimer = null;
  search?.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { state.query = search.value.slice(0, 60); state.page = 1; renderGrid(); }, 180);
  });
  document.getElementById('catalogueSearchForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    state.query = search.value.slice(0, 60); state.page = 1; renderGrid();
  });
  sort?.addEventListener('change', () => { state.sort = SORTS.includes(sort.value) ? sort.value : 'pertinence'; state.page = 1; renderGrid(); });

  grid.addEventListener('click', (event) => {
    const zoom = event.target.closest('[data-zoom-id]');
    if (zoom) { openLightbox(zoom.dataset.zoomId); return; }
    const add = event.target.closest('[data-add-id]');
    if (add) { quickAdd(add.dataset.addId, add); return; }
    if (event.target.closest('[data-reset-filters]')) {
      setCategory('Tous'); state.query = ''; state.sort = 'pertinence'; state.page = 1;
      if (search) search.value = ''; if (sort) sort.value = 'pertinence';
      renderGrid();
      return;
    }
    const card = event.target.closest('[data-product-id]');
    if (card) openModal(card.dataset.productId);
  });

  document.getElementById('pagination')?.addEventListener('click', (event) => {
    const btn = event.target.closest('[data-page]');
    if (!btn || btn.disabled) return;
    state.page = Number(btn.dataset.page) || 1;
    renderGrid();
    document.getElementById('filterBar')?.scrollIntoView({ behavior: REDUCED_MOTION.matches ? 'auto' : 'smooth', block: 'start' });
  });

  // Modale
  const modal = document.getElementById('productModal');
  setupDialog(modal);
  modal?.addEventListener('click', (event) => {
    if (event.target.closest('[data-action="close-modal"]')) { closeModal(); return; }
    const flavor = event.target.closest('[data-flavor-index]');
    if (flavor && currentProduct) { selectFlavor(currentProduct.saveurs[Number(flavor.dataset.flavorIndex)]); return; }
    const q = event.target.closest('[data-modal-qty]');
    if (q) { setModalQty(Number(q.dataset.modalQty)); return; }
    const action = event.target.closest('[data-modal-action]');
    if (action?.dataset.modalAction === 'add') addFromModal();
    if (action?.dataset.modalAction === 'whatsapp') orderDirectWhatsApp();
  });
  modal?.addEventListener('input', (event) => {
    if (event.target.id === 'customNote') {
      const counter = document.getElementById('customNoteCount');
      if (counter) counter.textContent = `${event.target.value.length} / 300`;
    }
  });

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  setupDialog(lightbox);
  lightbox?.addEventListener('click', (event) => {
    if (event.target.closest('[data-action="close-lightbox"]') || event.target === lightbox) closeDialog(lightbox);
  });

  updateCategoryCounts();
  renderGrid();
  injectProductListSchema();
  hydrateCatalogueFromManager();
});
