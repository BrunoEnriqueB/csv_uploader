function validateUsersCsv(csv: string): string | void {
  let splitedCsv = csv.split('\r\n').map((row) => {
    return row.split(',');
  });

  const firstRow = ['name', 'city', 'country', 'favorite_sport'];

  for (let i = 0; i < splitedCsv[0].length; i++) {
    if (splitedCsv[0][i] !== firstRow[i]) {
      return `Error on line 1 column ${i}`;
    }
  }

  for (let i = 1; i < splitedCsv.length; i++) {
    for (let j = 0; i < splitedCsv.length; i++) {
      if (typeof splitedCsv[i][j] !== 'string') {
        return `Error on line ${i} column ${i}, must be string`;
      }
    }
  }
}

export default validateUsersCsv;
