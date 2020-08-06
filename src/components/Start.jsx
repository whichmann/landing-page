import React from 'react';
import { motion } from 'framer-motion';

export default () => {
  return (

    <header className="masthead">
      <div className="container">
        <div className="intro-text vertical-center my-auto">
          <div className="intro-lead-in">Osiągnijmy cel razem!</div>
          <motion.div
            transition={{ duration: 1.6 }} initial={{ y: 10, opacity: .2 }} animate={{ y: 0, opacity: 1 }} whileHover={{ textShadow: "15px 15px 15px rgb(112, 113, 115)" }} className="intro-heading text-uppercase">Rozmaturzeni</motion.div>
          <motion.a whileHover={{ scale: 1.1 }}
            transition={{ type: 'tween', duration: .2 }} className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Dowiedz się więcej</motion.a>
        </div>
      </div>
    </header>
  )
}