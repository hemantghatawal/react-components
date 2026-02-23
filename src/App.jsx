import { Route, Routes } from "react-router";
import Accordion from "./components/Accordian/Accordian";
import TabForm from "./components/TabForm/TabForm";
import Pagination from "./components/Pagination/Pagination";
import Layout from "./Layout";
import Home from "./Home";
import ChipsInput from "./components/ChipsInput/ChipsInput";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="accordion" element={<Accordion />} />
          <Route path="tab-form" element={<TabForm />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="chips-input" element={<ChipsInput />} />
        </Route>
      </Routes>
    </>
  );
}
