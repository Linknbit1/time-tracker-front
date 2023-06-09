import { Box, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

import { tokens } from "../../themes";

interface Data {
  id: number;
  projectName: string;
  activity: string;
  idle: string;
  manual: string;
  duration: string;
  time: string;
  actions?: string;
}

interface Props {
  columns: GridColDef[];
  data: Data[];
}
const Table = ({ data, columns }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const getRowHeight = () => 80;

  return (
    <Box
      height="60vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none"
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none"
        },
        // "& .name-column--cell": {},
        "& .MuiDataGrid-columnHeaders": {
          // backgroundColor: colors.blueAccent[700],
          borderBottom: "1px solid #e4e9ef",
          color: "#2b343f"
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: "bold"
        },
        "& .MuiDataGrid-virtualScroller": {
          // backgroundColor: colors.primary[400]
        },
        "&. .name-column--cell": {
          textAlign: "center"
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none"
          // backgroundColor: colors.blueAccent[700]
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`
        }
      }}
    >
      <DataGrid
        sx={{ fontSize: "14px" }}
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        getRowHeight={getRowHeight}
        hideFooter
        checkboxSelection
      />
    </Box>
  );
};

export default Table;
