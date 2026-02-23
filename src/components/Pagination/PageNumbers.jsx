const PageNumbers = ({ currentPage, setCurrentPage, noOfPages }) => {
  return (
    <>
      <span
        onClick={() => setCurrentPage((cp) => Math.max(cp - 1, 0))}
        className="pageNo"
      >
        {" "}
        ◀{" "}
      </span>
      {[
        ...Array(noOfPages)
          .keys()
          .map((item, index) => (
            <span
              className={`pageNo ${currentPage === index ? "active" : ""}`}
              key={item}
              onClick={() => setCurrentPage(index)}
            >
              {index + 1}
            </span>
          )),
      ]}

      <span
        onClick={() => setCurrentPage((cp) => Math.min(cp + 1, noOfPages - 1))}
        className="pageNo"
      >
        {" "}
        ▶{" "}
      </span>
    </>
  );
};

export default PageNumbers;
