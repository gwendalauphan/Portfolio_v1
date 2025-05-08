//import User from 'feather-icons-react/build/IconComponents/User';
//import Briefcase from 'feather-icons-react/build/IconComponents/Briefcase';
//import Cpu from 'feather-icons-react/build/IconComponents/Cpu';
//import Phone from 'feather-icons-react/build/IconComponents/Phone';
//import BookOpen from 'feather-icons-react/build/IconComponents/BookOpen';

import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FiCpu } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

import {
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
  //For Skills (About Page)
  code,
  agile,
  processing,
  server,

  //For company logos (Work Page)
  dgfip,
  mcdonalds,

  //For project images (Project Page)
  ArboScript,
  AutomatedCIInfrastructure,
  CaverneAuxJeux,
  CICDAutomationToolkit,
  CompressiveSensing,
  FoucaultsPendulumSim,
  GoogleDriveProjectAutomation,
  LSystemsVisualizer,
  MultiMode2048,
  ParkingGame,
  Portfolio3D,
  RandomForestOptimization,
  RobotTrading,
  SparkHDFSLibraries,
  SportsAssociationWeb,
  SubmarineSimulation,
  TraverseStrategyGame,
  Velux,
  FiniteStateMachine,

  //For project videos (Project Page)
  CaverneAuxJeuxmp4,
} from "../assets";

const socialMediaHandlesLinks = [
  {
    name: "gitlab",
    url: "https://gitlab.com/gwendalauphan",
    bgColor: "#D2691E",
  },
  { name: "github", url: "https://github.com/gwendal95" },
  { name: "discord", url: "https://discord.com/users/422845843431882752" },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/gwendal-auphan-5519a3214/",
  },
  {
    name: "mailto",
    url: "mailto:gwendalauphan@proton.me",
    bgColor: "brown",
    fgColor: "AliceBlue",
  },
];

const currilculumVitaeLink = "/CV_Gwendal_Auphan.pdf";

const memoji = {
  image: [avatar],
};

const navLinks = [
  { id: "user", icon: FaUser, title: "About", path: "/about" },
  { id: "briefcase", icon: FaBriefcase, title: "Work", path: "/work" },
  { id: "cpu", icon: FiCpu, title: "Projects", path: "/projects" },
  { id: "phone", icon: FaPhone, title: "Contact", path: "/contact" },
  { id: "book-open", icon: FaBookOpen, title: "More", path: "/more" },
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
    //Ansible
    name: "Ansible",
    icon: ansible,
    description: "Automation tool for system administration.",
    link: "https://www.ansible.com/",
  },
  {
    //Terraform
    name: "Terraform",
    icon: terraform,
    description: "Infrastructure as Code (IaC) management tool.",
    link: "https://www.terraform.io/",
  },
  {
    //Docker
    name: "Docker",
    icon: docker,
    description:
      "Platform for developing and running applications in containers.",
    link: "https://www.docker.com/",
  },
  {
    //Openstack
    name: "Openstack",
    icon: openstack,
    description: "Open-source cloud platform for private and public clouds.",
    link: "https://www.openstack.org/",
  },
  {
    //Haproxy
    name: "Haproxy",
    icon: haproxy,
    description: "Load balancer and proxy for TCP/HTTP applications.",
    link: "http://www.haproxy.org/",
  },
  {
    //Nginx
    name: "Nginx",
    icon: nginx,
    description: "Web server, reverse proxy, and load balancer.",
    link: "https://www.nginx.com/",
  },
  {
    //Python
    name: "Python",
    icon: python,
    description:
      "Versatile, powerful language for web development and data science.",
    link: "https://www.python.org/",
  },
  {
    //Javascript
    name: "Javascript",
    icon: javascript,
    description: "Scripting language for adding interactivity to websites.",
    link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
  },
  {
    //ReactJs
    name: "ReactJs",
    icon: reactjs,
    description: "JavaScript library for dynamic user interfaces.",
    link: "https://reactjs.org/",
  },
  {
    //ThreeJs
    name: "ThreeJs",
    icon: threejs,
    description: "JavaScript library for 3D graphics in a web browser.",
    link: "https://threejs.org/",
  },
  {
    //CSS
    name: "CSS",
    icon: css,
    description: "Stylesheet language for controlling document presentation.",
    link: "https://www.w3.org/Style/CSS/",
  },
  {
    //SQLite
    name: "SQLite",
    icon: sqlite,
    description: "Lightweight, standalone relational database.",
    link: "https://www.sqlite.org/",
  },
  {
    //Spark
    name: "Spark",
    icon: spark,
    description: "Fast processing framework for big data.",
    link: "https://spark.apache.org/",
  },
  {
    //Hadoop HDFS
    name: "Hadoop HDFS",
    icon: hadoophdfs,
    description: "Distributed file system for storing large amounts of data.",
    link: "https://hadoop.apache.org/",
  },
  {
    //Redis
    name: "Redis",
    icon: redis,
    description: "In-memory database for storing data structures.",
    link: "https://redis.io/",
  },
  {
    //Cassandra
    name: "Cassandra",
    icon: cassandra,
    description:
      "Distributed NoSQL database for managing large amounts of data.",
    link: "https://cassandra.apache.org/",
  },
  {
    //MongoDB
    name: "MongoDB",
    icon: mongodb,
    description: "Document-oriented NoSQL database.",
    link: "https://www.mongodb.com/",
  },
  {
    //Scala
    name: "Scala",
    icon: scala,
    description:
      "Multi-paradigm programming language for modern systems and applications.",
    link: "https://www.scala-lang.org/",
  },
  {
    //Pandas
    name: "Pandas",
    icon: pandas,
    description: "Python library for data structures for data analysis.",
    link: "https://pandas.pydata.org/",
  },
  {
    //Numpy
    name: "Numpy",
    icon: numpy,
    description:
      "Python library for multi-dimensional arrays and mathematical functions.",
    link: "https://numpy.org/",
  },
  {
    //Matplotlib
    name: "Matplotlib",
    icon: matplotlib,
    description: "Python library for creating visualizations.",
    link: "https://matplotlib.org/",
  },
  {
    //TensorFlow
    name: "TensorFlow",
    icon: tensorflow,
    description: "Open-source platform for machine learning.",
    link: "https://www.tensorflow.org/",
  },
];

