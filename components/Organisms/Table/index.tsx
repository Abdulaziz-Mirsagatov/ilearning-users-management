export interface TableProps<T> {
  data: T[];
  headers: string[];
}

const Table = <T extends Record<string, any>>({
  data,
  headers,
}: TableProps<T>) => {
  return (
    <table className="border-collapse border-2">
      <thead className="bg-medium-gray text-white-smoke">
        <tr>
          {headers.map((header) => (
            <th key={header} className="text-center p-2">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td
                key={header}
                className={`text-center p-2 ${
                  index % 2 ? "bg-medium-gray text-white-smoke" : ""
                }`}
              >
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
