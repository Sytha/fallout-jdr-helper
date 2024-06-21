import { BestiaryType, MobDetails } from "./bestiary.model";

export const CHARACTERS: MobDetails[] = [
    {
        "name": "Super Mutant",
        "level": "5",
        "keywords": "Humain Mutant",
        "type": "Personnage Normal",
        "xp": "38",
        "description": "Deux mètres dix, la peau verte et les muscles saillants, les super mutants ne peuvent pas passer inaperçus. Leur stupidité est proverbiale, mais ce sont des guerriers com- pétents et ils savent très bien se servir des armes et des armures. On les trouve souvent en groupes de quelques individus suivant les ordres d’un chef. Parfois, ils sont accompagnés de molosses mutants.",
        "strength": "9",
        "perception": "5",
        "endurance": "7",
        "charisma": "4",
        "intelligence": "4",
        "agility": "5",
        "luck": "4",
        "health": "12",
        "initiative": "10",
        "defense": "1",
        "meleeBonus": "+2 $CD$",
        "carryWeight": "120 kg",
        "luckPoints": "—",
        "ballisticR": "2 (toutes)",
        "energyR": "2 (toutes)",
        "poisonR": "0",
        "radiationR": "0",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 11), 4 $CD$ de dégâts balistiques"
            },
            {
                "title": "PLANCHE",
                "description": "FOR + Armes de corps à corps (SR 13), 6 $CD$ de dégâts balistiques, Deux mains"
            },
            {
                "title": "FUSIL À VERROU DE FORTUNE",
                "description": "AGI + Armes légères (SR 8), 5 $CD$ de dégâts balistiques Perforants 1, portée M, cadence de tir 0, Deux mains"
            }
        ],
        "effects": [
            {
                "title": "Barbare",
                "description": "RD +2 contre les dégâts balistiques et énergétiques (inclus)."
            },
            {
                "title": "Immunisé contre les radiations",
                "description": "le super mutant réduit à 0 tous les dégâts de radiation qu’il subit et ne peut subir aucun dégât ou effet infligé par des radiations."
            },
            {
                "title": "Immunisé contre le poison",
                "description": "le super mutant réduit à 0 tous les dégâts de poison qu’il subit et ne peut subir aucun dégât ou effet infligé par du poison."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Fusil à verrou de fortune, planche, assortiment d’os humains, richesse 1."
            }
        ],
        "skills": [
            "Armes de corps à corps * 4",
            "Mains nues 2",
            "Armes légères 3",
            "Survie * 3",
            "Armes lourdes 1"
        ]
    },
    {
        "name": "Frappeur Super Mutant",
        "level": "7",
        "keywords": "Humain Mutant",
        "type": "Personnage Normal",
        "xp": "52",
        "description": "Les frappeurs super mutants sont plus dures à cuire que les super mutants classiques sortis de l’Institut. Ils ont gardé une bonne partie de leur intelligence, possèdent une certaine éloquence et ont recours à des tactiques de combat plus subtiles, comme chercher à se mettre à couvert ou comprendre les points faibles de leurs enne- mis. Ils ont tendance à manipuler des armes plus puis- santes, ce qui reflète cette meilleure compréhension des échauffourées, et portent des armures plus résistantes. Les frappeurs super mutants bénéficient souvent d’une meilleure constitution et d’une meilleure résistance aux dégâts, ce qui les rend plus difficiles à vaincre.",
        "strength": "9",
        "perception": "5",
        "endurance": "7",
        "charisma": "4",
        "intelligence": "5",
        "agility": "5",
        "luck": "4",
        "health": "14",
        "initiative": "10",
        "defense": "1",
        "meleeBonus": "+2 $CD$",
        "carryWeight": "120 kg",
        "luckPoints": "—",
        "ballisticR": "4 (tête) ;3 (jambes) ;2 (buste,bras)",
        "energyR": "3 (jambes) ;2 (buste,bras)",
        "poisonR": "Immunisé",
        "radiationR": "Immunisé",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 11), 4 $CD$ de dégâts balistiques"
            },
            {
                "title": "PLANCHE",
                "description": "FOR + Armes de corps à corps (SR 13), 6 $CD$ de dégâts balistiques, Deux mains"
            },
            {
                "title": "FUSIL À VERROU DE FORTUNE",
                "description": "AGI + Armes légères (SR 9), 5 $CD$ de dégâts balistiques Perforants 1, portée M, cadence de tir 0, Deux mains"
            }
        ],
        "effects": [
            {
                "title": "Barbare",
                "description": "RD +2 contre les dégâts balistiques et énergétiques (inclus)."
            },
            {
                "title": "Immunisé contre les radiations",
                "description": "le frappeur super mutant réduit à 0 tous les dégâts de radiation qu’il subit et ne peut subir aucun dégât ou effet infligé par des radiations."
            },
            {
                "title": "Immunisé contre le poison",
                "description": "le frappeur super mutant réduit à 0 tous les dégâts de poison qu’il subit et ne peut subir aucun dégât ou effet infligé par du poison."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Fusil à verrou de fortune, planche, assortiment d’os humains, richesse 1, casque de super mutant, jam- bières de super mutant x2."
            }
        ],
        "skills": [
            "Armes de corps à corps* 4",
            "Mains nues 2",
            "Armes légères 4",
            "Projectiles 1",
            "Armes lourdes 2",
            "Survie 2",
            "Athlétisme 1"
        ]
    },
    {
        "name": "Maître Super Mutant",
        "level": "10",
        "keywords": "Humain Mutant",
        "type": "Personnage Notable",
        "xp": "148",
        "description": "Les maîtres super mutants sont plus haut placés dans la hiérarchie que les frappeurs super mutants et possèdent en général l’armure, les armes et l’expérience requises pour mériter leur titre. Ces super mutants sont presque toujours hostiles et équipés d’une puissance de feu des- tructrice, comme des lance-missiles et des mini-guns. Ce genre de super mutant fait rarement partie des petits groupes, mais est presque toujours présent dans les plus grandes communautés.",
        "strength": "10",
        "perception": "8",
        "endurance": "8",
        "charisma": "5",
        "intelligence": "6",
        "agility": "5",
        "luck": "5",
        "health": "23",
        "initiative": "15",
        "defense": "1",
        "meleeBonus": "+2 $CD$",
        "carryWeight": "125 kg",
        "luckPoints": "–",
        "ballisticR": "4 (tête,jambes,buste) ;3 (bras)",
        "energyR": "2 (tête) ;4 (jambes,buste) ;3 (bras)",
        "poisonR": "Immunisé",
        "radiationR": "Immunisé",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 12), 4 $CD$ de dégâts balistiques"
            },
            {
                "title": "MINI-GUN",
                "description": "END + Armes lourdes (SR 9), 3 $CD$ de dégâts balistiques, De zone, En Rafale, portée M, cadence de tir 5, Deux mains, Gatling, Imprécis OU"
            },
            {
                "title": "LANCE-MISSILES",
                "description": "END + Armes lourdes (SR 9), 11 $CD$ de dégâts balistiques, portée L, Deux mains, Zone d’impact"
            }
        ],
        "effects": [
            {
                "title": "Barbare",
                "description": "RD +2 contre les dégâts balistiques et énergétiques (inclus)."
            },
            {
                "title": "Immunisé contre les radiations",
                "description": "le maître super mutant réduit tous les dégâts de radiation à 0, et ne peut pas encaisser de dégâts ou d’effets dus aux radiations."
            },
            {
                "title": "Immunisé contre le poison",
                "description": "le maître super mutant réduit à 0 tous les dégâts de poison qu’il subit et ne peut subir aucun dégât ou effet infligé par du poison."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Mini-gun ou lance-missiles, assortiment d’os humains, richesse 1, casque de super mutant, jambières de super mutant x2, brassard de super mutant x2, armure légère."
            }
        ],
        "skills": [
            "Armes de corps à corps * 4",
            "Mains nues 2",
            "Armes légères 3",
            "Survie * 3",
            "Armes lourdes 1"
        ]
    },
    {
        "name": "Kamikaze Super Mutant",
        "level": "6",
        "keywords": "Humain Mutant",
        "type": "Personnage Normal",
        "xp": "45",
        "description": "Bien que la plupart des super mutants ne soient pas vrai- ment effrayés par la mort, les kamikazes super mutants ne possèdent, eux, pas une once de désir de survie lors- qu’ils poursuivent leur proie. Ces super mutants accom- pagnent souvent les patrouilles ou servent de gardes. Hostiles à l’extrême, dès qu’ils voient une cible, ils arment le mini-nuke qu’ils tiennent sous leur bras et se précipitent sur l’intrus pour l’atteindre avant la déto- nation, ce qui provoque la mort de l’ennemi, mais aussi du kamikaze. Ils obéissent en général aux ordres d’un super mutant placé plus haut qu’eux dans la hiérarchie et servent comme armes de destruction massive ou de dissuasion pour les survivants qui voudraient pénétrer dans les camps super mutants.",
        "strength": "8",
        "perception": "5",
        "endurance": "6",
        "charisma": "4",
        "intelligence": "4",
        "agility": "7",
        "luck": "4",
        "health": "12",
        "initiative": "12",
        "defense": "1",
        "meleeBonus": "+1 $CD$",
        "carryWeight": "65 kg",
        "luckPoints": "—",
        "ballisticR": "3 (buste) ;2 (bras,jambes,tête)",
        "energyR": "4 (buste) ;2 (bras,jambes,tête)",
        "poisonR": "Immunisé",
        "radiationR": "Immunisé",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 10), 4 $CD$ de dégâts balistiques"
            },
            {
                "title": "MINI-NUKE MODIFIÉ",
                "description": "(Voir Capacité Spéciale), 21 $CD$ de dégâts balistiques Brutaux, Destructeurs, Radioactifs, portée C, Zone d’impact"
            },
            {
                "title": "FUSIL À VERROU DE FORTUNE",
                "description": "AGI + Armes légères (SR 9), 5 $CD$ de dégâts balistiques Perforants 1, portée M, cadence de tir 0, Deux mains"
            }
        ],
        "effects": [
            {
                "title": "Barbare",
                "description": "RD +2 contre les dégâts balistiques et énergétiques (inclus)."
            },
            {
                "title": "Immunisé contre les radiations",
                "description": "le kamikaze super mutant réduit à 0 tous les dégâts de radiation qu’il subit et ne peut subir aucun dégât ou effet infligé par des radiations."
            },
            {
                "title": "Immunisé contre le poison",
                "description": "le kamikaze super mutant réduit à 0 tous les dégâts de poison qu’il subit et ne peut subir aucun dégât ou effet infligé par du poison."
            },
            {
                "title": "Mini-nuke modifié",
                "description": "le kamikaze super mutant porte un mini-nuke modifié. Une fois à courte portée de sa cible, il effectue un test d’AGI + Explosifs (SR 11) pour le faire détoner. Tous ceux à portée courte du kamikaze super mutant, y compris lui-même, en subissent les effets."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Richesse 1, chaînes"
            },
            {
                "title": "Fouille",
                "description": "Si le kamikaze super mutant est tué avant d’armer et de faire détoner le mini-nuke, alors 1 mini-nuke peut être trouvé sur le corps et ce mini-nuke fonc- tionne comme n’importe quel autre. Si le kamikaze super mutant est tué par l’explosion du mini-nuke, aucun mini-nuke ne peut être trouvé sur le cadavre, mais on peut y récolter 1 composant rare."
            }
        ],
        "skills": [
            "Armes légères 2",
            "Explosifs* 5",
            "Athlétisme* 4",
            "Mains nues 2",
            "Discrétion 1",
            "Survie 1"
        ]
    },
    {
        "name": "Coursier Synthétique",
        "level": "11",
        "keywords": "Synthétique Robotique",
        "type": "Personnage Notable",
        "xp": "162",
        "description": "Tous ceux qui connaissent l’existence des coursiers syn- thétiques les craignent. Ces synthétiques de troisième génération travaillent pour l’Institut, plus exactement la branche Bureau de rétention des synthétiques. Leur mission est de remettre la main sur les synthétiques fugi- tifs, mais leurs tâches ne s’arrêtent pas là. Les coursiers suivent un entraînement de haut niveau et possèdent une force et une constitution supérieure. Lorsqu’un syn- thétique de troisième génération est sélectionné pour devenir coursier, ses implants neurologiques sont amé- liorés et on le forme à l’utilisation d’armes spécialisées, au combat et à l’espionnage, afin de mener sa mission à bien. L’Institut lui implante aussi une puce de cour- sier qui lui permet d’être suivi, et lui donne la capacité à se téléporter dans et hors de l’Institut. Les numéros d’identification des coursiers commencent toujours par un « X ».",
        "strength": "7",
        "perception": "8",
        "endurance": "8",
        "charisma": "6",
        "intelligence": "8",
        "agility": "7",
        "luck": "4",
        "health": "23",
        "initiative": "17",
        "defense": "2",
        "meleeBonus": "+1 $CD$",
        "carryWeight": "110 kg",
        "luckPoints": "2",
        "ballisticR": "4 (bras,jambes,buste) ;2 (tête)",
        "energyR": "5 (bras,jambes,buste) ;2 (tête)",
        "poisonR": "Immunisé",
        "radiationR": "Immunisé",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 9), 2 $CD$ de dégâts balistiques"
            },
            {
                "title": "LASER DE L’INSTITUT",
                "description": "PER + Armes à énergie (SR 12), 6 $CD$ de dégâts énergétiques Brutaux, En Rafale, portée M, cadence de tir 4, Deux mains"
            }
        ],
        "effects": [
            {
                "title": "Robot",
                "description": "le synthétique est un robot. Il est immunisé contre les effets de la faim, de la soif et de la suffo- cation. Il est également immunisé contre les dégâts de radiation et de poison. Cependant, les machines ne peuvent pas consommer de nourriture, de bois- sons ou d’autres consommables, elles ne guérissent pas naturellement et la compétence Médecine ne permet pas de les soigner. Les dégâts qu’elles subissent doivent être réparés (cf. page 34)."
            },
            {
                "title": "Immunisé contre le poison",
                "description": "le synthétique réduit à 0 tous les dégâts de poison qu’il subit et ne peut subir aucun dégât ou effet infligé par du poison."
            },
            {
                "title": "Immunisé contre les radiations",
                "description": "le synthétique réduit à 0 tous les dégâts de radiation qu’il subit et ne peut subir aucun dégât ou effet infligé par des radiations."
            },
            {
                "title": "Immunisé contre la peur",
                "description": "le synthétique ne peut jamais être intimidé ou menacé. Il ignore ou attaque quiconque tente de l’intimider ou de le menacer."
            },
            {
                "title": "Immunisé contre les maladies",
                "description": "le synthétique est immunisé contre les effets de toutes les maladies dont il ne présentera jamais les symptômes."
            },
            {
                "title": "Accès à l’Institut",
                "description": "le coursier synthétique peut avoir recours à la technologie de téléportation utilisée par l’Institut et entrer ou sortir de l’Institut à son gré."
            },
            {
                "title": "Synthétique de troisième génération",
                "description": "le syn- thétique peut se faire passer pour un humain et toute inspection permet de conclure qu’il est bien humain. Le synthétique de troisième génération ne peut être identifié comme tel qu’après sa mort, en récupérant son composant de synthétique. Lorsqu’il se fait passer pour une personne connue, le synthé- tique de troisième génération obtient un bonus de 2d20 pour imiter cette personne, y compris ses tics, ainsi que pour se souvenir de ses connaissances."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Composant synthétique, plastron lourd de synthétique, brassard lourd de synthétique, jambière lourde de synthétique, fusil laser de l’Institut (crosse complète, agitateur de photons amélioré, canon long amélioré)."
            }
        ],
        "skills": [
            "Armes à énergie* 4",
            "Discrétion* 4",
            "Armes de corps à corps * 3",
            "Mains nues 2",
            "Crochetage 2",
            "Réparation 3",
            "Discours 3",
            "Science * 4"
        ]
    },
    {
        "name": "Ancien",
        "level": "10",
        "keywords": "Humain",
        "type": "Personnage Majeur",
        "xp": "222",
        "description": "Les anciens forment le conseil des chefs de la Confrérie de l’Acier. Afin d’atteindre leur position élevée, ils doivent escalader chaque échelon de l’organisation et, avant d’être nommés Ancien, doivent au moins être pala- din. Bien que le Conseil des Anciens soit responsable de toute l’organisation, un ou plusieurs Anciens peuvent chapeauter leur propre chapitre, dans diverses parties des Terres désolées.",
        "strength": "7",
        "perception": "8",
        "endurance": "8",
        "charisma": "9",
        "intelligence": "8",
        "agility": "7",
        "luck": "7",
        "health": "32",
        "initiative": "19",
        "defense": "1",
        "carryWeight": "110 kg",
        "luckPoints": "—",
        "ballisticR": "3 (bras,jambes,buste)",
        "energyR": "2 (bras,jambes,buste)",
        "poisonR": "0",
        "radiationR": "1 (bras,jambes,buste)",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 9), 2 $CD$ de dégâts balistiques"
            },
            {
                "title": "FUSIL LASER À CANON LONG",
                "description": "PER + Armes à énergie (SR 12), 5 $CD$ de dégâts énergétiques Perforants 1, portée M, Deux mains"
            }
        ],
        "effects": [
            {
                "title": "Chaîne de Cohésion",
                "description": "pour une action majeure, un Ancien peut ordonner à un personnage de la Confrérie de l’Acier d’un niveau inférieur au sien de procéder à une action majeure. L’Ancien aide cette action avec un test de CHA + Discours."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Uniforme de la Confrérie de l’Acier (manteau de com- bat armuré), fusil laser à canon long, holoplaques de la Confrérie de l’Acier."
            }
        ],
        "skills": [
            "Armes à énergie* 4",
            "Médecine 1",
            "Armes de corps à corps 2",
            "Pilotage 2",
            "Athlétisme 1",
            "Réparations 1",
            "Discours* 5",
            "Science* 4",
            "Discrétion 1",
            "Survie 3",
            "Mains nues 2",
            "Troc 1"
        ]
    },
    {
        "name": "Chevalier",
        "level": "7",
        "keywords": "Humain",
        "type": "Personnage Normal",
        "xp": "52",
        "description": "Au sein de la Confrérie de l’Acier, le rang de Chevalier est très respecté. Les chevaliers sont en général responsables de l’entretien des armes, des armures et de la techno- logie possédées par l’organisation. Il n’est pas aisé d’at- teindre ce poste et il faut des années de sacrifices et de travail acharné. Beaucoup de chevaliers sont ambitieux et espèrent atteindre l’échelon de paladin.",
        "strength": "6",
        "perception": "6",
        "endurance": "7",
        "charisma": "5",
        "intelligence": "5",
        "agility": "6",
        "luck": "4",
        "health": "14",
        "initiative": "12",
        "defense": "1",
        "carryWeight": "55 kg",
        "luckPoints": "—",
        "ballisticR": "2 (toutes)",
        "energyR": "2 (toutes)",
        "poisonR": "0",
        "radiationR": "1 (toutes)",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 8), 2 $CD$ de dégâts balistiques"
            },
            {
                "title": "FUSIL LASER À CANON LONG",
                "description": "PER + Armes à énergie (SR 10), 5 $CD$ de dégâts énergétiques Perforants 1, portée M, cadence de tir 2, Deux mains"
            }
        ],
        "effects": [
            {
                "title": "Chaîne de Cohésion",
                "description": "pour une action majeure, un Chevalier peut ordonner à un personnage de la Confrérie de l’Acier d’un niveau inférieur au sien de procéder à une action majeure. Le Chevalier aide cette action avec un test de CHA + Discours."
            },
            {
                "title": "Bien équipé",
                "description": "deux fois par combat, le Chevalier peut tirer une salve avec son fusil laser à canon long. Il ajoute alors la cadence de tir (2) aux dégâts de son arme pour cette seule attaque (pour un total de 7 $CD$ )."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Uniforme de la Confrérie de l’Acier, armure de com- bat complète, fusil laser à canon long, holoplaques de la Confrérie de l’Acier."
            }
        ],
        "skills": [
            "Armes à énergie* 4",
            "Mains nues 2",
            "Armes légères 1",
            "Pilotage 1",
            "Armes lourdes 1",
            "Réparations 1",
            "Athlétisme 1",
            "Science* 3",
            "Discours 2"
        ]
    },
    {
        "name": "Paladin",
        "level": "8",
        "keywords": "Humain",
        "type": "Personnage Notable",
        "xp": "120",
        "description": "Les paladins sont les troupes d’élite de la Confrérie de l’Acier. Équipés d’armures assistées et des meilleures armes dont dispose l’organisation, ces vétérans sont souvent des guerriers reconnus. Atteindre le rang de paladin exige une dévotion totale à la Confrérie ainsi que d’impressionnantes références : c’est un échelon que beaucoup rêvent d’atteindre.",
        "strength": "7 (11)",
        "perception": "9",
        "endurance": "8",
        "charisma": "6",
        "intelligence": "6",
        "agility": "6",
        "luck": "4",
        "health": "20 (10 tête,",
        "initiative": "10 jambes,",
        "defense": "21 buste)",
        "meleeBonus": "PTS $CD$E CHANCE",
        "carryWeight": "BONUS CÀC",
        "luckPoints": "+3 D",
        "ballisticR": "RD RAD.",
        "energyR": "RD POIS.",
        "poisonR": "6 (tête);8 (buste);5 (bras,jambes)",
        "radiationR": "7 (tête);9 (buste);6 (bras,jambes)",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "jambes); 9 (buste) 0 $CD$ ATTAQUES  ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 14), 5 $CD$ de dégâts balistiques  FUSIL LASER À CANON LONG AMÉLIORÉ"
            }
        ],
        "effects": [
            {
                "title": "Armure assistée",
                "description": "un paladin de la Confrérie de l’Acier porte une armure assistée. Le paladin utilise la FOR de l’armure (11) à la place de la sienne. Il est immunisé aux dégâts de chute et inflige 3 $CD$ de dégâts balistiques à toutes les créatures à portée de son atterrissage. Il peut respirer sous l’eau ainsi que dans les environnements toxiques. Voir page 137."
            },
            {
                "title": "Chaîne de Cohésion",
                "description": "pour une action majeure, un paladin peut ordonner à un personnage de la Confrérie de l’Acier d’un niveau inférieur au sien de procéder à une action majeure. Le paladin aide cette action avec un test de CHA + Discours."
            },
            {
                "title": "Bien équipé",
                "description": "deux fois par combat, le paladin peut « lâcher » une rafale de son fusil laser long. Il ajoute alors la cadence de tir (2) aux dégâts de son arme pour cette seule attaque (pour un total de 8 $CD$ )."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Châssis d’armure assistée, armure assistée T-60 com- plète, fusil laser à canon long amélioré, holoplaques de la Confrérie de l’Acier."
            }
        ],
        "skills": [
            "Armes à énergie* 4",
            "Mains nues* 3",
            "Armes légères 2",
            "Pilotage 1",
            "Athlétisme 2",
            "Réparations 2",
            "Discours 3",
            "Science* 3"
        ]
    },
    {
        "name": "Scribe",
        "level": "4",
        "keywords": "Humain",
        "type": "Personnage Normal",
        "xp": "31",
        "description": "Les scribes sont les gardiens du savoir et les lettrés de la Confrérie de l’Acier. Ils savent se battre et suivent le même entraînement de base que n’importe quel autre membre de l’organisation ;toutefois, leur rôle n’est pas celui de combattant. Ils gèrent la tenue des catalogues, les réparations, l’acquisition et l’étude des artefacts tech- nologiques qui tombent entre les mains de la Confrérie. Lorsque leur expertise est nécessaire, ils accompagnent parfois des troupes sur le terrain, par exemple pour récupérer ou localiser des objets d’importance, mais la plupart des scribes restent à la base des opérations de leur chapitre.",
        "strength": "5",
        "perception": "6",
        "endurance": "5",
        "charisma": "5",
        "intelligence": "7",
        "agility": "5",
        "luck": "4",
        "health": "9",
        "initiative": "11",
        "defense": "1",
        "carryWeight": "100 kg",
        "luckPoints": "–",
        "ballisticR": "1 (bras,jambes,buste)",
        "energyR": "2 (bras,jambes,buste)",
        "poisonR": "0",
        "radiationR": "2 (bras,jambes,buste)",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 5), 5 $CD$ de dégâts balistiques"
            },
            {
                "title": "PISTOLET LASER",
                "description": "PER + Armes à énergie (SR 8), 4 $CD$ de dégâts énergétiques Perforants 1, portée C, cadence de tir 2, Combat rapproché"
            }
        ],
        "effects": [
            {
                "title": "Chaîne de Cohésion",
                "description": "pour une action majeure, un Scribe peut ordonner à un personnage de la Confrérie de l’Acier d’un niveau inférieur au sien de procéder à une action majeure. Le Scribe aide cette action avec un test de CHA + Discours."
            },
            {
                "title": "Expertise d’avant-guerre",
                "description": "le Scribe gagne 1d20 de bonus lorsqu’il effectue un test pour examiner, iden- tifier ou utiliser de la technologie d’avant-guerre."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Armure de scribe de la Confrérie, pistolet laser, holo- plaques de la Confrérie de l’Acier, richesse 2."
            }
        ],
        "skills": [
            "Armes à énergie 2",
            "Médecine 1",
            "Crochetage 2",
            "Réparations 2",
            "Discours* 2",
            "Science* 4",
            "Discrétion 2",
            "Survie 1"
        ]
    },
    {
        "name": "Lancier",
        "level": "5",
        "keywords": "Humain",
        "type": "Personnage Normal",
        "xp": "38",
        "description": "Les lanciers sont les membres de la Confrérie qui pilotent les vertiptères. Ils suivent un entraînement spécial, afin d’apprendre comment faire voler et entre- tenir la flotte possédée par l’organisation. Ce sont eux qui lui permettent le transport de troupes et le soutien aérien. Non seulement les lanciers doivent connaître leur véhicule sur le bout du doigt, mais aussi savoir voler sous un feu soutenu. Ils se concentrent, certes, sur le combat aérien, mais ils possèdent aussi des armes laser au cas où ils se retrouveraient au sol, au milieu d’une échauffourée.",
        "strength": "5",
        "perception": "6",
        "endurance": "6",
        "charisma": "5",
        "intelligence": "6",
        "agility": "6",
        "luck": "4",
        "health": "11",
        "initiative": "12",
        "defense": "1",
        "carryWeight": "100 kg",
        "luckPoints": "–",
        "ballisticR": "2 (bras,jambes,buste)",
        "energyR": "2 (bras,jambes,buste)",
        "poisonR": "0",
        "radiationR": "1 (bras,jambes,buste)",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 5), 5 $CD$ de dégâts balistiques"
            },
            {
                "title": "FUSIL LASER À CANON LONG",
                "description": "PER + Armes à énergie (SR 9), 5 $CD$ de dégâts énergétiques Perforants 1, portée M, cadence de tir 2, Deux mains"
            }
        ],
        "effects": [
            {
                "title": "Chaîne de Cohésion",
                "description": "pour une action majeure, un lancier peut ordonner à un personnage de la Confrérie de l’Acier d’un niveau inférieur au sien de procéder à une action majeure. Le Lancier aide cette action avec un test de CHA + Discours."
            },
            {
                "title": "Entraînement vertiptère",
                "description": "le lancier gagne 1d20 $CD$ lorsqu’il effectue des tests pour piloter un vertiptère."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Uniforme de la Confrérie de l’Acier (veste bombers), fusil laser, holoplaques de la Confrérie de l’Acier, richesse 2."
            }
        ],
        "skills": [
            "Armes à énergie* 3",
            "Explosifs 1",
            "Armes légères 1",
            "Pilotage* 4",
            "Armes lourdes 1",
            "Réparations 3",
            "Athlétisme 1",
            "Science 1"
        ]
    },
    {
        "name": "Pillard",
        "level": "2",
        "keywords": "Pillard Humain",
        "type": "Personnage Normal",
        "xp": "17",
        "description": "Un pillard classique et solitaire est à peu près aussi mena- çant qu’une capsule de Nuka-Cola sous la semelle, mal- heureusement pour les voyageurs, ils le savent et ne se déplacent presque qu’en groupe. Les pillards portent en général des armures de bric et de broc, dont les diverses parties ont été dérobées à leurs précédentes victimes, ainsi que des armes obtenues de la même manière. Les pillards se montrent hostiles envers toute personne ne faisant pas partie de leur groupe et vont jusqu’à se battre contre des gangs rivaux.",
        "strength": "6",
        "perception": "5",
        "endurance": "6",
        "charisma": "4",
        "intelligence": "5",
        "agility": "6",
        "luck": "4",
        "health": "8",
        "initiative": "11",
        "defense": "1",
        "carryWeight": "55 kg",
        "luckPoints": "–",
        "ballisticR": "1 (bras,buste)",
        "energyR": "1 (bras,buste)",
        "poisonR": "0",
        "radiationR": "0",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 8), 2 $CD$ de dégâts balistiques"
            },
            {
                "title": "DÉMONTE-PNEU",
                "description": "FOR + Armes de corps à corps (SR 8), 4 $CD$ de dégâts balistiques"
            },
            {
                "title": "ARME DE FORTUNE",
                "description": "AGI + Armes légères (SR 8), 3 $CD$ de dégâts balistiques, portée C, cadence de tir 2, Combat rapproché, Imprévisible"
            }
        ],
        "effects": [
            {
                "title": "Se lâcher",
                "description": "une fois par combat, le pillard peut « se lâcher » et tirer une salve de son arme de fortune. Il ajoute alors la cadence de tir (2) aux dégâts de son arme pour cette seule attaque (pour un total de 5 $CD$ )."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Vêtement de cuir, arme de fortune, démonte-pneu, richesse 1."
            }
        ],
        "skills": [
            "Armes de corps à corps* 2",
            "Médecine 1",
            "Armes légères* 2",
            "Projectiles 1",
            "Discrétion 1",
            "Réparations 1",
            "Mains nues 2",
            "Survie 1"
        ]
    },
    {
        "name": "Chef Pillard",
        "level": "10",
        "keywords": "Pillard Humain",
        "type": "Personnage Majeur",
        "xp": "222",
        "description": "Les chefs pillards sont à la tête d’un gang. Ils possèdent, en général, de meilleures armes et armures que leurs suivants et ont tendance à être des combattants endur- cis. Ils ont atteint leur position par la force, le sens du commandement et les bains de sang et ce sont ces mêmes qualités qui leur font garder leur rang.",
        "strength": "8",
        "perception": "9",
        "endurance": "8",
        "charisma": "8",
        "intelligence": "7",
        "agility": "8",
        "luck": "6",
        "health": "30",
        "initiative": "17",
        "defense": "1",
        "meleeBonus": "+1 $CD$",
        "carryWeight": "65 kg",
        "luckPoints": "6",
        "ballisticR": "3 (buste,bras) ;2 (jambes)",
        "energyR": "3 (buste,bras) ;2 (jambes)",
        "poisonR": "0",
        "radiationR": "0",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 10), 3 $CD$ de dégâts balistiques"
            },
            {
                "title": "GRENADE À FRAGMENTATION",
                "description": "PER + Explosifs (SR 11), 6 $CD$ de dégâts balistiques, portée M, Projectiles, Zone d’impact"
            },
            {
                "title": "FUSIL DE CHASSE",
                "description": "AGI + Armes légères (SR 10), 6 $CD$ de dégâts balistiques Perforants 1, portée M, Deux mains"
            }
        ],
        "effects": [
            {
                "title": "Agressif",
                "description": "le chef pillard est prompt à attaquer lorsqu’il sent une proie. Quand il entre en scène, il génère immédiatement 1 point d’action. Si le chef pillard est un allié, ce point est placé dans la réserve du groupe. S’il est un ennemi, le point rejoint la réserve du MJ."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Plastron lourd de pillard, jambière de cuir solide x2, brassard de pillard solide x2, 3 grenades à fragmen- tation, fusil de chasse, richesse 2."
            }
        ],
        "skills": [
            "Armes de corps à corps * 1",
            "Explosifs* 2",
            "Armes légères* 2",
            "Mains nues 2",
            "Armes lourdes* 4",
            "Projectiles 1",
            "Athlétisme 2",
            "Réparations 2",
            "Discours 2",
            "Survie 3",
            "Discrétion 1"
        ]
    },
    {
        "name": "Pillard Psycho",
        "level": "7",
        "keywords": "Pillard Humain",
        "type": "Personnage Normal",
        "xp": "52",
        "description": "Ces pillards, nommés d’après leur dépendance au Psycho, sont parmi les représentants les plus hostiles et agressifs de leur groupe. En combat, ils sont heureux de manier leurs armes de corps à corps, entretenant leur rage et leur résistance à la douleur avec leur drogue favorite. Les identifier n’est pas toujours évident au premier abord, mais on peut noter qu’ils portent peu d’armes à feu et que leur armure leur recouvre surtout le crâne, les bras et le torse, afin de les protéger en combat rapproché.",
        "strength": "7",
        "perception": "6",
        "endurance": "7",
        "charisma": "4",
        "intelligence": "5",
        "agility": "6",
        "luck": "4",
        "health": "14",
        "initiative": "12",
        "defense": "1",
        "meleeBonus": "+1 $CD$",
        "carryWeight": "65 kg",
        "luckPoints": "–",
        "ballisticR": "1 (bras,jambes,buste)",
        "energyR": "2 (bras,jambes,buste)",
        "poisonR": "0",
        "radiationR": "0",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 8), 3 $CD$ de dégâts balistiques"
            },
            {
                "title": "MACHETTE",
                "description": "FOR + Armes de corps à corps (SR 10), 4 $CD$ de dégâts balistiques Perforants 1 $CD$"
            },
            {
                "title": "FUSIL À DOUBLE CANON",
                "description": "AGI + Armes légères (SR 8), 6 $CD$ dégâts balistiques Brutaux, De zone, portée C, Deux mains, Imprécis"
            },
            {
                "title": "COCKTAIL MOLOTOV",
                "description": "PER + Explosifs (SR 6), 4 $CD$ de dégâts énergétiques Persistants, portée M, Projectiles, Zone d’impact"
            }
        ],
        "effects": [
            {
                "title": "PCP ou TNT",
                "description": "un pillard psycho a toujours sur lui un Cocktail Molotov ou une dose de Psycho. Ce qu’il a dans ses poches dépend de la première action qu’il entreprend, entre les deux fournies plus bas"
            },
            {
                "title": "Molotov",
                "description": "une fois par combat, un pillard psycho peut jeter un cocktail Molotov, en utilisant les caractéristiques fournies."
            },
            {
                "title": "Psycho",
                "description": "un pillard psycho peut utiliser une dose de Psycho grâce à une action mineure. Pour tout le reste du combat, le pillard psycho ajoute +2 $CD$ à tous ses jets de dégâts et +2 à ses résistances aux dégâts balistiques et énergétiques."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "de cuir, plastron de cuir, fusil à double canon, machette, richesse 1."
            }
        ],
        "skills": [
            "Armes à énergie 1",
            "Médecine 2",
            "Armes de corps à corps * 3",
            "Projectiles 1",
            "Armes légères* 2",
            "Réparations 1",
            "Athlétisme 1",
            "Science 1",
            "Discrétion 1",
            "Survie 2",
            "Mains nues 2"
        ]
    },
    {
        "name": "Pillard Fouineur",
        "level": "7",
        "keywords": "Pillard Humain",
        "type": "Personnage Normal",
        "xp": "60",
        "description": "En général, on reconnaît ces combattants revenus de tout à leur armure épaisse et à leur comportement agressif. Les gangs de pillards qui perdurent, ou ceux composés de membres expérimentés, sont souvent constitués presque entièrement de Pillards Fouineurs. Un seul Fouineur peut déjà être une redoutable nuisance, un groupe entier peut très facilement prendre la vie (et les possessions) de n’importe quel voyageur des Terres désolées.",
        "strength": "6",
        "perception": "7",
        "endurance": "6",
        "charisma": "5",
        "intelligence": "5",
        "agility": "6",
        "luck": "4",
        "health": "13",
        "initiative": "13",
        "defense": "1",
        "carryWeight": "105 kg",
        "luckPoints": "–",
        "ballisticR": "3 (bras,buste) ;2 (jambes)",
        "energyR": "3 (bras,buste) ;2 (jambes)",
        "poisonR": "0",
        "radiationR": "0",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 7), 2 $CD$ de dégâts balistiques"
            },
            {
                "title": "MACHETTE",
                "description": "FOR + Armes de corps à corps (SR 9), 4 $CD$ de dégâts balistiques Perforants 1 $CD$"
            },
            {
                "title": "FUSIL DE COMBAT",
                "description": "AGI + Armes légères (SR 9), 5 $CD$ de dégâts balistiques De zone, portée C, Deux mains, Imprécis"
            }
        ],
        "effects": [
            {
                "title": "Agressif",
                "description": "le pillard fouineur est prompt à attaquer lorsqu’il sent une proie. Quand il entre en scène, il génère immédiatement 1 point d’action. Si le pillard fouineur est un allié, ce point est placé dans la réserve du groupe. S’il est un ennemi, le point rejoint la réserve du MJ."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Plastron lourd de pillard, jambière de pillard solide x2, brassard lourd de pillard x2, fusil de combat, machette, richesse 1."
            }
        ],
        "skills": [
            "Armes à énergie 2",
            "Mains nues 1",
            "Armes de corps à corps * 3",
            "Projectiles 1",
            "Armes légères* 3",
            "Réparations 1",
            "Armes lourdes 1",
            "Survie 2",
            "Athlétisme 2"
        ]
    },
    {
        "name": "Pillard Vétéran",
        "level": "8",
        "keywords": "Pillard Humain",
        "type": "Personnage Notable",
        "xp": "120",
        "description": "Réussir à rester en vie envers et contre tout vous fait souvent gagner au moins une once de respect parmi vos pairs et c’est bel et bien le cas des pillards vétérans. Leur armure améliorée et leur armement puissant démontrent leur capacité, non seulement à survivre, mais encore à prospérer dans les Terres désolées… et en font des enne- mis redoutables. À la fois bons en combat et intelligents, il serait risqué de les sous-estimer.",
        "strength": "7",
        "perception": "8",
        "endurance": "7",
        "charisma": "6",
        "intelligence": "5",
        "agility": "7",
        "luck": "6",
        "health": "21",
        "initiative": "17",
        "defense": "1",
        "meleeBonus": "+1 $CD$",
        "carryWeight": "95 kg",
        "luckPoints": "3",
        "ballisticR": "2 (toutes)",
        "energyR": "2 (toutes)",
        "poisonR": "0",
        "radiationR": "0",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 9), 3 $CD$ de dégâts balistiques"
            },
            {
                "title": "MACHETTE",
                "description": "FOR + Armes de corps à corps (SR 11), 3 $CD$ de dégâts balistiques Perforants 1 $CD$"
            },
            {
                "title": "FUSIL DE COMBAT",
                "description": "AGI + Armes légères (SR 11), 3 $CD$ de dégâts balistiques, portée M, cadence de tir 2, Deux mains"
            },
            {
                "title": "COCKTAIL MOLOTOV",
                "description": "PER + Explosifs (SR 9), 4 $CD$ de dégâts énergétiques Persistants, portée M, Projectiles, Zone d’impact. (Voir ci-dessous.)"
            }
        ],
        "effects": [
            {
                "title": "C’est moi qui commande",
                "description": "un pillard vétéran peut utiliser une action mineure pour ordonner à un pillard de rang inférieur, et se trouvant à portée Courte, d’effectuer immédiatement une action mineure. Il peut aussi utiliser une action majeure pour ordonner à un autre pillard d’effectuer immé- diatement une action majeure."
            },
            {
                "title": "Se lâcher",
                "description": "une fois par combat, le pillard vétéran peut « se lâcher » et tirer une salve de son fusil de combat. Il ajoute alors la cadence de tir (2) aux dégâts de son arme pour cette seule attaque (pour un total de 7 $CD$ )."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Armure à pointes, fusil de combat, machette, richesse 2."
            }
        ],
        "skills": [
            "Armes de corps à corps* 4",
            "Explosifs 1",
            "Armes légères* 4",
            "Mains nues 2",
            "Athlétisme 2",
            "Médecine 1",
            "Discours 2",
            "Survie 2",
            "Discrétion 1"
        ]
    },
    {
        "name": "Agent Du Réseau Du Rail",
        "level": "7",
        "keywords": "Humain",
        "type": "Personnage Normal",
        "xp": "39",
        "description": "La faction secrète du Réseau du Rail cherche à libérer les synthétiques de troisième génération contrôlés par l’Institut. Ses agents travaillent souvent dans l’ombre, agissent et s’habillent de la façon la plus discrète possible. Ils préfèrent s’en remettre au subterfuge pour mener leurs missions à bien. Cela ne les empêche toutefois pas de sortir leurs armes lorsqu’on leur met des bâtons dans les roues ou que l’on pactise avec leurs ennemis, par exemple la Confrérie de l’Acier.",
        "strength": "5",
        "perception": "7",
        "endurance": "6",
        "charisma": "6",
        "intelligence": "6",
        "agility": "5",
        "luck": "4",
        "health": "13",
        "initiative": "12",
        "defense": "1",
        "carryWeight": "100 kg",
        "luckPoints": "–",
        "ballisticR": "1 (bras,jambes,buste)",
        "energyR": "1 (bras,jambes,buste)",
        "poisonR": "0",
        "radiationR": "0",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 5), 2 $CD$ de dégâts balistiques"
            },
            {
                "title": "FUSIL DE CHASSE",
                "description": "AGI + Armes légères (SR 7), 6 $CD$ de dégâts balistiques Perforants 1, portée M, Deux mains"
            }
        ],
        "effects": [
            {
                "title": "Agent du Rail",
                "description": "lorsqu’il travaille en secret et qu’il ment, l’Agent du Rail gagne 1d20 supplémentaire à tous ses tests de Discours."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Vêtements résistants, richesse 2."
            }
        ],
        "skills": [
            "Armes à énergie 1",
            "Médecine 1",
            "Armes de corps à corps 1",
            "Réparations 1",
            "Armes légères* 2",
            "Science 2",
            "Crochetage 2",
            "Survie 2",
            "Discours 1",
            "Troc 1",
            "Discrétion* 3"
        ]
    },
    {
        "name": "Artilleur",
        "level": "6",
        "keywords": "Humain",
        "type": "Personnage Normal",
        "xp": "45",
        "description": "Les artilleurs sont peut-être le groupe le plus prolifique de toutes les Terres désolées, juste après les pillards. Ils se présentent comme mercenaires, mais les approcher pour leur proposer des capsules en échange d’une mission peut s’avérer difficile. Ils choisissent souvent des ponts effon- drés comme base d’opérations et installent parfois des ascenseurs pour atteindre les « étages » supérieurs et ne pas rester au niveau du sol. Les artilleurs sont extrême- ment territoriaux, défendent férocement leurs lieux de vie et sont connus pour avoir programmé des Laserotron, lesquels font partie intégrante de leur arsenal.",
        "strength": "5",
        "perception": "6",
        "endurance": "6",
        "charisma": "5",
        "intelligence": "5",
        "agility": "7",
        "luck": "4",
        "health": "12",
        "initiative": "13",
        "defense": "1",
        "carryWeight": "100 kg",
        "luckPoints": "–",
        "ballisticR": "1 (bras) ;2 (jambes,buste)",
        "energyR": "2 (bras,jambes,buste)",
        "poisonR": "0",
        "radiationR": "0",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 5), 4 $CD$ de dégâts balistiques"
            },
            {
                "title": "ARME LASER",
                "description": "PER + Armes à énergie (SR 9), 4 $CD$ de dégâts énergétiques Perforants 1, portée C, cadence de tir 2 $CD$ OU"
            },
            {
                "title": "CARABINE DE COMBAT",
                "description": "AGI + Armes légères (SR 10), 5 $CD$ de dégâts balistiques, portée M, cadence de tir 2, Deux mains"
            }
        ],
        "effects": [
            {
                "title": "Se lâcher",
                "description": "une fois par combat, l’artilleur peut « se lâcher » et tirer une salve de sa carabine de combat. Il ajoute alors la cadence de tir (2) aux dégâts de son arme pour cette seule attaque (pour un total de 7 $CD$ )."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Plastron d’armure de combat, jambière de cuir x2, brassard de cuir x2, arme laser ou carabine de com- bat, richesse 2."
            }
        ],
        "skills": [
            "Armes à énergie* 3",
            "Athlétisme 1",
            "Armes de corps à corps 3",
            "Science 2",
            "Armes légères* 3",
            "Survie 1",
            "Armes lourdes 2"
        ]
    },
    {
        "name": "Enfant D’atome",
        "level": "6",
        "keywords": "Humain",
        "type": "Personnage Normal",
        "xp": "45",
        "description": "Certains affirment que les Enfants d’Atome sont des fana- tiques, d’autres qu’ils forment un culte comme un autre… Quoi qu’il en soit, on peut en trouver dans toutes les Terres désolées et ils vénèrent les matériaux radioactifs ainsi que leurs effets. Ils se regroupent souvent dans un lieu précis, hautement radioactif ou mieux encore : un site possédant un support matériel devant lequel ils peuvent prier, comme un cratère de bombe nucléaire. Étrangement, les Enfants d’Atome semblent peu souf- frir des radiations, s’élevant pourtant parfois à un taux cent fois supérieur à ce qui tuerait un humain. Eux ne semblent pas tomber malades ni devenir des goules. Lorsqu’on les croise, ils tentent toujours de répandre la bonne parole de l’Atome, mais certains groupes sont paranoïaques et hostiles aux étrangers.",
        "strength": "5",
        "perception": "5",
        "endurance": "6",
        "charisma": "8",
        "intelligence": "5",
        "agility": "5",
        "luck": "5",
        "health": "14",
        "initiative": "10",
        "defense": "1",
        "carryWeight": "100 kg",
        "luckPoints": "–",
        "ballisticR": "1 (bras,jambes,buste)",
        "energyR": "1 (bras,jambes,buste)",
        "poisonR": "0",
        "radiationR": "0",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "Attaque à mains nues",
                "description": "FOR + Mains nues (SR 5), 2 $CD$ de dégâts balistiques"
            },
            {
                "title": "Pistolet Gamma",
                "description": "PER + Armes à énergie (SR 8), 3 $CD$ de dégâts de radiation, Étourdissant, Perfo- rant 1, portée M, cadence de tir 1, Imprécis, Zone d’impact"
            }
        ],
        "effects": [
            {
                "title": "Que vive l’Atome",
                "description": "les Enfants d’Atome ont l’habitude de vivre dans les lieux les plus irradiés des Terres désolées et n’en subissent presque aucune conséquence. Que ce soit par chance, disposition génétique ou véritable preuve de l’existence de l’Atome, ils gagnent +2 à leur DR de Radiation."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Vêtements résistants, pistolet Gamma, 2d20 cartou- ches Gamma, richesse 1."
            }
        ],
        "skills": [
            "Armes à énergie 3",
            "Réparations 1",
            "Armes de corps à corps 1",
            "Survie* 4",
            "Discours 3",
            "Troc 1",
            "Discrétion 2"
        ]
    },
    {
        "name": "Habitant De L’abri",
        "level": "7",
        "keywords": "Humain",
        "type": "Personnage Normal",
        "xp": "52",
        "description": "Dans les Terres désolées, certains Abris logent ou ont logé des résidents. Ces derniers sont appelés par les popula- tions extérieures les Habitants de l’Abri. Il est bien rare d’entrevoir le bleu vif des combinaisons Vault-Tec : bon nombre d’Abris sont encore scellés ou ont rencontré un destin funeste à la suite des horribles expériences qu’on y a menées. D’autres bunkers du Commonwealth ouvrent leurs portes aux étrangers pour commercer avec eux, et tous les groupes humains tombés aux mains des fabri- cants des abris antiradiations n’ont pas disparu.",
        "strength": "5",
        "perception": "6",
        "endurance": "7",
        "charisma": "6",
        "intelligence": "6",
        "agility": "6",
        "luck": "5",
        "health": "14",
        "initiative": "10",
        "defense": "1",
        "carryWeight": "100 kg",
        "luckPoints": "–",
        "ballisticR": "1 (bras,jambes,buste)",
        "energyR": "1 (bras,jambes,buste)",
        "poisonR": "0",
        "radiationR": "2 (bras,jambes,buste)",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 6), 3 $CD$ de dégâts balistiques"
            },
            {
                "title": "PISTOLET 10 MM",
                "description": "AGI + Armes légères (SR 9), 4 $CD$ de dégâts balistiques, portée C, cadence de tir 2, Combat rapproché, Fiable"
            }
        ],
        "effects": [
            {
                "title": "Enfant de l’Abri",
                "description": "Sa jeunesse saine aux mains de médecins compétents et d’auto-docs sophistiqués implique que l’habitant de l’Abri réduit la difficulté de tous les tests d’END destinés à résister aux effets des maladies. Le MJ décide pour son PNJ du type d’expériences qui a eu lieu dans son Abri. Une fois par quête, le MJ peut introduire une complication qui reflète la nature de cette expérimentation, à laquelle l’habitant de l’Abri a participé contre son gré ou en lien avec sa jeunesse passée en isole- ment et confinement dans son Abri. Dans ce cas, il regagne immédiatement un point de chance."
            },
            {
                "title": "Éduqué",
                "description": "l’habitant de l’Abri possède un atout per- sonnel supplémentaire."
            },
            {
                "title": "Doué",
                "description": "choisissez deux attributs S.P.E.C.I.A.L. et augmentez-les de +1."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Combinaison de l’Abri, pistolet 10 mm, 2d20 muni- tions 10 mm, richesse 2."
            }
        ],
        "skills": [
            "Armes à énergie 1",
            "Réparations* 2",
            "Armes de corps à corps 2",
            "Science 3",
            "Armes légères* 3",
            "Survie* 2",
            "Mains nues 1",
            "Troc* 2",
            "Médecine 1"
        ]
    },
    {
        "name": "Habitant Des Terres Désolées",
        "level": "2",
        "keywords": "Humain",
        "type": "Personnage Normal",
        "xp": "17",
        "description": "« Habitants des Terres désolées » est le nom donné aux très nombreux individus qui errent, voyagent et se fixent dans tout le territoire. Beaucoup d’entre eux n’ont rien de remarquable, et ne cherchent qu’à survivre à tout prix. Certains sortent de l’ordinaire et savent manier les armes, par exemple, pendant que d’autres peuvent maîtriser des compétences uniques, reflétant leur expérience de la vie et leur passé. Ils peuvent venir de n’importe quel village du Commonwealth et de toutes les strates de la société.",
        "strength": "7",
        "perception": "6",
        "endurance": "7",
        "charisma": "4",
        "intelligence": "5",
        "agility": "6",
        "luck": "4",
        "health": "8",
        "initiative": "11",
        "defense": "1",
        "carryWeight": "100 kg",
        "luckPoints": "–",
        "ballisticR": "1 (bras,jambes,buste)",
        "energyR": "1 (bras,jambes,buste)",
        "poisonR": "0",
        "radiationR": "0",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 8), 2 $CD$ de dégâts balistiques"
            },
            {
                "title": "MACHETTE",
                "description": "FOR + Armes de corps à corps (SR 9), 3 $CD$ de dégâts balistiques Perforants 1 $CD$"
            },
            {
                "title": "FUSIL À DOUBLE CANON",
                "description": "AGI + Armes légères (SR 8), 5 $CD$ de dégâts balistiques Brutaux, De zone, portée C, Deux mains, Imprécis"
            }
        ],
        "effects": [
            {
                "title": "Fouille",
                "description": ""
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Vêtements de cuir, fusil à double canon, richesse 1."
            }
        ],
        "skills": [
            "Armes de corps à corps 2",
            "Réparations 1",
            "Armes légères* 2",
            "Survie * 2",
            "Athlétisme 1",
            "Troc 1",
            "Discours 1",
            "Mains nues 1"
        ]
    },
    {
        "name": "Marchand Caravanier",
        "level": "4",
        "keywords": "Humain",
        "type": "Personnage Notable",
        "xp": "62",
        "description": "Les marchands et les caravaniers se trouvent souvent autour des grands campements et voyagent sur la plupart des grandes routes qui sillonnent les Terres désolées. Certains s’installent en dur dans une ville ou une autre, ouvrant leur boutique dans des bâtiments abandonnés ou des stands montés de bric et de broc afin de vendre leurs marchandises. D’autres préfèrent voir du pays et achètent et vendent au fil des lieux traversés ou à l’occa- sion d’une rencontre avec un voyageur. Les marchands sont presque toujours accompagnés d’une escorte, uti- lisent des brahmines comme bêtes de somme et des mer- cenaires comme gardes. Même les commerçants installés dans un lieu fixe emploient une forme de sécurité ou une autre et gardent une arme de confiance à portée de main pour les « urgences ».",
        "strength": "5",
        "perception": "6",
        "endurance": "6",
        "charisma": "9",
        "intelligence": "8",
        "agility": "5",
        "luck": "5",
        "health": "15",
        "initiative": "13",
        "defense": "1",
        "carryWeight": "100 kg",
        "luckPoints": "3",
        "ballisticR": "1 (bras,jambes,buste)",
        "energyR": "2 (bras,jambes,buste)",
        "poisonR": "0",
        "radiationR": "0",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 7), 2 $CD$ de dégâts balistiques"
            },
            {
                "title": "PISTOLET AUTOMATIQUE 10 MM",
                "description": "AGI + Armes légères (SR 8), 3 $CD$ de dégâts balistiques, En Rafale, portée C, cadence de tir 4, Imprécis"
            },
            {
                "title": "FUSIL À DOUBLE CANON",
                "description": "AGI + Armes légères (SR 8), 6 $CD$ de dégâts balistiques Brutaux, De zone, portée C, Deux mains, Imprécis ATTAQUES"
            },
            {
                "title": "COCKTAIL MOLOTOV",
                "description": "PER + Explosifs (SR 6), 4 $CD$ de dégâts énergétiques Persistants, portée M, Projectiles, Zone d’impact. (Voir ci-dessous.)"
            }
        ],
        "effects": [
            {
                "title": "Se lâcher",
                "description": "une fois par combat, le Marchand peut « se lâcher » et tirer une salve de son pistolet auto- matique 10 mm. Il ajoute alors la cadence de tir (4) aux dégâts de son arme pour cette seule attaque (pour un total de 7 $CD$ )."
            },
            {
                "title": "Maître marchand",
                "description": "lorsqu’il fait un test de Troc en opposition, le marchand génère un succès automa- tique en plus de ceux qu’il obtient sur ses dés."
            },
            {
                "title": "Bien achalandé",
                "description": "le marchand est accompagné d’un groupe de brahmines ou tient une boutique. Il possède 6d20 capsules sur lui et le meneur déter- mine les marchandises dont il dispose."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Tenue de nomade, pistolet automatique 10 mm, richesse 6."
            }
        ],
        "skills": [
            "Armes de corps à corps 2",
            "Réparations 1",
            "Armes légères 3",
            "Survie * 2",
            "Crochetage 1",
            "Troc* 4",
            "Discours* 3",
            "Mains nues 2"
        ]
    },
    {
        "name": "Mercenaire",
        "level": "6",
        "keywords": "Humain",
        "type": "Personnage Normal",
        "xp": "45",
        "description": "Les artilleurs ne sont pas les seuls à vendre leurs services : bon nombre d’autres individus et de groupes vendent leurs armes et leur violence contre une poignée de cap- sules. On peut les trouver, parfois, escortant des mar- chands et les protégeant contre les dangers des pillards et de la vie sauvage, mais d’autres gardent aussi les cam- pements, ou des survivants. Un mercenaire bien entraîné, connaissant la région et ses dangers, se paye rubis sur l’ongle… et bon nombre d’entre eux n’hésiteront pas à s’en prendre à vous pour une poignée de capsules.",
        "strength": "6",
        "perception": "6",
        "endurance": "6",
        "charisma": "5",
        "intelligence": "5",
        "agility": "6",
        "luck": "4",
        "health": "12",
        "initiative": "12",
        "defense": "1",
        "carryWeight": "105 kg",
        "luckPoints": "–",
        "ballisticR": "2 (bras,jambes,buste)",
        "energyR": "2 (bras,jambes,buste)",
        "poisonR": "0",
        "radiationR": "0",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 7), 2 $CD$ de dégâts balistiques"
            },
            {
                "title": "CARABINE DE COMBAT",
                "description": "AGI + Armes légères (SR 9), 2 $CD$ de dégâts balistiques, portée M, cadence de tir 2, Deux mains"
            },
            {
                "title": "COCKTAIL MOLOTOV",
                "description": "PER + Explosifs (SR 6), 4 $CD$ de dégâts énergétiques Persistants, portée M, Projectiles, Zone d’impact"
            },
            {
                "title": "FUSIL À DOUBLE CANON",
                "description": "AGI + Armes légères (SR 9), 6 $CD$ de dégâts balistiques Brutaux, De zone, portée C, Deux mains, Imprécis"
            }
        ],
        "effects": [
            {
                "title": "Se lâcher",
                "description": "une fois par combat, le Mercenaire peut « se lâcher » et tirer une salve de sa carabine de combat. Il ajoute alors la cadence de tir (2) aux dégâts de son arme pour cette seule attaque (pour un total de 7 $CD$ )."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Plastron d’armure de combat, jambière d’armure de combat x2, brassard d’armure de combat x2, cara- bine de combat, richesse 2."
            }
        ],
        "skills": [
            "Armes à énergie 1",
            "Discours 1",
            "Armes de corps à corps* 2",
            "Discrétion* 2",
            "Armes légères* 3",
            "Mains nues 1",
            "Armes lourdes 1",
            "Médecine 1",
            "Athlétisme 1",
            "Survie 1"
        ]
    },
    {
        "name": "Milicien",
        "level": "7",
        "keywords": "Humain",
        "type": "Personnage Normal",
        "xp": "39",
        "description": "Parfois vus comme la milice des gens du commun, les miliciens étaient autrefois une faction d’importance dans tout le Commonwealth. Leur influence a beaucoup baissé ces dernières années, mais certains d’entre eux font tou- jours ce qu’ils peuvent pour venir en aide à ceux dans le besoin. La vue d’un milicien est toujours une bonne nouvelle… surtout si l’on se trouve dans un campement menacé par de multiples dangers.",
        "strength": "6",
        "perception": "7",
        "endurance": "5",
        "charisma": "7",
        "intelligence": "5",
        "agility": "5",
        "luck": "4",
        "health": "12",
        "initiative": "12",
        "defense": "1",
        "carryWeight": "105 kg",
        "luckPoints": "–",
        "ballisticR": "1 (bras,jambes,buste)",
        "energyR": "1 (bras,jambes,buste)",
        "poisonR": "0",
        "radiationR": "0",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 6), 3 $CD$ de dégâts balistiques"
            },
            {
                "title": "MOUSQUET LASER",
                "description": "PER + Armes à énergie (SR 10), 5 $CD$ de dégâts Perforants 1, portée M, Deux mains"
            }
        ],
        "effects": [
            {
                "title": "Fouille",
                "description": ""
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Vêtements résistants, richesse 2."
            }
        ],
        "skills": [
            "Armes à énergie 3",
            "Discrétion 1",
            "Armes de corps à corps 2",
            "Médecine 1",
            "Armes légères* 3",
            "Réparations 2",
            "Athlétisme 1",
            "Survie * 1",
            "Discours 2"
        ]
    },
    {
        "name": "Scientifique De L’institut",
        "level": "7",
        "keywords": "Humain",
        "type": "Personnage Normal",
        "xp": "39",
        "description": "La plupart des individus vivant dans l’Institut sont des scientifiques au passé et aux domaines de compétences divers. Ils peuvent superviser des projets demandant des savoirs portant sur la robotique, la biologie, la création de tissus synthétiques, la physique et la génétique pour ne citer que ceux-là. Ils représentent la ressource principale de l’Institut, lui permettant d’améliorer et de développer la technologie dont il dispose.",
        "strength": "4",
        "perception": "8",
        "endurance": "5",
        "charisma": "5",
        "intelligence": "8",
        "agility": "5",
        "luck": "4",
        "health": "12",
        "initiative": "12",
        "defense": "1",
        "carryWeight": "95 kg",
        "luckPoints": "–",
        "ballisticR": "0",
        "energyR": "0",
        "poisonR": "0",
        "radiationR": "0",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "ATTAQUE À MAINS NUES",
                "description": "FOR + Mains nues (SR 4), 2 $CD$ de dégâts balistiques"
            },
            {
                "title": "LASER DE L’INSTITUT",
                "description": "PER + Armes à énergie (SR 10), 4 $CD$ de dégâts énergétiques Brutaux, En rafale, cadence de tir 3, Combat rapproché, Imprécis"
            }
        ],
        "effects": [
            {
                "title": "Blouse de labo",
                "description": "grâce à la praticité du modèle, mais aussi au fait que vous vous sentez tout sim- plement plus intelligent quand vous en enfilez une, porter une blouse vous permet de relancer une fois par scène un seul d20 sur un test de compétence basé sur l’INT que vous effectuez."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Blouse de laboratoire, laser de l’Institut, 2d20 cellules à fusion."
            }
        ],
        "skills": [
            "Armes à énergie 2",
            "Réparations 4",
            "Discours 3",
            "Science* 5",
            "Médecine* 4"
        ]
    }
];