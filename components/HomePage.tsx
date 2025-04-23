import Nav from '../components/Nav';
import '../src/assets/styles.css'
function Homepage() {
  return (
    <>
      {/* <h2>Home page</h2> */}
      <main className="container-fluid bg-white d-flex justify-content-center align-items-center">
        <div className="text-center px-3">
        <h2 className=" mb-3">Welcome BuddAIs. I am Study BuddAI</h2>
        <p className="lead text-dark">Your AI-powered study buddy</p>
      <Nav />
      </div>
      </main>
    </>
  );
}

export default Homepage;