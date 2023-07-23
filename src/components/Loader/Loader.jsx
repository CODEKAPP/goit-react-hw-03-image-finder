import React from 'react';
import {
  Vortex,
  // Otros componentes que necesites utilizar de react-loader-spinner
} from 'react-loader-spinner';
import css from './Styles/Loader.module.css';

// const Loader = () => {
//   return (
//     <div className="loader">
//       <Oval color="#00BFFF" height={80} width={80} />
//       {/* Otros componentes que desees utilizar aquí */}
//     </div>
//   );
// };
const Loader = () => {
  return (
    <div className={css.LoaderContainer}>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
};
export default Loader;
