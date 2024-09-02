import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Container = styled.div`
  margin: 1em;
  padding-bottom: 1em;
  transition: transform 0.3s ease;
  background-color: var(--cinza-escuro);
  max-width: 10em;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  }
  img {
    max-width: 10em;
    cursor: pointer;
  }
`;

const Icones = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0.5em 1em;
  .heart {
    color: #850f0f;
  }
  .star {
    color: var(--amarelo);
  }
`;

const Nota = styled.div`
  display: flex;
  gap: 4px;
  font-weight: 900;
  color: var(--branco);
 `;

const Titulo = styled.h3`
  font-size: 1em;
  font-weight: 400;
  color: var(--branco); 
  text-align: left;
  padding: 0 1em;
  margin: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

function CardFilme ({ titulo, nota, capa, favorito = false, aoClicar }) {
 
  return (
    <Container >
      <img src={capa} alt="capa" onClick={aoClicar} />
      <Icones>
        <Nota><FaStar className="star" />{nota ? nota.toFixed(1) : '--'}</Nota>
        {favorito && <FaHeart className="heart" size={14} /> }
      </Icones>
      <Titulo onClick={aoClicar}>{titulo}</Titulo>
    </Container>
  );
};

export default CardFilme;
