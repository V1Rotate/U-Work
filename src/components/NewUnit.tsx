import Uw302 from '../assets/img/topunit.png';
import '../scss/components/_newUnit.scss';

function NewUnit() {
  return (
    <div className='newUnit'>
      <div className='newUnit__description'>
        <h2>NEW MODEL</h2>
        <h2 className='secondh2'>Available for Rent Soon</h2>
        <h1>UW-302</h1>
        <h4>2-in-1: MINI-LOADER & MINI-DUMPER</h4>
      </div>
      <div className='newUnit__image'>
        <img className='newUnit_imgItem' src={Uw302} alt='UW New Unit' />
      </div>
    </div>
  );
}

export default NewUnit;