const technologies_fr = [
  {
    //Ansible
    name: "Ansible",
    icon: ansible,
    description: "Outil d'automatisation pour l'administration système.",
    link: "https://www.ansible.com/",
  },
  {
    //Terraform
    name: "Terraform",
    icon: terraform,
    description: "Gestionnaire d'infrastructure sous forme de code (IaC).",
    link: "https://www.terraform.io/",
  },
  {
    //Docker
    name: "Docker",
    icon: docker,
    description:
      "Plateforme pour développer et exécuter des applications dans des conteneurs.",
    link: "https://www.docker.com/",
  },
  {
    //Openstack
    name: "Openstack",
    icon: openstack,
    description: "Plateforme cloud open-source pour clouds privés et publics.",
    link: "https://www.openstack.org/",
  },
  {
    //Haproxy
    name: "Haproxy",
    icon: haproxy,
    description: "Équilibreur de charge et proxy pour applications TCP/HTTP.",
    link: "http://www.haproxy.org/",
  },
  {
    //Nginx
    name: "Nginx",
    icon: nginx,
    description: "Serveur web, reverse proxy et équilibreur de charge.",
    link: "https://www.nginx.com/",
  },
  {
    //Python
    name: "Python",
    icon: python,
    description:
      "Langage polyvalent, puissant pour développement web et data science.",
    link: "https://www.python.org/",
  },
  {
    //Javascript
    name: "Javascript",
    icon: javascript,
    description:
      "Langage de script pour ajouter de l'interactivité aux sites web.",
    link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
  },
  {
    //ReactJs
    name: "ReactJs",
    icon: reactjs,
    description:
      "Bibliothèque JavaScript pour interfaces utilisateur dynamiques.",
    link: "https://reactjs.org/",
  },
  {
    //ThreeJs
    name: "ThreeJs",
    icon: threejs,
    description:
      "Bibliothèque JavaScript pour graphiques 3D dans un navigateur web.",
    link: "https://threejs.org/",
  },
  {
    //CSS
    name: "CSS",
    icon: css,
    description:
      "Langage de feuille de style pour contrôler la présentation des documents.",
    link: "https://www.w3.org/Style/CSS/",
  },
  {
    //SQLite
    name: "SQLite",
    icon: sqlite,
    description: "Base de données relationnelle légère et autonome.",
    link: "https://www.sqlite.org/",
  },
  {
    //Spark
    name: "Spark",
    icon: spark,
    description: "Framework de traitement rapide pour le big data.",
    link: "https://spark.apache.org/",
  },
  {
    //Hadoop HDFS
    name: "Hadoop HDFS",
    icon: hadoophdfs,
    description:
      "Système de fichiers distribué pour stocker de grandes quantités de données.",
    link: "https://hadoop.apache.org/",
  },
  {
    //Redis
    name: "Redis",
    icon: redis,
    description:
      "Base de données en mémoire pour stockage de structures de données.",
    link: "https://redis.io/",
  },
  {
    //Cassandra
    name: "Cassandra",
    icon: cassandra,
    description:
      "Base de données NoSQL distribuée pour gestion de grandes quantités de données.",
    link: "https://cassandra.apache.org/",
  },
  {
    //MongoDB
    name: "MongoDB",
    icon: mongodb,
    description: "Base de données NoSQL orientée documents.",
    link: "https://www.mongodb.com/",
  },
  {
    //Javascript
    name: "Scala",
    icon: scala,
    description:
      "Langage de programmation multi-paradigme, pour systèmes et applications modernes.",
    link: "https://www.scala-lang.org/",
  },
  {
    //Pandas
    name: "Pandas",
    icon: pandas,
    description:
      "Bibliothèque Python pour structures de données pour analyse des données.",
    link: "https://pandas.pydata.org/",
  },
  {
    //Numpy
    name: "Numpy",
    icon: numpy,
    description:
      "Bibliothèque Python pour tableaux multidimensionnels et fonctions mathématiques.",
    link: "https://numpy.org/",
  },
  {
    //Matplotlib
    name: "Matplotlib",
    icon: matplotlib,
    description: "Bibliothèque Python pour création de visualisations.",
    link: "https://matplotlib.org/",
  },
  {
    //TensorFlow
    name: "TensorFlow",
    icon: tensorflow,
    description: "Plateforme open-source pour le machine learning.",
    link: "https://www.tensorflow.org/",
  },
];

