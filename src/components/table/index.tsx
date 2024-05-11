/* eslint-disable @typescript-eslint/no-unused-vars */
import { styles } from "./styles.css";

type tableType = {
  data: any[];
  columns: any[];
};

export default function Table({ data = [], columns = [] }: tableType) {
  return (
    <div className={`${styles.wrapper}`}>
      <table className={`${styles.container}`}>
        <thead className={`${styles.thead}`}>
          <tr>
            {columns?.map((column, index) => (
              <th
                scope="col"
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data?.map((_data, index) => {
            return (
              <tr key={index} className={`${styles.tr}`}>
                {columns?.map((_column, _index) => (
                  <td
                    scope="row"
                    key={index}
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {data[index][_index]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
