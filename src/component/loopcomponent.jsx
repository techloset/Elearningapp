import { useState } from "react";

const LoopComponent = () => {
  const [data, showdata] = useState(new Array(5).fill({ showContent: false }));

  const getindex = (newindex) => {
    const getNewindex = data.map((item, index) => {
      if (newindex === index) {
        return {
          showContent: !item.showContent,
        };
      } else {
        return item;
      }
    });
    showdata(getNewindex);
  };
  return (
    <div>
      {data.map((item, index) => {
        return (
          <>
            <button
              onClick={() => {
                getindex(index);
              }}
            >
              click me
            </button>

            {item.showContent && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem odio fugit repudiandae impedit incidunt
                voluptates consectetur laudantium, illum quam autem suscipit
                beatae doloribus provident, ullam eaque. Quibusdam consectetur
                praesentium doloremque!
              </p>
            )}
          </>
        );
      })}
    </div>
  );
};

export default LoopComponent;
