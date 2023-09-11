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
Les technlogies que j'utilise sont: react-parallax-tilt @react-three/fiber @react-three/drei three @types/three maath react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom postcss autoprefixer et tailwindcss.


          <SphereBackground />
          <NavigationArrows />
                  <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/world1" element={<World1Page />} />
          <Route path="/world2" element={<World2Page />} />
          <Route path="/world3" element={<World3Page />} />
          <Route path="/world4" element={<World4Page />} />
          
        </Routes>

        <StarsCanvas />