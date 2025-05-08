La reflexion à se faire concenre la structure du site.
1. Je sais construire une sphère (type planète terre) et la mettre en arrière plan

Maintenant, je souhaite créer plusieurs composants (ou pouvant être représentés par des pages), nous allons en discuter.

Mise en situation:

J'arrive sur la page d'acceuil, pour accéder aux autres contenu soit:
- je clique sur les boutons du menu de navigation
- je clique sur une des flèches directionelles (haut, bas, gauche, droite)

Le principe que je souhaite créer est comme si on étions dans une map, imaginons que nous ayons 4 mondes à découvrir en plus de la page d'acceuil
de la forme d'une croix:

               monde 4
                 ^
                 |
monde 3  <- monde acceuil -> monde 1
                 |
               monde 2

Les déplacement possibles formeraient une sphere:    1 <-> 3 <-> accueil <-> 1 et 2 <-> 4 <-> accueil <-> 2

La question que je me pose est de savoir si je crée des composants ou des pages à part entière ?
Quelles structures me propose tu ?

En gros comme tu le sais, il y a une terre (dans l'espace entouré d'étoiles qui tourne également) dans l'arrière plan de la page. Ainsi j'aimerais qu'à chaque déplacement entre pages, on simule un déplacement dans l'espace.
Pour cela, il faut:
- désigner les positions de chaque page (donc 5 positions différentes sur un plan en 2d)
- dérouler le plan des positions sur un globe (simuler des coordonées)
- déterminer les coordonées en temps réel (en fonction de la map en arrière plan)
- à chaque mouvement, modifier les caractéristiques du canvas de la terre en mouvement
