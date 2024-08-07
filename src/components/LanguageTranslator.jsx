import axios from 'axios';
import { useState } from 'react';

// TEMA ESTILIZAÇÃO
// trocar API
// https://api.mymemory.translated.net/get

export const LanguageTranslator = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('pt');

  async function translateText() {
    try {
      const response = await axios.get(
        'https://api.mymemory.translated.net/get',
        {
          params: {
            q: text,
            langpair: `${sourceLang}|${targetLang}`,
          },
        }
      );
      setTranslatedText(response.data.responseData.translatedText);
    } catch (error) {
      console.error('Erro ao traduzir o texto', error);
    }
  }

  return (
    <section>
      <h2>LanguageTranslator</h2>
      <div className="content">
        <label>Source Language</label>
        <select
          value={sourceLang}
          onChange={(event) => setSourceLang(event.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italiano</option>
          <option value="pt">Português</option>
        </select>
      </div>

      <div className="content">
        <label>Target Language</label>
        <select
          value={targetLang}
          onChange={(event) => setTargetLang(event.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italiano</option>
          <option value="pt">Português</option>
        </select>
      </div>

      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Informe o texto que quer traduzir"
      />

      <button onClick={translateText}>Translate</button>
      {translatedText && <p>{translatedText}</p>}
    </section>
  );
};
