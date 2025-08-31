import { BellRing, FileWarning, HandFist, HelpCircle, HelpCircleIcon } from "lucide-react";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <div style={{margin:"100px auto", width:"700px"}}>
      <Alert title="Something went wrong" headerIcon={<HandFist />}  type="defult"/>
        
      <Alert title="Something went wrong" headerIcon={<HelpCircleIcon/>}  type="success"/>
      <Alert title="Something went wrong" headerIcon={<FileWarning />}  type="warning"/>
      <Alert title="Something went wrong" headerIcon={<HelpCircle  />}  type="info"/>
      <Alert
        title="Alert"
        headerIcon={<BellRing />}
        desc={
          <>
          "Lorem ipsum dolor sit, <a href="">amet</a>  consectetur adipisicing elit. Animi
        assumenda sed molestias saepe ratione reprehenderit nulla accusamus
        sequi repellat numquam?"
          </>}
      />
      </div>
    </>
  );
}

export default App;
