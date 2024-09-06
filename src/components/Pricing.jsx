import React, { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import Modal from 'react-modal'

const Pricing = () => {
  const PricingOptions = [
    {
      id: 1,
      title: 'Basic',
      price: 'R$9,99',
      features: ["Feature 1", "Feature 2", "Feature 3"]
    },
    {
      id: 2,
      title: 'Standard',
      price: 'R$29,99',
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
    },
    {
      id: 3,
      title: 'Prime',
      price: 'R$69,99',
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"]
    }
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChosePlan = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true); 
  }

  const handleCloseModal = () => {
    setSelectedPlan(null);
    setIsModalOpen(false); 
  }


  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const pricingSection = document.getElementById("pricing");
      const { top } = pricingSection.getBoundingClientRect();
      const isVisible = top < window.innerHeight - 100;

      if (isVisible) {
        controls.start({ opacity: 1, scale: 1 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <section className="bg-transparent px-10 py-16" id='pricing'>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PricingOptions.map((option) => (
            <motion.div
              key={option.id}
              className="bg-transparent bg-opacity-20 backdrop-filter backdrop-blur p-8 rounded-lg shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{option.title}</h3>
                <p className="text-green-500 text-2xl font-bold mb-6">{option.price}</p>
                <ul className="text-gray-500 mg-6">
                  {option.features.map((feature, index) => (
                    <li key={index} className="mb-2">{feature}</li>
                  ))}
                </ul>
                <div>
                  <motion.button
                    className='bg-white bg-opacity-20 hover:bg-opacity-70 text-green-500 hover:text-green-600 text-center font-semibold rounded-full py-2 px-6 shadow-lg'
                    initial={{opacity: 0, y:10}}
                    animate={controls}
                    transition={{duration: .8}}
                  >
                    Chose Plan
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Pla Details"
        className="modal fixed inset-0 flex items-center justify-center"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50"
      >
        {selectedPlan &&
          <motion.div
          className="modal-content bg-white w-1/3 h-1/2 rounded-lg p-6 max-w-xl flex flex-col justify-between"
          initial={{opacity: 0, y: 5}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: .8}}
          >
            <div>
              <h2 className="tex-xl font-bold mb-4">{selectedPlan.title}</h2>
              <p className="text-green-500 text-2xl font-bold mb-6">{selectedPlan.price}</p>
              <ul className="text-gray-600 mb-6">
                {selectedPlan.features.map((feature)=>(
                  <li className="mb-2" key={feature}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        }
      </Modal>
    </section>
  );
};

export default Pricing;
