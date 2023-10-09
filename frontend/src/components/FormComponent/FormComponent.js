import "./FormComponent.css"
import Preloader from "../Preloader/Preloader";

function FormComponent({children, title, submitText, onSubmit, isValid, submitError, isLoading }) {
  return (
    <section className='form-component'>
      <form className='form-component__form' noValidate onSubmit={onSubmit}>
        <h3 className='form-component__title'>
          {title}
        </h3>
        {children}
        <div className="form-component__submit-container">
          <p className="form-component__submit-error">{!isLoading && submitError}</p>
          <button className='form-component__submit-btn' type='submit' disabled={!isValid || isLoading}>
            {isLoading ? <Preloader size={21}/> : submitText}
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormComponent;
