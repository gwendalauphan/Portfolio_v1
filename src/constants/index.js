import {
  logo,
  github,
  close,
  menu,
  //Technologies & Tools
  ansible,
  cassandra,
  css,
  docker,
  hadoophdfs,
  haproxy,
  javascript,
  matplotlib,
  mongodb,
  nginx,
  numpy,
  openstack,
  pandas,
  python,
  reactjs,
  redis,
  scala,
  spark,
  sqlite,
  tensorflow,
  terraform,
  threejs,
  //& Tools
  confluence,
  git,
  gitlabci,
  jenkins,
  jira,
  microsoftteams,
  nexus,
  slack,
  sonarqube,
  ssh,
  trello,
  vps,
  whimsical,

  //
  avatar,
  carrent,
  carrentVideo,
  //For Skills (About Page)
  code,
  agile,
  processing,
  server,

  //For company logos (Work Page)
  dgfip,
  mcdonalds,
} from "../assets";

const memoji = {
  image: [avatar],
};

const navLinks = [
  {
    id: "user",
    title: "About",
  },
  {
    id: "briefcase",
    title: "Work",
  },
  {
    id: "cpu",
    title: "Projects",
  },
  {
    id: "phone",
    title: "Contact",
  },
  {
    id: "book-open",
    title: "Future",
  },
];

const services = [
  {
    title: "Diverse Development",
    icon: code,
    description:
      "Proficiency in Bash, Python, C, and web development, as well as in data science with Pandas and Scala.",
  },
  {
    title: "Continuous Integration",
    icon: processing,
    description:
      "Expertise in CI-CD via GitLab CI, Jenkins, enriched by the use of SonarQube and Nexus for quality assurance.",
  },
  {
    title: "Deployment Automation",
    icon: server,
    description:
      "Experienced in automated deployment with Docker, Ansible, and Terraform, with OpenStack as a provider.",
  },
  {
    title: "Agile Methodologies",
    icon: agile,
    description:
      "Aptitude in agile methodologies like Scrum, effective management of sprints and user stories via Jira.",
  },
];

const technologies = [
  {
    name: "Ansible",
    icon: ansible,
    description: "Outil d'automatisation pour l'administration système.",
    lien: "https://www.ansible.com/",
  },
  {
    name: "Terraform",
    icon: terraform,
    description: "Gestionnaire d'infrastructure sous forme de code (IaC).",
    lien: "https://www.terraform.io/",
  },
  {
    name: "Docker",
    icon: docker,
    description:
      "Plateforme pour développer et exécuter des applications dans des conteneurs.",
    lien: "https://www.docker.com/",
  },
  {
    name: "Openstack",
    icon: openstack,
    description: "Plateforme cloud open-source pour clouds privés et publics.",
    lien: "https://www.openstack.org/",
  },
  {
    name: "Haproxy",
    icon: haproxy,
    description: "Équilibreur de charge et proxy pour applications TCP/HTTP.",
    lien: "http://www.haproxy.org/",
  },
  {
    name: "Nginx",
    icon: nginx,
    description: "Serveur web, reverse proxy et équilibreur de charge.",
    lien: "https://www.nginx.com/",
  },
  {
    name: "Python",
    icon: python,
    description:
      "Langage polyvalent, puissant pour développement web et data science.",
    lien: "https://www.python.org/",
  },
  {
    name: "Javascript",
    icon: javascript,
    description:
      "Langage de script pour ajouter de l'interactivité aux sites web.",
    lien: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
  },
  {
    name: "ReactJs",
    icon: reactjs,
    description:
      "Bibliothèque JavaScript pour interfaces utilisateur dynamiques.",
    lien: "https://reactjs.org/",
  },
  {
    name: "ThreeJs",
    icon: threejs,
    description:
      "Bibliothèque JavaScript pour graphiques 3D dans un navigateur web.",
    lien: "https://threejs.org/",
  },
  {
    name: "CSS",
    icon: css,
    description:
      "Langage de feuille de style pour contrôler la présentation des documents.",
    lien: "https://www.w3.org/Style/CSS/",
  },
  {
    name: "SQLite",
    icon: sqlite,
    description: "Base de données relationnelle légère et autonome.",
    lien: "https://www.sqlite.org/",
  },
  {
    name: "Spark",
    icon: spark,
    description: "Framework de traitement rapide pour le big data.",
    lien: "https://spark.apache.org/",
  },
  {
    name: "Hadoop HDFS",
    icon: hadoophdfs,
    description:
      "Système de fichiers distribué pour stocker de grandes quantités de données.",
    lien: "https://hadoop.apache.org/",
  },
  {
    name: "Redis",
    icon: redis,
    description:
      "Base de données en mémoire pour stockage de structures de données.",
    lien: "https://redis.io/",
  },
  {
    name: "Cassandra",
    icon: cassandra,
    description:
      "Base de données NoSQL distribuée pour gestion de grandes quantités de données.",
    lien: "https://cassandra.apache.org/",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    description: "Base de données NoSQL orientée documents.",
    lien: "https://www.mongodb.com/",
  },
  {
    name: "Scala",
    icon: scala,
    description:
      "Langage de programmation multi-paradigme, pour systèmes et applications modernes.",
    lien: "https://www.scala-lang.org/",
  },
  {
    name: "Pandas",
    icon: pandas,
    description:
      "Bibliothèque Python pour structures de données pour analyse des données.",
    lien: "https://pandas.pydata.org/",
  },
  {
    name: "Numpy",
    icon: numpy,
    description:
      "Bibliothèque Python pour tableaux multidimensionnels et fonctions mathématiques.",
    lien: "https://numpy.org/",
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
    description: "Bibliothèque Python pour création de visualisations.",
    lien: "https://matplotlib.org/",
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
    description: "Plateforme open-source pour le machine learning.",
    lien: "https://www.tensorflow.org/",
  },
];

