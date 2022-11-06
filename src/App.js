import { useState, useEffect } from "react";

function App() {

  const [quotation, setQuotation] = useState(0);
  const [web, setWeb] = useState(0);
  const [seo, setSeo] = useState(0);
  const [ads, setAds] = useState(0);

  useEffect(() => {
    setQuotation(web + seo + ads)
  }, [web, seo, ads]);

  return (
    <div>
      <form>
        <p>Que vols fer?</p>
        <p>
          <input type="checkbox" name="web" value="500" onChange={event => setWeb(event.target.checked ? Number(event.target.value) : 0)} />
          Una página Web (500€)
        </p>
        <p>
          <input type="checkbox" name="seo" value="300" onChange={event => setSeo(event.target.checked ? Number(event.target.value) : 0)} />
          Una consultoria SEO (300€)
        </p>
        <p>
          <input type="checkbox" name="ads" value="200" onChange={event => setAds(event.target.checked ? Number(event.target.value) : 0)} />
          Una campanya de Google Ads (200€)
        </p>
      </form>
      <p>Preu: {quotation}€</p>
    </div>
  );
}

export default App;
