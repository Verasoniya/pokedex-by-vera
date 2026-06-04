export const parseEvolutionChain = (chain: any) => {
  const evolutions = [];

  let current = chain;

  while (current) {
    const id = current.species.url.split('/').filter(Boolean).pop();

    evolutions.push({
      id,
      name: current.species.name,
      url: current.species.url,
    });

    current = current.evolves_to?.[0];
  }

  return evolutions;
};