const tools = [
  {
    name: "GitLab CI",
    icon: gitlabci,
    description: "Intégration et déploiement continus intégrés à GitLab.",
    lien: "https://docs.gitlab.com/ee/ci/",
  },
  {
    name: "Jenkins",
    icon: jenkins,
    description: "Outil d'intégration continue et de livraison continue.",
    lien: "https://www.jenkins.io/",
  },
  {
    name: "Git",
    icon: git,
    description:
      "Système de contrôle de version pour suivre les changements de code.",
    lien: "https://git-scm.com/",
  },
  {
    name: "SonarQube",
    icon: sonarqube,
    description: "Analyse de code pour la qualité et la sécurité.",
    lien: "https://www.sonarqube.org/",
  },
  {
    name: "Nexus",
    icon: nexus,
    description: "Gestionnaire de dépôts pour artefacts binaires et builds.",
    lien: "https://www.sonatype.com/nexus/repository-oss",
  },
  {
    name: "VPS",
    icon: vps,
    description: "Serveur virtuel utilisé comme serveur dédié.",
    lien: "https://en.wikipedia.org/wiki/Virtual_private_server",
  },
  {
    name: "SSH",
    icon: ssh,
    description: "Protocole sécurisé pour les services de réseau.",
    lien: "https://www.openssh.com/",
  },
  {
    name: "Jira",
    icon: jira,
    description: "Suivi de bugs et gestion de projet agile de Atlassian.",
    lien: "https://www.atlassian.com/software/jira",
  },
  {
    name: "Confluence",
    icon: confluence,
    description: "Collaboration d'équipe pour documentation et partage.",
    lien: "https://www.atlassian.com/software/confluence",
  },
  {
    name: "Trello",
    icon: trello,
    description: "Gestion de projet basé sur des cartes pour organiser tâches.",
    lien: "https://trello.com/",
  },
  {
    name: "Whimsical",
    icon: whimsical,
    description:
      "Visualisation pour diagrammes, wireframes et flux de travail.",
    lien: "https://whimsical.com/",
  },
  {
    name: "Slack",
    icon: slack,
    description:
      "Communication d'équipe basée sur des chaînes et conversations.",
    lien: "https://slack.com/",
  },
  {
    name: "Microsoft Teams",
    icon: microsoftteams,
    description: "Collaboration avec chat, réunions vidéo et stockage.",
    lien: "https://www.microsoft.com/en-us/microsoft-teams/",
  },
];

