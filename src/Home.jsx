import { IPAddressFinder } from './components/IPAddressFinder';
import { LanguageTranslator } from './components/LanguageTranslator';
import { MovieSearchEngine } from './components/MovieSearchEngine';
import { QRCodeGenerator } from './components/QRCodeGenerator';

export const Home = () => {
  return (
    <div className="container">
      <LanguageTranslator />
      <MovieSearchEngine />
      <QRCodeGenerator />
      <IPAddressFinder />
    </div>
  );
};
