const TabBar = ({
  formComponents,
  activeTab,
  setActiveTab,
}: {
  formComponents: any;
  activeTab: string;
  setActiveTab: any;
}) => {
  return (
    <>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          width: "100%",
          padding: 0,
        }}
      >
        {Object.keys(formComponents).map((key) => {
          return (
            <li
              key={key}
              style={{
                padding: "10px",
                backgroundColor: activeTab === key ? "blue" : "lightblue",
                marginLeft: "2px",
              }}
            >
              <button
                onClick={() => {
                  setActiveTab(key);
                }}
              >
                {key}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TabBar;
