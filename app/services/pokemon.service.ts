import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_PROXY,
});

export const getPokemonList = async (offset = 0, limit = 20) => {
  const { data } = await api.get(`/pokemon?offset=${offset}&limit=${limit}`);

  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon: { name: string }) => {
      const detail = await getPokemonDetail(pokemon.name);

      return {
        id: detail.id,
        name: detail.name,
        image: detail.sprites.other['official-artwork'].front_default,
        types: detail.types.map((type: any) => type.type.name),
      };
    }),
  );
  return { ...data, results: pokemonDetails };
};

export const getPokemonDetail = async (name: string) => {
  const { data } = await api.get(`/pokemon/${name}`);
  return data;
};

export const getPokemonByType = async (type: string) => {
  const { data } = await api.get(`/type/${type}`);

  const pokemonDetails = await Promise.all(
    data.pokemon.map(async (item: any) => {
      const detail = await getPokemonDetail(item.pokemon.name);

      return {
        id: detail.id,
        name: detail.name,
        image: detail.sprites.other['official-artwork'].front_default,
        types: detail.types.map((t: any) => t.type.name),
      };
    }),
  );

  return pokemonDetails;
};

export const getTypeList = async () => {
  const { data } = await api.get('/type?offset=0&limit=21');
  return data.results;
};
