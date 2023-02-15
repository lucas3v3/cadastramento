const ID = Date.now();
const VERSION = "v20230215.1";

if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("/cadastramento/sw.js", { scope: "/cadastramento/" })
    .then(() => console.log("Service Worker registrado"));
}

const sum_E1200 = () => {
  const sum =
    Number($("#E0003").val()) +
    Number($("#E0103").val()) +
    Number($("#E0203").val()) +
    Number($("#E0303").val()) +
    Number($("#E0403").val()) +
    Number($("#E0503").val()) +
    Number($("#E0603").val()) +
    Number($("#E0703").val()) +
    Number($("#E0803").val()) +
    Number($("#E0903").val()) +
    Number($("#E1003").val()) +
    Number($("#E1103").val());
  return sum;
};

const sum_F1200 = () => {
  const sum =
    Number($("#F0003").val()) +
    Number($("#F0103").val()) +
    Number($("#F0203").val()) +
    Number($("#F0303").val()) +
    Number($("#F0403").val()) +
    Number($("#F0503").val()) +
    Number($("#F0603").val()) +
    Number($("#F0703").val()) +
    Number($("#F0803").val()) +
    Number($("#F0903").val()) +
    Number($("#F1003").val()) +
    Number($("#F1103").val());
  return sum;
};

const mean_H0003 = () => {
  const mean = Number($("#H0002").val()) / Number($("#H0001").val());
  return mean;
};

