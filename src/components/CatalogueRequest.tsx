import React from 'react';
import '../scss/components/_catalogueRequest.scss';

const CatalogueRequest: React.FC = () => {
  const [enteredName, setEnteredName] = React.useState<string>('');
  const [enteredPhone, setEnteredPhone] = React.useState<string>('');

  const onClickClear = () => {
    setEnteredName('');
    setEnteredPhone('');
  };

  return (
    <div className='catalogueRequst'>
      <h3>DOWNLOAD FULL CATALOGUE</h3>
      <h4>
        Includes Terms and Conditions, Equipment Technical Data Sheets and
        Specifications
      </h4>
      <div>
        <input
          className='inputName'
          type='text'
          placeholder='Name'
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
        />
        <input
          className='inputPhone'
          type='text'
          placeholder='Phone number'
          value={enteredPhone}
          onChange={(e) => setEnteredPhone(e.target.value)}
        />
        <button
          type='submit'
          className='catalogueRequstBtn'
          onClick={onClickClear}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default CatalogueRequest;