const tools = [
  {
    //GitLab CI
    name: "GitLab CI",
    icon: gitlabci,
    description:
      "Continuous integration and deployment integrated with GitLab.",
    link: "https://docs.gitlab.com/ee/ci/",
  },
  {
    //Jenkins
    name: "Jenkins",
    icon: jenkins,
    description: "Continuous integration and continuous delivery tool.",
    link: "https://www.jenkins.io/",
  },
  {
    //Git
    name: "Git",
    icon: git,
    description: "Version control system to track code changes.",
    link: "https://git-scm.com/",
  },
  {
    //SonarQube
    name: "SonarQube",
    icon: sonarqube,
    description: "Code analysis for quality and security.",
    link: "https://www.sonarqube.org/",
  },
  {
    //Nexus
    name: "Nexus",
    icon: nexus,
    description: "Repository manager for binary artifacts and builds.",
    link: "https://www.sonatype.com/nexus/repository-oss",
  },
  {
    //VPS
    name: "VPS",
    icon: vps,
    description: "Virtual server used as a dedicated server.",
    link: "https://en.wikipedia.org/wiki/Virtual_private_server",
  },
  {
    //SSH
    name: "SSH",
    icon: ssh,
    description: "Secure protocol for network services.",
    link: "https://www.openssh.com/",
  },
  {
    //Jira
    name: "Jira",
    icon: jira,
    description: "Bug tracking and agile project management from Atlassian.",
    link: "https://www.atlassian.com/software/jira",
  },
  {
    //Confluence
    name: "Confluence",
    icon: confluence,
    description: "Team collaboration for documentation and sharing.",
    link: "https://www.atlassian.com/software/confluence",
  },
  {
    //Trello
    name: "Trello",
    icon: trello,
    description: "Card-based project management to organize tasks.",
    link: "https://trello.com/",
  },
  {
    //Whimsical
    name: "Whimsical",
    icon: whimsical,
    description: "Visualization for diagrams, wireframes, and workflows.",
    link: "https://whimsical.com/",
  },
  {
    //Slack
    name: "Slack",
    icon: slack,
    description: "Team communication based on channels and conversations.",
    link: "https://slack.com/",
  },
  {
    //Microsoft Teams
    name: "Microsoft Teams",
    icon: microsoftteams,
    description: "Collaboration with chat, video meetings, and storage.",
    link: "https://www.microsoft.com/en-us/microsoft-teams/",
  },
];

const tools_fr = [
  {
    //GitLab CI
    name: "GitLab CI",
    icon: gitlabci,
    description: "Intégration et déploiement continus intégrés à GitLab.",
    link: "https://docs.gitlab.com/ee/ci/",
  },
  {
    //Jenkins
    name: "Jenkins",
    icon: jenkins,
    description: "Outil d'intégration continue et de livraison continue.",
    link: "https://www.jenkins.io/",
  },
  {
    //Git
    name: "Git",
    icon: git,
    description:
      "Système de contrôle de version pour suivre les changements de code.",
    link: "https://git-scm.com/",
  },
  {
    //SonarQube
    name: "SonarQube",
    icon: sonarqube,
    description: "Analyse de code pour la qualité et la sécurité.",
    link: "https://www.sonarqube.org/",
  },
  {
    //Nexus
    name: "Nexus",
    icon: nexus,
    description: "Gestionnaire de dépôts pour artefacts binaires et builds.",
    link: "https://www.sonatype.com/nexus/repository-oss",
  },
  {
    //VPS
    name: "VPS",
    icon: vps,
    description: "Serveur virtuel utilisé comme serveur dédié.",
    link: "https://en.wikipedia.org/wiki/Virtual_private_server",
  },
  {
    //SSH
    name: "SSH",
    icon: ssh,
    description: "Protocole sécurisé pour les services de réseau.",
    link: "https://www.openssh.com/",
  },
  {
    //Jira
    name: "Jira",
    icon: jira,
    description: "Suivi de bugs et gestion de projet agile de Atlassian.",
    link: "https://www.atlassian.com/software/jira",
  },
  {
    //Confluence
    name: "Confluence",
    icon: confluence,
    description: "Collaboration d'équipe pour documentation et partage.",
    link: "https://www.atlassian.com/software/confluence",
  },
  {
    //Trello
    name: "Trello",
    icon: trello,
    description: "Gestion de projet basé sur des cartes pour organiser tâches.",
    link: "https://trello.com/",
  },
  {
    //Whimsical
    name: "Whimsical",
    icon: whimsical,
    description:
      "Visualisation pour diagrammes, wireframes et flux de travail.",
    link: "https://whimsical.com/",
  },
  {
    //Slack
    name: "Slack",
    icon: slack,
    description:
      "Communication d'équipe basée sur des chaînes et conversations.",
    link: "https://slack.com/",
  },
  {
    //Microsoft Teams
    name: "Microsoft Teams",
    icon: microsoftteams,
    description: "Collaboration avec chat, réunions vidéo et stockage.",
    link: "https://www.microsoft.com/en-us/microsoft-teams/",
  },
];

