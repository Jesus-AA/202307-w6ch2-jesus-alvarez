import { usePhone } from '../../hooks/use.phone';

export function NumberKeyboard() {
  const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

  const { phoneState, addNumbers, deleteNumbers, callButton, hangButton } =
    usePhone();
  /*
  useEffect(() => {
    loadPhoneKeys();
  }, [loadPhoneKeys]);

  /*
  const handleNumberClick = (number) => {
    const newNumber = currentNumber + number;
    setCurrentNumber(newNumber);
  };

  const handleDeleteClick = () => {
    const newNumber = currentNumber.slice(0, -1);
    setCurrentNumber(newNumber);
  };
*/
  return (
    <>
      <div className="container">
        <span className="message">{phoneState.loadState}</span>
        <main className="phone">
          <div className="keyboard-container">
            <ol className="keyboard">
              {numbers.map((number) => (
                <li key={number}>
                  <button
                    onClick={() => addNumbers(number)}
                    type="button"
                    className="key"
                  >
                    {number}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => deleteNumbers()}
                  type="submit"
                  className="key big"
                >
                  delete
                </button>
              </li>
            </ol>
            <div className="actions">
              <span className="number">{phoneState.dials}</span>
              <a
                onClick={() => callButton()}
                href="#"
                className={`${
                  phoneState.dials.length === 9 ? 'call active' : 'call'
                }`}
              >
                Call
              </a>
              <a
                onClick={() => hangButton()}
                href="#"
                className={`${
                  phoneState.loadState === 'calling'
                    ? 'hang active'
                    : 'hang hidden'
                }`}
              >
                Hang
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
