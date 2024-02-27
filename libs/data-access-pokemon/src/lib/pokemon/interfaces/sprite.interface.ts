export interface IPokemonSprite {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: IPokemonSpriteOther;
}

interface IPokemonSpriteOther {
  'dream_world': Pick<ISpriteVariant, 'front_default'>;
  'official-artwork': {
    front_default: string;
  };
}

interface ISpriteVariant {
  front_default: string;
}
