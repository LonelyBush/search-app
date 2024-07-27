import PayloadInterface from '../interfaces/payload_interface';

function DownloadCSV({
  data,
  itemsCount,
  className,
}: {
  className: string;
  data: PayloadInterface[];
  itemsCount: string;
}) {
  const jsonToCsv = (jsonData: PayloadInterface[]) => {
    let csv = '';
    const headers = Object.keys(jsonData[0]);
    csv += `${headers.join(';')}\n`;
    jsonData.forEach((obj) => {
      const values = headers.map(
        (header) => obj[header as keyof PayloadInterface],
      );
      csv += `${values.join(';')}\n`;
    });

    return csv;
  };
  const csvData = new Blob([jsonToCsv(data)], { type: 'text/csv' });
  const csvURL = URL.createObjectURL(csvData);
  return (
    <a
      data-testid="download-link"
      href={csvURL}
      download={`${itemsCount}-items_pokemon_data.csv`}
    >
      <button className={className} type="button">
        Download
      </button>
    </a>
  );
}

export default DownloadCSV;