const experiences = [
  {
    //Versatile Employee
    title: "Versatile Employee",
    company_name: "McDonald's",
    icon: mcdonalds,
    iconBg: "#383E56",
    date: "Jul. 2020 - Jun. 2021",
    description: "Learning in a dynamic environment",
    points: [
      "Quick adaptation to various fast-food responsibilities.",
      "Consistently professional attitude with customers.",
      "Efficient management of cooking and anticipation of stock needs.",
      "Valuing every task, from ordering to cleaning.",
    ],
  },
  {
    //Data Engineer Apprentice
    title: "Data Engineer Apprentice",
    company_name: "Dgfip",
    icon: dgfip,
    iconBg: "#E6DEDD",
    date: "Sept 2021 - May 2022",
    description: "Initiation and development of technical foundations",
    points: [
      "Discovery of the world of big data and its scope.",
      "Developing Spark Scala scripts for various projects as well as a library.",
      "Adoption of the agile approach and initiation to CI/CD methods with Gitlab CI.",
      "Adoption of Docker and strengthening in Bash scripting.",
      "Writing technical documentation: procedures and tutorials",
    ],
  },
  {
    //DevOps Engineer Apprentice
    title: "DevOps Engineer Apprentice",
    company_name: "Dgfip",
    icon: dgfip,
    iconBg: "#E6DEDD",
    date: "May 2022 - Jan 2023",
    description: "Expanding responsibilities and mastering advanced tools",
    points: [
      "Automation with Ansible and setting up Gitlab CI pipelines.",
      "Adoption of Terraform to manage cloud instances, coupled with Ansible to automate processes.",
      "In-depth mastery of Jira and broadening knowledge on Docker, Linux, and networks.",
      "Refining skills with Git.",
    ],
  },
  {
    //Infrastructure Engineer Apprentice
    title: "Infrastructure Engineer Apprentice",
    company_name: "Dgfip",
    icon: dgfip,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    description: "Finalizing major projects and knowledge transfer",
    points: [
      "Setting up technical elements: haproxy, self-signed SSL certificates, mounting points, dependency installations, etc.",
      "Creation of a CLI tool to facilitate deployment configuration via the Openstack API.",
      "Implementation of an infrastructure integrating Jenkins, Nexus, and Sonarqube.",
      "Leading workshops for the community and documentary contribution.",
    ],
  },
];

