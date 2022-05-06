import React from 'react'
import { useTranslation } from 'react-i18next'
// useTranslation é um hook 
// que devolve uma função de tradução (t) e a instância do i18n

const I18n = () => {
  const { i18n } = useTranslation()
  // Instância do i18n

  function handleChangeLanguage(language : any) {
    // Trocando o idioma na chamada da função
    i18n.changeLanguage(language)
  }

  const selectedLanguage = i18n.language // Idioma selecionado
  return (
    <div className="flags-container">
    </div>
  )
}

export default I18n