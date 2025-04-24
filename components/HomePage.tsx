import Nav from '../components/Nav';
import '../src/assets/styles.css'
function Homepage() {
  return (
    <>
      {/* <h2>Home page</h2> */}
      <main className="container-fluid bg-white d-flex justify-content-center align-items-center">
        <div className="text-center px-3">
        <h2 className=" mb-3">Welcome BuddAIs !</h2>
        <p className="lead text-dark">I am your AI-powered study buddy</p>
      <Nav />
      </div>
      </main>
    </>
  );
}

export default Homepage;