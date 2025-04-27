import { Smile } from 'lucide-react'

const FirstMeeting = ({ homeStyles }) => {
  return (
    <div className={homeStyles.item}>
      <div className={homeStyles.thumbnail}><Smile color='#efcbda' size={35} /></div>
      <div className={homeStyles.text}>
        <h3>Our First Meeting</h3>
        <p>11/8/2024</p>
      </div>
    </div>
  );
};

export default FirstMeeting;
