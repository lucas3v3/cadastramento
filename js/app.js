if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/cadastramento/sw.js", { scope: "/cadastramento/" })
    .then(() => console.log("Service Worker registrado"));
}

const get_responses = () => {
  const response = {
    //A
    A0000: $("#A0000").val(),
    A0100: $("#A0100").val(),
    //B
    B0000: $("#B0000").val(),
    B0001: $("#B0001").val(),
    B0002: $("#B0002").val(),
    B0003: $("#B0003").val(),
    B0004: $("#B0004").val(),
    B0005: $("#B0005").val(),
    B0006: $("#B0006").val(),
    B0007: $("#B0007").val(),
    B0008: $("#B0008").val(),
    B0009: $("#B0009").val(),
    B0010: $("#B0010").val(),
    B0100: $("#B0100").val(),
    B0101: $("#B0101").val(),
    B0200: $("#B0200").val(),
    B0201: $("#B0201").val(),
    B0202: $("#B0202").val(),
    B0203: $("#B0203").val(),
    B0204: $("#B0204").val(),
    B0205: $("#B0205").val(),
    B0206: $("#B0206").val(),
    //C
    C0000: $("#C0000").val(),
    C0001: $("#C0001").val(),
    C0002: $("#C0002").val(),
    C0003: $("#C0003").val(),
    C0004: $("#C0004").val(),
    C0005: $("#C0005").val(),
    C0006: $("#C0006").val(),
    C0007: $("#C0007").val(),
    //D
    D0000: $("#D0000").val(),
    D0001: $("#D0001").val(),
    D0002: $("#D0002").val(),
    D0003: $("#D0003").val(),
    D0004: $("#D0004").val(),
    D0005: $("#D0005").val(),
    D0006: $("#D0006").val(),
    D0007: $("#D0007").val(),
    D0008: $("#D0008").val(),
    D0009: $("#D0009").val(),
    D0100: $("#D0100").val(),
    D0101: $("#D0101").val(),
    D0102: $("#D0102").val(),
    D0103: $("#D0103").val(),
    D0104: $("#D0104").val(),
    D0105: $("#D0105").val(),
    //E
    /* TO DO */
    //F
    /* TO DO */
    //G
    G0000: $("#G0000").val(),
    G0001: $("#G0001").val(),
    G0002: $("#G0002").val(),
    G0003: $("#G0003").val(),
    G0004: $("#G0004").val(),
    G0005: $("#G0005").val(),
    G0006: $("#G0006").val(),
    G0100: $("#G0100").val(),
    G0101: $("#G0101").val(),
    G0102: $("#G0102").val(),
    G0103: $("#G0103").val(),
    G0104: $("#G0104").val(),
    G0105: $("#G0105").val(),
    G0106: $("#G0106").val(),
    G0107: $("#G0107").val(),
    G0108: $("#G0108").val(),
    G0109: $("#G0109").val(),
    G0110: $("#G0110").val(),
    G0111: $("#G0111").val(),
    G0112: $("#G0112").val(),
    G0113: $("#G0113").val(),
    G0200: $("#G0200").val(),
    G0201: $("#G0201").val(),
    G0202: $("#G0202").val(),
    G0203: $("#G0203").val(),
    G0204: $("#G0204").val(),
    G0205: $("#G0205").val(),
    G0206: $("#G0206").val(),
    G0207: $("#G0207").val(),
    G0208: $("#G0208").val(),
    G0209: $("#G0209").val(),
    G0300: $("#G0300").val(),
    G0301: $("#G0301").val(),
    G0302: $("#G0302").val(),
    G0303: $("#G0303").val(),
    G0304: $("#G0304").val(),
    G0305: $("#G0305").val(),
    G0306: $("#G0306").val(),
    G0307: $("#G0307").val(),
    G0308: $("#G0308").val(),
    G0309: $("#G0309").val(),
    G0310: $("#G0310").val(),
    G0311: $("#G0311").val(),
    G0312: $("#G0312").val(),
    G0313: $("#G0313").val(),
    G0314: $("#G0314").val(),
    G0315: $("#G0315").val(),
    G0316: $("#G0316").val(),
    G0317: $("#G0317").val(),
    G0318: $("#G0318").val(),
    G0319: $("#G0319").val(),
    G0320: $("#G0320").val(),
    G0321: $("#G0321").val(),
    G0322: $("#G0322").val(),
    G0323: $("#G0323").val(),
    G0324: $("#G0324").val(),
    G0325: $("#G0325").val(),
    G0326: $("#G0326").val(),
    G0327: $("#G0327").val(),
    G0328: $("#G0328").val(),
    G0329: $("#G0329").val(),
    G0330: $("#G0330").val(),
    G0331: $("#G0331").val(),
    G0332: $("#G0332").val(),
    G0333: $("#G0333").val(),
    G0334: $("#G0334").val(),
    G0335: $("#G0335").val(),
    G0336: $("#G0336").val(),
    G0337: $("#G0337").val(),
    G0338: $("#G0338").val(),
    G0339: $("#G0339").val(),
    G0340: $("#G0340").val(),
    G0341: $("#G0341").val(),
    G0342: $("#G0342").val(),
    G0343: $("#G0343").val(),
    G0344: $("#G0344").val(),
    G0345: $("#G0345").val(),
    //H
  };
  return JSON.stringify(response);
};

const get_file_name = () => {
  const today = new Date();
  return (
    "3V3-CAD-" +
    today.getFullYear() +
    (today.getMonth() + 1) +
    today.getDate() +
    today.getHours() +
    today.getMinutes() +
    today.getSeconds() +
    ".txt"
  );
};

const share = () => {
  const content = get_responses();
  const file_name = get_file_name();
  const file = new File([content], file_name, { type: "text/plain" });
  navigator.share({
    title: file_name,
    files: [file],
  });
};
