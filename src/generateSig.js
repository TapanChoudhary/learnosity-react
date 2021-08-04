const crypto = require("crypto");

export default function generateSignature(
  service,
  securityPacket,
  secret,
  requestString,
  action
) {
  const signatureArray = [
    securityPacket.consumer_key,
    securityPacket.domain,
    securityPacket.timestamp,
  ];

  if (securityPacket.user_id) {
    signatureArray.push(securityPacket.user_id);
  }
  signatureArray.push(secret);

  // Add the requestPacket if necessary
  const signRequestData = !(service === "assess" || service === "questions");

  if (signRequestData && requestString && requestString.length > 0) {
    signatureArray.push(requestString);
  }

  // Add the action if necessary
  if (action && action.length > 0) {
    signatureArray.push(action);
  }

  return hashSignatureArray(signatureArray);
}

/**
 * Joins an array (with '_') and hashes it.
 *
 * @param signatureArray array
 * @returns string
 */
function hashSignatureArray(signatureArray) {
  const hash = crypto.createHash("sha256");

  hash.update(signatureArray.join("_"));
  return hash.digest("hex");
}
