export interface MarvelsCharacters {
  id: number;
  name: string;
  thumbnail: { path: string; extension: string };
}

export interface Comics {
  id: number;
  title: string;
  images: Images[];
}

export interface Images {
  path: string;
  extension: string;
}
