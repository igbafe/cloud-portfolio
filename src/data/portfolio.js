export const profile = {
  name: "Peter Igbafe",
  shortName: "PETER IGBAFE",
  role: "Cloud Engineer",
  focus: "AWS · Terraform · Kubernetes · CI/CD",
  location: "Lagos, Nigeria",
  email: "igbafes8@gmail.com",
  phone: "0810 628 2103",
  phoneHref: "+2348106282103",
  github: "https://github.com/igbafe",
  linkedin: "https://www.linkedin.com/in/igbafe-simonpeter/",
  summary:
    "I bring software development and IT operations experience to cloud engineering: building AWS infrastructure with Terraform, packaging workloads with containers, and making delivery repeatable.",
};

export const heroMetrics = [
  { value: "99%+", label: "monitored website uptime" },
  { value: "24", label: "microservices in E-commerce" },
  { value: "2 AZs", label: "AWS network design" },
];

export const projects = [
  {
    id: "k3s",
    number: "01",
    type: "KUBERNETES PLATFORM",
    title: "AWS K3s Cluster with Terraform",
    summary:
      "A self-managed Kubernetes platform on AWS EC2, provisioned as code and extended with ingress, TLS, and GitOps delivery.",
    panelLabel: "AWS K3S CLUSTER ARCHITECTURE",
    diagram: "/architecture/k3s-architecture.png",
    diagramAlt: "Architecture diagram of a Terraform-managed K3s cluster on AWS EC2 across two Availability Zones, with NGINX ingress, cert-manager, Argo CD, and S3.",
    highlights: [
      "Codified the network and EC2 cluster, with remote Terraform state in S3.",
      "Configured K3s server and worker nodes, then added NGINX ingress and certificate management.",
      "Installed Argo CD to support Git-based application delivery.",
    ],
    technologies: ["AWS", "Terraform", "EC2", "K3s", "Helm", "Argo CD"],
    links: [
      {
        label: "Project notes",
        href: "https://app.notion.com/p/41c97ca55329818eb1bdde23c7ce9150?pvs=204",
        icon: "external",
      },
      {
        label: "GitHub repository",
        href: "https://github.com/igbafe/k3s-terraform-project",
        icon: "github",
      },
    ],
  },
  {
    id: "ecommerce",
    number: "02",
    type: "END-TO-END CLOUD DELIVERY",
    title: "E-commerce Platform on AWS",
    summary:
      "A three-stage delivery path for a 24-service shop: build and publish images, provision the platform, then deploy through Argo CD.",
    panelLabel: "CLOUD-NATIVE E-COMMERCE ARCHITECTURE",
    diagram: "/architecture/ecommerce-architecture.png",
    diagramAlt: "Architecture diagram of a cloud-native E-commerce deployment on AWS, showing GitHub Actions and OIDC, ECR, Terraform, EKS, Argo CD, and observability services.",
    highlights: [
      "Stage 1: GitHub Actions builds 24 service images and pushes them to Amazon ECR using OIDC.",
      "Stage 2: Terraform provisions the VPC, EKS, storage, ingress, certificates, and Argo CD; SonarQube scans infrastructure code.",
      "Stage 3: Kubernetes manifests and Argo CD provide the GitOps application delivery workflow.",
    ],
    technologies: ["GitHub Actions", "OIDC", "ECR", "Terraform", "EKS", "Argo CD", "Prometheus", "Grafana", "Jaeger", "OpenSearch"],
    links: [
      {
        label: "Project overview",
        href: "https://app.notion.com/p/41697ca55329815e8da2c83633bc32e6?pvs=204",
        icon: "external",
      },
      {
        label: "Stage 1 · image pipeline",
        href: "https://app.notion.com/p/41797ca553298107a17fe0328eaa1cc5?pvs=204",
        icon: "external",
      },
      {
        label: "Stage 2 · infrastructure",
        href: "https://app.notion.com/p/41897ca5532981108260d22479e6b8f2?pvs=204",
        icon: "external",
      },
      {
        label: "Stage 3 · deployment runbook",
        href: "https://app.notion.com/p/41597ca553298125848ade6d295cede3?pvs=204",
        icon: "external",
      },
      {
        label: "Application source",
        href: "https://github.com/igbafe/final-project-docker",
        icon: "github",
      },
      {
        label: "Terraform infrastructure",
        href: "https://github.com/igbafe/final-terraform-project",
        icon: "github",
      },
      {
        label: "Kubernetes manifests",
        href: "https://github.com/igbafe/k8s-files",
        icon: "github",
      },
    ],
  },
];

