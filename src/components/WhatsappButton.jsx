import PropTypes from "prop-types";

const WhatsAppButton = ({ phoneNumber, itemTitle }) => {
  const sendMessage = () => {
    const message = encodeURIComponent(
      `Hey there, my name is [enter your name]. I would like to talk about the ${itemTitle} art piece that I saw on your site.`
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return <button className="whatsapp-button" onClick={sendMessage}>lets talk about this art piece</button>;
};
WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  itemTitle: PropTypes.string.isRequired,
};

export default WhatsAppButton;
