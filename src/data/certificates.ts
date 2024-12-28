export interface Certificate {
    id: number;
    title: string;
    description: string;
    issuedBy: string;
    issueDate: string;
    certificateUrl: string;  // Link to your certificate (if applicable)
    issuerUrl: string;  // Microsoft Azure Certification page
    imageUrl:string;
  }

  export const CertificatesData: Certificate[] = [
    {
        id: 1,
        title: "Microsoft Certified: DevOps Engineer Expert",
        description: "Validates expertise in combining development and operations practices to streamline processes, automate workflows, and improve continuous delivery in cloud environments using Azure.",
        issuedBy: "Microsoft",
        issueDate: "March 2024",
        certificateUrl: "https://learn.microsoft.com/en-us/users/dipakkolhe-8965/credentials/e8e9687377bbd5a1",  // Link to your certificate (if applicable)
        issuerUrl: "https://learn.microsoft.com/en-us/credentials/certifications/devops-engineer/",  // Microsoft Azure Certification page
        imageUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg"
    },
    {
        id: 2,
        title: "Microsoft Certified: Azure Administrator Associate",
        description: "Validates skills in managing Azure services, including virtual networks, storage, compute, and security, to optimize and secure cloud infrastructure.",
        issuedBy: "Microsoft",
        issueDate: "March 2024",
        certificateUrl: "https://learn.microsoft.com/en-us/users/dipakkolhe-8965/credentials/dfe8c20dcc07a5a0",  // Link to your certificate (if applicable)
        issuerUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/",  // Microsoft Azure Certification page
        imageUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg"
    },
    {
        id: 3,
        title: "Microsoft Certified: Azure Developer Associates",
        description: "Validates expertise in combining development and operations practices to streamline processes, automate workflows, and improve continuous delivery in cloud environments using Azure.",
        issuedBy: "Microsoft",
        issueDate: "February 2024",
        certificateUrl: "https://learn.microsoft.com/en-us/users/dipakkolhe-8965/credentials/7ffda4ceee2296d",  // Link to your certificate (if applicable)
        issuerUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/",  // Microsoft Azure Certification page
        imageUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg"
    },
    {
        id: 4,
        title: "Microsoft Certified: Azure Fundamentals",
        description: "This certification demonstrates foundational knowledge of cloud services and how they are provided with Microsoft Azure.",
        issuedBy: "Microsoft",
        issueDate: "November 2022",
        certificateUrl: "https://learn.microsoft.com/en-us/users/dipakkolhe-8965/credentials/898a412132ab6eb5",  // Link to your certificate (if applicable)
        issuerUrl: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",  // Microsoft Azure Certification page
        imageUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg"
    }
  ];