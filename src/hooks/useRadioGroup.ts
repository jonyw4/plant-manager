import { useContext } from "react";
import { RadioGroupContext } from "../contexts/RadioGroupContext";

export const useRadioGroup = () => useContext(RadioGroupContext);