import {BestiaryType, MobDetails} from "./bestiary.model";

export const ROBOTS: MobDetails[] = [
    {
        "name": "Eyebot",
        "level": "2",
        "keywords": "Robot",
        "type": "Créature Normale",
        "xp": "17",
        "body": "5",
        "spirit": "4",
        "melee": "0",
        "range": "3",
        "other": "1",
        "health": "5",
        "initiative": "9",
        "defense": "2",
        "ballisticR": "2 (toutes)",
        "energyR": "2 (toutes)",
        "poisonR": "Immunisé",
        "radiationR": "Immunisé",
        "source": "$OFF$",
        "typeDef":BestiaryType.CREATURE,
        "attacks": [
            {
                "title": "LASER",
                "description": "CORPS + Distance (SR 8), 4 $CD$ de dégâts énergétiques, portée M"
            }
        ],
        "effects": [
            {
                "title": "Robot",
                "description": "l’eyebot est un robot. Il est immunisé contre les effets de la faim, de la soif et de la suffocation. Il est également immunisé contre les dégâts de radiation et de poison. Cependant, les machines ne peuvent pas consommer de nourriture, de boissons ou d’autres consommables, elles ne guérissent pas naturellement et la compétence Médecine ne permet pas de les soigner. Les dégâts qu’elles subissent doivent être réparés (cf. page 34)."
            },
            {
                "title": "Immunisé contre les radiations",
                "description": "l’eyebot réduit à 0 tous les dégâts de radiation qu’il subit et ne peut subir aucun dégât ou effet infligé par des radiations."
            },
            {
                "title": "Immunisé contre le poison",
                "description": "l’eyebot réduit à 0 tous les dégâts de poison qu’il subit et ne peut subir aucun dégât ou effet infligé par du poison."
            },
            {
                "title": "Immunisé contre les maladies",
                "description": "l’eyebot est immunisé contre les effets de toutes les maladies, dont il ne présentera jamais les symptômes."
            },
            {
                "title": "Petit",
                "description": "l’eyebot est plus petit que la majorité des personnages. Les PV normaux de l’eyebot sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, l’eyebot est tué s’il subit la moindre blessure."
            },
            {
                "title": "Transmission radio",
                "description": "l’eyebot peut recevoir et émettre des transmissions radio, il peut aussi les diffuser. Dans ce cas, il est possible d’entendre l’eyebot à portée longue."
            }
        ],
        "inventory": [
            {
                "title": "Récupération",
                "description": "les pilleurs peuvent fouiller les restes d’un eyebot détruit grâce à un test d’INT + Science de difficulté 1. En cas de réussite, ils récupèrent 2 $CD$ composants fréquents. Pour chaque Effet obtenu, ils récupèrent aussi 1 composant peu fréquent."
            }
        ],
        "description": "L’eyebot est l’un des plus petits robots conçus par RobCo Industries. Apercevoir sa forme sphérique flottant au-dessus du sol est monnaie courante dans les Terres désolées. Malgré sa taille compacte, il renferme de nombreux appareils fort utiles : des antennes longue portée qui lui permettent de recevoir des communications radio jusque dans les stations de métro ou d’autres sites souterrains, un système de reconnaissance faciale et vocale pour les applications sécuritaires, et même une arme laser. Dans les États-Unis d’avant-guerre, les eyebots servaient à transmettre des communications radio, des publicités et des bulletins d’information. À présent, ces robots sont utilisés par des organisations comme la Confrérie de l’Acier pour diffuser sa propagande ou les Miliciens pour la surveillance. D’autres unités errent dans les Terres désolées, continuant à suivre leur programmation originale et émettant des stations de radio locales, du bavardage militaire en boucle ou de mystérieux messages sur des fréquences inconnues. Ils sont souvent amicaux, mais se défendent en cas d’attaque. De plus, dégrader leurs systèmes incite à plus d’hostilité de la part des autres unités sur place."
    },
    {
        "name": "Laserotron",
        "level": "13",
        "keywords": "Robot",
        "type": "Créature Normale",
        "xp": "95",
        "body": "9",
        "spirit": "6",
        "melee": "5",
        "range": "5",
        "other": "4",
        "health": "22",
        "initiative": "15",
        "defense": "1",
        "ballisticR": "3 (toutes)",
        "energyR": "3 (toutes)",
        "poisonR": "Immunisé",
        "radiationR": "Immunisé",
        "source": "$OFF$",
        "typeDef":BestiaryType.CREATURE,
        "attacks": [
            {
                "title": "MAINS NUES",
                "description": "CORPS + Corps à corps (SR 14), 9 $CD$ de dégâts balistiques"
            },
            {
                "title": "LASER",
                "description": "CORPS + Distance (SR 14), 9 $CD$ de dégâts énergétiques Brutaux, portée L"
            },
            {
                "title": "AUTODESTRUCTION",
                "description": "CORPS + Distance (SR 14), 6 $CD$ de dégâts balistiques, Zone d’impact"
            }
        ],
        "effects": [
            {
                "title": "Robot",
                "description": "le Laserotron est un robot. Il est immunisé contre les effets de la faim, de la soif et de la suffocation. Il est également immunisé contre les dégâts de radiation et de poison. Cependant, les machines ne peuvent pas consommer de nourriture, de boissons ou d’autres consommables, elles ne guérissent pas naturellement et la compétence Médecine ne permet pas de les soigner. Les dégâts qu’elles subissent doivent être réparés (cf. page 34)."
            },
            {
                "title": "Immunisé contre les radiations",
                "description": "le Laserotron réduit à 0 tous les dégâts de radiation qu’il subit et ne peut subir aucun dégât ou effet infligé par des radiations."
            },
            {
                "title": "Immunisé contre le poison",
                "description": "le Laserotron réduit à 0 $CD$ tous les dégâts de poison qu’il subit et ne peut subir aucun dégât ou effet infligé par du poison."
            },
            {
                "title": "Immunisé contre les maladies",
                "description": "le Laserotron est immunisé contre les effets de toutes les maladies dont il ne présentera jamais les symptômes."
            },
            {
                "title": "Sens aiguisés",
                "description": "au moins l’un des sens du Laserotron est particulièrement aiguisé. Le Laserotron peut essayer de détecter les créatures ou les objets que d’autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu’à un minimum de 0) la difficulté de tous ses tests de PER."
            },
            {
                "title": "Autodestruction",
                "description": "si les jambes et les bras du Laserotron sont blessés, ou si ses points de vie sont tombés à la moitié ou moins de leur maximum, le Laserotron s’avance vers l’ennemi le plus proche et entreprend une action capitale pour déclencher son autodestruction. Celle-ci est une attaque centrée sur le robot, lequel est détruit après cette action."
            },
            {
                "title": "Vision nocturne",
                "description": "le Laserotron peut voir dans l’obscurité la plus totale. Il ignore toute augmentation de difficulté due à une faible luminosité ou aux ténèbres et il peut entreprendre tout test de compétence qui devrait être impossible dans ces conditions."
            }
        ],
        "inventory": [
            {
                "title": "Récupération",
                "description": "les pilleurs peuvent fouiller les restes d’un Laserotron détruit grâce à un test d’INT + Science de difficulté 1. En cas de réussite, ils récupèrent 3 $CD$ cellules à fusion, +1 $CD$ par PA dépensé. Pour chaque Effet obtenu, ils récupèrent aussi 1 composant peu fréquent."
            }
        ],
        "description": "Conçu par RobCo Industries, le Laserotron est un impressionnant robot militaire, destiné à combattre sur la ligne de front et à dévaster les forces ennemies. De puissantes jambes mécaniques propulsent cette machine et lui permettent de se déplacer à une vitesse incroyable vers ses cibles. Ses bras sont conçus pour accueillir une ribambelle d’accessoires afin d’adapter le robot au type de combat qui l’attend. La plupart des modèles de base disposent, à la place des mains, de deux appendices semblables à des griffes. L’équipement le plus destructeur du Laserotron est probablement le laser au centre de sa tête qui confère à la machine l’aspect inhumain d’un cyclope. Ce laser, combiné à la précision parfaite du robot, peut vaporiser des cibles sur le coup. Même gravement endommagé, le Laserotron poursuit sans relâche sa mission. La perte d’un bras ou d’une jambe, voire de graves dégâts à la tête ou au buste, n’empêcheront pas le robot de traquer sa proie. Certaines de ces machines ont même rampé jusqu’à leur adversaire avant de se faire exploser dans une dernière tentative désespérée de remplir leur devoir."
    },
    {
        "name": "Mister Handy",
        "level": "6",
        "keywords": "Robot",
        "type": "Personnage Notable",
        "xp": "90",
        "strength": "6",
        "perception": "7",
        "endurance": "5",
        "charisma": "5",
        "intelligence": "7",
        "agility": "6",
        "luck": "4",
        "health": "15",
        "initiative": "17",
        "defense": "1",
        "meleeBonus": "+0 $CD$",
        "carryWeight": "75 kg",
        "luckPoints": "2",
        "ballisticR": "1 (toutes)",
        "energyR": "1 (toutes)",
        "poisonR": "Immunisé",
        "radiationR": "Immunisé",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "PINCES",
                "description": "FOR + Armes de corps à corps (SR 9), 3 $CD$ de dégâts balistiques, portée C"
            },
            {
                "title": "SCIE CIRCULAIRE",
                "description": "FOR + Armes de corps à corps (SR 9), 3 $CD$ de dégâts balistiques Perforants 1, portée C ATTAQUES"
            },
            {
                "title": "LANCE-FLAMMES",
                "description": "PER + Armes à énergie (SR 10), 3 $CD$ de dégâts énergétiques Persistants, portée C, cadence de tir 1 $CD$"
            }
        ],
        "effects": [
            {
                "title": "Robot",
                "description": "le Mister Handy est un robot. Il est immunisé contre les effets de la faim, de la soif et de la suffocation. Il est également immunisé contre les dégâts de radiation et de poison. Cependant, les machines ne peuvent pas consommer de nourriture, de boissons ou d’autres consommables, elles ne guérissent pas naturellement et la compétence Médecine ne permet pas de les soigner. Les dégâts qu’elles subissent doivent être réparés (cf. page 34)."
            },
            {
                "title": "Immunisé contre les radiations",
                "description": "le Mister Handy réduit à 0 tous les dégâts de radiation qu’il subit et ne peut subir aucun dégât ou effet infligé par des radiations."
            },
            {
                "title": "Immunisé contre le poison",
                "description": "le Mister Handy réduit à 0 tous les dégâts de poison qu’il subit et ne peut subir aucun dégât ou effet infligé par du poison."
            },
            {
                "title": "Immunisé contre les maladies",
                "description": "le Mister Handy est immunisé contre les effets de toutes les maladies, dont il ne présentera jamais les symptômes."
            },
            {
                "title": "Mister Handy",
                "description": "le Mister Handy est doté d’une vision à 360° et de systèmes sensoriels améliorés qui lui permettent de détecter des odeurs, des produits chimiques et des radiations, ce qui se traduit par une difficulté réduite de 1 pour tous les tests de PER basés sur la vue et l’odorat. Il se déplace par propulsion, en flottant au-dessus du sol, et n’est donc pas affecté par le terrain difficile ou les obstacles."
            }
        ],
        "inventory": [
            {
                "title": "Récupération",
                "description": "les pilleurs peuvent fouiller les restes d’un Mister Handy détruit grâce à un test d’INT + Science de difficulté 1."
            }
        ],
        "skills": [
            "Armes à énergie * 3",
            "Discours * 3",
            "Armes de corps à corps * 3",
            "Médecine 1",
            "Armes légères 1",
            "Réparation 2"
        ],
        "description": "Modèle de base de la gamme, le Mister Handy a vu le jour comme unité de réparation, de construction et de maintenance, mais a fini par devenir un élément essentiel de la vie américaine d’avant-guerre. Dans les foyers, un Mister Handy faisait office de serviteur, capable d’entretenir la maisonnée, de cuisiner et même de s’occuper des enfants et des animaux. Dans les commerces, ce modèle faisait office d’agent de sécurité léger ou même d’interface client. Nombre de ces robots errent désormais dans les Terres désolées, leur cœur nucléaire fonctionnant encore des siècles après la Grande Guerre. Certains continuent de suivre leur programmation originelle et travaillent dans les foyers ou les commerces qui les utilisaient, a priori inconscients des changements du monde. D’autres ont été récupérés et reprogrammés pour répondre aux besoins du monde post-apocalyptique : ils font désormais office de domestiques pour des marchands, de barmans ou de compagnons pour les voyageurs."
    },
    {
        "name": "Mister Gutsy",
        "level": "7",
        "keywords": "Robot",
        "type": "Personnage Notable",
        "xp": "104",
        "strength": "6",
        "perception": "7",
        "endurance": "5",
        "charisma": "4",
        "intelligence": "7",
        "agility": "7",
        "luck": "4",
        "health": "15",
        "initiative": "18",
        "defense": "1",
        "meleeBonus": "+0 $CD$",
        "carryWeight": "75 kg",
        "luckPoints": "2",
        "ballisticR": "2 (toutes)",
        "energyR": "2 (toutes)",
        "poisonR": "Immunisé",
        "radiationR": "Immunisé",
        "source": "$OFF$",
        "typeDef":BestiaryType.CHARACTER,
        "attacks": [
            {
                "title": "PINCES",
                "description": "FOR + Armes de corps à corps (SR 9), 4 $CD$ de dégâts balistiques, portée C"
            },
            {
                "title": "PISTOLET AUTOMATIQUE 10 MM",
                "description": "AGI + Distance (SR 11), 5 $CD$ de dégâts balistiques, En rafale, portée C, cadence de tir 4, Combat rapproché, Fiable"
            },
            {
                "title": "LANCE-FLAMMES",
                "description": "PER + Armes à énergie (SR 11), 3 $CD$ de dégâts énergétiques Persistants, portée C, cadence de tir 1 $CD$"
            }
        ],
        "effects": [
            {
                "title": "Robot",
                "description": "le Mister Gutsy est un robot. Il est immunisé contre les effets de la faim, de la soif et de la suffocation. Il est également immunisé contre les dégâts de radiation et de poison. Cependant, les machines ne peuvent pas consommer de nourriture, de boissons ou d’autres consommables, elles ne guérissent pas naturellement et la compétence Médecine ne permet pas de les soigner. Les dégâts qu’elles subissent doivent être réparés (cf. page 34)."
            },
            {
                "title": "Immunisé contre les radiations",
                "description": "le Mister Gutsy réduit à 0 tous les dégâts de radiation qu’il subit et ne peut subir aucun dégât ou effet infligé par des radiations."
            },
            {
                "title": "Immunisé contre le poison",
                "description": "le Mister Gutsy réduit à 0 tous les dégâts de poison qu’il subit et ne peut subir aucun dégât ou effet infligé par du poison."
            },
            {
                "title": "Immunisé contre les maladies",
                "description": "le Mister Gutsy est immunisé contre les effets de toutes les maladies, dont il ne présentera jamais les symptômes. CAPACITÉS SPÉCIALES"
            },
            {
                "title": "Mister Handy",
                "description": "le Mister Gutsy est doté d’une vision à 360° et de systèmes sensoriels améliorés qui lui permettent de détecter des odeurs, des produits chimiques et des radiations, ce qui se traduit par une difficulté réduite de 1 pour tous les tests de PER basés sur la vue et l’odorat. Il se déplace par propulsion, en flottant au-dessus du sol, et n’est donc pas affecté par le terrain difficile ou les obstacles."
            },
            {
                "title": "Mister Gutsy",
                "description": "ces robots sont conçus pour le combat. Les attaques effectuées par un Mister Gutsy obtiennent +1 $CD$ de dégâts. Ils disposent d’un blindage Mister Gutsy en guise d’armure standard. De plus, si un personnage entreprend un test de Discours pour interroger un Mister Gutsy, argumenter avec lui ou lui donner des ordres, la difficulté du test augmente de 2 si ce personnage ne porte pas un uniforme militaire."
            }
        ],
        "inventory": [
            {
                "title": "Récupération",
                "description": "les pilleurs peuvent fouiller les restes d’un Mister Gutsy détruit grâce à un test d’INT + Science de difficulté 1. En cas de réussite, ils récupèrent du carburant de lance-flammes pour 2d20 $CD$ tirs, 2d20 munitions 10 mm, 2 $CD$ composants fréquents, +1 $CD$ par PA dépensé. Pour chaque Effet obtenu, ils récupèrent aussi 1 composant peu fréquent."
            }
        ],
        "skills": [
            "Armes à énergie * 4",
            "Discours 1",
            "Armes de corps à corps * 3",
            "Réparation 1",
            "Armes légères * 4"
        ],
        "description": "L’armée des États-Unis n’a pas manqué de remarquer le potentiel des robots Mister Handy : ses dirigeants ont donc passé commande auprès de General Atomics International pour créer un modèle de combat issu de la gamme Mister Handy. Ainsi fut conçu le modèle Mister Gutsy. Pourvu de plaques de blindage intégrées, d’une vaste gamme d’accessoires de combat létaux, d’améliorations de ses systèmes d’analyse sensorielle et d’une rapidité accrue, il est devenu un garde du corps robotique tout à fait compétent. Sa programmation militaire spéciale lui permet de recevoir et de comprendre des ordres en temps réel ;elle lui confère également une agressivité plus importante au combat et lui permet, au même titre que les soldats humains, de recevoir des rangs dans la hiérarchie militaire. Cette programmation le dote aussi de cette personnalité, unique, de sergent instructeur du corps des Marines. À présent, nombre de Mister Gutsy ne reçoivent plus aucun ordre, mais ils ne peuvent pas comprendre que la guerre est terminée et leurs supérieurs morts depuis longtemps. On peut donc les trouver en train de protéger une base militaire où ils ont servi, ou patrouiller à proximité. Ils se montrent souvent hostiles envers les intrus, bien que quelques rares personnes aient réussi à convaincre un Mister Gutsy qu’elles faisaient partie de l’armée américaine afin d’éviter un conflit avec ces dangereuses machines."
    },
    {
        "name": "Protectron",
        "level": "3",
        "keywords": "Robot",
        "type": "Créature Normale",
        "xp": "24",
        "body": "5",
        "spirit": "5",
        "melee": "2",
        "range": "2",
        "other": "2",
        "health": "8",
        "initiative": "10",
        "defense": "1",
        "ballisticR": "4 (toutes)",
        "energyR": "3 (toutes)",
        "poisonR": "Immunisé",
        "radiationR": "Immunisé",
        "source": "$OFF$",
        "typeDef":BestiaryType.CREATURE,
        "attacks": [
            {
                "title": "PINCES",
                "description": "CORPS + Corps à corps (SR 7), 3 $CD$ de dégâts balistiques"
            },
            {
                "title": "LASERS DE BRAS",
                "description": "CORPS + Distance (SR 7), 3 $CD$ de dégâts énergétiques, En rafale, Perforant 1, portée C, cadence de tir 4 $CD$"
            },
            {
                "title": "AUTODESTRUCTION",
                "description": "CORPS + Distance (SR 7), 6 $CD$ de dégâts balistiques, Zone d’impact"
            }
        ],
        "effects": [
            {
                "title": "Robot",
                "description": "le Protectron est un robot. Il est immunisé contre les effets de la faim, de la soif et de la suffocation. Il est également immunisé contre les dégâts de radiation et de poison. Cependant, les machines ne peuvent pas consommer de nourriture, de boissons ou d’autres consommables, elles ne guérissent pas naturellement et la compétence Médecine ne permet pas de les soigner. Les dégâts qu’elles subissent doivent être réparés (cf. page 34). CAPACITÉS SPÉCIALES"
            },
            {
                "title": "Immunisé contre les radiations",
                "description": "le Protectron réduit à 0 tous les dégâts de radiation qu’il subit et ne peut subir aucun dégât ou effet infligé par des radiations."
            },
            {
                "title": "Immunisé contre le poison",
                "description": "le Protectron réduit à 0 $CD$ tous les dégâts de poison qu’il subit et ne peut subir aucun dégât ou effet infligé par du poison."
            },
            {
                "title": "Immunisé contre les maladies",
                "description": "le Protectron est immunisé contre les effets de toutes les maladies, dont il ne présentera jamais les symptômes."
            },
            {
                "title": "Lasers de bras",
                "description": "si les bras du Protectron subissent une blessure, la cadence de tir de ses lasers de bras décroît de 2. Si les deux bras sont blessés, le robot ne peut plus attaquer avec ses lasers."
            },
            {
                "title": "Se lâcher",
                "description": "une fois par combat, le Protectron peut « se lâcher » et tirer une rafale de ses lasers de bras. Il ajoute alors la cadence de tir (4) aux dégâts de son arme pour cette seule attaque (pour un total de 7 $CD$ ) et peut bénéficier de l’effet de dégâts En rafale sans dépenser de munitions. Si l’un des lasers de bras du Protectron a subi une blessure, cette attaque spéciale n’inflige plus que 5 $CD$ ."
            },
            {
                "title": "Autodestruction",
                "description": "si les deux bras du Protectron sont blessés, ou si ses points de vie sont tombés à la moitié ou moins de leur maximum, le Protectron s’avance vers l’ennemi le plus proche et entreprend une action capitale pour déclencher son autodestruction. Celle-ci est une attaque centrée sur le robot, lequel est détruit après cette action."
            }
        ],
        "inventory": [
            {
                "title": "Récupération",
                "description": "les pilleurs peuvent fouiller les restes d’un Protectron détruit grâce à un test d’INT + Science de difficulté 1. En cas de réussite, ils récupèrent 2 $CD$ composants fréquents, +1 $CD$ par PA dépensé. Pour chaque Effet obtenu, ils récupèrent aussi 1 composant peu fréquent."
            }
        ],
        "description": "Cette autre gamme de robots de RobCo, couronnée de succès elle aussi, a été conçue comme ouvrier multifonctions. Les Protectrons peuvent aider dans les entreprises du bâtiment, dans les bureaux et dans les services publics. Même si ces unités disposent d’une arme laser, celle-ci n’est pas destinée au combat, mais à la protection du robot. Les Protectrons peuvent également s’autodétruire pour anéantir leur agresseur. Diverses personnalités peuvent être programmées dans l’unité, en plus de la personnalité par défaut : pompier, policier, ouvrier du bâtiment, secouriste ou agent de métro. Qu’ils soient actifs ou inactifs, les Protectrons se trouvent dans de nombreux lieux des Terres désolées, comme les stations de métro, les bâtiments publics, les immeubles de bureaux et divers sites industriels."
    },
    {
        "name": "Robot Sentinelle",
        "level": "15",
        "keywords": "Robot",
        "type": "Créature Normale",
        "xp": "109",
        "body": "10",
        "spirit": "6",
        "melee": "4",
        "range": "5",
        "other": "4",
        "health": "40",
        "initiative": "16",
        "defense": "1",
        "ballisticR": "6 (toutes)",
        "energyR": "5 (toutes)",
        "poisonR": "Immunisé",
        "radiationR": "Immunisé",
        "source": "$OFF$",
        "typeDef":BestiaryType.CREATURE,
        "attacks": [
            {
                "title": "CANON MITRAILLEUR",
                "description": "CORPS + Distance (SR 15), 5 $CD$ de dégâts balistiques De zone, En rafale, portée M, cadence de tir 5, Gatling"
            },
            {
                "title": "MAINS NUES",
                "description": "CORPS + Corps à corps (SR 14), 8 $CD$ de dégâts balistiques Brutaux"
            },
            {
                "title": "LANCE-MISSILES",
                "description": "CORPS + Distance (SR 15), 11 $CD$ de dégâts balistiques, portée L, Zone d’impact"
            }
        ],
        "effects": [
            {
                "title": "Robot",
                "description": "le robot sentinelle est un robot. Il est immunisé contre les effets de la faim, de la soif et de la suffocation. Il est également immunisé contre les dégâts de radiation et de poison. Cependant, les machines ne peuvent pas consommer de nourriture, de boissons ou d’autres consommables, elles ne guérissent pas naturellement et la compétence Médecine ne permet pas de les soigner. Les dégâts qu’elles subissent doivent être réparés (cf. page 34)."
            },
            {
                "title": "Immunisé contre les radiations",
                "description": "le robot sentinelle réduit à 0 tous les dégâts de radiation qu’il subit et ne peut subir aucun dégât ou effet infligé par des radiations."
            },
            {
                "title": "Immunisé contre le poison",
                "description": "le robot sentinelle réduit à 0 tous les dégâts de poison qu’il subit et ne peut subir aucun dégât ou effet infligé par du poison."
            },
            {
                "title": "Immunisé contre les maladies",
                "description": "le robot sentinelle est immunisé contre les effets de toutes les maladies, dont il ne présentera jamais les symptômes."
            },
            {
                "title": "Sens aiguisés",
                "description": "au moins l’un des sens du robot sentinelle est particulièrement aiguisé. Le robot sentinelle peut essayer de détecter les créatures ou les objets que d’autres personnages ne pourraient pas repérer, et il réduit de 1 (jusqu’à un minimum de 0) la difficulté de tous ses tests de PER."
            },
            {
                "title": "Agressif",
                "description": "le robot sentinelle est prompt à attaquer lorsqu’il sent une proie. Quand il entre en scène, il génère immédiatement 1 point d’action. Si le robot sentinelle est un allié, ce point est placé dans la réserve du groupe. S’il est un ennemi, le point rejoint la réserve du MJ."
            },
            {
                "title": "Autodestruction",
                "description": "si les deux bras du robot sentinelle sont blessés ou si ses points de vie sont tombés à la moitié ou moins de leur maximum, le Protectron s’avance vers l’ennemi le plus proche et entreprend une action capitale pour déclencher son autodestruction. Celle-ci est une attaque centrée sur le robot, lequel est détruit après cette action."
            }
        ],
        "inventory": [
            {
                "title": "Récupération",
                "description": "les pilleurs peuvent fouiller les restes d’un robot sentinelle détruit grâce à un test d’INT + Science de difficulté 1. En cas de réussite, ils récupèrent 1 réacteur à fusion, 2 $CD$ composants fréquents, +1 $CD$ par PA dépensé. Pour chaque Effet obtenu, ils récupèrent aussi 1 composant peu fréquent."
            }
        ],
        "description": "L’armée des États-Unis a fait usage de robots dans toute sa structure, notamment au combat, et aucune de ces machines n’était plus solide ou destructrice que le robot sentinelle. Les Laserotrons privilégiaient le combat au corps à corps et les Mister Gutsy équilibraient vitesse et puissance de feu ;quant aux robots sentinelles, ils étaient conçus pour tirer parti de leur blindage lourd et de leurs armes encore plus lourdes. Ces machines impressionnantes se déplacent sur des roues plutôt que sur des jambes ou à l’aide d’un propulseur et elles disposent d’un blindage lourd qui peut sans souci résister à un tir direct de missile ou de mini-bombe nucléaire. Leur arsenal incorporé inclut un canon mitrailleur automatique et parfois des missiles. Bien que leur programmation vise à éliminer les ennemis à distance, ils sont tout aussi capables de porter des attaques au corps à corps avec un résultat dévastateur. Certains modèles contiennent même un programme d’autodestruction qui sert autant à abattre les ennemis qu’à empêcher l’unité de tomber entre de mauvaises mains. Les robots sentinelles se trouvent souvent dans des complexes militaires ou scientifiques, bien que certains modèles semblent avoir servi à des fins non militaires, telles que la sécurité générale. En de rares occasions, on a pu observer qu’un robot sentinelle, à l’instar de ses cousins Mister Handy, a pu dépasser sa programmation originelle (par exemple, Ironsides, capitaine de l’USS Constitution, et son équipage de robots, ou les unités reprogrammées et employées en tant que gardes domestiques). Dans la plupart des cas, néanmoins, rares sont ceux qui sont sortis vivants d’une rencontre avec un robot sentinelle."
    },
    {
        "name": "Tourelle Mitrailleuse Mk I",
        "level": "5",
        "keywords": "Robot",
        "type": "Créature Normale",
        "xp": "38",
        "body": "6",
        "spirit": "5",
        "melee": "–",
        "range": "3",
        "other": "–",
        "health": "11",
        "initiative": "11",
        "defense": "1",
        "ballisticR": "1 (toutes)",
        "energyR": "1 (toutes)",
        "poisonR": "Immunisée",
        "radiationR": "Immunisée",
        "source": "$OFF$",
        "typeDef":BestiaryType.CREATURE,
        "attacks": [
            {
                "title": "MITRAILLEUSE",
                "description": "CORPS + Distance (SR 9), 5 $CD$ de dégâts balistiques Étourdissants, En Rafale, portée M, cadence de tir 3 $CD$"
            }
        ],
        "effects": [
            {
                "title": "Robot",
                "description": "la tourelle est un robot. Elle est immunisée contre les effets de la faim, de la soif et de la suffocation. Elle est également immunisée contre les dégâts de radiation et de poison. Cependant, les machines ne peuvent pas consommer de nourriture, de boissons ou d’autres consommables, elles ne guérissent pas naturellement et la compétence Médecine ne permet pas de les soigner. Les dégâts qu’elles subissent doivent être réparés (cf. page 34)."
            },
            {
                "title": "Immunisée contre le poison",
                "description": "la tourelle réduit à 0 $CD$ tous les dégâts de poison qu’elle subit et ne peut subir aucun dégât ou effet infligé par du poison."
            },
            {
                "title": "Immunisée contre les radiations",
                "description": "la tourelle réduit à 0 tous les dégâts de radiation qu’elle subit et ne peut subir aucun dégât ou effet infligé par des radiations."
            },
            {
                "title": "Immunisée contre les maladies",
                "description": "la tourelle est immunisée contre les effets de toutes les maladies dont elle ne présentera jamais les symptômes."
            }
        ],
        "inventory": [
            {
                "title": "Récupération",
                "description": "les pilleurs peuvent fouiller les restes d’une tourelle détruite grâce à un test réussi d’INT + Science de difficulté 1. En cas de réussite, ils récupèrent 3d20 munitions de 5.56 mm ainsi que 2 $CD$ composants peu fréquents."
            }
        ],
        "description": "Grâce à son trépied, cette tourelle automatique peut être placée sur n’importe quelle surface plane assez grande pour l’accueillir. Elle est recouverte d’un blindage souvent peint en vert sombre et, parfois, porte encore son symbole « MK I » d’origine. Les tourelles sont extrêmement dissuasives et tirent du 5.56 mm à un rythme soutenu. Grâce à leurs systèmes de visée avancés, leur précision est mortelle. Toutefois, leurs commandes peuvent être piratées et reprogrammées… si la tourelle est reliée à un terminal."
    },
    {
        "name": "Tourelle Mitrailleuse Mk III",
        "level": "10",
        "keywords": "Robot",
        "type": "Créature Normale",
        "xp": "74",
        "body": "8",
        "spirit": "5",
        "melee": "–",
        "range": "4",
        "other": "–",
        "health": "18",
        "initiative": "13",
        "defense": "1",
        "ballisticR": "2 (toutes)",
        "energyR": "1 (toutes)",
        "poisonR": "Immunisée",
        "radiationR": "Immunisée",
        "source": "$OFF$",
        "typeDef":BestiaryType.CREATURE,
        "attacks": [
            {
                "title": "MITRAILLEUSE",
                "description": "CORPS + Distance (SR 12), 7 $CD$ de dégâts balistiques, En Rafale, Étourdissants, portée M, cadence de tir 3 $CD$"
            }
        ],
        "effects": [
            {
                "title": "Robot",
                "description": "la tourelle est un robot. Elle est immunisée contre les effets de la faim, de la soif et de la suffocation. Elle est également immunisée contre les dégâts de radiation et de poison. Cependant, les machines ne peuvent pas consommer de nourriture, de boissons ou d’autres consommables, elles ne guérissent pas naturellement et la compétence Médecine ne permet pas de les soigner. Les dégâts qu’elles subissent doivent être réparés (cf. page 34)."
            },
            {
                "title": "Immunisée contre le poison",
                "description": "la tourelle réduit à 0 $CD$ tous les dégâts de poison qu’elle subit et ne peut subir aucun dégât ou effet infligé par du poison."
            },
            {
                "title": "Immunisée contre les radiations",
                "description": "la tourelle réduit à 0 tous les dégâts de radiation qu’elle subit et ne peut subir aucun dégât ou effet infligé par des radiations."
            },
            {
                "title": "Immunisée contre les maladies",
                "description": "la tourelle est immunisée contre les effets de toutes les maladies dont elle ne présentera jamais les symptômes."
            }
        ],
        "inventory": [
            {
                "title": "Récupération",
                "description": "les pilleurs peuvent fouiller les restes d’une tourelle détruite grâce à un test réussi d’INT + Science de difficulté 1. En cas de réussite, ils récupèrent 3d20 munitions de 5.56 mm ainsi que 2 $CD$ composants peu fréquents."
            }
        ],
        "description": "Amélioration du modèle MK I, la MK III a été conçue pour être beaucoup plus solide. Elle possède un blindage plus résistant et des munitions de 5.56 mm de grande puissance. Tout comme la MK I, elle est peinte en vert foncé, montée sur un trépied et bénéficie des mêmes systèmes d’aide à la visée."
    },
    {
        "name": "Tourelle Mitrailleuse Mk V",
        "level": "14",
        "keywords": "Robot",
        "type": "Créature Normale",
        "xp": "102",
        "body": "9",
        "spirit": "5",
        "melee": "–",
        "range": "5",
        "other": "–",
        "health": "23",
        "initiative": "15",
        "defense": "1",
        "ballisticR": "4 (toutes)",
        "energyR": "2 (toutes)",
        "poisonR": "Immunisée",
        "radiationR": "Immunisée",
        "source": "$OFF$",
        "typeDef":BestiaryType.CREATURE,
        "attacks": [
            {
                "title": "MITRAILLEUSE",
                "description": "CORPS + Distance (SR 14), 9 $CD$ de dégâts balistiques, En Rafale, Étourdissants, portée M, cadence de tir 3 $CD$"
            }
        ],
        "effects": [
            {
                "title": "Robot",
                "description": "la tourelle est un robot. Elle est immunisée contre les effets de la faim, de la soif et de la suffocation. Elle est également immunisée contre les dégâts de radiation et de poison. Cependant, les machines ne peuvent pas consommer de nourriture, de boissons ou d’autres consommables, elles ne guérissent pas naturellement et la compétence Médecine ne permet pas de les soigner. Les dégâts qu’elles subissent doivent être réparés (cf. page 34)."
            },
            {
                "title": "Immunisée contre le poison",
                "description": "la tourelle réduit à 0 $CD$ tous les dégâts de poison qu’elle subit et ne peut subir aucun dégât ou effet infligé par du poison."
            },
            {
                "title": "Immunisée contre les radiations",
                "description": "la tourelle réduit à 0 tous les dégâts de radiation qu’elle subit et ne peut subir aucun dégât ou effet infligé par des radiations."
            },
            {
                "title": "Immunisée contre les maladies",
                "description": "la tourelle est immunisée contre les effets de toutes les maladies dont elle ne présentera jamais les symptômes."
            }
        ],
        "inventory": [
            {
                "title": "Récupération",
                "description": "les pilleurs peuvent fouiller les restes d’une tourelle détruite grâce à un test réussi d’INT + Science de difficulté 1. En cas de réussite, ils récupèrent 3d20 munitions de 5.56 mm ainsi que 2 $CD$ composants peu fréquents."
            }
        ],
        "description": "La version MK V ressemble par bien des aspects à ses versions antérieures. Ces tourelles ne sont toutefois pas que conçues pour arroser les ennemis de balles, mais aussi pour les étourdir, ce qui les rend plus vulnérables à leur feu soutenu. Les tourelles MK V tirent des 5.56 mm incendiaires et peuvent être identifiées grâce à leur peinture d’un gris-vert sombre."
    },
    {
        "name": "Tourelle Mitrailleuse (fixée À Une Paroi)",
        "level": "5",
        "keywords": "Robot",
        "type": "Créature Normale",
        "xp": "38",
        "body": "6",
        "spirit": "5",
        "melee": "–",
        "range": "3",
        "other": "–",
        "health": "9",
        "initiative": "11",
        "defense": "2",
        "ballisticR": "1 (toutes)",
        "energyR": "1 (toutes)",
        "poisonR": "Immunisée",
        "radiationR": "Immunisée",
        "source": "$OFF$",
        "typeDef":BestiaryType.CREATURE,
        "attacks": [
            {
                "title": "MITRAILLEUSE",
                "description": "CORPS + Distance (SR 9), 5 $CD$ de dégâts balistiques, En Rafale, portée M, cadence de tir 3 $CD$"
            }
        ],
        "effects": [
            {
                "title": "Robot",
                "description": "la tourelle est un robot. Elle est immunisée contre les effets de la faim, de la soif et de la suffocation. Elle est également immunisée contre les dégâts de radiation et de poison. Cependant, les machines ne peuvent pas consommer de nourriture, de boissons ou d’autres consommables, elles ne guérissent pas naturellement et la compétence Médecine ne permet pas de les soigner. Les dégâts qu’elles subissent doivent être réparés (cf. page 34)."
            },
            {
                "title": "Immunisée contre le poison",
                "description": "la tourelle réduit à 0 $CD$ tous les dégâts de poison qu’elle subit et ne peut subir aucun dégât ou effet infligé par du poison."
            },
            {
                "title": "Immunisée contre les radiations",
                "description": "la tourelle réduit à 0 tous les dégâts de radiation qu’elle subit et ne peut subir aucun dégât ou effet infligé par des radiations."
            },
            {
                "title": "Immunisée contre les maladies",
                "description": "la tourelle est immunisée contre les effets de toutes les maladies dont elle ne présentera jamais les symptômes."
            },
            {
                "title": "Petite",
                "description": "la tourelle est plus petite que la majorité des personnages. Les PV normaux de la tourelle sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, la tourelle est tuée si elle subit la moindre blessure."
            }
        ],
        "inventory": [
            {
                "title": "Récupération",
                "description": "les pilleurs peuvent fouiller les restes d’une tourelle détruite grâce à un test réussi d’INT + Science de difficulté 1. En cas de réussite, ils récupèrent 3d20 munitions de 10 mm ainsi que 2 $CD$ composants peu fréquents."
            }
        ],
        "description": "Les tourelles fixées à des parois sont bien plus petites que leurs consœurs montées sur trépied. Elles sont placées dans de petits casiers semi-sphériques pouvant être fixés aux murs ou aux plafonds… et passant facilement inaperçus. Ces tourelles de taille plus modeste tirent des munitions de 10 mm, mais rattrapent ce handicap par la grande vélocité de leurs rafales et la présence d’autres tourelles disposées dans la même pièce. En dépit de leur taille, elles disposent des mêmes technologies de visée avancées et de scanners biométriques que leurs consœurs sur trépied."
    },
    {
        "name": "Tourelle Mitrailleuse 3 Coups (fixée À Une Paroi)",
        "level": "10",
        "keywords": "Robot",
        "type": "Créature Normale",
        "xp": "74",
        "body": "8",
        "spirit": "5",
        "melee": "–",
        "range": "5",
        "other": "–",
        "health": "13",
        "initiative": "13",
        "defense": "2",
        "ballisticR": "2 (toutes)",
        "energyR": "1 (toutes)",
        "poisonR": "Immunisée",
        "radiationR": "Immunisée",
        "source": "$OFF$",
        "typeDef":BestiaryType.CREATURE,
        "attacks": [
            {
                "title": "MITRAILLETTE",
                "description": "CORPS + Distance (SR 13), 5 $CD$ de dégâts balistiques, En Rafale, portée M, cadence de tir 3 $CD$"
            }
        ],
        "effects": [
            {
                "title": "Robot",
                "description": "la tourelle est un robot. Elle est immunisée contre les effets de la faim, de la soif et de la suffocation. Elle est également immunisée contre les dégâts de radiation et de poison. Cependant, les machines ne peuvent pas consommer de nourriture, de boissons ou d’autres consommables, elles ne guérissent pas naturellement et la compétence Médecine ne permet pas de les soigner. Les dégâts qu’elles subissent doivent être réparés (cf. page 34)."
            },
            {
                "title": "Immunisée contre le poison",
                "description": "la tourelle réduit à 0 $CD$ tous les dégâts de poison qu’elle subit et ne peut subir aucun dégât ou effet infligé par du poison."
            },
            {
                "title": "Immunisée contre les radiations",
                "description": "la tourelle réduit à 0 tous les dégâts de radiation qu’elle subit et ne peut subir aucun dégât ou effet infligé par des radiations."
            },
            {
                "title": "Immunisée contre les maladies",
                "description": "la tourelle est immunisée contre les effets de toutes les maladies dont elle ne présentera jamais les symptômes. CAPACITÉS SPÉCIALES"
            },
            {
                "title": "Petite",
                "description": "la tourelle est plus petite que la majorité des personnages. Les PV normaux de la tourelle sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, la tourelle est tuée si elle subit la moindre blessure."
            }
        ],
        "inventory": [
            {
                "title": "Récupération",
                "description": "les pilleurs peuvent fouiller les restes d’une tourelle détruite grâce à un test réussi d’INT + Science de difficulté 1. En cas de réussite, ils récupèrent 3d20 munitions de 10 mm ainsi que 2 $CD$ composants peu fréquents."
            }
        ],
        "description": "La version 3 coups de cette tourelle est capable de fournir une cadence de tir plus soutenue, ce qui en fait un minigun de taille réduite fixé au mur. Elle ne tire, certes, que du 10 mm, mais qu’elle le fasse trois balles à la fois cause plus de dégâts à ses cibles, surtout à courte portée."
    },
    {
        "name": "Tourelle Laser (fixée À Une Paroi)",
        "level": "5",
        "keywords": "Robot",
        "type": "Créature Normale",
        "xp": "38",
        "body": "6",
        "spirit": "5",
        "melee": "–",
        "range": "3",
        "other": "–",
        "health": "9",
        "initiative": "11",
        "defense": "2",
        "ballisticR": "1 (toutes)",
        "energyR": "2 (toutes)",
        "poisonR": "Immunisée",
        "radiationR": "Immunisée",
        "source": "$OFF$",
        "typeDef":BestiaryType.CREATURE,
        "attacks": [
            {
                "title": "ARME LASER",
                "description": "CORPS + Distance (SR 9), 4 $CD$ de dégâts énergétiques, En Rafale, Perforant 1, portée M, cadence de tir 3 $CD$"
            }
        ],
        "effects": [
            {
                "title": "Robot",
                "description": "la tourelle est un robot. Elle est immunisée contre les effets de la faim, de la soif et de la suffocation. Elle est également immunisée contre les dégâts de radiation et de poison. Cependant, les machines ne peuvent pas consommer de nourriture, de boissons ou d’autres consommables, elles ne guérissent pas naturellement et la compétence Médecine ne permet pas de les soigner. Les dégâts qu’elles subissent doivent être réparés (cf. page 34)."
            },
            {
                "title": "Immunisée contre le poison",
                "description": "la tourelle réduit à 0 $CD$ tous les dégâts de poison qu’elle subit et ne peut subir aucun dégât ou effet infligé par du poison."
            },
            {
                "title": "Immunisée contre les radiations",
                "description": "la tourelle réduit à 0 tous les dégâts de radiation qu’elle subit et ne peut subir aucun dégât ou effet infligé par des radiations."
            },
            {
                "title": "Immunisée contre les maladies",
                "description": "la tourelle est immunisée contre les effets de toutes les maladies dont elle ne présentera jamais les symptômes."
            },
            {
                "title": "Petite",
                "description": "la tourelle est plus petite que la majorité des personnages. Les PV normaux de la tourelle sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, la tourelle est tuée si elle subit la moindre blessure."
            }
        ],
        "inventory": [
            {
                "title": "Récupération",
                "description": "les pilleurs peuvent fouiller les restes d’une tourelle détruite grâce à un test réussi d’INT + Science de difficulté 1. En cas de réussite, ils récupèrent 3d20 Cellules à fusion ainsi que 2 $CD$ composants peu fréquents."
            }
        ],
        "description": "Les tourelles laser n’ont pas d’équivalent sur trépied, mais sont bâties comme les autres machines sur paroi. Au lieu de munitions 10 mm, elles tirent un rayon laser semblable à ceux des pistolets et fusils laser. Ce modèle expulse des traits d’énergie uniques, mais en succession rapide. Comme les autres tourelles, elles gardent les Abris, les bâtiments bureaucratiques et les bases militaires."
    },
    {
        "name": "Tourelle Laser 3 Coups (fixée À Une Paroi)",
        "level": "10",
        "keywords": "Robot",
        "type": "Créature Normale",
        "xp": "74",
        "body": "8",
        "spirit": "5",
        "melee": "–",
        "range": "5",
        "other": "–",
        "health": "13",
        "initiative": "13",
        "defense": "2",
        "ballisticR": "2 (toutes)",
        "energyR": "2 (toutes)",
        "poisonR": "Immunisée",
        "radiationR": "Immunisée",
        "source": "$OFF$",
        "typeDef":BestiaryType.CREATURE,
        "attacks": [
            {
                "title": "ARME LASER",
                "description": "CORPS + Distance (SR 13), 7 $CD$ de dégâts énergétiques, En Rafale, Perforant 1, portée M, cadence de tir 3 $CD$"
            }
        ],
        "effects": [
            {
                "title": "Robot",
                "description": "la tourelle est un robot. Elle est immunisée contre les effets de la faim, de la soif et de la suffocation. Elle est également immunisée contre les dégâts de radiation et de poison. Cependant, les machines ne peuvent pas consommer de nourriture, de boissons ou d’autres consommables, elles ne guérissent pas naturellement et la compétence Médecine ne permet pas de les soigner. Les dégâts qu’elles subissent doivent être réparés (cf. page 34)."
            },
            {
                "title": "Immunisée contre le poison",
                "description": "la tourelle réduit à 0 $CD$ tous les dégâts de poison qu’elle subit et ne peut subir aucun dégât ou effet infligé par du poison."
            },
            {
                "title": "Immunisée contre les radiations",
                "description": "la tourelle réduit à 0 tous les dégâts de radiation qu’elle subit et ne peut subir aucun dégât ou effet infligé par des radiations."
            },
            {
                "title": "Immunisée contre les maladies",
                "description": "la tourelle est immunisée contre les effets de toutes les maladies dont elle ne présentera jamais les symptômes."
            },
            {
                "title": "Petite",
                "description": "la tourelle est plus petite que la majorité des personnages. Les PV normaux de la tourelle sont égaux à la somme de son Corps et de la moitié de son niveau (arrondie au supérieur), mais sa défense augmente de 1. De plus, la tourelle est tuée si elle subit la moindre blessure."
            }
        ],
        "inventory": [
            {
                "title": "Récupération",
                "description": "les pilleurs peuvent fouiller les restes d’une tourelle détruite grâce à un test réussi d’INT + Science de difficulté 1. En cas de réussite, ils récupèrent 3d20 Cellules à fusion ainsi que 2 $CD$ composants peu fréquents."
            }
        ],
        "description": "Variante de la tourelle laser, ce modèle 3 coups tire presque aussi rapidement qu’une Gatling laser, même si ce qui est gagné en dégâts infligés est perdu en précision. Elle couvre un rayon plus large que la tourelle à rafale unique, ce qui lui offre la possibilité de toucher plusieurs cibles à la fois."
    },
    {
        "name": "Synthétique",
        "level": "4",
        "keywords": "Synthétique Robotique",
        "type": "Créature Normale",
        "xp": "31",
        "body": "6",
        "spirit": "5",
        "melee": "2",
        "range": "2",
        "other": "2",
        "health": "10",
        "initiative": "11",
        "defense": "1",
        "ballisticR": "2 (tête,bras,jambes) ;1 (buste)",
        "energyR": "3 (tête,bras,jambes) ;2 (buste)",
        "poisonR": "Immunisé",
        "radiationR": "Immunisé",
        "source": "$OFF$",
        "typeDef":BestiaryType.CREATURE,
        "attacks": [
            {
                "title": "LASER DE L’INSTITUT",
                "description": "CORPS + Distance (SR 8), 4 $CD$ de dégâts énergétiques Brutaux, En Rafale, portée M, cadence de tir 3 $CD$"
            },
            {
                "title": "MATRAQUE ÉLECTRIQUE",
                "description": "CORPS + Corps à corps (SR 8), 5 $CD$ de dégâts énergétiques, portée C"
            }
        ],
        "effects": [
            {
                "title": "Robot",
                "description": "le synthétique est un robot. Il est immunisé contre les effets de la faim, de la soif et de la suffocation. Il est également immunisé contre les dégâts de radiation et de poison. Cependant, les machines ne peuvent pas consommer de nourriture, de boissons ou d’autres consommables, elles ne guérissent pas naturellement et la compétence Médecine ne permet pas de les soigner. Les dégâts qu’elles subissent doivent être réparés (cf. page 34)."
            },
            {
                "title": "Immunisé contre le poison",
                "description": "le synthétique réduit à 0 tous les dégâts de poison qu’il subit et ne peut subir aucun dégât ou effet infligé par du poison."
            },
            {
                "title": "Immunisé contre les radiations",
                "description": "le synthétique réduit à 0 tous les dégâts de radiation qu’il subit et ne peut subir aucun dégât ou effet infligé par des radiations. CAPACITÉS SPÉCIALES"
            },
            {
                "title": "Immunisé contre la peur",
                "description": "le synthétique ne peut jamais être intimidé ou menacé. Il ignore ou attaque quiconque tente de l’intimider ou de le menacer."
            },
            {
                "title": "Immunisé contre les maladies",
                "description": "le synthétique est immunisé contre les effets de toutes les maladies dont il ne présentera jamais les symptômes."
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Fusil laser de l’Institut (stimulateur de photons, canon amélioré), matraque électrique, 3d20 cellules à fusion, jambes de synthétique x2, bras de synthétique x2, casque de synthétique."
            }
        ],
        "description": "Ces synthétiques de première génération se trouvent en général en groupe d’au moins quatre individus, dans des zones sous la férule ou la protection de l’Institut. Ils n’ont d’humain que leur silhouette et leur allure, et ne possèdent souvent même pas de peau synthétique. Ils ne sont que des caricatures robotiques et terrifiantes : leurs « organes » ne sont que des mécanismes, leurs os, des supports métalliques. Bien qu’intelligents et bons combattants, ils sont loin de l’astuce possédée par les troisièmes générations."
    },
    {
        "name": "Synthétique Marcheur",
        "level": "7",
        "keywords": "Synthétique Robotique",
        "type": "Créature Normale",
        "xp": "52",
        "body": "6",
        "spirit": "6",
        "melee": "4",
        "range": "4",
        "other": "3",
        "health": "13",
        "initiative": "12",
        "defense": "1",
        "ballisticR": "3 (toutes)",
        "energyR": "4 (toutes)",
        "poisonR": "Immunisé",
        "radiationR": "Immunisé",
        "source": "$OFF$",
        "typeDef":BestiaryType.CREATURE,
        "attacks": [
            {
                "title": "LASER DE L’INSTITUT",
                "description": "CORPS + Distance (SR 10), 6 $CD$ de dégâts énergétiques, En Rafale, portée M, cadence de tir 3 $CD$"
            },
            {
                "title": "MATRAQUE ÉLECTRIQUE",
                "description": "CORPS + Corps à corps (SR 10), 5 $CD$ de dégâts énergétiques, portée C"
            }
        ],
        "effects": [
            {
                "title": "Robot",
                "description": "le synthétique est un robot. Il est immunisé contre les effets de la faim, de la soif et de la suffocation. Il est également immunisé contre les dégâts de radiation et de poison. Cependant, les machines ne peuvent pas consommer de nourriture, de boissons ou d’autres consommables, elles ne guérissent pas naturellement et la compétence Médecine ne permet pas de les soigner. Les dégâts qu’elles subissent doivent être réparés (cf. page 34). CAPACITÉS SPÉCIALES"
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
            }
        ],
        "inventory": [
            {
                "title": "Fouille",
                "description": "Arme laser de l’Institut (agitateur de photons amélioré, canon long, lunette courte), matraque électrique, 3d20 $CD$ cellules à fusion, casque de synthétique solide, plastron de synthétique solide, jambières de synthétique solide x2, brassards de synthétique solide x2."
            }
        ],
        "description": "Les marcheurs synthétiques sont semblables aux synthétiques communs, dans le sens où ils ne possèdent pas la même conscience que ceux de la troisième génération et qu’on les trouve dans le périmètre de l’Institut qu’ils servent à protéger. Les marcheurs, toutefois, sont des synthétiques de seconde génération et ressemblent plus aux humains que leurs congénères de la première. Ils sont souvent dotés d’une couche de matière recouvrant au moins partiellement leurs organes mécaniques et leurs membres : une tentative archaïque de création de peau synthétique. Malheureusement, celle-ci a mal vieilli et s’est déchirée, révélant par endroits leurs composants robotiques. Les visages des marcheurs synthétiques ont aussi des traits proches de ceux des humains, mais peu d’entre eux disposent d’un visage complet… quant à leurs cheveux, ils sont tous chauves. Ils sont plus forts et solides que les synthétiques de première génération et se battent bien mieux."
    }
]