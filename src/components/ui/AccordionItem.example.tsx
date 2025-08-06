import React from 'react';
import AccordionItem from './AccordionItem';
import Card from './Card';

// Example usage of the AccordionItem component
const AccordionItemExamples: React.FC = () => {
  const faqData = [
    {
      question: "What is the AI Suite and how does it work?",
      answer: "Our AI Suite is a comprehensive platform that combines multiple artificial intelligence tools to help businesses automate tasks, analyze data, and improve decision-making. It uses machine learning algorithms to process your data and provide actionable insights."
    },
    {
      question: "How do I get started with the platform?",
      answer: "Getting started is simple! After signing up, you'll be guided through our onboarding process where you can connect your data sources, set up your first AI workflow, and explore the dashboard. Most users are up and running within 15 minutes."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 customer support through multiple channels including live chat, email, and phone. We also offer comprehensive documentation, video tutorials, and regular webinars to help you make the most of our platform."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, absolutely. We use enterprise-grade security measures including end-to-end encryption, secure data centers, and strict access controls. We're SOC 2 Type II certified and comply with GDPR, CCPA, and other major data protection regulations."
    },
    {
      question: "Can I integrate with my existing tools?",
      answer: "Our platform offers extensive integration capabilities with over 100 popular business tools including CRM systems, marketing platforms, databases, and cloud services. We also provide REST APIs and webhooks for custom integrations."
    }
  ];

  const technicalFAQ = [
    {
      question: "What programming languages are supported?",
      answer: "We support Python, JavaScript, R, and SQL out of the box. Our platform also provides REST APIs that can be consumed by any programming language that supports HTTP requests."
    },
    {
      question: "How do I handle large datasets?",
      answer: "Our platform is designed to handle datasets of any size. We use distributed computing and cloud infrastructure to process large volumes of data efficiently. For datasets over 1TB, we recommend our Enterprise plan which includes dedicated resources."
    },
    {
      question: "Can I export my models and data?",
      answer: "Yes, you maintain full ownership of your data and models. You can export your trained models in standard formats (ONNX, TensorFlow, PyTorch) and download your data in CSV, JSON, or other formats at any time."
    }
  ];

  const pricingFAQ = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and for Enterprise customers, we also accept bank transfers and can accommodate custom billing arrangements."
    },
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing for the remainder of your current period."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied within the first 30 days, we'll provide a full refund, no questions asked."
    }
  ];

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">AccordionItem Component Examples</h2>
      
      {/* Single Accordion Item */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Single Accordion Item</h3>
        <AccordionItem
          question="How does the AI Suite work?"
          answer="Our AI Suite combines multiple artificial intelligence tools to help businesses automate tasks, analyze data, and improve decision-making through machine learning algorithms."
        />
      </Card>

      {/* FAQ Section */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-700 mb-6">Frequently Asked Questions</h3>
        <div className="space-y-0">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </Card>

      {/* Technical FAQ */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-700 mb-6">Technical Questions</h3>
        <div className="space-y-0">
          {technicalFAQ.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </Card>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <h3 className="text-lg font-semibold text-gray-700 mb-6">Getting Started</h3>
          <div className="space-y-0">
            {faqData.slice(0, 3).map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-700 mb-6">Pricing & Billing</h3>
          <div className="space-y-0">
            {pricingFAQ.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </Card>
      </div>

      {/* Different Content Lengths */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-700 mb-6">Variable Content Lengths</h3>
        <div className="space-y-0">
          <AccordionItem
            question="Short answer example"
            answer="Yes, this is possible."
          />
          <AccordionItem
            question="Medium length answer"
            answer="This is a medium-length answer that provides more detail about the question. It contains enough information to be helpful while not being overwhelming."
          />
          <AccordionItem
            question="Long detailed answer with multiple points"
            answer="This is a comprehensive answer that covers multiple aspects of the question. First, we'll discuss the basic concept and how it works in practice. Second, we'll explore the benefits and advantages of this approach. Third, we'll cover any potential limitations or considerations you should be aware of. Finally, we'll provide some practical examples and next steps you can take. This type of detailed response is perfect for complex topics that require thorough explanation to ensure complete understanding."
          />
        </div>
      </Card>

      {/* Product Features Accordion */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-700 mb-6">Product Features</h3>
        <div className="space-y-0">
          <AccordionItem
            question="🤖 AI-Powered Analytics"
            answer="Leverage advanced machine learning algorithms to automatically analyze your data, identify patterns, and generate actionable insights. Our AI engine continuously learns from your data to provide increasingly accurate predictions and recommendations."
          />
          <AccordionItem
            question="📊 Real-time Dashboards"
            answer="Monitor your key metrics with customizable, real-time dashboards. Create visualizations that matter to your business and share them with your team. All dashboards are mobile-responsive and update automatically as new data comes in."
          />
          <AccordionItem
            question="🔗 Seamless Integrations"
            answer="Connect with over 100 popular business tools and services. Our pre-built integrations work out of the box, and our REST API allows you to build custom connections. Sync data bidirectionally and automate workflows across your entire tech stack."
          />
          <AccordionItem
            question="🔒 Enterprise Security"
            answer="Your data is protected with bank-level security measures. We use AES-256 encryption, maintain SOC 2 compliance, and follow industry best practices for data protection. Role-based access controls ensure the right people have access to the right data."
          />
        </div>
      </Card>

      {/* Help & Support Accordion */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-700 mb-6">Help & Support</h3>
        <div className="space-y-0">
          <AccordionItem
            question="How can I contact support?"
            answer="You can reach our support team 24/7 through live chat (available in the bottom right corner), email us at support@admybrand.com, or call our toll-free number at 1-800-ADMYBRAND. For urgent issues, live chat typically provides the fastest response."
          />
          <AccordionItem
            question="Where can I find documentation?"
            answer="Our comprehensive documentation is available at docs.admybrand.com. It includes getting started guides, API references, tutorials, and troubleshooting tips. We also have a searchable knowledge base and video tutorials for visual learners."
          />
          <AccordionItem
            question="Do you offer training sessions?"
            answer="Yes! We offer both group and one-on-one training sessions for new users. Group sessions are held weekly and cover the basics of using our platform. Individual sessions can be scheduled based on your specific needs and use cases."
          />
        </div>
      </Card>

      {/* Troubleshooting Accordion */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-700 mb-6">Troubleshooting</h3>
        <div className="space-y-0">
          <AccordionItem
            question="My data isn't syncing properly"
            answer="First, check your internet connection and try refreshing the page. If the issue persists, verify that your data source credentials are still valid and that you have the necessary permissions. You can also try disconnecting and reconnecting your data source in the integrations settings."
          />
          <AccordionItem
            question="I'm getting error messages in my dashboard"
            answer="Error messages usually indicate an issue with data processing or connectivity. Take a screenshot of the error message and check our status page at status.admybrand.com to see if there are any known issues. If the problem persists, contact our support team with the error details."
          />
          <AccordionItem
            question="The platform seems slow or unresponsive"
            answer="Performance issues can be caused by browser cache, large datasets, or temporary server load. Try clearing your browser cache, disabling browser extensions, or switching to an incognito/private browsing window. If you're processing large amounts of data, consider breaking it into smaller chunks."
          />
        </div>
      </Card>
    </div>
  );
};

export default AccordionItemExamples;