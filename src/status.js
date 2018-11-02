import React from 'react';

import GuessList from './list';
import GuessCount from './count';
import AuralStatus from './aural';

export default function StatusSection(props) {
  const { guesses, auralStatus } = props;
  const guessCount = guesses.length;

  return (
    <section>
      <GuessCount guessCount={guessCount} />
      <GuessList guesses={guesses} />
      <AuralStatus auralStatus={auralStatus} />
    </section>
  );
}