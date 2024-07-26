import { PokeData } from '../interfaces/api_interfaces';

function DownloadCSV({
  data,
  itemsCount,
  className,
}: {
  className: string;
  data: PokeData[];
  itemsCount: string;
}) {
  const jsonToCsv = (jsonData: PokeData[]) => {
    let csv = '';
    const headers = Object.keys(jsonData[0]);
    csv += `${headers.join(';')}\n`;
    jsonData.forEach((obj) => {
      const values = headers.map((header) => obj[header as keyof PokeData]);
      csv += `${values.join(';')}\n`;
    });

    return csv;
  };
  const csvData = new Blob([jsonToCsv(data)], { type: 'text/csv' });
  const csvURL = URL.createObjectURL(csvData);
  return (
    <a href={csvURL} download={`${itemsCount}-items_pokemon_data.csv`}>
      <button className={className} type="button">
        Download
      </button>
    </a>
  );
}

export default DownloadCSV;
