export default interface Movie {
  id: number,
  title: string;
  description: string;
  rating: number;
  peopleWatching: number;
  urlImageBanner: string;
  urlImageProfile: string;
  genders: number[];
  tomatometer: number;
  isFavorite: boolean;
}