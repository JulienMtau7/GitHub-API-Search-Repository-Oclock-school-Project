// On importe le hook d'effet (useEffect)
import React, { useEffect } from 'react';

// On importe PropTypes pour valider les props
import PropTypes from 'prop-types';

// Import du composant Segment de semantic ui
// Ici, pour éviter le conflit avec le nom du composant
// que l'on définit dans ce fichier, on renomme le composant importé.
import { Message as MessageSemanticUI } from 'semantic-ui-react';

/*
On ajoute une prop isError pour gérer l'état du message (normal ou erreur)
On se sert de cette prop pour la transmettre ) la prop negative du composant Message de semantic ui.
*/
const Message = ({ content, isError, setShowMessage }) => {
  // On prévoit un effet : disparition du message au bout de 7s
  useEffect(() => {
    // on enregistre une référence au timeOut pour pouvoir l'annuler si besoin
    const timeOut = setTimeout(
      () => {
        setShowMessage(false);
      },
      4000,
    );

    // Si useEffect retourne une fonction, elle sera appellée
    // avant le lancement du prochain effet
    return () => {
      // on "nettoie" le timeout (ici la variable timeOut est dans la bonne portée)
      clearTimeout(timeOut);
    };
  }, [content]);

  return (
    <MessageSemanticUI negative={isError}>{content}</MessageSemanticUI>
  );
};

/*
On indique que la prop isError est facultative (suppression de isRequired pour cette prop)
*/
Message.propTypes = {
  content: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  setShowMessage: PropTypes.func.isRequired,
};

/*
On fixe la valeur par défault pour la prop non obligatoire.
Si on ne passe pas cette prop, elle prendra la valeur par défaut.
*/
Message.defaultProps = {
  isError: false,
};

export default Message;
