export default function MultiSelect({
  options,
  value,
  id,
  onChange,
  lang,
  ar,
  en,
}) {
  return (
    <div>
      <label htmlFor={id}>{lang === "ar" ? ar : en}</label>
      <select
        value={value}
        onChange={onChange}
        id={id}
        name={id}
        disabled={!options && options?.length === 0}
      >
        <option value={null}>-- اختر --</option>
        {options &&
          options.map((option, idx) => (
            <option key={idx} value={option}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  );
}
