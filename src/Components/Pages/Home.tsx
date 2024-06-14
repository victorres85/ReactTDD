import Form from "../Form";
import ParticipantsList from "../PaticipantsList";
import Footer from "../Footer";
import Card from "../Components/Card";
const Home = () => {
  return (
    <Card>
      <section>
        <h2>Let's do start!</h2>
        <Form />
        <ParticipantsList />
        <Footer />
      </section>
    </Card>
  );
};

export default Home;
