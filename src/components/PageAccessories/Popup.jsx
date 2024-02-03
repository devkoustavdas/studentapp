import PropTypes from 'prop-types';

const Popup = ({alertTitle, alertText}) => {
  return (
      <div id="info-popup" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
          <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
              <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
                  <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                      <h3 className="font-title mb-3 text-2xl font-bold text-gray-900 dark:text-white">{alertTitle}</h3>
                      <p>
                          {alertText}
                      </p>
                  </div>
              </div>
          </div>
      </div>
  )
}
Popup.propTypes = {
    alertTitle: PropTypes.string.isRequired,
    alertText: PropTypes.string.isRequired,
};
export default Popup;