const experiences_fr = [
  {
    //Employé Polyvalent
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
    //Apprenti Data Engineer
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
    //Apprenti DevOps Engineer
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
    //Apprenti Infrastructure Engineer
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
    //Sparse Coding & Signal
    idname: "CompressiveSensing",
    name: "Sparse Coding & Signal",
    shortDescription:
      "Use of Compressive Sensing to optimize the representation of signals.",
    longDescription:
      "This project focuses on the concept of sparse coding in connection with Compressive Sensing. I used techniques that take advantage of the sparsity of signals to reduce the amount of data required for a faithful representation of the signal. The use of Python allowed for smooth implementation, especially with the assistance of libraries like Numpy and Matplotlib.",
    tags: {
      technos: [
        { name: "Python", color: "#3776AB" },
        { name: "Numpy", color: "#9C0F5F" },
        { name: "Matplotlib", color: "#D44000" },
        { name: "K-SVD", color: "#DA4619" },
        { name: "Matching Pursuit", color: "#0A74DA" },
      ],
      themes: [
        { name: "Coding", color: "#1F77B4" },
        { name: "Signal Processing", color: "#17BECF" },
      ],
      frame: [
        { name: "School", color: "#8C564B" },
        { name: "Project", color: "#9467BD" },
      ],
    },
    media: {
      image: CompressiveSensing,
      video: "",
    },
    sourceCodeLink: "https://github.com/",
  },
  {
    //Velux: CLI Configurations
    idname: "Velux",
    name: "Velux: CLI Configurations",
    shortDescription:
      "CLI tool for structuring YAML configurations for the Cloud.",
    longDescription:
      "Velux is a command-line tool designed to create and structure YAML file configurations. While it cannot directly create instances, it prepares files intended to be used for Cloud infrastructure deployments. The tool plays a crucial role in setting up projects associated with Openstack and Terraform.",
    tags: {
      technos: [
        { name: "Bash", color: "#4EAA25" },
        { name: "Python", color: "#3776AB" },
        { name: "API Openstack", color: "#ED8B00" },
        { name: "Terraform", color: "#623CE4" },
        { name: "YAML", color: "#A8DADC" },
      ],
      themes: [
        { name: "Configuration", color: "#E85D04" },
        { name: "CLI", color: "#FFC085" },
      ],
      frame: [
        { name: "Pro", color: "#FF5733" },
        { name: "Project", color: "#9467BD" },
      ],
    },
    media: {
      image: Velux,
      video: "",
    },
    sourceCodeLink: "https://github.com/",
  },
  {
    //Game Cave
    idname: "CaverneAuxJeux",
    name: "Game Cave",
    shortDescription:
      "8 mini-games with point tracking and statistical visualization.",
    longDescription:
      "The 'Game Cave' is an interactive platform that brings together eight mini-games. Each game awards points to players and allows for online account registration to track progress. In addition to the games, the platform has a data visualization section providing detailed statistics on player performance.",
    tags: {
      technos: [
        { name: "Python", color: "#3776AB" },
        { name: "Tkinter", color: "#FF6347" },
        { name: "Numpy", color: "#9C0F5F" },
        { name: "Matplotlib", color: "#D44000" },
        { name: "MySQL", color: "#4479A1" },
      ],
      themes: [
        { name: "Games", color: "#1F77B4" },
        { name: "Visualization", color: "#17BECF" },
        { name: "Statistics", color: "#9467BD" },
      ],
      frame: [
        { name: "Personal", color: "#8C564B" },
        { name: "Games", color: "#9467BD" },
      ],
    },
    media: {
      image: CaverneAuxJeux,
      video: CaverneAuxJeuxmp4,
    },
    sourceCodeLink: "https://github.com/",
  },
  {
    //Robot Trading Platform
    idname: "RobotTrading",
    name: "Robot Trading Platform",
    shortDescription: "Automated trading platform with real-time updates.",
    longDescription:
      "The 'Robot Trading' project is an innovative platform designed for trading primarily managed by bots. It is structured around several services: one for updating data in real time, another dedicated to processing this data, and a final one for the automatic execution of trading orders.",
    tags: {
      technos: [
        { name: "Python", color: "#3776AB" },
        { name: "Cassandra", color: "#1287A1" },
        { name: "Docker", color: "#0db7ed" },
        { name: "Redis", color: "#D92B21" },
        { name: "Kafka", color: "#231F20" },
        { name: "API Rest", color: "#0298c3" },
      ],
      themes: [
        { name: "Data Science", color: "#1F77B4" },
        { name: "Automated Trading", color: "#17BECF" },
      ],
      frame: [
        { name: "Personal", color: "#8C564B" },
        { name: "Project", color: "#9467BD" },
      ],
    },
    media: {
      image: RobotTrading,
      video: "",
    },
    sourceCodeLink: "https://github.com/",
  },
  {
    //Interactive 3D Portfolio
    nameid: "Portfolio3D",
    name: "Interactive 3D Portfolio",
    shortDescription: "Interactive 3D portfolio with automated deployment.",
    longDescription:
      "My first portfolio website offers a unique immersion with 3D animations and interactions. It is deployed in a Docker container, forming an integral part of a CI-CD pipeline. The Ansible tool facilitates its automated deployment, thus ensuring a smooth and efficient content update.",
    tags: {
      technos: [
        { name: "ReactJs", color: "#61DAFB" },
        { name: "React3D", color: "#61DAFB" },
        { name: "CSS", color: "#563D7C" },
        { name: "Vite", color: "#646CFF" },
        { name: "Docker", color: "#0db7ed" },
        { name: "Gitlab CI", color: "#FC6D27" },
        { name: "Ansible", color: "#EE0000" },
      ],
      themes: [{ name: "3D Interactive", color: "#1F77B4" }],
      frame: [
        { name: "Personal", color: "#8C564B" },
        { name: "Project", color: "#9467BD" },
      ],
    },
    media: {
      image: Portfolio3D,
      video: "",
    },
    sourceCodeLink: "https://github.com/",
  },
  {
    //Random Forest Optimization
    nameid: "RandomForestOptimization",
    name: "Random Forest Optimization",
    shortDescription: "Hyperparameter optimization for Random Forest in R.",
    longDescription:
      "In this project, I delved deep into the combinations of hyperparameters for the Random Forest model. The main objective was to identify the best combinations, analyze their performance, and deduce an optimization strategy for future applications.",
    tags: {
      technos: [
        { name: "R", color: "#3776AB" },
        { name: "Rstudio", color: "#9C0F5F" },
        { name: "Random Forest", color: "#D44000" },
        { name: "Hyperparameter Tuning", color: "#DA4619" },
      ],
      themes: [{ name: "Optimization", color: "#1F77B4" }],
      frame: [
        { name: "School", color: "#8C564B" },
        { name: "Personal", color: "#9467BD" },
        { name: "Project", color: "#9467BD" }, // Assuming you want the same color as "Personal"
      ],
    },
    media: {
      image: RandomForestOptimization, // Add image link if you have one
      video: "", // Add video link if you have one
    },
    sourceCodeLink: "https://github.com/", // Update this with the correct link to your source code
  },
  {
    //Submarine Simulation
    nameid: "SubmarineSimulation",
    name: "Submarine Simulation",
    shortDescription:
      "Interactive submarine simulation with graphical interfaces.",
    longDescription:
      "This project is an interactive submarine simulation using multiple graphical interfaces. Users can pilot the submarine, visualize it on 2D and 3D maps, and monitor its gyroscope. All of this is presented in real-time through the Tkinter interface.",
    tags: {
      technos: [
        { name: "Python", color: "#3776AB" },
        { name: "Tkinter", color: "#0174DF" },
        { name: "Simulation", color: "#FFC300" },
        { name: "Matplotlib", color: "#D44000" },
        { name: "Numpy", color: "#9C0F5F" },
        { name: "Submarine", color: "#1A2B34" },
      ],
      themes: [
        { name: "3D", color: "#1F77B4" },
        { name: "2D", color: "#8CA0B4" },
        { name: "Gyroscope", color: "#17BECF" },
      ],
      frame: [
        { name: "Personal", color: "#8C564B" },
        { name: "Project", color: "#9467BD" },
      ],
    },
    media: {
      image: SubmarineSimulation,
      video: "",
    },
    sourceCodeLink: "https://github.com/",
  },
  {
    //Traverse Strategy Game
    nameid: "TraverseStrategyGame",
    name: "Traverse Strategy Game",
    shortDescription: "Strategic game with pawn crossing and competitive bot.",
    longDescription:
      "Traverse is a strategic game where the objective is to get your pawns to the other end of the board. With four distinct types of pawns, an engaging graphical interface, and a bot to face off against, players can save their games to revisit them.",
    tags: {
      technos: [
        { name: "C", color: "#A8B9CC" },
        { name: "SDL2", color: "#C70D3A" },
        { name: "Strategy", color: "#FF4500" },
        { name: "Game", color: "#00FA9A" },
        { name: "Graphical Interface", color: "#7FFF00" },
        { name: "Bot", color: "#7D26CD" },
      ],
      themes: [{ name: "Coding", color: "#1F77B4" }],
      frame: [
        { name: "School", color: "#8C564B" },
        { name: "Games", color: "#2E8B57" },
      ],
    },
    media: {
      image: TraverseStrategyGame,
      video: "",
    },
    sourceCodeLink: "https://github.com/",
  },
  {
    //Parking Game
    nameid: "ParkingGame",
    name: "Parking Game",
    shortDescription: "Interactive parking game.",
    longDescription:
      "The 'Parking' game is a fun challenge where players generate a parking configuration and then try to fill it or empty it with cars.",
    tags: {
      technos: [
        { name: "Python", color: "#3776AB" },
        { name: "Tkinter", color: "#FFD43B" },
      ],
      themes: [],
      frame: [
        { name: "Personal", color: "#8C564B" },
        { name: "Games", color: "#9467BD" },
      ],
    },
    media: {
      image: ParkingGame,
      video: "",
    },
    sourceCodeLink: "https://github.com/",
  },
  {
    //L-Systems Visualizer
    nameid: "LSystemsVisualizer",
    name: "L-Systems Visualizer",
    shortDescription: "Graphic visualization of L-systems with Turtle.",
    longDescription:
      "The L-Systems Turtle project is dedicated to the creation and visualization of drawings based on L-systems using the Turtle graphics library. These systems model the growth and development of plants or bacteria, allowing a fascinating visual representation of these biological processes.",
    tags: {
      technos: [
        { name: "Python", color: "#3776AB" },
        { name: "Turtle", color: "#1F77B4" },
        { name: "L-Systems", color: "#D44000" },
      ],
      themes: [
        { name: "Modeling", color: "#9C0F5F" },
        { name: "Growth", color: "#17BECF" },
        { name: "Biology", color: "#8C564B" },
      ],
      frame: [
        { name: "School", color: "#8C564B" },
        { name: "Project", color: "#9467BD" },
      ],
    },
    media: {
      image: LSystemsVisualizer,
      video: "",
    },
    sourceCodeLink: "https://github.com/",
  },
  {
    //2048 MultiMode
    nameid: "MultiMode2048",
    name: "2048 MultiMode",
    shortDescription: "2048 with multiple modes and 8x8 grid.",
    longDescription:
      "An enriched version of the famous 2048 game, this implementation offers several game modes: solo, time-trial, duel with another player, or against the computer. In addition to the classic grid, an 8x8 variant is also available for a renewed gaming experience.",
    tags: {
      technos: [
        { name: "C", color: "#A8B9CC" },
        { name: "SDL2", color: "#FF0000" },
        { name: "Makefile", color: "#427819" },
        { name: "Game", color: "#333333" },
        { name: "2048", color: "#00A4E4" },
      ],
      themes: [{ name: "Multiplayer", color: "#1F77B4" }],
      frame: [
        { name: "School", color: "#8C564B" },
        { name: "Games", color: "#9467BD" },
      ],
    },
    media: {
      image: MultiMode2048,
      video: "",
    },
    sourceCodeLink: "https://github.com/",
  },
  {
    //Foucault's Pendulum Sim
    nameid: "FoucaultsPendulumSim",
    name: "Foucault's Pendulum Sim",
    shortDescription: "Visual simulation of Foucault's pendulum.",
    longDescription:
      "This project replicates the Foucault's pendulum, an experiment designed to demonstrate the rotation of the Earth with respect to a Galilean frame of reference. The aim was to calculate and visualize the pendulum's motion using a diagram, facilitating the understanding of this significant phenomenon.",
    tags: {
      technos: [
        { name: "Python", color: "#3776AB" },
        { name: "Matplotlib", color: "#D44000" },
      ],
      themes: [
        { name: "Simulation", color: "#1F77B4" },
        { name: "Physics", color: "#17BECF" },
      ],
      frame: [
        { name: "School", color: "#8C564B" },
        { name: "Project", color: "#9467BD" },
      ],
    },
    media: {
      image: FoucaultsPendulumSim,
      video: "",
    },
    sourceCodeLink: "https://github.com/", // Replace this with the actual link to the project's source code
  },
  {
    //Arbo Script
    nameid: "ArboScript",
    name: "Arbo Script",
    shortDescription: "Tree structure generator from YAML.",
    longDescription:
      "This Bash script transforms the content of a YAML file into a folder tree on a Linux system. It automates the creation of folders and subfolders based on the YAML structure, providing an efficient way to organize data.",
    tags: {
      technos: [
        { name: "Bash", color: "#4EAA25" },
        { name: "YAML", color: "#773092" },
        { name: "Automation", color: "#DA4619" },
        { name: "Linux", color: "#D1BAE3" },
      ],
      themes: [{ name: "File System", color: "#1F77B4" }],
      frame: [
        { name: "Professional", color: "#8C564B" },
        { name: "Project", color: "#9467BD" },
      ],
    },
    media: {
      image: ArboScript,
      video: "",
    },
    sourceCodeLink: "https://github.com/",
  },
  {
    //Sports Association Web
    nameid: "SportsAssociationWeb",
    name: "Sports Association Web",
    shortDescription: "Website for an association with a shop and events.",
    longDescription:
      "Creation of a dedicated website for a sports association offering several essential features. The site allows members to log in using credentials, access an online store, and be informed about upcoming events.",
    tags: {
      technos: [
        { name: "HTML", color: "#E34C26" },
        { name: "PHP", color: "#777BB3" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "CSS", color: "#1572B6" },
      ],
      themes: [{ name: "Web Development", color: "#4CAF50" }],
      frame: [
        { name: "School", color: "#8C564B" },
        { name: "Project", color: "#9467BD" },
      ],
    },
    media: {
      image: SportsAssociationWeb,
      video: "",
    },
    sourceCodeLink: "https://github.com/",
  },
  {
    //CI/CD Automation Toolkit
    nameid: "CICDAutomationToolkit",
    name: "CI/CD Automation Toolkit",
    shortDescription: "Automation of CI/CD pipelines using Ansible.",
    longDescription:
      "The goal of this project is to automate the setup of a CI/CD pipeline using Ansible scripts. It also includes script templates specifically designed to be used with a Gitlab CI pipeline during the development of Scala/SBT projects. The set provides a significant time savings for workflow setup.",
    tags: {
      technos: [
        { name: "Ansible", color: "#FFA500" }, // This color is just a placeholder, replace it with the desired color.
        { name: "Docker", color: "#2496ED" },
        { name: "Bash", color: "#4EAA25" },
        { name: "Gitlab CI", color: "#FC6D26" },
        { name: "Scala", color: "#DE3423" },
        { name: "SBT", color: "#FFB400" },
      ],
      themes: [
        { name: "CI/CD", color: "#0A74DA" }, // This color is also a placeholder.
      ],
      frame: [
        { name: "Professional", color: "#8C564B" }, // 'Pro' translated and color is a placeholder.
        { name: "Project", color: "#9467BD" },
      ],
    },
    media: {
      image: CICDAutomationToolkit, // Add link to an image if you have one
      video: "", // Add link to a video if you have one
    },
    sourceCodeLink: "https://github.com/", // Replace with the correct link to the source code
  },
  {
    //Automated CI Infrastructure
    nameid: "AutomatedCIInfrastructure",
    name: "Automated CI Infrastructure",
    shortDescription:
      "Automation of CI infrastructure deployment with Ansible.",
    longDescription:
      "This project involves deploying an infrastructure focused on continuous integration, incorporating the services of Jenkins, Sonarqube, and Nexus. Everything was designed to automate the administrative configuration processes from creation. The services are orchestrated using docker-compose and executed remotely via Ansible, ensuring smooth and automated implementation.",
    tags: {
      technos: [
        { name: "Ansible", color: "#EE0000" }, // Colors are placeholders; adjust as needed
        { name: "Terraform", color: "#5C4EE5" },
        { name: "Docker", color: "#0DB7ED" },
        { name: "Jenkins", color: "#D33837" },
        { name: "Sonarqube", color: "#4E9BCD" },
        { name: "Nexus", color: "#6C2F8F" },
      ],
      themes: [
        { name: "CI/CD", color: "#2CA02C" }, // Color is a placeholder; adjust as needed
      ],
      frame: [
        { name: "Pro", color: "#8C564B" }, // Colors are placeholders; adjust as needed
        { name: "Project", color: "#9467BD" },
      ],
    },
    media: {
      image: AutomatedCIInfrastructure, // Link to image if any
      video: "", // Link to video if any
    },
    sourceCodeLink: "https://github.com/", // Update with the correct link
  },
  {
    //Spark HDFS Libraries
    nameid: "SparkHDFSLibraries",
    name: "Spark HDFS Libraries",
    shortDescription: "Spark Scala libraries for HDFS.",
    longDescription:
      "This project involves developing Spark Scala libraries specially designed to interact efficiently with the distributed file system HDFS. These tools facilitate access and manipulation of data stored in a distributed manner.",
    tags: {
      technos: [
        { name: "Spark", color: "#E25A1C" },
        { name: "Scala", color: "#DE3423" },
        { name: "HDFS", color: "#007AAE" },
      ],
      themes: [{ name: "Big Data", color: "#4D91BF" }],
      frame: [
        { name: "Professional", color: "#8C564B" },
        { name: "Project", color: "#9467BD" },
      ],
    },
    media: {
      image: SparkHDFSLibraries,
      video: "",
    },
    sourceCodeLink: "https://github.com/",
  },
  {
    //Google Drive Project Automation
    nameid: "GoogleDriveProjectAutomation",
    name: "Google Drive Project Automation",
    shortDescription: "Automation and framework for Google Drive projects.",
    longDescription:
      "Creation of a solution automating the setup of projects on Google Drive, to facilitate their management. This tool sets a framework for project development, thus ensuring better supervision, traceability, and project monitoring.",
    tags: {
      technos: [
        { name: "Google Drive", color: "#4285F4" },
        { name: "Google App Script", color: "#0F9D58" },
      ],
      themes: [
        { name: "Automation", color: "#1F77B4" },
        { name: "Project Management", color: "#17BECF" },
      ],
      frame: [
        { name: "Personal", color: "#8C564B" },
        { name: "Project", color: "#9467BD" },
      ],
    },
    media: {
      image: GoogleDriveProjectAutomation,
      video: "",
    },
    sourceCodeLink: "https://github.com/",
  },
  {
    //Finite State Machine Editor
    name: "Finite State Machine Editor",
    shortDescription:
      "Editor for designing and implementing finite state machines in C.",
    longDescription:
      "Developed a dedicated editor for finite state machines, using C programming language. The project involved creating a user-friendly interface for designing, visualizing, and implementing finite state machines, commonly used in computing and mathematical computations.",
    tags: {
      technos: [{ name: "C", color: "#A8B9CC" }],
      themes: [
        { name: "Finite State Machines", color: "#1F77B4" },
        { name: "Software Development", color: "#17BECF" },
      ],
      frame: [
        { name: "School", color: "#8C564B" },
        { name: "Project", color: "#9467BD" },
      ],
    },
    media: {
      image: FiniteStateMachine,
      video: "",
    },
    sourceCodeLink: "https://github.com/",
  },
];

export {
  services,
  navLinks,
  technologies,
  tools,
  experiences,
  projects,
  memoji,
  socialMediaHandlesLinks,
  currilculumVitaeLink,
};
