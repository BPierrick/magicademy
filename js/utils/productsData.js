import React from 'react';

import {
	AsyncStorage
} from 'react-native';

module.exports= {
	init: function() {
		AsyncStorage.clear();
		AsyncStorage.setItem('@Magicademy:videoLink', JSON.stringify({
			videoLink: 'https://player.vimeo.com/video/269609875?autoplay=false&loop=false&byline=false&portrait=false&title=false'
		}));
		
		AsyncStorage.setItem('@Magicademy:products', JSON.stringify ([
		{
			id: '1',
			name: 'Jeu Houdini',
			image: require('../../assets/jeu_houdini.jpg'),
			description: 'Découvrez le monde de ' + '"' + "l" + "'" + 'escapologie' +'"'+  " avec un jeu de cartes inédit ! Votre jeu se retrouve bloqué par des menottes, impossible pour la carte de votre ami de s’échapper ! \nAlors, comment-lui expliquerez vous que celle-ci est parvenue à s’évader ?",
		},
		{
			id: '2',
			name: 'Jeu Invisible',
			image: require('../../assets/jeu_invisible.jpg'),
			description: 'Lire dans les pensées est un bien grand don..Qui vous est désormais transmis. Intéressez-vous à votre public et retrouvez une carte librement choisie par votre public !\nUn petit miracle de magie professionnelle, à votre portée.',
		},
		{
			id: '3',
			name: 'Coincidences',
			image: require('../../assets/coincidences.jpg'),
			description: 'Un jeu de cartes pour le moins troublant. Coupé en diagonale, celui-ci est conçu pour un tour participatif ! Chacun prend son jeu, munies de cartes différentes. Ce serait par conséquent une pure coïncidence de se retrouver avec la même face, recomposant une carte entière, non ?',
		},
		{
			id: '4',
			name: 'Inversion',
			image: require('../../assets/inversion.jpg'),
			description: 'Ce jeu de cartes vous permettra d’effectuer un autre tour renversant ! Sans voir la carte de votre proche, retrouvez-là en un claquement de doigt, inversé dans le jeu ! Saurez-vous déjouer l’énigme de ces cartes à l’envers ?',
		},
		{
			id: '5',
			name: 'Jeu Svengali',
			image: require('../../assets/svengali.jpg'),
			description: 'Ce jeu de cartes vous permettra d’effectuer un autre tour renversant ! Sans voir la carte de votre proche, retrouvez-là en un claquement de doigt, inversé dans le jeu ! Saurez-vous déjouer l’énigme de ces cartes à l’envers ?',
		},
		{
			id: '6',
			name: 'Card Toon 1&2',
			image: require('../../assets/cardtoon.jpg'),
			description: 'Cardtoon est un jeu de cartes pour le moins original ! Couvert de dessins, son mystère ne se limite pas aux inscriptions définissant son identité. Observez-le et peut-être que vous verrez la magie ... prendre vie. \n \n Disponible en version 1&2 : \n- "Le magicien au Chapeau" \n-"Boulet de Canon"',
		},
		{
			id: '7',
			name: "L'Echange Secret",
			image: require('../../assets/echange_secret.jpg'),
			description: 'Partagez un moment privilégié avec un ami ! Chacun prend ses cartes et mime les gestes de l’autre. \nLors d' + "'" + 'un échange secret, pensez vous possible de repartir avec la même carte ?',
		},
		{
			id: '8',
			name: 'Prédicarte',
			image: require('../../assets/predicarte.jpg'),
			description: 'Gagnez à tous les coups ! Avec cette carte impossible de vous tromper de prédiction. Voilà de quoi faire sourire votre public ! \nMais ce n’est pas tout ! Une seconde prédiction secrète vous permettra de décupler l' + "'" + 'effet de vos autres tours...',
		},
		{
			id: '9',
			name: 'Mirage',
			image: require('../../assets/mirage.jpg'),
			description: 'Vous débutez dans la magie, et vous souhaitez vous jouer de vos amis ? \nAvec Mirage, de l’entraînement et un bon sens du bluff, retrouvez toujours la carte que vous souhaitez, même si vos spectateurs pensent être impossible à affronter !',
		},
		{
			id: '10',
			name: 'Stylo BIM !',
			image: require('../../assets/stylo.jpg'),
			description: "Si ce stylo semble être tout ce qu’il y a de plus classique, il a pourtant la faculté de transpercer n’importe quel support en papier ! Empruntez un billet à vos amis pour en faire la démonstration, et restituez-le à l’intact !",
		},
		{
			id: '11',
			name: 'Cookie',
			image: require('../../assets/cookie.jpg'),
			description: "Adapté aux petits et aux grands, découvrez le biscuit infini ! Reprenant l’aspect esthétique d’une fameuse marque de gâteaux, munissez-vous d’un paquet et bluffez vos amis ! Croquez dans ce délicieux cookie...Il n’est pas à votre goût ? Recrachez-le et il retrouvera son état initial !",
		},
		{
			id: '12',
			name: 'Chaino',
			image: require('../../assets/chaino.jpg'),
			description: "Un anneau. Une chaîne. Combien de chances l’anneau a-t-il de se nouer à la chaîne ? Aucune, me direz-vous. Seulement quand on veut, on peut ! Adoptez la bonne technique et défiez vos proches !",
		},
		{
			id: '13',
			name: 'Ecroudini',
			image: require('../../assets/ecroudini.jpg'),
			description: "Voici une merveille du mentalisme et de la mécanique !\n\nTrois écrous de couleur différentes , une prédiction.\n\nVous allez sans le toucher , faire évader l'un des boulons choisi !\n\nUn tour qui ne manquera pas de bluffer les plus sceptiques.",
		},
		{
			id: '14',
			name: "Lum's",
			image: require('../../assets/lums.jpg'),
			description: "Ces petites lumières passent de main en main comme des lucioles.\n\nmais d'ou viennent t'elles ? comment est-ce possible ?\n\nUn moment de grâce au bout des doigts, qui émerveillera petits et grands !",
		},
		{
			id: '15',
			name: 'Calcul Genie',
			image: require('../../assets/calcul.jpg'),
			description: "Un lot de cinq dés, de cinq couleurs, et des milliers de combinaisons différentes. Proposez à votre ami de lancer les dés. Et si vous étiez capable de calculer plus vite que n’importe quelle machine ? Et si, quel que soit le lancer, vous connaissiez le résultat ?",
		},
		{
			id: '16',
			name: 'Voyage Impossible',
			image: require('../../assets/voyage.jpg'),
			description: "Faites voyager des objets à travers le temps et la matière grâce à ce tour insaisissable. Impressionnez votre famille et faites disparaître une pile de pièces grâce à une passe magique. Mais cela ne s'arrête pas là ! Après ce premier effet, regardez-les se décomposer quand vous les sortirez de leur pochette de velours, qui n’a pourtant jamais été ouverte…",
		},
		{
			id: '17',
			name: 'Little Big Box',
			image: require('../../assets/bigBox.jpg'),
			description: "Une boîte de poche renfermant de nombreux mystères… Bague, clé ou pièce ? Avec ce tour, vous serez en mesure de faire disparaître un objet dans cette jolie boîte en bois fermée par un cadenas.\n\nComment s’est-il retrouvé là ? Vous seul le saurez…",
		},
		{
			id: '18',
			name: "Le Foulard A Travers L'Ecran",
			image: require('../../assets/foulard.jpg'),
			description: "Un foulard capable de transpercer les objets, cela vous intrigue ? Avec un peu de pratique, vous serez capable d’exécuter ce tour ! Empruntez le téléphone d’un ami, et tirer le foulard à travers l’appareil ! Récupérer votre foulard et rendez le portable à son propriétaire, sans aucun défaut. Un numéro simple et visuellement stupéfiant !",
		},
		{
			id: '19',
			name: 'Gravity',
			image: require('../../assets/gravity.jpg'),
			description: "Vous avez toujours rêvé de défier les lois de la gravité ? C’est désormais possible ! Un socle en laiton. Une bille métallique. Faites preuve de concentration et la bille tiendra même lorsque son socle sera retourné… Petit et discret, vous n’aurez aucun mal à transporter ce tour qui fera pourtant bel et bien son effet !",
		},
		{
			id: '20',
			name: 'Evasion Impossible',
			image: require('../../assets/evasion.jpg'),
			description: "Évadez-vous de chaines solidement attachées par un spectateur à vos poignets en moins d'une seconde.\n\nLe meilleur dans tout ça? tout est examinable !\n\nUn tour a ne pas mettre entre toutes les mains...",
		},
		{
			id: '21',
			name: 'Porte Carte',
			image: require('../../assets/porteCarte.jpg'),
			description: "Avec l’aide de ce produit insolite, rangez vos cartes et billets en un instant ! Grâce à son design, il est capable de remplir sa fonction comme aucun autre.\n\nFait en cuir. Plusieurs couleurs sont disponibles.",
		},
		{
			id: '22',
			name: 'Queteuse',
			image: require('../../assets/queteuse.jpg'),
			description: "Outil du 19ème siècle, la quêteuse est un accessoire de magie incontournable ! Tour de magie facile à réaliser, faites apparaître ou disparaître des objets à volonté !\n\nManche en plastique ABS, Poche en velours rouge ou noire à fermeture éclair (ZIP).",
		},
		{
			id: '23',
			name: 'Puzzle Sherlock',
			image: require('../../assets/sherlock.jpg'),
			description: "Vous avez déjà résolu un puzzle ? Vos spectateurs aussi. Mais avec celui-ci, ils seront incapables de comprendre comment vous avez pu réussir ! ",
		}
        ]));
	}
};