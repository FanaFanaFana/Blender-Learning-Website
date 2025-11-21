'use client';

import { useState } from 'react';
import { Heart, Coffee, DollarSign, X } from 'lucide-react';

export default function DonateButton() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(5);
  const [customAmount, setCustomAmount] = useState('');
  
  // Replace with your actual PayPal email or merchant ID
  const PAYPAL_EMAIL = 'y.croes@freenet.de';
  
  const presetAmounts = [3, 5, 10, 20, 50];
  
  const handleDonate = () => {
    const amount = customAmount || selectedAmount;
    
    // ✅ Use PayPal.me for dynamic amounts (works with personal accounts!)
    // Replace 'yourusername' with YOUR PayPal.me username
    const paypalUrl = `https://paypal.me/yannickcroes1/${amount}USD`;
    
    // Note: hosted_button_id does NOT support dynamic amounts in URL!
    // That's why we use PayPal.me instead
    
    console.log('💰 Donating amount:', amount);
    console.log('🔗 PayPal URL:', paypalUrl);
    
    window.open(paypalUrl, '_blank');
  };

  return (
    <>
      {/* Floating Donate Button */}
      <button
        onClick={() => setShowModal(true)}
        className="donate-fab"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ff6b6b, #ee5a6f)',
          border: 'none',
          boxShadow: '0 8px 12px rgba(255, 107, 107, 0.4)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
            zIndex: 2,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 107, 107, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 107, 107, 0.4)';
        }}
      >
        <Heart size={23} color="white" fill="white" />
      </button>

      {/* Donation Modal */}
      {showModal && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setShowModal(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(8px)',
              zIndex: 9998,
            }}
          />

          {/* Modal */}
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'linear-gradient(135deg, #1a2332 0%, #15232f 100%)',
              borderRadius: '20px',
              padding: '2.5rem',
              maxWidth: '500px',
              width: '90%',
              maxHeight: '90vh',
              overflowY: 'auto',
              zIndex: 9999,
              border: '2px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '8px',
                padding: '0.5rem',
                cursor: 'pointer',
                color: 'white',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ff6b6b, #ee5a6f)',
                  marginBottom: '1rem',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <Coffee size={40} color="white" style={{ marginLeft: '3px' }} />
              </div>
              <h2
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '0.5rem',
                }}
              >
                Support Blend Docs
              </h2>
              <p style={{ color: '#8fa9bd', fontSize: '1rem', lineHeight: '1.6' }}>
                Help us keep this resource free and growing! Your donation supports development, hosting, and new content.
              </p>
            </div>

            {/* Preset Amounts */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label
                style={{
                  display: 'block',
                  color: '#b0c4d4',
                  fontSize: '0.9rem',
                  marginBottom: '0.75rem',
                  fontWeight: '600',
                }}
              >
                Choose an amount:
              </label>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: '0.75rem',
                }}
              >
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    style={{
                      padding: '1rem 0.5rem',
                      background:
                        selectedAmount === amount && !customAmount
                          ? 'linear-gradient(135deg, #ff6b6b, #ee5a6f)'
                          : 'rgba(255, 255, 255, 0.05)',
                      border:
                        selectedAmount === amount && !customAmount
                          ? '2px solid #ff6b6b'
                          : '2px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      color: 'white',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (selectedAmount !== amount || customAmount) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedAmount !== amount || customAmount) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div style={{ marginBottom: '2rem' }}>
              <label
                style={{
                  display: 'block',
                  color: '#b0c4d4',
                  fontSize: '0.9rem',
                  marginBottom: '0.75rem',
                  fontWeight: '600',
                }}
              >
                Or enter a custom amount:
              </label>
              <div style={{ position: 'relative' }}>
                <DollarSign
                  size={20}
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#8fa9bd',
                  }}
                />
                <input
                  type="number"
                  min="1"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount"
                  style={{
                    width: '100%',
                    padding: '1rem 1rem 1rem 2.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: customAmount
                      ? '2px solid #ff6b6b'
                      : '2px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                />
              </div>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              disabled={!customAmount && !selectedAmount}
              style={{
                width: '100%',
                padding: '1.25rem',
                background:
                  customAmount || selectedAmount
                    ? 'linear-gradient(135deg, #ff6b6b, #ee5a6f)'
                    : 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: customAmount || selectedAmount ? 'pointer' : 'not-allowed',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                opacity: customAmount || selectedAmount ? 1 : 0.5,
              }}
              onMouseEnter={(e) => {
                if (customAmount || selectedAmount) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 107, 107, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Heart size={20} fill="white" />
              Donate ${customAmount || selectedAmount} via PayPal
            </button>

            {/* Footer Text */}
            <p
              style={{
                textAlign: 'center',
                color: '#6b7f94',
                fontSize: '0.85rem',
                marginTop: '1.5rem',
                lineHeight: '1.5',
              }}
            >
              Secure payment powered by PayPal. Your support means the world to me!
            </p>
          </div>
        </>
      )}
    </>
  );
}