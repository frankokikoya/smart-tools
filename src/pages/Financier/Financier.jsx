import { Link } from 'react-router-dom';

const Financier = () => {
  return (
    <section>
      <h1>Financier Page</h1>
      <br />
      <p>You must have been assigned an Financier role.</p>
      <div className='flexGrow'>
        <Link to='/'>Home</Link>
      </div>
    </section>
  );
};

export default Financier;
