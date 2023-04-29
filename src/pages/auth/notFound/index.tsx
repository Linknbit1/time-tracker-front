import React from "react";

interface Props {
  data: string;
  status: number;
  statusText: string;
}
const NotFound = ({ data, status, statusText }: Props) => {
  return (
    <div>
      <div title={statusText}>
        <h1 style={{ marginBlock: 10, fontSize: 40, fontWeight: 600 }}>{status}</h1>
        <p>{data}</p>
      </div>
    </div>
  );
};
export default NotFound;
