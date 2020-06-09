import React from 'react';
// import logo from './logo.svg';
import Uslugi from './components/Uslugi'
import Zespol from './components/Zespol'
import Kontakt from './components/Kontakt'
import Wartosci from './components/Wartosci'
import Start from './components/Start'
import Footer from './components/Footer'


import ApAvatar from './assets/img/team/ap.png'
import ArAvatar from './assets/img/team/ar.jpg'
import PkAvatar from './assets/img/team/pk.jpg'
import EbAvatar from './assets/img/team/eb.jpg'
import KkAvatar from './assets/img/team/kk.jpg'
import MkAvatar from './assets/img/team/mk.jpg'
import TpAvatar from './assets/img/team/tp.jpg'

import wPigulce from './assets/img/uslugi/w-pigulce.jpg'
import kursy from './assets/img/uslugi/kursy.jpg'
import online from './assets/img/uslugi/online.jpg'

import './App.css';

function App() {

  const opisZespolu = [
    {
      imie: "Adam Poniatowski",
      zdjecie: ApAvatar,
      opis: `Założyciel i koordynator. Odpowiedzialny za matematykę oraz przygotowanie mentalne.`,
      doswiadczenie: "Doświadczenie - 10 lat"
    },
    {
      imie: "Adrianna Ryńska",
      zdjecie: ArAvatar,
      opis: `Odpowiedzialna za język polski`,
      doswiadczenie: "Doświadczenie -  8 lat"
    },
    {
      imie: "Paulina Kaletha",
      zdjecie: PkAvatar,
      opis: `Specjalistka d/s promocji i reklamy. Odpowiedzialna za język niemiecki.`,
      doswiadczenie: "Doświadczenie - 3 lata"
    },
    {
      imie: "Ewa Bone",
      zdjecie: EbAvatar,
      opis: `Odpowiedzialna za przygotowanie mentalne.`,
      doswiadczenie: "Doświadczenie - 13 lat"
    },
    {
      imie: "Kacper Kędzierski",
      zdjecie: KkAvatar,
      opis: `Odpowiedzialna za matematykę i język angielski`,
      doswiadczenie: "Doświadczenie -  2 lata"
    },
    {
      imie: "Martyna Klinkusz",
      zdjecie: MkAvatar,
      opis: `Odpowiedzialna za matematykę`,
      doswiadczenie: "Doświadczenie - 2 lata"
    },
    {
      imie: "Tomek Poniatowski",
      zdjecie: TpAvatar,
      opis: `Koordynator pomocniczy. Odpowiedzialny za matematykę, geografię oraz angielski.`,
      doswiadczenie: "Doświadczenie - 3 lata"
    }
  ]

  const portfolioUslug = [
    {
      tytul: 'Matura w pigułce',
      opis: 'Przygotowanie do matury w jeden dzień',
      dluzszyOpis: `Spotkania w wąskim gronie, trwające 8h (z poczęstunkiem w trakcie lekcji).
      Omówienie matury podstawowej od a do z, z uwypukleniem najistotniejszych elementów.
      W przypadku matematyki - przygotowany specjalny arkusz przez prowadzącego zajęcia.
      W ramach przerwy, możliwość konsultacji z trenerami.`,
      zdjecie: wPigulce,
      cena: "129"
    },
    {
      tytul: 'Kurs przygotowujący',
      opis: 'Kurs przygotowujący do egzaminu maturalnego i 8-klasisty.',
      dluzszyOpis: `regularne zajęcia (częstotliwość ~ 2h/tydzień)
      omówienie matury podstawowej od a do z z
      uwypukleniem najistotniejszych elementów
      uczniowie realizują zadania przy tablicy przy
      pomocy prowadzących
      omówienie tematów wraz z uwypukleniem
      najczęstszych błędów, w ramach przerwy
      możliwość konsultacji z trenerami`,
      zdjecie: kursy,
      cena: "39"
    },
    {
      tytul: 'Kurs online',
      opis: 'Współpraca przez internet.',
      dluzszyOpis: `częstotliwość zajęć ustalana na bieżąco przez
      ucznia (częstotliwość od 2h do 12h/tydzień)
      omówienie dowolnego wybranego zagadnienia z
      przedmiotów matematyka, polski, angielski,
      niemiecki w ramach przygotowania do egzaminów
      podstawowej od a do z z uwypukleniem
      najistotniejszych elementów
      omówienie tematów wraz z uwypukleniem
      najczęstszych błędów`,
      zdjecie: online,
      cena: "39"
    }
  ]



  return (
    <div className="App">

      <Start></Start>
      <Wartosci></Wartosci>
      <Uslugi portfolioUslug={portfolioUslug}></Uslugi>
      <Zespol opisZespolu={opisZespolu}></Zespol>
      <Kontakt></Kontakt>
      <Footer></Footer>

    </div>
  );
}

export default App;
