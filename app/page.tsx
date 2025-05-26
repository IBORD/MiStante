import { HomePage } from '@/components/templates/HomePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MiStante - Bem-vindo ao Seu Catálogo Pessoal',
  description: 'Organize e compartilhe seus filmes, jogos e livros favoritos com MiStante.',
  keywords: ['catálogo', 'filmes', 'jogos', 'livros', 'organização', 'pessoal'],
  openGraph: {
    title: 'MiStante - Bem-vindo!',
    description: 'Sua plataforma para catalogar entretenimento.',
  },
};

export default function Page() {
  return <HomePage />;
}