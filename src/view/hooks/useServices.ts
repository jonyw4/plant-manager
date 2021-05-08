import { useContext } from "react";
import { ServicesContext } from "../contexts";

export const useServices = () => useContext(ServicesContext);