const experiences = [
  {
    title: "Employé Polyvalent",
    company_name: "McDonald's",
    icon: mcdonalds,
    iconBg: "#383E56",
    date: "Juil. 2020 - Juin 2021",
    description: "Apprentissage en environnement dynamique",
    points: [
      "Adaptation rapide aux diverses responsabilités en restauration rapide.",
      "Attitude professionnelle constante avec les clients.",
      "Gestion efficace de la cuisson et anticipation des besoins en stock.",
      "Valorisation de chaque tâche, de la commande au nettoyage.",
    ],
  },
  {
    title: "Apprenti Data Engineer",
    company_name: "Dgfip",
    icon: dgfip,
    iconBg: "#E6DEDD",
    date: "Sept 2021 - Mai 2022",
    description: "Initiation et développement des bases techniques",
    points: [
      "Découverte de l'univers du big data et de son ampleur.",
      "Développement de scripts en Spark Scala pour divers projets ainsi qu'une librairie.",
      "Adoption de l'approche agile et initiation aux méthodes de CI/CD avec Gitlab CI.",
      "Adoption de Docker et renforcement en scripting Bash.",
      "Rédaction de documentation technique : procédures et tutoriels",
    ],
  },
  {
    title: "Apprenti DevOps Engineer",
    company_name: "Dgfip",
    icon: dgfip,
    iconBg: "#E6DEDD",
    date: "Mai 2022 - Jan 2023",
    description: "Expansion des responsabilités et maîtrise d'outils avancés",
    points: [
      "Automatisation avec Ansible et mise en place de pipelines Gitlab CI.",
      "Adoption de Terraform pour gérer les instances cloud, couplé avec Ansible pour automatiser des processus.",
      "Maîtrise approfondie de Jira et élargissement des connaissances sur Docker, Linux, et les réseaux.",
      "Perfectionnement des compétences avec Git.",
    ],
  },
  {
    title: "Apprenti Infrastructure Engineer",
    company_name: "Dgfip",
    icon: dgfip,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    description: "Finalisation des projets majeurs et transmission des savoirs",
    points: [
      "Mise en place d'éléments techniques : haproxy, certificats SSL auto-signés, points de montage, installation de dépendances etc.",
      "Création d'un outil CLI pour faciliter la configuration de déploiement via l'API Openstack.",
      "Mise en œuvre d'une infrastructure intégrant Jenkins, Nexus, et Sonarqube.",
      "Animation d'ateliers pour la communauté et contribution documentaire.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage.",
    tags: {
      technos: [
        { name: "React", color: "#61DAFB" },
        { name: "Node.js", color: "#8CC84B" },
        { name: "Express", color: "#000000" },
      ],
      thèmes: [
        { name: "Transportation", color: "#F46036" },
        { name: "Car Rental", color: "#3DCCC7" },
        { name: "Web Platform", color: "#FFD700" },
      ],
    },
    media: {
      image: carrent,
      video: carrentVideo,
    },
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage.",
    tags: {
      technos: [
        { name: "React", color: "#61DAFB" },
        { name: "Node.js", color: "#8CC84B" },
        { name: "Express", color: "#000000" },
      ],
      thèmes: [
        { name: "Transportation", color: "#F46036" },
        { name: "Car Rental", color: "#3DCCC7" },
        { name: "Web Platform", color: "#FFD700" },
      ],
    },
    media: {
      image: carrent,
      video: carrentVideo,
    },
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage.",
    tags: {
      technos: [
        { name: "React", color: "#61DAFB" },
        { name: "Node.js", color: "#8CC84B" },
        { name: "Express", color: "#000000" },
      ],
      thèmes: [
        { name: "Transportation", color: "#F46036" },
        { name: "Car Rental", color: "#3DCCC7" },
        { name: "Web Platform", color: "#FFD700" },
      ],
    },
    media: {
      image: carrent,
      video: carrentVideo,
    },
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage.",
    tags: {
      technos: [
        { name: "React", color: "#61DAFB" },
        { name: "Node.js", color: "#8CC84B" },
        { name: "Express", color: "#000000" },
      ],
      thèmes: [
        { name: "Transportation", color: "#F46036" },
        { name: "Car Rental", color: "#3DCCC7" },
        { name: "Web Platform", color: "#FFD700" },
      ],
    },
    media: {
      image: carrent,
      video: carrentVideo,
    },
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage.",
    tags: {
      technos: [
        { name: "React", color: "#61DAFB" },
        { name: "Node.js", color: "#8CC84B" },
        { name: "Express", color: "#000000" },
      ],
      thèmes: [
        { name: "Transportation", color: "#F46036" },
        { name: "Car Rental", color: "#3DCCC7" },
        { name: "Web Platform", color: "#FFD700" },
      ],
    },
    media: {
      image: carrent,
      video: carrentVideo,
    },
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage.",
    tags: {
      technos: [
        { name: "React", color: "#61DAFB" },
        { name: "Node.js", color: "#8CC84B" },
        { name: "Express", color: "#000000" },
      ],
      thèmes: [
        { name: "Transportation", color: "#F46036" },
        { name: "Car Rental", color: "#3DCCC7" },
        { name: "Web Platform", color: "#FFD700" },
      ],
    },
    media: {
      image: carrent,
      video: carrentVideo,
    },
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage.",
    tags: {
      technos: [
        { name: "React", color: "#61DAFB" },
        { name: "Node.js", color: "#8CC84B" },
        { name: "Express", color: "#000000" },
      ],
      thèmes: [
        { name: "Transportation", color: "#F46036" },
        { name: "Car Rental", color: "#3DCCC7" },
        { name: "Web Platform", color: "#FFD700" },
      ],
    },
    media: {
      image: carrent,
      video: carrentVideo,
    },
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, tools, experiences, projects, memoji };
