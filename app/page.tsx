"use client";

import { useState } from "react";
import CustomCheckbox from "@/components/customCheckbox";

const Home = () => {

  //useState array that holds the checked states of all checkboxes
  const [checked, setChecked] = useState<boolean[]>([false, false, false, false]);

  //expects a checkbox index and toggles its checked status
  const toggleCheckbox = (index: number) => {
    setChecked(checked.map((value, i) => index === i ? !value : value));
  }

  const selectAll = () => {
    setChecked(checked.map(() => true));
  }

  const deselectAll = () => {
    setChecked(checked.map(() => false));
  }

  /* simple function that returns an array of all indices where "checked" is true*/
  const getSelectedIndices = (): number[] => {
    return checked.map((value, index) => value ? index + 1 : -1).filter((value) => value !== -1);
  }

  return (
    <main>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 pt-24 pb-4 px-12 lg:px-24">
      <CustomCheckbox id="checkbox-1" checked={checked[0]} label="checkbox 1" onChange={() => toggleCheckbox(0)}></CustomCheckbox>
      <CustomCheckbox id="checkbox-2" checked={checked[1]} label="checkbox 2" onChange={() => toggleCheckbox(1)}></CustomCheckbox>
      <CustomCheckbox id="checkbox-3" checked={checked[2]} label="checkbox 3" onChange={() => toggleCheckbox(2)}></CustomCheckbox>
      <CustomCheckbox id="checkbox-4" checked={checked[3]} label="checkbox 4" onChange={() => toggleCheckbox(3)}></CustomCheckbox>
      </div>
      <div className='bg-yellow h-2 mx-10'>
      </div>
      <div className='grid grid-cols-2 gap-2 px-12 lg:px-24 py-4'>
        <div className="flex items-center pl-2 bg-blue border-2 border-blue text-white rounded hover:border-yellow">
          <button id="select-button" onClick={() => selectAll()} name="select-button" className="w-4 h-4 rounded" />
          <label htmlFor="select-button" className="w-full py-4 ml-2 text-base lg:text-lg">select all</label>
        </div>
        <div className="flex items-center pl-2 bg-blue border-2 border-blue text-white rounded hover:border-yellow">
          <button id="deselect-button" onClick={() => deselectAll()} name="deselect-button" className="w-4 h-4 rounded" />
          <label htmlFor="deselect-button" className="w-full py-4 ml-2 text-base lg:text-lg font-medium">deselect all</label>
        </div>
      </div>
      <div className='border-blue bg-white flex border-2 font-bold text-blue p-4 items-center justify-center mx-10 rounded text-lg lg:text-4xl'>
        <p>currently checked:&nbsp;</p>
        {getSelectedIndices().map((checkBoxIndex, arrayIndex) => <p key={arrayIndex}> {checkBoxIndex} 
        {arrayIndex + 1 !== getSelectedIndices().length && 
        ","} </p>)}
      </div>
    </main>
  )
}
export default Home;