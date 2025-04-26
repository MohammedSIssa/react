import { useRef } from 'react';

export default function ScrollToElementApp() {
  const firstDivRef = useRef(null);
  const secondsDivRef = useRef(null);
  const thirdDivRef = useRef(null);

  function handleScrollToFirstCat() {
    firstDivRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToSecondCat() {
    secondsDivRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToThirdCat() {
    thirdDivRef
.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <button onClick={handleScrollToFirstCat}>
          Neo
        </button>
        <button onClick={handleScrollToSecondCat}>
          Millie
        </button>
        <button onClick={handleScrollToThirdCat}>
          Bella
        </button>
      </nav>
      <div>
        <ul style={{ display: 'flex', flexDirection: 'row',gap: '20px', width: '2500px', listStyleType: 'none'}}>
          <li style={{ width: '520px', height: '320px', 'backgroundColor': 'grey'}} ref={firstDivRef} />
          <li style={{ width: '520px', height: '320px', 'backgroundColor': 'grey'}} ref={secondsDivRef} />
          <li style={{ width: '520px', height: '320px', 'backgroundColor': 'grey'}} ref={thirdDivRef} />
        </ul>
      </div>
    </>
  );
}
