/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRenderCellParams,
  GridRowModes,
} from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import { Button, Chip, Stack } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "Tiêu đề",
    width: 300,
    editable: true,
  },
  {
    field: "createAt",
    headerName: "Ngày tạo",
    width: 150,
    editable: true,
  },
  {
    field: "createMod",
    headerName: "Ngày xuất bản",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "status",
    headerName: "Trạng thái",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    renderCell: (params: GridRenderCellParams<any, Date>) => (
      <strong>
        <Chip
          label={params.value && params.value.toString()}
          color={
            // eslint-disable-next-line no-nested-ternary
            params.value && params.value.toString() === "published"
              ? "success"
              : params.value && params.value.toString() === "scheduled"
                ? "warning"
                : "error"
          }
        />
      </strong>
    ),
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: 200,
    cellClassName: "actions",
    getActions: ({ id, row }) => {
      console.log("row", row);
      return [
        <Box border="1px solid gray" borderRadius={2}>
          <GridActionsCellItem
            icon={<EditNoteIcon />}
            label="Edit"
            // onClick={handleSaveClick(id)}
            color="inherit"
          />
        </Box>,

        <Box border="1px solid gray" borderRadius={2}>
          <GridActionsCellItem
            icon={<DeleteForeverIcon />}
            label="Delete"
            // onClick={handleDeleteClick(id)}
            color="inherit"
          />
        </Box>,

        row.status === "draft" ? (
          <Box border="1px solid gray" borderRadius={2}>
            <GridActionsCellItem
              icon={<LibraryAddCheckIcon />}
              label="Published"
              className="textPrimary"
              // onClick={handleCancelClick(id)}
              color="inherit"
            />
          </Box>
        ) : (
          <Box border="1px solid gray" borderRadius={2}>
            <GridActionsCellItem
              icon={<VisibilityOffIcon />}
              label="Visible"
              className="textPrimary"
              // onClick={handleCancelClick(id)}
              color="inherit"
            />
          </Box>
        ),
      ];
    },
  },
];

const rows = [
  {
    id: 1,
    title:
      "Anim duis proident officia voluptate occaecat irure ut reprehenderit tempor. Anim dolor ullamco laborum velit id ipsum est ad tempor incididunt ipsum aliquip laborum commodo. Veniam velit ea adipisicing laboris cillum velit dolore magna excepteur eu labore. Minim reprehenderit sint do deserunt quis ullamco consequat excepteur elit cupidatat aliqua. Ipsum veniam ullamco nisi voluptate ut aliqua amet. Veniam irure aliquip tempor mollit ut pariatur sunt duis commodo consectetur. Dolore commodo minim pariatur nostrud quis sit.",
    createAt: new Date().toLocaleDateString(),
    createMod: new Date().toLocaleDateString(),
    status: "draft",
  },
  {
    id: 2,
    title:
      "Anim duis proident officia voluptate occaecat irure ut reprehenderit tempor. Anim dolor ullamco laborum velit id ipsum est ad tempor incididunt ipsum aliquip laborum commodo. Veniam velit ea adipisicing laboris cillum velit dolore magna excepteur eu labore. Minim reprehenderit sint do deserunt quis ullamco consequat excepteur elit cupidatat aliqua. Ipsum veniam ullamco nisi voluptate ut aliqua amet. Veniam irure aliquip tempor mollit ut pariatur sunt duis commodo consectetur. Dolore commodo minim pariatur nostrud quis sit.",
    createAt: new Date().toLocaleDateString(),
    createMod: new Date().toLocaleDateString(),
    status: "scheduled",
  },
  {
    id: 3,
    title:
      "Anim duis proident officia voluptate occaecat irure ut reprehenderit tempor. Anim dolor ullamco laborum velit id ipsum est ad tempor incididunt ipsum aliquip laborum commodo. Veniam velit ea adipisicing laboris cillum velit dolore magna excepteur eu labore. Minim reprehenderit sint do deserunt quis ullamco consequat excepteur elit cupidatat aliqua. Ipsum veniam ullamco nisi voluptate ut aliqua amet. Veniam irure aliquip tempor mollit ut pariatur sunt duis commodo consectetur. Dolore commodo minim pariatur nostrud quis sit.",
    createAt: new Date().toLocaleDateString(),
    createMod: new Date().toLocaleDateString(),
    status: "published",
  },
];

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .ant-empty-img-1": {
    fill: theme.palette.mode === "light" ? "#aeb8c2" : "#262626",
  },
  "& .ant-empty-img-2": {
    fill: theme.palette.mode === "light" ? "#f5f5f7" : "#595959",
  },
  "& .ant-empty-img-3": {
    fill: theme.palette.mode === "light" ? "#dce0e6" : "#434343",
  },
  "& .ant-empty-img-4": {
    fill: theme.palette.mode === "light" ? "#fff" : "#1c1c1c",
  },
  "& .ant-empty-img-5": {
    fillOpacity: theme.palette.mode === "light" ? "0.8" : "0.08",
    fill: theme.palette.mode === "light" ? "#f5f5f5" : "#fff",
  },
}));

function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <svg
        style={{ flexShrink: 0 }}
        width="240"
        height="200"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse
              className="ant-empty-img-5"
              cx="67.797"
              cy="106.89"
              rx="67.797"
              ry="12.668"
            />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <Box sx={{ mt: 1 }}>No Rows</Box>
    </StyledGridOverlay>
  );
}

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{ noRowsOverlay: CustomNoRowsOverlay }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
