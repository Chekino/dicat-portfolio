
import { ArrowRight } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProjectCard = ({ bgimg, title, description, url }) => {
  return (
    <Card className="project-card mb-4">
      <Card.Img variant="top" src={bgimg} className="card-img" />
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-text ">
          {description}
        </Card.Text>
        <Button variant="" className="visit-button">
          <a href={url} target="_blank" rel="noopener noreferrer">Visiter le site <ArrowRight/> </a>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
