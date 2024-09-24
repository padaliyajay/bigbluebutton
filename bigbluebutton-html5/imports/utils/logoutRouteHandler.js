import Auth from '/imports/ui/services/auth';

const logoutRouteHandler = () => {
  Auth.logout()
    .then((logoutURL) => {
      if (logoutURL) {
        const protocolPattern = /^((http|https):\/\/)/;
        window.top.location.href = protocolPattern.test(logoutURL) ? logoutURL : `http://${logoutURL}`;
      }
    });
};

export default logoutRouteHandler;
