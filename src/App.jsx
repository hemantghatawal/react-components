import { Route, Routes } from "react-router";
import Accordion from "./components/Accordian/Accordian";
import TabForm from "./components/TabForm/TabForm";
import Layout from "./Layout";
import Home from "./Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="accordion" element={<Accordion />} />
          <Route path="tab-form" element={<TabForm />} />
        </Route>
      </Routes>
    </>
  );
}
