function OpenDyslexic() {
  document.querySelector('body').style.fontFamily = 'OpenDyslexic, serif';
}

function StandardFont() {
  document.querySelector('body').style.fontFamily = '';
}

function HighContrast(){
  document.querySelector(':root').style.setProperty('--text', '#ffffff');
  document.querySelector(':root').style.setProperty('--primary', '#00ffff');
  document.querySelector(':root').style.setProperty('--link', '#ffff00');
  document.querySelector(':root').style.setProperty('--background', '#1f1f1f');
  document.querySelector(':root').style.setProperty('--button-background', '#ffffff');
}

function StandardContrast(){
  document.querySelector(':root').style.setProperty('--text', '#1f1f1f');
  document.querySelector(':root').style.setProperty('--primary', '#70193D');
  document.querySelector(':root').style.setProperty('--link', '#191970');
  document.querySelector(':root').style.setProperty('--background', '#1919704F');
  document.querySelector(':root').style.setProperty('--button-background', '#000000');
}

function BigText(){
  document.querySelector('body').style.fontSize = "16pt";
}

function NormalText(){
  document.querySelector('body').style.fontSize = "13pt";
}

export function init(root) {
    const ODbutton = root.querySelector("#OpenDyslexic");
    ODbutton?.addEventListener("click", OpenDyslexic);

    const SFbutton = root.querySelector("#StandardFont");
    SFbutton?.addEventListener("click", StandardFont);

    const HCbutton = root.querySelector("#HighContrast");
    HCbutton?.addEventListener("click", HighContrast);

    const SCbutton = root.querySelector("#StandardContrast");
    SCbutton?.addEventListener("click", StandardContrast);

    const BTbutton = root.querySelector("#BigText");
    BTbutton?.addEventListener("click", BigText);

    const NTbutton = root.querySelector("#NormalText");
    NTbutton?.addEventListener("click", NormalText);
}