import React from 'react';
import Typewriter from 'typewriter-effect';

const defaultStrings = [
  'Software Developer',
  'Freelancer',
  'MERN Stack Developer',
  'Open Source Contributor',
];

export default function Type({ strings = defaultStrings }) {
  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}