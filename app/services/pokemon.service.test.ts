import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  getPokemonByType,
  getPokemonDetail,
  getPokemonList,
} from './pokemon.service';
import { getTypeList } from './pokemon.service';
import { api } from './api';

// get pokemon list
describe('getPokemonList', () => {
  it('should map pokemon list correctly', async () => {
    vi.mocked(api.get)

      .mockResolvedValueOnce({
        data: {
          results: [{ name: 'pikachu' }],
        },
      } as any)

      .mockResolvedValueOnce({
        data: {
          id: 25,
          name: 'pikachu',
          sprites: {
            other: {
              'official-artwork': {
                front_default: 'pikachu.png',
              },
            },
          },
          types: [
            {
              type: {
                name: 'electric',
              },
            },
          ],
        },
      } as any);

    const result = await getPokemonList();

    expect(result.results).toEqual([
      {
        id: 25,
        name: 'pikachu',
        image: 'pikachu.png',
        types: ['electric'],
      },
    ]);
  });
});

// get pokemon detail
vi.mock('./pokemon.service', async () => {
  const actual = await vi.importActual('./pokemon.service');

  return {
    ...actual,
    api: {
      get: vi.fn(),
    },
  };
});

describe('getPokemonDetail', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return pokemon detail', async () => {
    const mockData = {
      id: 25,
      name: 'pikachu',
    };

    vi.mocked(api.get).mockResolvedValue({
      data: mockData,
    } as any);

    const result = await getPokemonDetail('pikachu');

    expect(result).toEqual(mockData);

    expect(api.get).toHaveBeenCalledWith('/pokemon/pikachu');
  });
});

// get pokemon type list
vi.mock('./api', () => ({
  api: {
    get: vi.fn(),
  },
}));

describe('getTypeList', () => {
  it('should return pokemon types', async () => {
    vi.mocked(api.get).mockResolvedValue({
      data: {
        results: [
          {
            name: 'grass',
          },
          {
            name: 'fire',
          },
        ],
      },
    } as any);

    const result = await getTypeList();

    expect(result).toHaveLength(2);

    expect(result[0].name).toBe('grass');
  });
});

// get pokemon by type
it('should map pokemon by type correctly', async () => {
  vi.mocked(api.get)

    // /type/electric
    .mockResolvedValueOnce({
      data: {
        pokemon: [
          {
            pokemon: {
              name: 'pikachu',
            },
          },
        ],
      },
    } as any)

    // /pokemon/pikachu
    .mockResolvedValueOnce({
      data: {
        id: 25,
        name: 'pikachu',
        sprites: {
          other: {
            'official-artwork': {
              front_default: 'pikachu.png',
            },
          },
        },
        types: [
          {
            type: {
              name: 'electric',
            },
          },
        ],
      },
    } as any);

  const result = await getPokemonByType('electric');

  expect(result).toEqual([
    {
      id: 25,
      name: 'pikachu',
      image: 'pikachu.png',
      types: ['electric'],
    },
  ]);
});
