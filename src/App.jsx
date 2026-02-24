import { Route, Routes } from "react-router";
import Accordion from "./components/Accordian/Accordian";
import TabForm from "./components/TabForm/TabForm";
import Pagination from "./components/Pagination/Pagination";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Layout from "./Layout";
import Home from "./Home";
import ChipsInput from "./components/ChipsInput/ChipsInput";
import AutoCompleteSearchBar from "./components/AutoCompleteSearchBar/AutoCompleteSearchBar";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="progress-bar"
            element={
              <>
                <ProgressBar progress={10} />
                <ProgressBar progress={25} />
                <ProgressBar progress={50} />
                <ProgressBar progress={75} />
                <ProgressBar progress={100} />
              </>
            }
          />
          <Route path="accordion" element={<Accordion />} />
          <Route path="tab-form" element={<TabForm />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="chips-input" element={<ChipsInput />} />
          <Route
            path="auto-complete-search-bar"
            element={<AutoCompleteSearchBar />}
          />
        </Route>
      </Routes>
    </>
  );
}
