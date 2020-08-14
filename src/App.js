import React from 'react';
// import logo from './logo.svg';
import Uslugi from './components/Uslugi'
import Zespol from './components/Zespol'
import Kontakt from './components/Kontakt'
import Wartosci from './components/Wartosci'
import Start from './components/Start'
import Footer from './components/Footer'


import ApAvatar from './assets/img/team/ap-min.png'
import ArAvatar from './assets/img/team/ar-min.jpg'
import PkAvatar from './assets/img/team/pk-min.jpg'
import EbAvatar from './assets/img/team/eb-min.jpg'
import KkAvatar from './assets/img/team/kk-min.jpg'
import MkAvatar from './assets/img/team/mk-min.jpg'
import TpAvatar from './assets/img/team/tp-min.jpg'

import wPigulce from './assets/img/uslugi/w-pigulce-min.jpg'
import kursy from './assets/img/uslugi/kursy-min.jpg'
import online from './assets/img/uslugi/online-min.jpg'

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
      opis: `Odpowiedzialny za matematykę, język angielski, C/C++, Python`,
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
      W ramach przerwy, możliwość konsultacji z trenerami.
      Ponadto, kilka dni po zajęciach, w dobranym terminie dodatkowe konsultacje na naszym discordzie`,
      zdjecie: wPigulce,
      cena: "Cena wyjściowa: 129"
    },
    {
      tytul: 'Kursy przygotowujące',
      opis: 'Kurs przygotowujący do egzaminu maturalnego i 8-klasisty.',
      dluzszyOpis: `Regularne zajęcia (częstotliwość ~ 2h/tydzień)
      z omówieniem egzaminów od a do z,
      uwypukleniem najistotniejszych elementów. 
      Uczniowie realizują zadania przy tablicach pomocniczych, przy asyście prowadzących.
      Omówienie tematów wraz z podkreśleniem najczęstszych błędów. W ramach przerwy
      możliwość konsultacji z trenerami`,
      zdjecie: kursy,
      dostepneKursy: ["Angielski", "Niemiecki", "Matematyka", "Polski", "Geografia", "C/C++"],
      cena: "Cena: 39"
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
      cena: "Cena: 39"
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