const get_responses = () => {
  const response = {
    //ID e Versão
    ID: ID,
    VERSION: VERSION,
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
    E0000: $("#E0000").val() || "Não aplicável",
    E0001: $("#E0001").val() || "Não aplicável",
    E0002: $("#E0002").val() || "Não aplicável",
    E0003: $("#E0003").val() || "Não aplicável",
    E0100: $("#E0100").val() || "Não aplicável",
    E0101: $("#E0101").val() || "Não aplicável",
    E0102: $("#E0102").val() || "Não aplicável",
    E0103: $("#E0103").val() || "Não aplicável",
    E0200: $("#E0200").val() || "Não aplicável",
    E0201: $("#E0201").val() || "Não aplicável",
    E0202: $("#E0202").val() || "Não aplicável",
    E0203: $("#E0203").val() || "Não aplicável",
    E0300: $("#E0300").val() || "Não aplicável",
    E0301: $("#E0301").val() || "Não aplicável",
    E0302: $("#E0302").val() || "Não aplicável",
    E0303: $("#E0303").val() || "Não aplicável",
    E0400: $("#E0400").val() || "Não aplicável",
    E0401: $("#E0401").val() || "Não aplicável",
    E0402: $("#E0402").val() || "Não aplicável",
    E0403: $("#E0403").val() || "Não aplicável",
    E0500: $("#E0500").val() || "Não aplicável",
    E0501: $("#E0501").val() || "Não aplicável",
    E0502: $("#E0502").val() || "Não aplicável",
    E0503: $("#E0503").val() || "Não aplicável",
    E0600: $("#E0600").val() || "Não aplicável",
    E0601: $("#E0601").val() || "Não aplicável",
    E0602: $("#E0602").val() || "Não aplicável",
    E0603: $("#E0603").val() || "Não aplicável",
    E0700: $("#E0700").val() || "Não aplicável",
    E0701: $("#E0701").val() || "Não aplicável",
    E0702: $("#E0702").val() || "Não aplicável",
    E0703: $("#E0703").val() || "Não aplicável",
    E0800: $("#E0800").val() || "Não aplicável",
    E0801: $("#E0801").val() || "Não aplicável",
    E0802: $("#E0802").val() || "Não aplicável",
    E0803: $("#E0803").val() || "Não aplicável",
    E0900: $("#E0900").val() || "Não aplicável",
    E0901: $("#E0901").val() || "Não aplicável",
    E0902: $("#E0902").val() || "Não aplicável",
    E0903: $("#E0903").val() || "Não aplicável",
    E1000: $("#E1000").val() || "Não aplicável",
    E1001: $("#E1001").val() || "Não aplicável",
    E1002: $("#E1002").val() || "Não aplicável",
    E1003: $("#E1003").val() || "Não aplicável",
    E1100: $("#E1100").val() || "Não aplicável",
    E1101: $("#E1101").val() || "Não aplicável",
    E1102: $("#E1102").val() || "Não aplicável",
    E1103: $("#E1103").val() || "Não aplicável",
    E1200: sum_E1200(),
    //F
    F0000: $("#F0000").val() || "Não aplicável",
    F0001: $("#F0001").val() || "Não aplicável",
    F0002: $("#F0002").val() || "Não aplicável",
    F0003: $("#F0003").val() || "Não aplicável",
    F0100: $("#F0100").val() || "Não aplicável",
    F0101: $("#F0101").val() || "Não aplicável",
    F0102: $("#F0102").val() || "Não aplicável",
    F0103: $("#F0103").val() || "Não aplicável",
    F0200: $("#F0200").val() || "Não aplicável",
    F0201: $("#F0201").val() || "Não aplicável",
    F0202: $("#F0202").val() || "Não aplicável",
    F0203: $("#F0203").val() || "Não aplicável",
    F0300: $("#F0300").val() || "Não aplicável",
    F0301: $("#F0301").val() || "Não aplicável",
    F0302: $("#F0302").val() || "Não aplicável",
    F0303: $("#F0303").val() || "Não aplicável",
    F0400: $("#F0400").val() || "Não aplicável",
    F0401: $("#F0401").val() || "Não aplicável",
    F0402: $("#F0402").val() || "Não aplicável",
    F0403: $("#F0403").val() || "Não aplicável",
    F0500: $("#F0500").val() || "Não aplicável",
    F0501: $("#F0501").val() || "Não aplicável",
    F0502: $("#F0502").val() || "Não aplicável",
    F0503: $("#F0503").val() || "Não aplicável",
    F0600: $("#F0600").val() || "Não aplicável",
    F0601: $("#F0601").val() || "Não aplicável",
    F0602: $("#F0602").val() || "Não aplicável",
    F0603: $("#F0603").val() || "Não aplicável",
    F0700: $("#F0700").val() || "Não aplicável",
    F0701: $("#F0701").val() || "Não aplicável",
    F0702: $("#F0702").val() || "Não aplicável",
    F0703: $("#F0703").val() || "Não aplicável",
    F0800: $("#F0800").val() || "Não aplicável",
    F0801: $("#F0801").val() || "Não aplicável",
    F0802: $("#F0802").val() || "Não aplicável",
    F0803: $("#F0803").val() || "Não aplicável",
    F0900: $("#F0900").val() || "Não aplicável",
    F0901: $("#F0901").val() || "Não aplicável",
    F0902: $("#F0902").val() || "Não aplicável",
    F0903: $("#F0903").val() || "Não aplicável",
    F1000: $("#F1000").val() || "Não aplicável",
    F1001: $("#F1001").val() || "Não aplicável",
    F1002: $("#F1002").val() || "Não aplicável",
    F1003: $("#F1003").val() || "Não aplicável",
    F1100: $("#F1100").val() || "Não aplicável",
    F1101: $("#F1101").val() || "Não aplicável",
    F1102: $("#F1102").val() || "Não aplicável",
    F1103: $("#F1103").val() || "Não aplicável",
    F1200: sum_F1200(),
    //G
    G0000: $("#G0000").val(),
    G0001: $("#G0001").val(),
    G0002: $("#G0002").val(),
    G0003: $("#G0003").val(),
    G0004: $("#G0004").val(),
    G0005: $("#G0005").val(),
    G0006: $("#G0006").prop("checked"),
    G0100: $("#G0100").val(),
    G0101: $("#G0101").val(),
    G0102: $("#G0102").val(),
    G0103: $("#G0103").val(),
    G0104: $("#G0104").val(),
    G0105: $("#G0105").val(),
    G0106: $("#G0106").val(),
    G0107: $("#G0107").prop("checked"),
    G0108: $("#G0108").val(),
    G0109: $("#G0109").prop("checked"),
    G0110: $("#G0110").val(),
    G0111: $("#G0111").val(),
    G0112: $("#G0112").val(),
    G0113: $("#G0113").val(),
    G0200: $("#G0200").val(),
    G0201: $("#G0201").val(),
    G0202: $("#G0202").val(),
    G0203: $("#G0203").val(),
    G0204: $("#G0204").val(),
    G0205: $("#G0205").prop("checked"),
    G0206: $("#G0206").val(),
    G0207: $("#G0207").prop("checked"),
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
    G0309: $("#G0309").prop("checked"),
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
    G0321: $("#G0321").prop("checked"),
    G0322: $("#G0322").prop("checked"),
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
    H0000: $("#H0000").val(),
    H0001: $("#H0001").val(),
    H0002: $("#H0002").val(),
    H0003: mean_H0003(),
    H0100: $("#H0100").val(),
    H0101: $("#H0101").val(),
    H0102: $("#H0102").val(),
    H0103: $("#H0103").val(),
    H0104: $("#H0104").val(),
    H0105: $("#H0105").val(),
    H0106: $("#H0106").val(),
    H0107: $("#H0107").val(),
    H0108: $("#H0108").val(),
    H0109: $("#H0109").val(),
    H0110: $("#H0110").val(),
    H0200: $("#H0200").val(),
    H0201: $("#H0201").val(),
    H0202: $("#H0202").val(),
    H0203: $("#H0203").val(),
    H0300: $("#H0300").val(),
    H0301: $("#H0301").val(),
    H0302: $("#H0302").val(),
    H0303: $("#H0303").val(),
    H0304: $("#H0304").val(),
    H0305: $("#H0305").val(),
    H0306: $("#H0306").val(),
    H0307: $("#H0307").val(),
    H0308: $("#H0308").val(),
    H0309: $("#H0309").val(),
    H0310: $("#H0310").val(),
    H0311: $("#H0311").val(),
    H0312: $("#H0312").val(),
    H0313: $("#H0313").val(),
    H0314: $("#H0314").val(),
    H0315: $("#H0315").val(),
    H0316: $("#H0316").val(),
    H0317: $("#H0317").val(),
    H0318: $("#H0318").val(),
    H0319: $("#H0319").val(),
    H0320: $("#H0320").val(),
    H0321: $("#H0321").val(),
    H0322: $("#H0322").val(),
    H0323: $("#H0323").val(),
    H0400: $("#H0400").val(),
    H0401: $("#H0401").val(),
    H0402: $("#H0402").val(),
    H0403: $("#H0403").val(),
    H0404: $("#H0404").val(),
    H0405: $("#H0405").val(),
    H0406: $("#H0406").val(),
    H0407: $("#H0407").val(),
    H0408: $("#H0408").val(),
    H0409: $("#H0409").val(),
    H0410: $("#H0410").val(),
    H0500: $("#H0500").val() || "Não aplicável",
    H0501: $("#H0501").val() || "Não aplicável",
    H0502: $("#H0502").val() || "Não aplicável",
    H0503: $("#H0503").val() || "Não aplicável",
    H0504: $("#H0504").val() || "Não aplicável",
    H0505: $("#H0505").val() || "Não aplicável",
    H0506: $("#H0506").val() || "Não aplicável",
    H0507: $("#H0507").val() || "Não aplicável",
    H0508: $("#H0508").val() || "Não aplicável",
    H0509: $("#H0509").val() || "Não aplicável",
    H0510: $("#H0510").val() || "Não aplicável",
    H0511: $("#H0511").val() || "Não aplicável",
    H0512: $("#H0512").val() || "Não aplicável",
    H0513: $("#H0513").val() || "Não aplicável",
    H0514: $("#H0514").val() || "Não aplicável",
    H0515: $("#H0515").val() || "Não aplicável",
    H0516: $("#H0516").val() || "Não aplicável",
    H0517: $("#H0517").val() || "Não aplicável",
    H0518: $("#H0518").val() || "Não aplicável",
    H0519: $("#H0519").val() || "Não aplicável",
    H0520: $("#H0520").val() || "Não aplicável",
    H0521: $("#H0521").val() || "Não aplicável",
    H0600: $("#H0600").val(),
    H0601: $("#H0601").val(),
    H0602: $("#H0602").val(),
    H0603: $("#H0603").val(),
    H0604: $("#H0604").val(),
    H0605: $("#H0605").val(),
    H0700: $("#H0700").val(),
    H0701: $("#H0701").val(),
    H0702: $("#H0702").val(),
    H0703: $("#H0703").val(),
    H0704: $("#H0704").val(),
    H0705: $("#H0705").val(),
    H0706: $("#H0706").val(),
    H0800: $("#H0800").val(),
    H0801: $("#H0801").val(),
    H0802: $("#H0802").val(),
    H0803: $("#H0803").val(),
    H0900: $("#H0900").val(),
    H0901: $("#H0901").val(),
    H0902: $("#H0902").val(),
    H0903: $("#H0903").val(),
    H0904: $("#H0904").val(),
    H0905: $("#H0905").val(),
    H0906: $("#H0906").val(),
    H0907: $("#H0907").val(),
    H0908: $("#H0908").val(),
    H1000: $("#H1000").val(),
    H1001: $("#H1001").val(),
    H1100: $("#H1100").val(),
    H1101: $("#H1101").val(),
    H1200: $("#H1200").val(),
    H1300: $("#H1300").val(),
    H1400: $("#H1400").val(),
    H1500: $("#H1500").val(),
    H1501: $("#H1501").val(),
    //I
    I0000: $("#I0000").val(),
    I0001: $("#I0001").val(),
    I0002: $("#I0002").val(),
    I0003: $("#I0003").val(),
    I0004: $("#I0004").val(),
    //x
    x0000: $("#x0000").val()
  };
  return JSON.stringify(response);
};

