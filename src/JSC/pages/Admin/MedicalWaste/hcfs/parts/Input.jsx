

export default function Input({ id, lang, ar, en, value, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{lang === "ar" ? ar : en}</label>
      <input id={id} name={id} value={value} onChange={onChange} />
    </div>
  );
}
