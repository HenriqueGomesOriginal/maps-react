import { useTranslation } from 'react-i18next'
// Importamos o hook

function Translator (path : any) {
  const { t } = useTranslation() // Função que traduz


  // Retornamos a função passando como parametro o caminho (path)
  // de onde está localizado o texto que desejamos traduzir
  const handle = (str : any) => {
  }

  // This is to return a tag
  // return (
  //   <p>{t(path.path)}</p>
  // );

  return t(path)
}

export default Translator