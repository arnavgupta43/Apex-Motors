import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Reserve: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Form animations
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
    );

    // Input field animations
    gsap.utils.toArray('.form-input').forEach((input: any, i) => {
      gsap.fromTo(
        input,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          delay: 0.8 + (i * 0.1),
          ease: 'power3.out' 
        }
      );
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Animation for form submission
    gsap.to(formRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      onComplete: () => {
        setIsSubmitted(true);
        gsap.fromTo(
          '.success-message',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        );
      }
    });
  };

  return (
    <section 
      className="min-h-screen pt-24 pb-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        {!isSubmitted ? (
          <>
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider text-apex-gold mb-12 text-center">
              MAKE A RESERVATION
            </h1>
            
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="max-w-4xl mx-auto bg-black/50 p-8 md:p-12 rounded-lg backdrop-blur-sm border border-apex-gold/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="name" className="block text-apex-gold text-lg uppercase mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-apex-gold text-lg uppercase mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-apex-gold text-lg uppercase mb-2">
                    PHONE NO.
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-apex-gold text-lg uppercase mb-2">
                    LOCATION
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="additionalInfo" className="block text-apex-gold text-lg uppercase mb-2">
                  ADDITIONAL INFORMATION
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="form-input"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="submit-btn"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="success-message max-w-2xl mx-auto text-center bg-black/50 p-12 rounded-lg backdrop-blur-sm border border-apex-gold/30">
            <h2 className="text-4xl font-heading font-bold text-apex-gold mb-6">
              Reservation Received!
            </h2>
            <p className="text-xl text-white mb-8">
              Thank you for your interest in Apex Motors. A representative will contact you shortly to discuss your reservation and answer any questions you may have.
            </p>
            <p className="text-lg text-apex-beige">
              Your journey with Scout begins now.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reserve;