const share = () => {
  const content = get_responses();
  const file_name = "3V3-CAD-" + ID + ".txt";
  const file = new File([content], file_name, { type: "text/plain" });
  navigator.share({
    title: file_name,
    files: [file],
  });
};

const download = () => {
  const content = get_responses();
  const file_name = "3V3-CAD-" + ID + ".txt";
  const file = new Blob([content], {
    type: "text/json;charset=UTF-8",
  });
  const reader = new FileReader();
  reader.onload = () => {
    const popup = window.open();
    const link = document.createElement("a");
    link.setAttribute("href", reader.result);
    link.setAttribute("download", file_name);
    popup.document.body.appendChild(link);
    link.click();
  };
  reader.readAsDataURL(file);
};

const create_input_masks = () => {
  $('.cpf').mask('000.000.000-00', {reverse: true});
  $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
  $('.rg').mask('000000000000000000000');
  $('.crea').mask('0000000000');
  $('.ie').mask('00.000000-0', {reverse: true});
  $('.cnae').mask('00.00-0-00', {reverse: true});
  $('.money').mask('000.000.000,00', {reverse: true});
  $('.phone').mask('(00) 00000-0000');
  $('.lat-dd').mask('-0.0000');
  $('.lon-dd').mask('-00.0000');
  $('.n-utm').mask('000000.0000');
  $('.l-utm').mask('0000000.0000');
  $('.date').mask('00/00/00');
  $('.7-digit-number').mask('0000000');
  $('.6-digit-number').mask('000000');
  $('.5-digit-number').mask('00000');
  $('.4-digit-number').mask('0000');
  $('.3-digit-number').mask('000');
  $('.2-digit-number').mask('00');
} 

const start_buttons_to_fill = () => {
  $('.na').click(function () {
    let input_id = '#' + $(this).data("for");
    $(input_id).val("Não aplicável");
  });
  $('.ni').click(function () {
    let input_id = '#' + $(this).data("for");
    $(input_id).val("Não informado");
  })
}

$(document).ready(() => {
  $("#ID").html(ID);
  $("#VERSION").html("Versão: " + VERSION);
  create_input_masks();
  start_buttons_to_fill();
});
