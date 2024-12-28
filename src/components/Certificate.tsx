
import {CertificatesData } from '../data/certificates';


const Certificates = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
      My Azure Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CertificatesData.map((cert) => (
          <div key={cert.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <img src={cert.imageUrl} alt={cert.title} className="w-32 h-32 mx-auto object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{cert.description}</p>
            <p className="mt-4 text-gray-500 text-sm">
              <strong>Issued By:</strong> 
              <a href={cert.issuerUrl} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                {cert.issuedBy}
              </a>
            </p>
            <p className="text-gray-500 text-sm"><strong>Issue Date:</strong> {cert.issueDate}</p>

            <div className="mt-4">
              <a
                href={cert.certificateUrl}
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  </section>
   
  );
};

export default Certificates;
