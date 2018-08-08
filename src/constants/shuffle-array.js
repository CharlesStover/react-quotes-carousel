const shuffleArray = a => {
  const b = [...a];
  const c = [];
  const total = a.length;
  for (let x = 0; x < total; x++) {
    c.push(b.splice(Math.floor(Math.random() * (total - x)), 1)[0]);
  }
  return c;
};

export default shuffleArray;
