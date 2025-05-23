
import { ImageGalleryPage } from '../../components/templates/ImageGalleryPage';


const mockCatalogItems = [
    { id: 'item1', src: 'https://via.placeholder.com/300x200.png?text=Item+1', title: 'Filme Espetacular' },
    { id: 'item2', src: 'https://via.placeholder.com/300x200.png?text=Item+2', title: 'Jogo Incrível' },
    { id: 'item3', src: 'https://via.placeholder.com/300x200.png?text=Item+3', title: 'Série Viciante' },
    { id: 'item4', src: 'https://via.placeholder.com/300x200.png?text=Item+4', title: 'Livro Cativante' },
];

export default function CatalogPage() {

  return <ImageGalleryPage images={mockCatalogItems} />;
}