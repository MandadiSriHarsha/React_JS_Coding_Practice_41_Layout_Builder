import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const changeContentStatus = () => {
        onToggleShowContent()
      }

      const changeLeftNavbarStatus = () => {
        onToggleShowLeftNavbar()
      }

      const changeRightNavbarStatus = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="navbar-bg-container">
          <nav className="configuration-controller-navbar">
            <h1 className="navbar-heading">Layout</h1>
            <div className="content-input-container input-container">
              <input
                id="contentCheckbox"
                type="checkbox"
                checked={showContent}
                className="content-input input"
                onChange={changeContentStatus}
              />
              <label htmlFor="contentCheckbox" className="content-label label">
                Content
              </label>
            </div>
            <div className="left-navbar-input-container input-container">
              <input
                id="leftNavbarCheckbox"
                type="checkbox"
                checked={showLeftNavbar}
                className="left-navbar-input input"
                onChange={changeLeftNavbarStatus}
              />
              <label
                htmlFor="leftNavbarCheckbox"
                className="left-navbar-label label"
              >
                Left Navbar
              </label>
            </div>
            <div className="right-navbar-input-container input-container">
              <input
                id="rightNavbarCheckbox"
                type="checkbox"
                checked={showRightNavbar}
                className="right-navbar-input input"
                onChange={changeRightNavbarStatus}
              />
              <label
                htmlFor="rightNavbarCheckbox"
                className="right-navbar-label label"
              >
                Right Navbar
              </label>
            </div>
          </nav>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
