import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
// import {   } from "../../types";

interface DataState {
  fileData: UserData[] | null
}


type UserData = [
  string, // name
  string, // phone
  string, // email
  string, // bday
  string // address
 ];

const dataSlice = createSlice({
  name: "data",
  initialState: {
    fileData: null
  } as DataState,
  reducers: {
    setFileData(state, action: PayloadAction<any>) {
      state.fileData = action.payload;
      console.log(action.payload)
    },
  },
});

export const useFileData = () =>
  useSelector((state: { mainData: DataState }) => state.mainData.fileData);

export const {
  setFileData: setFileDataAction,
} = dataSlice.actions;

export default dataSlice.reducer;