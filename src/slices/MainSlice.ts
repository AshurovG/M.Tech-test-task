import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { UserData  } from "../../types";

interface DataState {
  fileData: UserData[] | null;
  isFileValid: boolean;
}

const dataSlice = createSlice({
  name: "data",
  initialState: {
    fileData: null,
    isFileValid: true
  } as DataState,
  reducers: {
    setFileData(state, action: PayloadAction<UserData[]>) {
      state.fileData = action.payload;
      localStorage.setItem('data', JSON.stringify(action.payload));
    },

    setIsFileValid(state, action: PayloadAction<boolean>) {
      state.isFileValid = action.payload;
      console.log('isVaid is', action.payload)
    },
  },
});

export const useFileData = () =>
  useSelector((state: { mainData: DataState }) => state.mainData.fileData);

export const useIsFileValid = () =>
  useSelector((state: { mainData: DataState }) => state.mainData.isFileValid);

export const {
  setFileData: setFileDataAction,
  setIsFileValid: setIsFileValidAction
} = dataSlice.actions;

export default dataSlice.reducer;