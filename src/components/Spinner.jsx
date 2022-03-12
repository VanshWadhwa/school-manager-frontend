function Spinner() {
    return (
      <div className=" spinnerBody fixed top-0 left-0 bg-black/50 min-w-full h-screen flex justify-center items-center z-[100]">
        <div id="loading-bar-spinner" className="spinner">
          <div className="spinner-icon">HELOO</div>
        </div>
      </div>
    );
  }
  
  export default Spinner;
  