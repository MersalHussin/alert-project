import type { ReactNode } from "react";
import "./index.scss";
import {CircleX  } from 'lucide-react';
import type { alertType } from "../../types";
interface IProps {
  title: string;
  type?: alertType
  headerIcon: ReactNode;
  desc?: ReactNode;
}

const index = ({ title ,type ,headerIcon, desc}: IProps) => {
  return (
    <div className={`alert-wrapper ${type || "danger"} `}>
        <div className="alert-header">
            <div className="title">
            {headerIcon} 
         <h4>{title}</h4>
            </div>
      <div className="close">
        <CircleX />
      </div>
        </div>
        <div className="describtion">

      <p>
        {desc ||" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Sed do eiusmod tempor incididunt ut labore et dolore magna."}
      </p>
    </div>
    
    </div>
  );
};

export default index;
