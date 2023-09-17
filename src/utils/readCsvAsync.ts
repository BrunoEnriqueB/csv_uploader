import { readFile } from 'fs';
async function readCsvAsync(filepath: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    let content: string = '';
    readFile(filepath, 'utf-8', (error, data) => {
      if (error) return reject(error);

      content = data;
    });

    resolve(content);
  });
}

export default readCsvAsync;