export const skillGroups = [
  {
    code: "CLOUD_01",
    title: "AWS & Cloud",
    icon: "cloud",
    skills: ["AWS", "VPC", "EC2", "IAM", "S3", "EKS", "Organizations", "Azure identity"],
  },
  {
    code: "IAC_02",
    title: "Infrastructure as Code",
    icon: "layers",
    skills: ["Terraform", "Variables & modules", "Remote state", "Multi-file infrastructure"],
  },
  {
    code: "PLATFORM_03",
    title: "Containers & Delivery",
    icon: "server",
    skills: ["Docker", "Docker Compose", "Kubernetes", "K3s", "Helm", "Argo CD", "GitHub Actions"],
  },
  {
    code: "LINUX_04",
    title: "Linux & Web",
    icon: "terminal",
    skills: ["Ubuntu", "Bash", "Nginx", "SSH", "SSL/TLS", "Certbot", "Portainer"],
  },
  {
    code: "NETWORK_05",
    title: "Networking",
    icon: "network",
    skills: ["TCP/IP", "Subnetting", "DNS", "DHCP", "VPN", "Security groups", "NAT / IGW"],
  },
  {
    code: "DEV_06",
    title: "Development & Quality",
    icon: "code",
    skills: ["JavaScript", "Node.js", "NestJS", "React", "Next.js", "MongoDB", "Redis", "BullMQ", "SonarQube", "Python · basic", "SQL · basic"],
  },
];

export const experience = [
  {
    period: "MAY 2026 — NOV 2026",
    role: "Cloud Engineering Intern",
    company: "DigitalWitch",
    context: "EdTech · Lagos, Nigeria",
    highlights: [
      "Designed and deployed a public/private AWS VPC with Terraform: two public and two private subnets across two Availability Zones, plus routes, NAT, and security groups.",
      "Provisioned a SonarQube EC2 server with Terraform and Docker Compose, and built a GitHub Actions deployment workflow.",
      "Hosted Ubuntu web workloads with Nginx, custom DNS, and Certbot HTTPS; automated Docker and Portainer setup with Bash.",
      "Applied AWS Organizations and IAM concepts while planning account separation for Dev, Staging, and Production environments.",
    ],
  },
  {
    period: "FEB 2025 — MAR 2026",
    role: "IT / Software Developer",
    company: "Linkage Assurance",
    context: "Insurance · Lekki, Lagos",
    highlights: [
      "Contributed to a MERN customer portal, integrating NestJS and BullMQ with Redis for background processing.",
      "Co-maintained the production WordPress site through performance work and uptime monitoring, contributing to 99%+ uptime.",
      "Built a React, Node.js, and MongoDB asset-management system for 50–100 devices, cutting lookup time by about 50%.",
      "Provided end-user IT support across a 50+ person organization.",
    ],
  },
  {
    period: "JAN 2022 — JUL 2022",
    role: "IT Support Specialist Intern",
    company: "SUNU Health Nigeria Ltd",
    context: "IT Support · Lagos, Nigeria",
    highlights: [
      "Resolved hardware, connectivity, and software issues across departments; supported employee workstations and printers.",
    ],
  },
];

export const education = {
  degree: "B.Eng. Computer Engineering",
  school: "University of Benin",
  certification: "Front-End Web Development",
  certificationProvider: "Meta · Coursera",
};
