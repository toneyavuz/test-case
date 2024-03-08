function highlightTerm(name: string, inputValue: string) {
  const parts = name.split(new RegExp(`(${inputValue})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === inputValue.toLowerCase() ? (
      <b key={index}>{part}</b>
    ) : (
      part
    )
  );
}

export { highlightTerm };
