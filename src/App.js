import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://ttt1804.id.vn/api/hello';

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <div>{data}</div>
    </div>
  );
}

export default App;
