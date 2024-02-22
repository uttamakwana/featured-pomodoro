// utils function
import { formateTime } from "../utils";

/* eslint-disable react/prop-types */
const Timer = ({ clockTime }) => {
  return <div className="fs-h3-heading fw-900">{formateTime(clockTime)}</div>;
};

export default Timer;
