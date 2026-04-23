import React from 'react';
import ParticlesBg from 'particles-bg';

export default function Particle({ className = '' }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <ParticlesBg type="cobweb" color="#60a5fa" bg={true} />
    </div>
  );
}