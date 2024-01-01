import Card from '../UI/Card';
import smallPie from '../assets/pie-small.png';

export default function About() {
  return (
    <section>
      <Card
        img={smallPie}
        title='Monthly budget for your household'
        description=''
      />
    </section>
  );
}
