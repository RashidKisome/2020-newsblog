export class Article {
  id: number;
  title = '';
  key = ''; // särskilja på artiklarna och bra för sökmotorer
  date: Date = new Date();
  content = '';
  description = '';
  imageUrl = '';
}
