const Notification = (props) => {
  //  Write your code here.
  const { className, imgUrl, text } = props;
  const classNameImage = `container ${className}`;
  return (
    <div className={classNameImage}>
      <img className="logo" src={imgUrl} />
      <p className="message">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-container">
      <Notification
        className="information-message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
      />
      <Notification
        className="success-message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
      />
      <Notification
        className="warning-message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
      />
      <Notification
        className="error-message"
        imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
