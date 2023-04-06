import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => {
  const RenderLeftNavbar = () => (
    <nav className="left-navbar">
      <h1 className="left-navbar-heading">Left Navbar Menu</h1>
      <ul className="left-navbar-list">
        <li className="left-navbar-list-item">Item 1</li>
        <li className="left-navbar-list-item">Item 3</li>
        <li className="left-navbar-list-item">Item 3</li>
        <li className="left-navbar-list-item">Item 4</li>
      </ul>
    </nav>
  )

  const RenderContent = name => {
    const {className} = name
    return (
      <nav className={`content-navbar ${className}`}>
        <h1 className="content-navbar-heading">Content</h1>
        <p className="content-navbar-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </nav>
    )
  }

  const RenderRightNavbar = () => (
    <nav className="right-navbar">
      <h1 className="right-navbar-heading">Right Navbar</h1>
      <div className="right-navbar-box-card">
        <div className="right-navbar-box-1">
          <p className="right-navbar-box-1-text">Ad 1</p>
        </div>
        <div className="right-navbar-box-2">
          <p className="right-navbar-box-2-text">Ad 2</p>
        </div>
      </div>
    </nav>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        let newClass
        if (showLeftNavbar === false && showRightNavbar === false) {
          newClass = 'new-class'
        } else {
          newClass = ''
        }
        return (
          <div className="body-bg-container">
            {showLeftNavbar && <RenderLeftNavbar />}
            {showContent && <RenderContent className={newClass} />}
            {showRightNavbar && <RenderRightNavbar />}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
